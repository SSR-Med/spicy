// Dependencies
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// Helpers
import { refreshToken } from "../../helpers/API/Token";
import { handleRedirect } from "../../helpers/HandleRedirect";
import { getResources } from "../../helpers/API/user/UserHelper";

export function createHomeHeaderElement(){


    const [resources, setResources] = useState<string>("")

    useEffect(() =>{
        getResources().then((response) => {
            setResources(`Recursos: Tokens:${response.tokens} | Energía:${response.energy}`)
        });
    },[])

    return (
        <header className="home-header">
            <div className="home-config" onClick={() =>handleRedirect("/","configuration")}>
                <h1>Usuario/Config</h1>
            </div>
            <div className="home-resources">
                <h1>{resources}</h1>
            </div>
        </header>
    )
}

export function createHomeFooterElement(labelPath: string, path:string,
    navigate: NavigateFunction
){
    // Get location for background color    
    const location = useLocation();
    const isActive = location.pathname === "/"+path;
    // Redirect to the path
    const handleRedirectLevel = () => {
        navigate("/"+path)
    }
    
    return (
        <div className="home-footer-content" 
        onClick={handleRedirectLevel}
        style={{ backgroundColor: isActive ? 'red' : '#369DD7' }}>
            <h1>{labelPath}</h1>
        </div>
    )
}

export function createHomeFooter(){
    const navigate = useNavigate();
    useEffect(() => {
        refreshToken(navigate)
    },[])
    return (
        <div className="home-footer">
            {createHomeFooterElement("Inicio", "home",navigate)}
            {createHomeFooterElement("Historia", "map",navigate)}
            {createHomeFooterElement("Unidades", "team",navigate)}
            {createHomeFooterElement("Gacha", "gacha",navigate)}       
            {createHomeFooterElement("Salir","",navigate)} 
        </div>
    )

}

export function createHomeNew(text:string){
    return (
        <div className="home-news-content">
            <h1>{text}</h1>
        </div>
    )
}