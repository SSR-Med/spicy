export function createMapDiv(image: string, city: string, hidden:boolean = false) {

    //Redirect to the city
    const handleRedirect = () => {
      if (!hidden) {
        window.location.href = "/map/"+city;
      }
    };
    // MapDivs
    return (
      <div className="map" style={
        { backgroundImage: `url(${image})` ,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            filter: hidden ? "brightness(50%)" : "brightness(100%)",
            border: "4px solid black",
            cursor: hidden ? "default" : "pointer"
        }} onClick={handleRedirect}>
        <div className="map-flex">
            <h1>{city}</h1>
            {hidden && 
                <img src="/src/static/images/map/candado.png" alt="hidden" className="map-hidden"/>
            }
        </div>
        

      </div>
    );
  }