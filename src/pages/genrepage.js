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

function GenrePage({setPage, movies}){
    const [movie, setMovie] = useState(-1)
    console.log(movies)
    return(
        movie === -1 ?
        <div className={styles.main}>
            {movies.map((element, index) => 
              <MovieInfo name = {element.name} img = {element.img} desc = {element.desc} id = {index} setMovie = {setMovie}/>
            )}
        </div> : 
        <Movie name={movies[movie].name} img={movies[movie].img} desc={movies[movie].desc} others={others(movies[movie], movies)} changeMovie={setMovie}/>
    )
}


function MovieInfo({name, img, desc, setMovie, id}) {
    console.log("a", img)
    return <div className={styles.movie} onClick={() => {setMovie(id)}}>
                <img className={styles.img} src={img} height={300} />
                <div className={styles.info}>
                    <div className={styles.name}>
                        {name}
                        <BsPlayFill className={styles.play}/>
                    </div>
                    <p className={styles.desc}>
                        {desc}
                    </p>
                </div>
            </div>
}

export default GenrePage