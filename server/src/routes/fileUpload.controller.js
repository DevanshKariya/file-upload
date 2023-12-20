const multer = require("multer");
const path = require("path");
const express = require("express");

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads");
  },
  filesname: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

// const obj = (req, res, next) => {
//   try {
//     upload(req, res, () => {
//       next();
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
uploadRouter.get("/fileUpload", (req, res) => {
  res.render("upload");
});

uploadRouter.post("/fileUpload", upload.single("file"), async (req, res) => {
  try {
    res.send("File Uploaded");
  } catch (error) {
    console.log(error);
  }
});

module.exports = uploadRouter;
