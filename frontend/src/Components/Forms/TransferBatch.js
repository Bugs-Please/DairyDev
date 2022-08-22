import axios from "axios";
import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AuthContext } from "../../AuthProvider";
import Sidebar from "../Sidebar/Sidebar";


const TransferBatch = () => {
  const { user } = useContext(AuthContext);
   

  const [formData, setFormData] = useState({
    username: "",
    milkBatchNumber: "",
    newMilkCertHolder:""
  });

  const {
    milkBatchNumber,
    newMilkCertHolder
  } = formData;

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const FormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      "username" : user.auth.currentUser.email , 
      "milkBatchNumber" : formData.milkBatchNumber ,
      "newMilkCertHolder" : formData.newMilkCertHolder,
     

    }

    const res = await axios.put("http://localhost:8081/api/transfermilkcert", data)
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
                  <br />
                  <label for="newMilkCertHolder" className="form-label">
                    New Milk Batch Holder
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="New Milk Batch Holder"
                    name="newMilkCertHolder"
                    value={newMilkCertHolder}
                    onChange={(e) => onChange(e)}
                    required
                  />
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

export default TransferBatch;
