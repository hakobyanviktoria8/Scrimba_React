import React from "react"
import FancyBorder from "./FancyBorder";
import InfoCallout from "./InfoFancyBorder";
import ShowHide from "./ShowHide";
import Favorite from "./Favorite";
import Color from "./Color";
import Loading from "./Loading";

const Reusability = (props) => {
    return (
        <div>
            <h1>Reusability</h1>
            <hr/>
            
            {/*FancyBorder use props children*/}
            <FancyBorder>
                <h2>It is FancyBorder component</h2>
            </FancyBorder>
            
            <FancyBorder>
                <form action="">
                    <input type="email"/> <br/>
                    <input type="password"/> <br/>
                    <input type="submit"/> <br/>
                </form>
            </FancyBorder>
            <hr/>
            <FancyBorder>
                <InfoCallout header={"Header"} body = {"body"}/>
            </FancyBorder>

            <hr/>
            <ShowHide/>

            <hr/>
            <Favorite/>

            <hr/>
            <Color/>

            <hr/>
            <Loading/>


        </div>
    )
};

export default Reusability
