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
  let transformedInput = xml.replace(
    /(<Question>.*?<\/Question>(?:<options>.*?<\/options>)*)/g,
    "<Single>$1</Single>"
  );
  return transformedInput;
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

const uploadSingle = multer({ storage: storage });

const EitherUpload = multer({ storage: storage }).fields([
  { name: "file", maxCount: 1 },
  { name: "file2", maxCount: 1 },
]);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/multi", upload, function (req, res) {
  let file = req.files.file[0].path;
  let file2 = req.files.file2[0].path;
  let result1 = exceltoxml(file);
  let result2 = exceltoxml(file2);

  console.log(result1);
  console.log(result2);
  res.send(req.body.data);
});

app.post("/single", uploadSingle.single("file"), function (req, res) {
  let file = req.file.path;
  let result1 = exceltoxml(file);

  console.log(result1);
  res.json(result1);
});

app.post("/either", EitherUpload, function (req, res) {
  // let file = req.files.file[0].path;
  // let file2 = req.files.file2[0].path;

  console.log(req.files);
  if (req.files.file) result1 = exceltoxml(req.files.file[0].path);
  else result1 = null;
  if (req.files.file2) result2 = exceltoxml(req.files.file2[0].path);
  else result2 = null;
  // let result1 = exceltoxml(file);
  // let result2 = exceltoxml(file2);

  console.log(result1);
  console.log(result2);
  res.send(req.body.data);
});

app.listen(8000, () => {
  console.log("server started");
});
