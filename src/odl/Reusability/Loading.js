import React, {useState, useEffect} from "react";

function Loading(props) {
    const url = "https://swapi.dev/api/people/1/";
    const [loading, setLoading] = useState(false);  //
    const [data, setData] = useState("");

    useEffect(() => {
        setLoading(true);   //
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);  //
                console.log(data);
            })
            .catch(err=>
                alert(err.message)
            )
    }, []);
    return (
        loading ?       //
            <h1>Loading ... </h1>
            :
            <p>{JSON.stringify(data)}</p>
    )
}

export default Loading