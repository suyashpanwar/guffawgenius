import memesData from "./memesData"

export default function MemeForm(){
    function memeImage(){
        const memeArray = memesData.data.memes;
        const num = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[num].url;
    }
    return(
        <div className="meme-form">
            <div className="meme-form-input">
                <input className="input-1" type="text" placeholder="TOP TEXT" />
                <input className="input-2" type="text" placeholder="BOTTOM TEXT" />
            </div>
            <div className="meme-form-button">
                <button className="meme-form-button-1" type="button" onClick={memeImage}>Get new meme image</button>
                <button className="meme-form-button-2" type="button">Generate meme</button>
            </div>
        </div>
    )
}