import styles from '../styles/movie.module.css'
import { ColorExtractor } from 'react-color-extractor';
import { useState } from 'react';
import invert from 'invert-color';
import { useEffect } from 'react';
import {AiFillStar} from 'react-icons/ai';
import {SiNetflix, SiPrime, SiHbo, SiHulu} from 'react-icons/si';
import {BsPlayFill} from 'react-icons/bs'


const black = '#000000';
const white = '#ffffff';

const services = [<SiNetflix/>, <SiHbo/>, <SiPrime/>, <SiHulu/>]

const getInverted = (color) => {
    return [invert(color, { black: '#000000', white: '#ffffff' }), invert(color, {black: '#3a3a3a', white: '#aaaaaa'}), invert(color), invert(invert(color, {black: '#000000', white: '#FFFFFF'}))]
}

function Movie({name, img, desc, others, changeMovie, trailer}){
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
                        <div className={styles.watchtrailer} onClick = {() => {window.open(trailer)}}>
                            Watch Trailer <BsPlayFill/>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name} style = {{color: fgcolor[0]}}>{name}</div>
                        <div className={styles.tags}>
                            <div className={styles.tag} style = {{backgroundColor: fgcolor[2], color: fgcolor[3]}}>3.78 <AiFillStar/></div>
                            <div className={styles.tag} style = {{backgroundColor: fgcolor[2], color: fgcolor[3]}}>JAN 2022</div>
                            <div className={styles.tag} style = {{backgroundColor: fgcolor[2], color: fgcolor[3]}}>138 mins</div>
                        </div>
                        <div className={styles.tags}>
                            {services.map((e) => <dev className={styles.service}  style = {{backgroundColor: fgcolor[2], color: fgcolor[3]}}>{e}</dev>)}
                        </div>
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