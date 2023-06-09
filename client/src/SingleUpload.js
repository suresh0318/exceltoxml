import React, { useState } from "react";
import axios from "axios";

const SingleUpload = () => {
  const [file, setFile] = useState();
const [data,setData]=useState("")
  function handleSubmit() {
    const formdata = new FormData();
    formdata.append("file", file);

    formdata.append("data", "suresh");
    formdata.append("college","BIET")
    axios.post("http://localhost:8000/single", formdata).then((data) => {
      setData(data.data);
    });
  }
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>submit</button>
      <p>{data}</p>
    </div>
  );
};
export default SingleUpload;
