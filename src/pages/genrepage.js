import styles from '../styles/genre.module.css'

function GenrePage({setPage, movies}){
    console.log(movies)
    return(
        <div className={styles.main}>
            {movies.map(element => 
              <MovieInfo name = {element.name} img = {element.img} desc = {element.desc}/>
            )}
        </div>
    )
}


function MovieInfo({name, img, desc}) {
    console.log("a", img)
    return <div className={styles.movie}>
                <img className={styles.img} src={img} height={300} />
                <div className={styles.info}>
                    <div className={styles.name}>{name}</div>
                    <p className={styles.desc}>
                        {desc}
                    </p>
                </div>
            </div>
}

export default GenrePage