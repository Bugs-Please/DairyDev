import React from 'react'
import MilkPack from "../../Assets/images/MilkPack.png"
const Banner = () => {
    return (
        <div className="d-flex p-5">
            <div className="rightContent p-5">
                <h1>
                    Solution to trace milk supplied by unorganized sector
                </h1>
                <p>
                    Integrating Blockchain Technology with IOT into the milk supply chain to improve the traceability of milk and build stakeholder trust in the unorganized milk supply chain
                </p>
                <button>Join Now!!</button>
            </div>
            <div className="leftContent p-5">
                <img src={MilkPack} alt="milk tetra pack" />
            </div>
        </div>
    )
}

export default Banner