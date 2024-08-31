// Css
import "/src/static/css/configuration/configuration.css"
// Dependencies 
import { useEffect, useState } from "react"
// Components
import { createHomeFooter,createHomeHeaderElement } from "../../components/home/HomeComponent"
import { createConfiguration } from "../../components/configuration/ConfigurationComponent"
// Helpers
import { checkAdmin } from "../../helpers/API/user/UserHelper"


export default function Configuration(){

    const [isAdmin, setIsAdmin] = useState<boolean>(false)

    useEffect(() => {
        checkAdmin().then((response) => {
            setIsAdmin(response)
        })
    })

    return (
        <div className="home">
            {createHomeHeaderElement()}
            <main className="home-main">
                {createConfiguration(isAdmin)}
            </main>
            {createHomeFooter()}
        </div>
    )
}