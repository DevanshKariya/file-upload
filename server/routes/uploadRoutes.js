const uploadController = require("../controller/fileUploadController");
const express = require("express");
const router = express.Router();

router.post("/fileUpload", uploadController.upload);
router.get("/getFiles", uploadController.getFiles);
router.get("/files/:name", uploadController.download);
router.delete("/files/:name", uploadController.delete);

module.exports = router;
