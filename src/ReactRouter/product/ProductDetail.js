import React from "react";
import {useParams} from "react-router-dom"
import productsData from "./productsData"

function ProductDetail() {
    const {slug} = useParams()
    console.log(slug, productsData)

    const item = productsData.find(x => x.id === +slug);
    console.log(productsData, slug, item)
    return (
        <>
            <h1>ProductDetail Page {slug}</h1>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
        </>
    )
}

export default ProductDetail