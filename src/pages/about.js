import { useEffect, useState } from 'react'
import style from '../styles/about.module.css'

const things = ['Kaushik Rawat', 'from Mumbai', 'doing B.Tech', 'from IIT', 'in First Year', 'in Computer Science']

export default function About({setAbout}) {
    const [thingIndex, setTI] = useState(0);

    function f() {
        setTI((oldTI) => oldTI + 1);
        console.log(1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
          f();
        }, 4000);
      
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, [])
    
    useEffect(() => {
        console.log(thingIndex)
    }, [thingIndex])


    return (
        <div className={style.main}>
            <div className={style.im}>I am
                <div className={style.back} onClick = {() => {setAbout(false)}}>Back to Binge Watch</div>
            </div>
            <div className={style.things}>
                <div className={style.thing}>{things[thingIndex % things.length]}</div>
            </div>
        </div>
)
}


