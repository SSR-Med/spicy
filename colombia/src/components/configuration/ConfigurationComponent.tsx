// Dependencies
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Helpers
import { handleRedirect } from "../../helpers/HandleRedirect";
import { emptyFunction } from '../../helpers/EmptyFunction';
import { getName, getRole, deleteSelf } from '../../helpers/API/user/UserHelper';
import { englishRole2Spanish } from '../../constants/Constants';


// Create configuration element
export function createConfigurationElement(nombre:string,color:string, pointer:boolean, onClick: any){
    return(
        <div className="configuration-item" style={
            {
                backgroundColor: color,
                cursor: pointer ? "pointer" : "default"
            }
        } onClick={onClick}>   
            <p>{nombre}</p>
        </div>
    )
}

// Select list of elements
function selectConfiguration(admin:boolean){

    const [name, setName] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const navigate = useNavigate()

    useEffect(() => {
        getName().then((response) => {
            setName(response);
        });
        getRole().then((response) => {
            setRole(englishRole2Spanish[response]);
        });
    })

    const baseElements = [
        {nombre:`${name}: ${role}`,color:"#369DD7",pointer:false,onClick:() => emptyFunction()},
    ];
    const adminElements = [
        {nombre:"Modificar cuentas",color:"#369DD7",pointer:true,onClick:() => handleRedirect("/","configuration/accounts")},
        {nombre:"Modificar cartas",color:"#369DD7",pointer:true,onClick:() => handleRedirect("/","configuration/cards")},
    ];
    const userElements = [
        {nombre:"Modificar contraseña",color:"#369DD7",pointer:true,onClick:() => handleRedirect("/","configuration/pass")},
        {nombre:"Eliminar cuenta",color:"#D73636",pointer:true,onClick: () => deleteSelf(navigate)},
    ];
    return admin ? baseElements.concat(adminElements) : baseElements.concat(userElements);
}




// Create configuration
export function createConfiguration(admin:boolean){
    return (
        <div className="configuration-container">
            {selectConfiguration(admin).map((element) => {
                return createConfigurationElement(element.nombre, element.color, element.pointer, element.onClick);
            })}
        </div>
    )
}