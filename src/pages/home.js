import styles from '../styles/home.module.css'
import Tilt from 'react-tilt'
const genreData = [
    {name: "Horror", img: "https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"},
    {name: "Rom-Com", img: "https://www.game-ost.com/static/covers_soundtracks/3/2/32108_21842.jpg"},
    {name: "Mystery", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgN3BwZUKUNBKKDbIeSwvZr5aFHNetxLhLMHdpG5qqlnZ24xtGk2C9YLpWXXZHaZT-D9M&usqp=CAU"},
    {name: "Anime", img: "https://cloudfront-us-east-1.images.arcpublishing.com/culturacolectiva/5G6WCFYU7NACZBZ3AHZ7ICQQFU.jpg"},
    {name: "Action", img: "https://cdn.thecoolist.com/wp-content/uploads/2016/08/Blackhawk-Down-best-action-movie-960x540.jpg"}
]

function Home({updatePage}){
    return(
        <div className={styles.main}>
          <div className={styles.head} >Choose Your <span className={styles.special}>Genre</span></div>
          <div className={styles.genres}>
            {genreData.map(element => 
              <GenreOption name = {element.name} img_src = {element.img} updatePage = {updatePage}/>
            )}
          </div>
          
          
        </div>

    )
}

function GenreOption({name, img_src, updatePage}) {
    return (
      <Tilt className = "Tilt"  options = {{max: 20, scale: 1, transition: true}} styles={{transition: 10}}>

        <div className={styles.genreoption} onClick={() => {updatePage(name.toLowerCase())}}>
            <img
                className={styles.img}
                src={img_src}
                width="20px"
                height="20px" />
            <p className={styles.caption}>{name}</p>
        </div>
      </Tilt>
        )

}


export default Home;