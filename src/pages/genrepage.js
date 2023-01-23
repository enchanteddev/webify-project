import styles from '../styles/genre.module.css'
import {BsPlayFill} from 'react-icons/bs'
import { useState } from 'react'
import Movie from './movie'


const others = (elem, arr) =>{
    let new_arr = {
        arr: [],
        ind: []
    }
    arr.forEach((element, index) => {
        if (element !== elem) {
            new_arr.arr.push(element);
            new_arr.ind.push(index);
        }
    });
    return new_arr
}


function GenrePage({movies, movie, setMovie, genreName}){
    console.log(movies)
    return(
        movie === -1 ?
        <div className={styles.main}>
            <div className={styles.heading}>
                {genreName}
            </div>
            <div className={styles.allmovies}>
                <div className={styles.category}>New Releases</div>
                <div className={styles.movieContainer}>
                    {movies.map((element, index) => 
                    <MovieInfo name = {element.name} img = {element.img} id = {index} setMovie = {setMovie}/>
                    )}
                </div>
                <div className={styles.category}>Trending</div>
                <div className={styles.movieContainer}>
                    {movies.map((element, index) => 
                    <MovieInfo name = {element.name} img = {element.img} id = {index} setMovie = {setMovie}/>
                    )}
                </div>
            </div>
        </div> : 
        <Movie name={movies[movie].name} trailer = {movies[movie].trailer} img={movies[movie].img} desc={movies[movie].desc} others={others(movies[movie], movies)} changeMovie={setMovie}/>
    )
}


function MovieInfo({name, img, desc, setMovie, id}) {
    console.log("a", img)
    return <div className={styles.movie} onClick={() => {setMovie(id)}}>
                <img className={styles.img} src={img}/>
                <div className={styles.info}>
                    <div className={styles.name}>

                    </div>
                    <BsPlayFill className={styles.play}/>
                </div>
            </div>
}

export default GenrePage