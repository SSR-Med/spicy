// Dependencies
import { useLocation } from "react-router-dom";
// Helpers
import { handleRedirect } from "../../helpers/HandleRedirect";
export function createHomeHeaderElement(){
    return (
        <header className="home-header">
            <div className="home-config" onClick={() =>handleRedirect("/","configuration")}>
                <h1>Usuario/Config</h1>
            </div>
            <div className="home-resources">
                <h1>Recursos</h1>
            </div>
        </header>
    )
}

export function createHomeFooterElement(labelPath: string, path:string){
    // Get location for background color    
    const location = useLocation();
    const isActive = location.pathname === "/"+path;
    // Redirect to the path
    const handleRedirectLevel = () => {
        window.location.href = "/"+path;
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
    return (
        <div className="home-footer">
            {createHomeFooterElement("Inicio", "home")}
            {createHomeFooterElement("Historia", "map")}
            {createHomeFooterElement("Unidades", "team")}
            {createHomeFooterElement("Gacha", "gacha")}
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