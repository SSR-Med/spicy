// Css
import "/src/static/css/home/home.css"
// Components
import { createHomeFooter, createHomeNew, createHomeHeaderElement } from "../../components/home/HomeComponent"
function Home(){
    return (
        <div className="home">
            {createHomeHeaderElement()}
            <main className="home-main">
                <div className="home-news">
                    {createHomeNew("Nueva noticia")}
                    {createHomeNew("Noticia alarmante")}
                    {createHomeNew("Noticia de prueba")}
                </div>
            </main>
            {createHomeFooter()}
        </div>
    )
}

export default Home;
