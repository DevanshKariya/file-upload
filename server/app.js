// const multer = require("multer");
// const path = require("path");
const express = require("express");
require("dotenv").config();
const uploadRouter = require("./routes/uploadRoutes");

const PORT = process.env.PORT || 3000;

global.__basedir = __dirname;

const app = express();

app.set("view engine", "ejs");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filesname: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage: storage,
// });

// const obj = (req, res, next) => {
//   try {
//     upload(req, res, () => {
//       next();
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
app.get("/fileUpload", (req, res) => {
  res.render("upload");
});
app.use(uploadRouter);
// app.post("/fileUpload", upload.single("file"), (req, res) => {
//   res.send("File Uploaded");
// });

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
