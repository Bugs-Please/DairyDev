import React from 'react';
import './KeyBenefit.css';
import lock from '../../Assets/images/Lock.png';
import trace from '../../Assets/images/Trace.png';
import digi from '../../Assets/images/Digi.png';
import cow from '../../Assets/images/BackgroundCow.png';

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
                Details about the daily batch of milk will be stored. Valuable
                information like vaccination details, fodder, and type of cattle
                will be stored on an RFID tag to perform predictive analysis and
                increase the yield of milk.
              </div>
            </div>

            <div className="col-md benefit-cell p-4 m-3">
              <div className="benefit-cell-heading text-center">
                Build Trust among consumers
              </div>
              <div className="benefit-cell-content text-center">
                Platform will help various Dairy Brand organizations to build
                trust among the consumers, Since Consumers just have to scan QR
                code and get the entire source of batch of milk they received.
                Our platform will enable brand organizations to outstand their
                competition using our transparency and immutable feature.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md benefit-cell p-4 m-3">
              <div className="benefit-cell-heading text-center">
                Prevent Counterfeiting of Dairy Products
              </div>
              <div className="benefit-cell-content text-center">
                Preventing counterfeiting of dairy products is one of the most
                pressing problems of our time, which worries governments of
                different countries, producers, sellers, public organizations
                and, of course, consumers. The purchase of counterfeit dairy
                products is associated for consumers with a certain risk to
                their life and health.
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
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="key-benefit-details-heading bold">Immutable</h3>
              <p className="key-benefit-details-content">
                It is a definitive feature that blockchain evangelists highlight
                as a key benefit. Immutability has the potential to transform
                the auditing process into a quick, efficient, and cost-effective
                procedure, and bring more trust and integrity to the data
                businesses use and share every day.
              </p>
              <a href="#working-process">
                <button className="btn btn-outline-primary rounded-3 learn-more">
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
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="col-md-6 order-md-1">
              <h3 className="key-benefit-details-heading bold">Tracing Milk</h3>
              <p className="key-benefit-details-content">
                this system describes the development of a tracing system for
                the milk supply chain, namely MilkLucid, an online computer
                system in which farmers, Shipper, and production unit must
                maintain records of the production and quality of milk through
                to the quality factor.
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
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="key-benefit-details-heading bold">
                Digitize end to end process
              </h3>
              <p className="key-benefit-details-content">
                Supply chain digitization is all about ensuring that different
                supply chain tools work together to optimize process
                integration. This involves bringing accurate data and processes
                together under one unified platform to provide end-to-end
                visibility.
              </p>
              <a href="#working-process">
                <button className="btn btn-outline-primary rounded-3 learn-more">
                  Learn How
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="doing-what">
        <div className="container">
          <div className="cow-img">
            <img
              className="w-100 mx-auto d-block"
              src={cow}
              alt="Tab with cow"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="doing-what-details">
            <h3 style={{ color: '#fff' }}>What we are doing?</h3>
            <p className="para-details">
              Building a <span className="text-bold">Decentralized System</span>{' '}
              which records the entire data gathered in the supply chain using
              IOT devices.
            </p>
            <p className="para-details">
              Building an{' '}
              <span className="text-bold">organized supply chain</span> where we
              collect data like temperature of milk batches, Milk Test Lab
              Reports, Shelf life of a batch of milk.
            </p>
            {/* <button className="btn btn-light rounded-3 button-join-now">Join Now</button> */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default KeyBenefit;
