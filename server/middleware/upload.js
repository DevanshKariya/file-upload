const multer = require("multer");
const path = require("path");
const util = require("util");
// const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

let upload = multer({
  storage: storage,
  //   limits: { fileSize: maxSize },
}).single("file");

let uploadMiddleWare = util.promisify(upload);
module.exports = uploadMiddleWare;
