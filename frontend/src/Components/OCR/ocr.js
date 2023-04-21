import { useCallback, useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
// import './ocr.css';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Container, Row } from 'react-bootstrap';

function OCR() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textResult, setTextResult] = useState("");

  const worker = createWorker();

  const convertImageToText = useCallback(async () => {
    if(!selectedImage) return;
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const { data } = await worker.recognize(selectedImage);
    setTextResult(data.text);
  }, [worker, selectedImage]);

  useEffect(() => {
    convertImageToText();
  }, [selectedImage, convertImageToText])

  const handleChangeImage = e => {
    if(e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    } else {
      setSelectedImage(null);
      setTextResult("")
    }
  }

  return (
    // <div className="App">
    //   <h1>ImText</h1>
    //   <p>Gets words in image!</p>
    //   <div className="input-wrapper">
    //     <label htmlFor="upload">Upload Image</label>
    //     <input type="file" id="upload" accept='image/*' onChange={handleChangeImage} />
    //   </div>

    //   <div className="result">
    //     {selectedImage && (
    //       <div className="box-image">
    //         <img src={URL.createObjectURL(selectedImage)} alt="thumb" />
    //       </div>
    //     )}
    //     {textResult && (
    //       <div className="box-p">
    //         <p>{textResult}</p>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <Row>
      <Sidebar />
      <Col xs={9} sm={10} md={10} style={{padding:"3rem"}}>
        <Row>
          <h3 style={{color:'#3B5999'}}>Upload The Detailed Report Here</h3>
          <div style={{display:'flex', flexDirection:'column'}}>
            <label>Upload Image</label>
            <input type="file" id="upload" accept='image/*' onChange={handleChangeImage} style={{color:'white',backgroundColor:'#3B5999', width:'25%', borderRadius:'0.5rem',padding:'0.5rem 0.5rem'}} /> 
          </div>
          <div style={{'width':'100%', display:'flex', flexDirection:'row'}}>
            {selectedImage && (
              <div style={{width:'50%',objectFit:'contain'}} >
                <img src={URL.createObjectURL(selectedImage)} style={{width:'100%',objectFit:'contain'}} alt="thumb" />
              </div>
            )}
            {textResult && (
              <div style={{color:'#3B5999', width:'50%', padding:'2rem', backgroundColor:'whitesmoke',fontWeight:'800',fontSize:'1rem'}}>
                <p>{textResult}</p>
              </div>
            )}
          </div>
        </Row>
      </Col>
    </Row>
  );
}

export default OCR;
