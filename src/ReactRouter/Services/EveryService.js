import React from "react";
import {useParams, useHistory, useLocation} from "react-router-dom";
import {arr} from "./servicesData"

const Every = () => {
    const {serviceId} = useParams();
    const history = useHistory();

    // console.log("hi",serviceId, arr);
    // const service = arr[serviceId-1]

    const service = arr.find(service => service._id === serviceId)
    console.log("params@ verchi ktor@ nesting routing kam dinamik pathi hamar", serviceId);
    console.log("history go backi hamar", history);

    const location = useLocation()
    console.log("location nerka path@ ",location)

    const handleClick = () => {
         history.push("/services")
    }
    return (
        <div>
            <h1>{service.name}</h1>
            <p>{service.description}</p>
            <p>Price is: ${service.price}</p>
            <button onClick={handleClick}>Go back</button>
        </div>
    )
};

export default Every