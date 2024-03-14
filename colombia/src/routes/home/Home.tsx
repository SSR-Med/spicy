// Css
import "/src/static/css/home/home.css"
// Components
import { createHomeFooter, createHomeNew } from "../../components/home/HomeComponent"
function Home(){
    return (
        <div className="home">
            <header className="home-header">
                <div className="home-config">
                    <h1>Usuario/Config</h1>
                </div>
                <div className="home-resources">
                    <h1>Recursos</h1>
                </div>
            </header>
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
