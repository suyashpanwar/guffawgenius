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

    const [imgText, setImgText] = React.useState({upperText : "", lowerText : ""})

    function handleChange(event){
        setImgText(prevText=>{
            return{
                ...prevText,
                [event.target.name]: event.target.value
            }
        })
    }

    const [textColor , SetTextColor] = React.useState(false);
    function changeTextColor(){
        SetTextColor(prevState=>!prevState)
    }
    var styles = {
        color : textColor ? "#" + Math.floor(Math.random() * 16777215).toString(16) : "#" + Math.floor(Math.random() * 16777215).toString(16)
    }

    return(
        <div className="meme-form">
            <div className="meme-form-input">
                <input className="input-1" type="text" placeholder="TOP TEXT" onChange={handleChange} name="upperText"/>
                <input className="input-2" type="text" placeholder="BOTTOM TEXT" onChange={handleChange} name="lowerText" />
            </div>
            <div className="meme-form-button">
                <button className="meme-form-button-1" type="button" onClick={memeImageSetter}>Get new meme image</button>
                <button className="meme-form-button-2" type="button" onClick={changeTextColor}>Change Text Color</button>
            </div>
            <div className="generate">
                <img className="generate-image" src={meme.randomImage} alt="not-available" />
                <p className="upperText" style={styles}>{imgText.upperText}</p>
                <p className="lowerText" style={styles}>{imgText.lowerText}</p>
            </div>
        </div>
    )
}