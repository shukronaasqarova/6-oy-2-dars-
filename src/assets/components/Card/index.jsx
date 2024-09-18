import React from 'react'
import './index.css'
function Card(props) {
        const {data} = props;
        console.log(data.address);
    return (
        <div className="images">
            <img src={data.image} alt="image" />
            <div className="names">
                <h2> Name : {data.firstName} <br /> Surname : {data.lastName}</h2>
                <h2>{data.name}</h2><br />
                <div className="email-phone"><h3>{data.phone} <br /> {data.email}</h3></div><br />
                <h3 className="address">{data.address.region}</h3>
                <h3 className="name">{data.cars[0]}  {data.cars[1]}  {data.cars[2]}</h3><br />
            </div>
        </div>
    )
}

export default Card

