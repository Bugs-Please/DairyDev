import React from "react";
import "./KeyBenefit.css";
import lock from "../../Assets/images/Lock.png";
import trace from "../../Assets/images/Trace.png";
import digi from "../../Assets/images/Digi.png";
import cow from "../../Assets/images/BackgroundCow.png";
import { Container, Row,Col } from "react-bootstrap";


const KeyBenefit = () => {
  return (
    <div>
      <section classname="key-benefits">
        <div className="container benefit-section-heading text-center">
          <h2>Key Benefits</h2>
        </div>

        <div className="container key-benefits-content">
          <div className="row">
            <div className="col-md benefit-cell p-4 m-3">
              <div className="benefit-cell-heading text-center">
                Organizing Small Farmers
              </div>
              <div className="benefit-cell-content text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                similique in autem esse voluptates doloribus et, velit ratione
                quos iure.
              </div>
            </div>

            <div className="col-md benefit-cell p-4 m-3">
              <div className="benefit-cell-heading text-center">Immutable</div>
              <div className="benefit-cell-content text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                similique in autem esse voluptates doloribus et, velit ratione
                quos iure.
              </div>
            </div>

            <div className="col-md benefit-cell p-4 m-3">
              <div className="benefit-cell-heading text-center">
                Build Trust among consumers
              </div>
              <div className="benefit-cell-content text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                similique in autem esse voluptates doloribus et, velit ratione
                quos iure.
              </div>
            </div>

            <div className="col-md benefit-cell p-4 m-3">
              <div className="benefit-cell-heading text-center">
                Tracing Milk
              </div>
              <div className="benefit-cell-content text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                similique in autem esse voluptates doloribus et, velit ratione
                quos iure.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md benefit-cell p-4 m-3">
              <div className="benefit-cell-heading text-center">
                Prevent Counterfeiting of Dairy Products
              </div>
              <div className="benefit-cell-content text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                similique in autem esse voluptates doloribus et, velit ratione
                quos iure.
              </div>
            </div>

            <div className="col-md benefit-cell p-4 m-3">
              <div className="benefit-cell-heading text-center">Blockchain</div>
              <div className="benefit-cell-content text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                similique in autem esse voluptates doloribus et, velit ratione
                quos iure.
              </div>
            </div>

            <div className="col-md benefit-cell p-4 m-3">
              <div className="benefit-cell-heading text-center">IOT</div>
              <div className="benefit-cell-content text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                similique in autem esse voluptates doloribus et, velit ratione
                quos iure.
              </div>
            </div>

            <div className="col-md benefit-cell p-4 m-3">
              <div className="benefit-cell-heading text-center">RFID Tags</div>
              <div className="benefit-cell-content text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                similique in autem esse voluptates doloribus et, velit ratione
                quos iure.
              </div>
            </div>
          </div>
        </div>

        <div className="container key-benefits-details my-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <img
                className=" w-50 mx-auto d-block"
                src={lock}
                alt="Lock to represent Immutablility"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="key-benefit-details-heading bold">Immutable</h3>
              <p className="key-benefit-details-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias eveniet dolore sint ratione, quidem voluptates saepe
                ex blanditiis, hic quisquam dicta, animi doloribus. Autem
                similique fuga eveniet dolorum vitae distinctio voluptatem quasi
                ipsa ipsum!
              </p>
              <a href="#working-process">
                <button className="btn btn-outline-primary learn-more">
                  Learn More
                </button>
              </a>
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                className="mx-auto d-block w-100"
                src={trace}
                alt="Tocality to represent traceability"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="col-md-6 order-md-1">
              <h3 className="key-benefit-details-heading bold">Tracing Milk</h3>
              <p className="key-benefit-details-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias eveniet dolore sint ratione, quidem voluptates saepe
                ex blanditiis, hic quisquam dicta, animi doloribus. Autem
                similique fuga eveniet dolorum vitae distinctio voluptatem quasi
                ipsa ipsum!
              </p>
              <a href="#working-process">
                <button className="btn btn-primary learn-more rounded-3">
                  See how it works
                </button>
              </a>
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <img
                className=" w-50 mx-auto d-block"
                src={digi}
                alt="Tab to represent digitize"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="key-benefit-details-heading bold">
                Digitize end to end process
              </h3>
              <p className="key-benefit-details-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias eveniet dolore sint ratione, quidem voluptates saepe
                ex blanditiis, hic quisquam dicta, animi doloribus. Autem
                similique fuga eveniet dolorum vitae distinctio voluptatem quasi
                ipsa ipsum!
              </p>
              <a href="#working-process">
                <button className="btn btn-outline-primary learn-more">
                  Learn How
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="doing-what">
        <div className="container">
          <div className="cow-img">
            <img
              className="w-100"
              src={cow}
              width = "100vw"
              alt="Tab with cow"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="doing-what-details">
            <h3>What we are doing?</h3>
            <p className="para-details p-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad, odit consequuntur exercitationem maxime sapiente cupiditate, corrupti explicabo similique ab nisi illum sed aut. Eum mollitia voluptate omnis!
            </p>
          </div>
        </div>
      </section> */}
      <div className="container">
        <Row className="align-items-center">
          {/* <Col>
            <img
              className="w-100"
              src={cow}
              width = "100vw"
              alt="Tab with cow"
              style={{ objectFit: "contain" }}
            />
          </Col> */}
          <Col className="what_we_do mb-5" >
            
              <div style={{padding:"9.5rem",color:"white"}} className="d-flex flex-column">
              <h3 style={{color:"white"}}>What we are doing?</h3>
              <p style={{paddingRight:"12rem"}}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad, odit consequuntur exercitationem maxime sapiente cupiditate, corrupti explicabo similique ab nisi illum sed aut. Eum mollitia voluptate omnis!
                
              </p>
              <button className='w-25 btn bg-white rounded-3 text-black'>Join Now!!</button>
              </div>
              
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default KeyBenefit;
