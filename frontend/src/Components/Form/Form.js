import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AuthContext } from "../../AuthProvider";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Form.css";

const Form = () => {
  const { user } = useContext(AuthContext);
   

  const [formData, setFormData] = useState({
    username: "",
    milkBatchNumber: "",
    milkBatchHolder: "",
    milkType: "cow",
    waterContent: "",
    fatContent: "",
    volume: "",
    retailer: "",
    sensorId: "",
  });

  const {
    username,
    milkBatchNumber,
    milkBatchHolder,
    milkType,
    waterContent,
    fatContent,
    volume,
    retailer,
    sensorId,
  } = formData;

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const FormSubmit = async (e) => {
    e.preventDefault();
    // const batchForm = new FormData();
    // batchForm.append("username",user.auth.currentUser.email)    
    // batchForm.append("milkBatchNumber",formData.milkBatchNumber)
    // batchForm.append("milkBatchHolder",formData.milkBatchHolder)
    // batchForm.append("milkType",formData.milkType)
    // batchForm.append("waterContent",formData.waterContent)
    // batchForm.append("fatContent",formData.fatContent)
    // batchForm.append("volume",formData.volume)
    // batchForm.append("retailer",formData.retailer)
    // batchForm.append("sensorId",formData.sensorId)
    // // batchForm.append("milkBatchHolder","Farmer2")
    // batchForm.append("date","22/02/2022")
    // console.log(...batchForm)

    const data = {
      "username" : user.auth.currentUser.email , 
      "milkBatchNumber" : formData.milkBatchNumber ,
      "milkBatchHolder" : formData.milkBatchHolder,
      "milkType" : formData.milkType ,
      "waterContent" : formData.waterContent,
      "fatContent" : formData.fatContent,
      "volume" : formData.volume,
      "retailer" : formData.retailer,
      "sensorId" : formData.sensorId ,
      "date" : "21/02/2022"

    }

    const res = await axios.post("https://20ed-45-127-121-90.in.ngrok.io/api/generatemilkcertificate", data)
    console.log(res)




  };

  return (
    <div style={{ "overflow-x": "hidden" }}>
      <Row className="outer-container">
        <Sidebar />

        <Col xs={10} className="form-section batch-form-section">
          <div className="user-heading border p-2 px-3 mt-4 m-4">
            <h3> Hello Cooperative!</h3>
          </div>
          <h5 className="m-4 p-2">Create New Batch</h5>
          <div className="form-block border p-4 px-5 mt-3 m-4">
            <form onSubmit={FormSubmit}>
              
              <div className="row">
                <div className="col-md-6">
                  <label for="milkBatchNumber" className="form-label label-batch">
                    Milk Batch Number
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Milk Batch Number"
                    name="milkBatchNumber"
                    value={milkBatchNumber}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="milkBatchHolder" className="form-label label-batch">
                    Lab Report Number
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Lab Report Number"
                    name="milkBatchHolder"
                    value={milkBatchHolder}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>

              <br />
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <label for="milkType" className="form-label label-batch">
                    Milk Type
                  </label>
                  {/* <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Milk Type"
                    name="milkType"
                    value={milkType}
                    onChange={(e) => onChange(e)}
                    required
                  /> */}
                  <select
                    className="form-select"
                    onChange={(e) => onChange(e)}
                    value={milkType}
                    name="milkType"
                    required
                  >
                    {/* <option selected>Select milk type form menu</option> */}
                    <option value="cow">Cow</option>
                    <option value="bufflo">Buffalo</option>
                    <option value="sheep">Sheep</option>
                    <option value="goat">Goat</option>
                  </select>
                </div>
                <div className="col-md-6 col-lg-3">
                  <label for="waterContent" className="form-label label-batch">
                    Water Content (in %)
                  </label>
                  <input
                    className="form-control p-2"
                    type="number"
                    placeholder="Water Content"
                    name="waterContent"
                    value={waterContent}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="col-md-6 col-lg-3">
                  <label for="fatContent" className="form-label label-batch">
                    Fat Content (in %)
                  </label>
                  <input
                    className="form-control p-2"
                    type="number"
                    placeholder="Fat Content"
                    name="fatContent"
                    value={fatContent}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="col-md-6 col-lg-3">
                  <label for="volume" className="form-label label-batch">
                    Volume
                  </label>
                  <input
                    className="form-control p-2"
                    type="number"
                    placeholder="Volume"
                    name="volume"
                    value={volume}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>

              <br />

              <div className="row">
                <div className="col-md-6">
                  <label for="retailer" className="form-label label-batch">
                    Retailer Name
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Retailer Name"
                    name="retailer"
                    value={retailer}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="sensorId" className="form-label label-batch">
                    Sensor ID
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Sensor ID"
                    name="sensorId"
                    value={sensorId}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>

              <br />
              <div class="mx-auto text-center">
                <input
                  type="submit"
                  className="py-2 px-4 btn btn-primary"
                  value="Create Now"
                />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Form;
