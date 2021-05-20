import React from "react";
import Card from "./Card";
import NewJSFeatures from "./NewJSFeatures";
import RoundedImg from "./ProtoType_DefaultProps";

const Intro = (props) => {
    return (
        <div>
            <h1>Intro</h1>
            <hr/>
            <NewJSFeatures/>
            {/*Card component*/}
            <Card background = "red"/>
            <Card />
            <Card background = "green"/>

            {/*ProtoType and default props example*/}
            <RoundedImg src={"https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"}
                        borderRadius={40}/>
        </div>
    )
};

export default Intro