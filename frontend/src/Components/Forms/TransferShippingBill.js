import axios from "axios";
import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AuthContext } from "../../AuthProvider";
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TransferShippingBill = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    milkBatchNumber: "",
    billNumber: "",
    newBillHolder: ""
  });

  const {
    milkBatchNumber,
    billNumber,
    newBillHolder
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
      newBillHolder: formData.newBillHolder
    };

    const res = await axios.put(
      "http://localhost:8083/api/transfermilkcertandshippingbill/",
      data
    );
    console.log(res);
    if(res.status === 202) {
      toast.info("Shipping bill is Created!!")
    } 
  };

  return (
    <div style={{ "overflow-x": "hidden" }}>
      <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
      <Row className="outer-container">
        <Sidebar />

        <Col xs={10} className="form-section batch-form-section">
          <div className="user-heading border p-2 px-3 mt-4 m-4">
            <h3> Hello Shipper!</h3>
          </div>
          <h5 className="m-4 p-2">Transfer Shipping Bill</h5>
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
                <label for="newBillHolder" className="form-label">
                    New Bill Holder
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="New Bill Holder"
                    name="newBillHolder"
                    value={newBillHolder}
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

export default TransferShippingBill;
