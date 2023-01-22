import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home';
import GenrePage from './pages/genrepage';
import About     from './pages/about';
import movieInfoData from './MovieInfoData.json'
import style from './styles/app.module.css'
import anime from './static/videos/animated.mp4'


const vids = {
    anime: anime,
    "rom-com": anime,
    horror: anime,
    mystery: anime,
    action: anime,
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
            <video loop="" autoPlay muted id="myVideo" class={style.vid}>
                <source type="video/mp4" src={vids[genre]}/>

                </video>
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
