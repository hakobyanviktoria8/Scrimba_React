import React, {useState} from "react";

const ShowHide = (props) => {
    const [isShow, setIsShow] = useState(true);
    return (
        <div>

            <h1>{isShow ? "Show" : "Hide"}</h1>
            <p style={{display: isShow ? "block" : "none"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias corporis dicta eveniet ex exercitationem itaque laborum, quae saepe tenetur voluptatum? Ad est
                expedita, iste laboriosam nemo nesciunt obcaecati saepe sequi!</p>
            <span>{isShow ? "❤️" : "♡"}</span>
            <br/>
            <br/>
            <button onClick={() => {
                setIsShow(!isShow)
            }}>{isShow ? "Show" : "Hide"}</button>

        </div>
    )
};
export  default ShowHide