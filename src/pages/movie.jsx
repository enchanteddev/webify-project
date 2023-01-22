import styles from '../styles/movie.module.css'
import { ColorExtractor } from 'react-color-extractor';
import { useState } from 'react';
import invert from 'invert-color';
import { useEffect } from 'react';

const black = '#000000';
const white = '#ffffff';

const getInverted = (color) => {
    return [invert(color, { black: '#000000', white: '#ffffff' }), invert(color, {black: '#3a3a3a', white: '#aaaaaa'})]
}

function Movie({name, img, desc, others, changeMovie}){
    const [colors, setColors] = useState([])
    const [fgcolor, setFGColor] = useState(['white', 'white'])

    useEffect(() => {
        if (colors.length === 0) {return}
        console.log("Colored", colors)
        setFGColor(getInverted(colors[0]))
    }, [colors])

    return (
        <div className={styles.main} style = {{backgroundColor: colors[0]}}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.imgbox}>
                        <ColorExtractor getColors={c => {setColors(c); console.log("adawd", c)}}>
                            <img src={img}  height={500} width={300} className={styles.img}/>
                        </ColorExtractor>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name} style = {{color: fgcolor[0]}}>{name}</div>
                        <div className={styles.desc} style = {{color: fgcolor[1]}}>{desc}</div>
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