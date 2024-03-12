import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react"
import { uploadFile } from './api/Api';

function App() {

  const [file,setFile]=useState([]);
  const ref=useRef();
  const [response,setResult]=useState("");

  const onUploadClick=()=>{
    ref.current.click();
  }
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        console.log(file)
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await uploadFile(data);
         setResult(response.path);
        console.log(response)
      }
    }
    getImage();
  }, [file])
  return (
    <div className="container">
       <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={ref}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={response} target='_blank'>{response}</a> 
      </div>
    </div>
  );
}

export default App;
