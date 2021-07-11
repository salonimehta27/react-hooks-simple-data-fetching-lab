// create your App component here
import React, { useState, useEffect } from 'react'


function App() {
    const [dog, setDog] = useState(null)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(data => {
                // console.log(data)
                setDog(data.message)
            })
    }, [])
    if (!dog) return <p>Loading...</p>;
    return <img alt="A Random Dog" src={dog} />


}
export default App