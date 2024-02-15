import memesData from "./memesData"
import React from "react";

export default function MemeForm(){


    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [memeImage, setMemeImage] = React.useState(memesData)


    function memeImageSetter(){
        const memesArray = memeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const urls = memesArray[randomNumber].url

        setMeme(prevState=>{
            return{
                ...prevState,
                topText : "Hello Bhai",
                randomImage : urls
            }
        })
    }
    return(
        <div className="meme-form">
            <div className="meme-form-input">
                <input className="input-1" type="text" placeholder="TOP TEXT" />
                <input className="input-2" type="text" placeholder="BOTTOM TEXT" />
            </div>
            <div className="meme-form-button">
                <button className="meme-form-button-1" type="button" onClick={memeImageSetter}>Get new meme image</button>
                <button className="meme-form-button-2" type="button">Generate meme</button>
            </div>
            <div className="generate">
                <img className="generate-image" src={meme.randomImage} alt="not-available" />
            </div>
        </div>
    )
}