// create your App component here
import React, { useEffect, useState} from "react";

function App () {
    const [image, setImage]= useState("")
    const [loaded, setLoaded]=useState(false)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then((dogImg) => {
            setImage(dogImg.message);
            setLoaded(true)
        })

    }, [])

    if (!loaded) return <p>Loading...</p>;

    return <img alt="A Random Dog" src={image}/>
}

export default App