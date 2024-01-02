const uploadFile = require("../middleware/upload");
const fs = require("fs");
const baseUrl = "http://localhost:3000/files/";

async function upload(req, res) {
  try {
    await uploadFile(req, res);
    if (req.file === undefined) {
      return res.status(400).send({ message: "Upload file" });
    }
    res.status(200).send({
      message: "Uploaded file successfully " + req.file.originalname,
    });
  } catch (err) {
    console.log(err);
    if (err.code == "LIMIT_FILE_SIZE") {
      return res
        .status(500)
        .send({ message: "File size cannot be larger than 2MB!" });
    }
    res.status(500).send({
      message: `Could not upload the file: ${req.file}. ${err}`,
    });
  }
}

const getFiles = (req, res) => {
  const directoryPath = __basedir + "/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfo = [];

    files.forEach((file) => {
      fileInfo.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfo);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download file. " + err,
      });
    }
  });
};

const deleteFile = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/uploads/";

  fs.unlink(directoryPath + fileName, (err) => {
    if (err) {
      return res.status(500).send({
        message: "Could not delete the file. " + err,
      });
    }

    res.status(200).send({
      message: "File deleted successfully",
    });
  });
};
module.exports = {
  upload: upload,
  getFiles: getFiles,
  download: download,
  delete: deleteFile,
};
