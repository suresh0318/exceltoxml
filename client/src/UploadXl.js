import React, { useState } from "react";
import axios from "axios";

const UploadXl = () => {
  const [file, setFile] = useState();
  const [file2, setFile2] = useState();

  const data = {
    name: "suresh",
  };
  function handleSubmit() {
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("file2", file2);

    formdata.append("data", "suresh");
    axios.post(
      "http://localhost:8000/",
      formdata
    ).then((data)=>{
console.log(data)
    });
  }
  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
        <input
        type="file"
        onChange={(e) => setFile2(e.target.files[0])}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default UploadXl;
