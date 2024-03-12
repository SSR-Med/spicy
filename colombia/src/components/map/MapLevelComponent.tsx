export function createSummaryLevel(difficulty: string, energy: string, treasury: string, id: number){
    
    const handleRedirectLevel = () => {
        const url = window.location.href;
        window.location.href = url+"/"+id;
    }
    
    return (
        <div className="summary-level" onClick={handleRedirectLevel}>
            <p>Nivel: {difficulty}</p>
            <p>Energía: {energy}</p>
            <p>Recompensa: {treasury}</p>
        </div>
    )
}