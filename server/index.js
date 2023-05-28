const express = require("express");
const cors = require("cors");
const multer = require("multer");
const XLSX = require("xlsx");
const jsontoxml = require("jsontoxml");

const app = express();

app.use(cors());

function exceltoxml(file) {
  const workbook = XLSX.readFile(file);
  let worksheet = workbook.Sheets[workbook.SheetNames[0]];
  let json = XLSX.utils.sheet_to_json(worksheet);
  let xml = jsontoxml(json);
  return xml;
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "file", maxCount: 1 },
  { name: "file2", maxCount: 1 },
]);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/", upload, function (req, res) {
  res.send(req.body.data);
  console.log(req.files.file[0].path);
  let file = req.files.file[0].path;
  let file2 = req.files.file2[0].path;
  let result1 = exceltoxml(file);
  let result2 = exceltoxml(file2);

  console.log(result1);
  console.log(result2);
});

app.listen(8000, () => {
  console.log("server started");
});
