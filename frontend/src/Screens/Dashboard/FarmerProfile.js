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