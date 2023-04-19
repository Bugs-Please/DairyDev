import './Profile.css';
import pic from './image.png';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Row, Col, Accordion, Table } from 'react-bootstrap';
const Profile = () => {
  return (
    <Row >
      <Sidebar />
      <Col xs={9} sm={10} md={10} style={{padding:"3rem"}}>
        <Row style={{ backgroundColor: 'whitesmoke',padding:'1rem', justifyContent:'space-evenly',alignItems:'center', borderRadius:"0.5rem"}}>
          <Col md={3} >
            <img src="https://www.tastearkansas.com/wp-content/uploads/2019/03/Critt.-County-Farm-Family-2010-Wallace-Family-034-1024x680.jpg" 
              width="100%" 
              height="100%" 
              alt="profile pic" 
              style={{
                borderRadius:'0.5rem',
                objectFit:'contain',
                backgroundColor:'transparent',
                zIndex:'50',
                transition:'transform infinit ease-in-out',
                // transform:'translateY(-15%)'
              }} 
            />
          </Col>
          <Col md={9}>
            <Row>
              <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                <div style = {{display:'flex',flexDirection:'column' ,alignItems:'left'}}>
                  <span style={{display:'flex',padding:'0.25rem'}}><h6>Name : </h6><h6 style={{color:'#3B5999',marginLeft:'1rem'}}>Pratap Singh</h6></span>
                  <span style={{display:'flex',padding:'0.25rem'}}><h6>Id : </h6><h6 style={{color:'#3B5999',marginLeft:'1rem'}}>6969</h6></span>
                  <span style={{display:'flex',padding:'0.25rem'}}><h6>Gender : </h6><h6 style={{color:'#3B5999',marginLeft:'1rem'}}>Male</h6></span>
                </div>
                <div>
                  <button style={{color:'green',textDecoration:'underline',backgroundColor:'transparent',margin:'1rem'}}>Edit</button>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        <Row style={{ backgroundColor: 'transparent',marginTop:'1rem', justifyContent:'space-evenly',alignItems:'center', borderRadius:"0.5rem"}}>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0' style={{marginTop:'0.5rem',marginBottom:'0.5rem'}}>
              <Accordion.Header>Basic Details</Accordion.Header>
              <Accordion.Body>
                <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                  <div style = {{display:'flex',flexDirection:'column' ,alignItems:'left'}}>
                    <span style={{display:'flex',padding:'0.25rem'}}><h6>Age : </h6><h6 style={{color:'#3B5999',marginLeft:'1rem'}}>35</h6></span>
                    <span style={{display:'flex',padding:'0.25rem'}}><h6>Cattle Count : </h6><h6 style={{color:'#3B5999',marginLeft:'1rem'}}>4</h6></span>
                    <span style={{display:'flex',padding:'0.25rem'}}><h6>Registration Date : </h6><h6 style={{color:'#3B5999',marginLeft:'1rem'}}>16/08/2022</h6></span>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1' style={{marginTop:'0.5rem',marginBottom:'0.5rem'}}>
              <Accordion.Header>Cattle Details</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th >Cow RFID</th>
                      <th >Breed</th>
                      <th >Recenet inspection Date</th>
                      <th >Details</th>
                      <th >Generate QR</th>
                    </tr>
                  </thead>
                  <tbody>
                        <tr>
                          <td>cesoc125</td>
                          <td>Gir</td>
                          <td>12.08.2022</td>
                          <td>Vaccination done </td>
                          <td>Generate</td>
                        </tr>
                        <tr>
                          <td>jdurc159</td>
                          <td>Sahiwal</td>
                          <td>12.08.2022</td>
                          <td>Vaccination done </td>
                          <td>Generate</td>
                        </tr>
                        <tr>
                          <td>adesg478</td>
                          <td>Gir</td>
                          <td>12.08.2022</td>
                          <td>Vaccination done </td>
                          <td>Generate</td>
                        </tr>
                        <tr>
                          <td>ifccx253</td>
                          <td>Sahiwal</td>
                          <td>12.08.2022</td>
                          <td>Vaccination done </td>
                          <td>Generate</td>
                        </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Col>
    </Row>
  );
};

export default Profile;

{
  /* <Col xs={9} sm={10} md={9}>
        <div style={{ 'overflow-x': 'hidden', 'overflow-y': 'hidden' }}>
          <div className="profile overflow-hidden m-3">
            <div className="row">
              <div className="col-3">
                <img src={pic} alt="profile pic" />
              </div>
              <div className="details-top col-8 bg-light text-center">
                <h1>Name: John Doe</h1>
                <h2>Id: 648453</h2>
                <h2>Gender: Male</h2>
              </div>
            </div>
            <br></br>

            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <h6 style={{ color: 'white' }}>Basic Details</h6>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <h5>Age: 35</h5>
                    <h5>No of cows: 15</h5>
                    <h5>Date of registration: 11/7/2022</h5>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    <h6 style={{ color: 'white' }}>Cattle details</h6>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <table class="table text-center">
                      <thead>
                        <tr>
                          <th scope="col">Cow RFID</th>
                          <th scope="col">Breed</th>
                          <th scope="col">Recenet inspection Date</th>
                          <th scope="col">Details</th>
                          <th scope="col">Generate QR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>cesoc125</td>
                          <td>Gir</td>
                          <td>12.08.2022</td>
                          <td>Vaccination done </td>
                          <td>Generate</td>
                        </tr>
                        <tr>
                          <td>jdurc159</td>
                          <td>Sahiwal</td>
                          <td>12.08.2022</td>
                          <td>Vaccination done </td>
                          <td>Generate</td>
                        </tr>
                        <tr>
                          <td>adesg478</td>
                          <td>Gir</td>
                          <td>12.08.2022</td>
                          <td>Vaccination done </td>
                          <td>Generate</td>
                        </tr>
                        <tr>
                          <td>ifccx253</td>
                          <td>Sahiwal</td>
                          <td>12.08.2022</td>
                          <td>Vaccination done </td>
                          <td>Generate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <br></br>

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    <h6 style={{ color: 'white' }}>Payment details</h6>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="accordion-body">
                    <table class="table text-center">
                      <thead>
                        <tr>
                          <th scope="col">Date</th>
                          <th scope="col">Quantity of milk(L)</th>
                          <th scope="col">Price</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>12.08.2022</td>
                          <td>10</td>
                          <td>32</td>
                          <td>320</td>
                        </tr>
                        <tr>
                          <td>14.08.2022</td>
                          <td>11</td>
                          <td>30</td>
                          <td>330</td>
                        </tr>
                        <tr>
                          <td>15.08.2022</td>
                          <td>10</td>
                          <td>28</td>
                          <td>280</td>
                        </tr>
                        <tr>
                          <td>17.08.2022</td>
                          <td>15</td>
                          <td>30</td>
                          <td>450</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col> */
}
