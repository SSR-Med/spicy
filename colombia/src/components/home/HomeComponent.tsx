export function createHomeFooter(labelPath: string, path:string){
    
    const handleRedirectLevel = () => {
        window.location.href = "/"+path;
    }
    
    return (
        <div className="home-footer-content" onClick={handleRedirectLevel}>
            <h1>{labelPath}</h1>
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