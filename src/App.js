import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home';
import GenrePage from './pages/genrepage';
import About     from './pages/about';
import movieInfoData from './MovieInfoData.json'
import style from './styles/app.module.css'


const vids = {
    anime: 'https://wallup.net/wp-content/uploads/2019/09/846725-zootopia-disney-animation-comedy-family-action-adventure-fox-foxes-1zoot.jpg',
    "rom-com": 'https://s2.r29static.com/bin/entry/bb9/0,408,5760,3024/x,80/2003039/image.jpg',
    horror: 'https://getwallpapers.com/wallpaper/full/6/a/0/248389.jpg',
    mystery: 'https://tvovermind.com/wp-content/uploads/2018/10/overlooked-90s-thrillers.jpg',
    action: 'https://wallpaperaccess.com/full/3075771.jpg',
}


function capitalizeFirstLetter(string) {
    try{
        return string.charAt(0).toUpperCase() + string.slice(1);

    }
    catch{}
}
//https://coolors.co/palette/ef476f-ffd166-06d6a0-118ab2-073b4c
function App() {
    const [page, setPage] = useState("home");
    const [genre, setGenre] = useState("");
    const [movie, setMovie] = useState(-1)
    const [about, setAbout] = useState(false);

    const pages = {
        home: <Home updatePage={(x) => {
            setGenre(x);
            setPage("genre");
            console.log(x, movieInfoData, movieInfoData[x])
        }}/>,
        genre: <GenrePage setMovie={setMovie} movie={movie} movies = {movieInfoData[genre]} genreName={capitalizeFirstLetter(genre)}/>,
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page, genre, movie])
    if (about) {
        return(
            <About setAbout={setAbout}/>
        )
    }


    return (
        <div className = {style.main} style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <div className={style.bgImg} style={{backgroundImage: `url(${vids[genre]})`}}></div>
            <div className={style.header}>
                <div className={style.left} onClick = {() => {setPage('home'); setGenre(""); setMovie(-1)}}>
                    Binge Watch 
                </div>
                <div className={style.genrehead} onClick = {() => {setMovie(-1)}}>
                    {genre !== "" ? ` > ${capitalizeFirstLetter(genre)}`: ""} {movie !== -1 ? ` > ${movieInfoData[genre][movie].name}` : ""}
                </div>
                <div className={style.right}>
                    <div className={style.search}></div>
                </div>
            </div>
            <div className={style.content}>
                {pages[page]}
            </div>
            <div className={style.footer}>
                <div className={style.fleft + ' ' + style.fhover} onClick = {() => setAbout(true)}>
                    About
                </div>
                <div className={style.fright}>
                    <div className={style.flinkhead + ' ' + style.fhover}>
                        Links
                    </div>
                    <div className={style.flinks + ' ' + style.fhover}>Facebook</div>
                    <div className={style.flinks + ' ' + style.fhover}>Instagram</div>
                    <div className={style.flinks + ' ' + style.fhover}>Reddit</div>

                </div>
            </div>
        </div>
    );
}


export default App;
