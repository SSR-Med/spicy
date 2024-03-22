// Css
import "/src/static/css/configuration/configuration.css"
// Components
import { createHomeFooter,createHomeHeaderElement } from "../../components/home/HomeComponent"
import { createConfiguration } from "../../components/configuration/ConfigurationComponent"
export default function Configuration(){
    return (
        <div className="home">
            {createHomeHeaderElement()}
            <main className="home-main">
                {createConfiguration(true)}
            </main>
            {createHomeFooter()}
        </div>
    )
}