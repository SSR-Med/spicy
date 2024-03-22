// Dependencies
import Swal from 'sweetalert2';
// Helpers
import { handleRedirect } from "../../helpers/HandleRedirect";
import { emptyFunction } from '../../helpers/EmptyFunction';


// Alert
async function handleDeleteAccount() {
    const result = await Swal.fire({
      title: '¿Está seguro de borrar su cuenta?',
      text: "Perderá todo su progreso y no podrá recuperarlo.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D73636',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, borrar cuenta',
      cancelButtonText: 'Cancelar'
    });
}


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
    const baseElements = [
        {nombre:"Nombre de usuario",color:"#369DD7",pointer:false,onClick:() => emptyFunction()},
    ];
    const adminElements = [
        {nombre:"Modificar cuentas",color:"#369DD7",pointer:true,onClick:() => handleRedirect("/","configuration/accounts")},
        {nombre:"Modificar cartas",color:"#369DD7",pointer:true,onClick:() => handleRedirect("/","configuration/cards")},
    ];
    const userElements = [
        {nombre:"Modificar contraseña",color:"#369DD7",pointer:true,onClick:() => handleRedirect("/","configuration/pass")},
        {nombre:"Eliminar cuenta",color:"#D73636",pointer:true,onClick:handleDeleteAccount},
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