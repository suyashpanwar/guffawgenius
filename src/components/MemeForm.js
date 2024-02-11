export default function MemeForm(){
    return(
        <form className="meme-form">
            <div className="meme-form-input">
                <input className="input-1" type="text" placeholder="Enter meme text" />
                <input className="input-2" type="text" placeholder="Enter meme text" />
            </div>
            <div className="meme-form-button">
                <button className="meme-form-button-1" type="button">Get new meme image</button>
                <button className="meme-form-button-2" type="button">Generate meme</button>
            </div>
        </form>
    )
}