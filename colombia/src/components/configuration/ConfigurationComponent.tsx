// Dependencies
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useState } from 'react';
// Helpers
import { handleRedirect } from "../../helpers/HandleRedirect";
// Create configuration element
function createConfigurationElement(nombre:string,color:string, pointer:boolean, onClick: any){
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
// Empty function
function emptyFunction(){
    
}
// Select list of elements
function selectConfiguration(admin:boolean){
    const baseElements = [
        {nombre:"Nombre de usuario",color:"#369DD7",pointer:false,onClick:() => emptyFunction()},
    ];
    const adminElements = [
        {nombre:"Modificar cuentas",color:"#369DD7",pointer:true,onClick:() => emptyFunction()},
        {nombre:"Modificar cartas",color:"#369DD7",pointer:true,onClick:() => emptyFunction()},
    ];
    const userElements = [
        {nombre:"Modificar contraseña",color:"#369DD7",pointer:true,onClick:() => handleRedirect("/","configuration/pass")},
        {nombre:"Eliminar cuenta",color:"#D73636",pointer:true,onClick:() => emptyFunction()},
    ];
    return admin ? baseElements.concat(adminElements) : baseElements.concat(userElements);
}



// Create configuration
export function createConfiguration(admin:boolean){
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };
    return (
        <div className="configuration-container">
            <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                disableEnforceFocus
                
                >
                <DialogTitle id="alert-dialog-title">
                {"¿Quiere borrar su cuenta?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Perderá todo su progreso y no podrá recuperarlo, ¿Está seguro de que quiere borrar su cuenta?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} autoFocus>Cancelar</Button>
                <Button onClick={handleClose}>
                    Aceptar
                </Button>
                </DialogActions>
            </Dialog>
            {selectConfiguration(admin).map((element) => {
                const onClickHandler = element.nombre === "Eliminar cuenta" ? handleClickOpen : element.onClick;
                return createConfigurationElement(element.nombre, element.color, element.pointer, onClickHandler);
            })}
        </div>
    )
}