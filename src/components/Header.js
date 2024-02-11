import meme from "./meme.webp"

export default function Header(){
    return(
        <header className="heading">
            <img src={meme} alt="unavailable" />
            <h1>Guffaw Genius</h1>
            <h2>make memes here!!</h2>
        </header>
    )
}