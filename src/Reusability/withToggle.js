import React,{useState} from "react"

export function withToggler(component, defaultValue) {
    const C = component;
    return function(props) {
        const [isFavorited,setIsFavorited] = useState(defaultValue);
        const toggleFavorite = () =>{
            setIsFavorited(!isFavorited)
        };
        return (
            <C {...props}  isFavorited={isFavorited} toggleFavorite={toggleFavorite}/>
        )
    }
}