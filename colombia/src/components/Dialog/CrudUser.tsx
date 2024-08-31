// Dependencies
import { Dialog, DialogContent, DialogTitle,DialogActions,
    TextField, Button, 
    FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
// Styles
import { crudDialogButton, crudDialogSelectField, crudDialogTextField } from "../../styles/CrudStyle";
// Constants
import { spanishRole2English} from "../../constants/Constants";
// Helpers
import { createUser, modifyUser } from "../../helpers/API/user/UserHelper";


export default function crudUser(open:boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    modifyRow:Record<string,any>|null, request: string
){
    // Variables
    // Title & Button
    const title = request == "POST" ? "Crear usuario": "Modificar usuario"
    // States
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [role, setRole] = useState<string>("")
    const [tokens, setTokens] = useState<number>(0)
    const [energy, setEnergy] = useState<number>(0)
    const [boosters, setBoosters] = useState<number>(0)
    // Change value of states if request is PUT
    useEffect(() => {
        if (request === "PUT"){
            if(modifyRow != null){
                // Set values
                setName(modifyRow.name)
                setPassword(modifyRow.password)
                setRole(spanishRole2English[modifyRow.role])
            }
            else{
                setOpen(false)
                Swal.fire({
                    title: "Error",
                    text: "No se ha seleccionado un item",
                    icon: "error",
                    confirmButtonText: "Aceptar"
                })
            }
        }
        else{
            setName("")
            setPassword("")
            setRole("")
            setTokens(0)
            setEnergy(0)
            setBoosters(0)
        }
    },[open,modifyRow])
    return (
        <Dialog
        open={open}
        onClose={() => setOpen(false)}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <TextField
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="filled" label="Nombre" sx={crudDialogTextField}/>
                <TextField
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="filled" label="Contraseña" sx={crudDialogTextField}/>
                <FormControl fullWidth sx={crudDialogSelectField}>
                    <InputLabel>Rol</InputLabel>
                    <Select 
                     value={role}
                     label="Rol"
                     onChange={(e) => setRole(e.target.value as string)}>
                        <MenuItem value={"superadmin"}>Superadmin</MenuItem>
                        <MenuItem value={"admin"}>Administrador</MenuItem>
                        <MenuItem value={"user"}>Usuario</MenuItem>
                     </Select>
                </FormControl>
                <TextField
                fullWidth
                value={tokens}
                onChange={(e) => setTokens(parseInt(e.target.value))}
                variant="filled" label="Tokens" sx={crudDialogTextField} type="number"/>
                <TextField
                fullWidth
                value={energy}
                onChange={(e) => setEnergy(parseInt(e.target.value))}
                variant="filled" label="Energía" sx={crudDialogTextField} type="number"/>
                <TextField
                fullWidth
                value={boosters}
                onChange={(e) => setBoosters(parseInt(e.target.value))}
                variant="filled" label="Boosters" sx={crudDialogTextField} type="number"/>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" sx={crudDialogButton} onClick={() => setOpen(false)}>Cancelar</Button>
                <Button variant="contained" sx={crudDialogButton}
                    onClick={() => {
                        const requestData = {
                            name: name,
                            password: password === "" ? null : password,
                            role: role,
                            tokens: tokens,
                            energy: energy,
                            boosters: boosters
                        };
                        if (modifyRow != null && request === "PUT") {
                            modifyUser({...requestData, id: modifyRow.id});
                        } else {
                            createUser(requestData);
                        }
                    }}>{title}</Button>
            </DialogActions>
        </Dialog>   
    )
}