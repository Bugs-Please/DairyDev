import { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Steps } from "rsuite";
import "rsuite/styles/index.less";
import "rsuite/dist/rsuite.min.css";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import axios from 'axios'
import LocationMap from '../../Components/Map/Map'
import Loader from '../../Components/Loader/Loader'
import { AuthContext } from "../../AuthProvider";



const styles = {
  width: "200px",
  display: "inline-table",
  verticalAlign: "top",
};
const Tracking = () => {
    const [step, setStep] = useState(0);
    const [eventData, setEventData] = useState([])
    const [DocsData, setDocsData] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
      username: "",
      milkBatchNumber: "",
      sensorId: "",
      billNumber: "",
      labReportNumber: ""
    });
  
    const {
      milkBatchNumber,
      sensorId,
      billNumber,
      labReportNumber
    } = formData;
  
    const onChange = (e) => {
      console.log(e.target.name, e.target.value);
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const FormSubmit = async (e) => {
      e.preventDefault();
      const fetchEvents = async () => {
        setLoading(true)
  
        const config = {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          params: {
            "username": "adwaitnsk2017@gmail.com",
            "sensorId": formData.sensorId ,
          }
      }
      const res = await axios.get("http://localhost:8081/api/getHistory", config)
        setEventData(res.data)
        setLoading(false)
      }

      const fetchEvents2 = async () => {
        setLoading(true)
  
        const config = {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          params: {
            "username": "adwaitnsk2017@gmail.com",
            "milkBatchNumber": formData.milkBatchNumber ,
            "billNumber": formData.billNumber,
            "labReportNumber" : formData.labReportNumber
          }
      }
      const res = await axios.get("http://localhost:8082/api/getalldocs", config)
        setDocsData(res.data)
        setLoading(false)
      }
  
      fetchEvents()
      fetchEvents2()

    }
  

  useEffect(() => {
    
  }, [])

    return (
      <div style={{ "overflow-x": "hidden" }}>
      <Row>
      <Sidebar />
        <Col xs={10} md={10}>
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
                  <label for="sensorId" className="form-label label-batch">
                    Sensor ID
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Lab Report Number"
                    name="sensorId"
                    value={sensorId}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="billNumber" className="form-label label-batch">
                    BIll Number
                  </label>
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Lab Report Number"
                    name="billNumber"
                    value={billNumber}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="labReportNumber" className="form-label label-batch">
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
              </div>
              
              <br />

              <br />
              <div class="mx-auto text-center">
                <input
                  type="submit"
                  className="py-2 px-4 btn btn-primary"
                  value="Track Now"
                />
              </div>
            </form>
        </div>
      {
         !loading ? 
         <Row>
         <Col xs={6} md={6}>
       <div className="main_container mt-3">
           <div class="container padding-bottom-3x mb-1">
       <div class="card mb-3">
         <div class="p-4 text-center text-white text-lg bg-dark rounded-top">
           <span class="text-uppercase">Tracking Order No - </span>
           <span class="text-medium">001698653lp</span>
         </div>
         <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
           <div class="w-100 text-center py-1 px-2">
             <span class="text-medium">Shipped Via:</span> UPS Ground
           </div>
           <div class="w-100 text-center py-1 px-2">
             <span class="text-medium">Status:</span> Checking Quality
           </div>
           <div class="w-100 text-center py-1 px-2">
             <span class="text-medium">Expected Date:</span> APR 27, 2021
           </div>
         </div>
         <div class="card-body"></div>
       </div>
       <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
         <div class="custom-control custom-checkbox mr-3">
           <Steps current={step} vertical style={styles}>
             <Steps.Item
               onClick={() => setStep(0)}
               title="Finished"
               description={
                 step === 0 && (
                   <div>
                     <h1>Description</h1>
                     <p>Loren ipsum</p>
                   </div>
                 )
               }
             />
             <Steps.Item
               onClick={() => setStep(1)}
               title="In Progress"
               description="Description"
             />
             <Steps.Item
               onClick={() => setStep(2)}
               title="Waiting"
               description="Description"
             />
             <Steps.Item
               onClick={() => setStep(3)}
               title="Waiting"
               description="Description"
             />
           </Steps>
         </div>
         </div>
         </div>
      
         </div>
         </Col>
         <Col xs={4} md={4}>
         {/* { !loading ? <LocationMap eventData={eventData} /> : <Loader /> } */}
         <LocationMap eventData={eventData} /> 
         </Col>
         </Row> : <div>
           
         </div>
      }
          
        </Col>
       
    </Row>

    </div>
  );
};

export default Tracking;