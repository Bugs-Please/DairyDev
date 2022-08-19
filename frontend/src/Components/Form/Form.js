import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    batch_number: "",
    report_number: "",
    milk_type: "",
    water_content: "",
    fat_content: "",
    volume: "",
    retailer_name: "",
    sensor_id: "",
  });

  const {
    username,
    batch_number,
    report_number,
    milk_type,
    water_content,
    fat_content,
    volume,
    retailer_name,
    sensor_id,
  } = formData;

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ "overflow-x": "hidden" }}>
      <Row className="outer-container">
        <Sidebar />

        <Col xs={10} className="form-section">
          <div className="user-heading border p-2 px-3 mt-4 m-4">
            <h3> Hello Cooperative!</h3>
          </div>
          <h5 className="m-4 p-2">Create New Batch</h5>
          <div className="form-block border p-4 px-5 mt-3 m-4">
            <form onSubmit={(e) => onSubmit(e)}>
              <label for="username" className="form-label">
                Username
              </label>
              <br />
              <input
                className="form-control p-2"
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
                required
              />

              <br />
              <div className="row">
                <div className="col-md-6">
                  <label for="batch_number" className="form-label">
                    Milk Batch Number
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Milk Batch Number"
                    name="batch_number"
                    value={batch_number}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="report_number" className="form-label">
                    Lab Report Number
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Lab Report Number"
                    name="report_number"
                    value={report_number}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>

              <br />
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <label for="milk_type" className="form-label">
                    Milk Type
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Milk Type"
                    name="milk_type"
                    value={milk_type}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="col-md-6 col-lg-3">
                  <label for="water_content" className="form-label">
                    Water Content (in %)
                  </label>
                  <input
                    className="form-control p-2"
                    type="number"
                    placeholder="Water Content"
                    name="water_content"
                    value={water_content}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="col-md-6 col-lg-3">
                  <label for="fat_content" className="form-label">
                    Fat Content (in %)
                  </label>
                  <input
                    className="form-control p-2"
                    type="number"
                    placeholder="Fat Content"
                    name="fat_content"
                    value={fat_content}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="col-md-6 col-lg-3">
                  <label for="volume" className="form-label">
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
                  <label for="retailer_name" className="form-label">
                    Retailer Name
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Retailer Name"
                    name="retailer_name"
                    value={retailer_name}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="sensor_id" className="form-label">
                    Sensor ID
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Sensor ID"
                    name="sensor_id"
                    value={sensor_id}
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
