import React from "react";
import axios from "axios";

export default function FileUploadForm() {
  const [file, setFile] = React.useState(null);
  const [preview, setPreview] = React.useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = function (e) {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file[0]);

    axios
      .post("http://localhost:5000/fileUpload", formData)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {});
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input type="file" className="file" onChange={handleFileChange} />
        <button type="submit">Upload File</button>
      </form>
      {preview && <img src={preview} alt="Preview" />}
    </div>
  );
}
