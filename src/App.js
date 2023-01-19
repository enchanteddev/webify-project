import { useState } from 'react';
import './App.css';
import Home from './pages/home';
import GenrePage from './pages/genrepage';
import movieInfoData from './MovieInfoData.json'
import style from './styles/app.module.css'


//https://coolors.co/palette/ef476f-ffd166-06d6a0-118ab2-073b4c
function App() {
    const [page, setPage] = useState("home");
    const [genre, setGenre] = useState("");
    const pages = {
        home: <Home updatePage={(x) => {
            setGenre(x);
            setPage("genre");
            console.log(x, movieInfoData, movieInfoData[x])
        }}/>,
        genre: <GenrePage updatePage={setPage} movies = {movieInfoData[genre]}/>,
    }
    return (
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <div className={style.header}>
                <div className={style.left} onClick = {() => {setPage('home')}}>
                    Binge Watch
                </div>
                <div className={style.right}>
                    <div className={style.search}></div>
                </div>
            </div>
            <div className={style.content}>
                {pages[page]}
            </div>
            <div className={style.footer}>
                <div className={style.fleft + ' ' + style.fhover}>
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
