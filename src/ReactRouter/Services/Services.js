import React from "react";
import {arr, sum} from "./servicesData";
import {Link} from "react-router-dom";

const Services = () => {
    console.log(arr);
    const page = sum(1, 2)
    const myStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
    const myStylediv = {
        border: "1px solid",
        margin: "20px",
        width: "22%"
    }


    return (
        <div style={myStyle}>
            {
                arr.map(item => (
                    <div  key={item._id} style={myStylediv}>
                        <Link to={`/services/${item._id}`}>
                            <h2>{item.name} - ${item.price}</h2>
                            <p>{item.description}</p>
                        </Link>
                    </div>
                ))
            }
            <p>Page is {page}</p>
        </div>
    )
};

export default Services