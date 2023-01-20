import styles from '../styles/movie.module.css'


function Movie({name, img, desc, others, changeMovie}){
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.imgbox}>
                        <img src={img}  height={500} className={styles.img}/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.desc}>{desc}</div>
                    </div>
                </div>
                <div className={styles.umaylike}>
                    <div className={styles.umaylikehead}>You May Also Like</div>
                    {others.arr.map((element, index) => 
                    <img src={element.img} height={300}  className={styles.othersimg} onClick={() => {changeMovie(others.ind[index])}}/>
                    )}
                </div>
            </div>
        </div>
    )
}


export default Movie;