import axios from "axios";
import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AuthContext } from "../../AuthProvider";
import Sidebar from "../Sidebar/Sidebar";

const GenerateLabReport = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    milkBatchNumber: "",
    billNumber: "",
    labReportNumber: "",
    status: "",
    date: "",
    labReportHolder:""
  });

  const {
    milkBatchNumber,
    billNumber,
    labReportNumber,
    status,
    date,
    labReportHolder
  } = formData;

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const FormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: user.auth.currentUser.email,
      milkBatchNumber: formData.milkBatchNumber,
      billNumber: formData.billNumber,
      labReportNumber: formData.labReportNumber,
      status: formData.status,
      date: formData.date,
      labReportHolder: formData.labReportHolder
    };

    const res = await axios.post(
      "https://20ed-45-127-121-90.in.ngrok.io/api/generateLabreport",
      data
    );
    console.log(res);
  };

  return (
    <div style={{ "overflow-x": "hidden" }}>
      <Row className="outer-container">
        <Sidebar />

        <Col xs={10} className="form-section batch-form-section">
          <div className="user-heading border p-2 px-3 mt-4 m-4">
            <h3> Hello Customer!</h3>
          </div>
          <h5 className="m-4 p-2">Create New Shipping Bill</h5>
          <div className="form-block border p-4 px-5 mt-3 m-4">
            <form onSubmit={FormSubmit}>
            <div className="row">
                <div className="col-md-6">
                <label for="milkBatchNumber" className="form-label">
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
                <br />
                <div className="col-md-6">
                <label for="billNumber" className="form-label">
                    Bill Number
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Bill Number"
                    name="billNumber"
                    value={billNumber}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>
              <br />
             
            
              <div className="row">
                <div className="col-md-6">
                <label for="labReportNumber" className="form-label">
                    Lab Report Number
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Lab Report Number"
                    name="labReportNumber"
                    value={labReportNumber}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <br />
                <div className="col-md-6">
                  <label for="status" className="form-label">
                    Status
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Status"
                    name="status"
                    value={status}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>
              <br />

              <div className="row">
              <div className="col-md-6">
                  <label for="date" className="form-label">
                    Date
                  </label>
                  <input
                    className="form-control p-2"
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={date}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <br />
                <div className="col-md-6">
                  <label for="labReportHolder" className="form-label">
                  Lab Report Holder
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Lab Report Holder"
                    name="labReportHolder"
                    value={labReportHolder}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>
              <br />

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

export default GenerateLabReport;
