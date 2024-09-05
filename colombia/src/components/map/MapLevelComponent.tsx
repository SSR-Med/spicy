export function createSummaryLevel(name: string, level: string, id: number) {
    
    const handleRedirectLevel = () => {
        const url = window.location.href;
        window.location.href = url+"/"+id;
    }
    
    return (
        <div className="summary-level" onClick={handleRedirectLevel} key={id}>
            <p>{name}</p>
            <p>Nivel: {level}</p>
        </div>
    )
}