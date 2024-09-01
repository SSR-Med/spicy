// Dependencies
import { Dialog, DialogContent, DialogTitle,DialogActions,
    TextField, Button} from "@mui/material";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
// Styles
import { crudDialogButton, crudDialogTextField } from "../../styles/CrudStyle";
// Constants
// Helpers
import { createCard, modifyCard } from "../../helpers/API/card/CardHelper";


export default function crudCard(open:boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    modifyRow:Record<string,any>|null, request: string
){
    // Variables
    // Title & Button
    const title = request == "POST" ? "Crear carta": "Modificar carta"
    // States
    const [name, setName] = useState<string>("")
    const [rarity, setRarity] = useState<number>(0)
    const [health, setHealth] = useState<number>(0)
    const [attack, setAttack] = useState<number>(0)
    const [defense, setDefense] = useState<number>(0)
    const [evasion, setEvasion] = useState<number>(0)
    const [xpLimit, setXpLimit] = useState<number>(0)
    // Change value of states if request is PUT
    useEffect(() => {
        if (request === "PUT"){
            if(modifyRow != null){
                // Set values
                setName(modifyRow.name)
                setRarity(modifyRow.rarity)
                setHealth(modifyRow.health)
                setAttack(modifyRow.attack)
                setDefense(modifyRow.defense)
                setEvasion(modifyRow.evasion)
                setXpLimit(modifyRow.xpLimit)
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
            setRarity(0)
            setHealth(0)
            setAttack(0)
            setDefense(0)
            setEvasion(0)
            setXpLimit(0)
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
                type = "number"
                value={rarity}
                onChange={(e) => setRarity(parseFloat(e.target.value))}
                variant="filled" label="Rareza" sx={crudDialogTextField}/>
                <TextField
                fullWidth
                value={health}
                type= "number"
                onChange={(e) => setHealth(parseInt(e.target.value))}
                variant="filled" label="Salud" sx={crudDialogTextField}/>
                <TextField
                fullWidth
                value={attack}
                type= "number"
                onChange={(e) => setAttack(parseInt(e.target.value))}
                variant="filled" label="Ataque" sx={crudDialogTextField}/>
                <TextField
                fullWidth
                value={defense}
                type= "number"
                onChange={(e) => setDefense(parseInt(e.target.value))}
                variant="filled" label="Defensa" sx={crudDialogTextField}/>
                <TextField
                fullWidth
                value={evasion}
                type= "number"
                onChange={(e) => setEvasion(parseInt(e.target.value))}
                variant="filled" label="Evasión" sx={crudDialogTextField}/>
                <TextField
                fullWidth
                value={xpLimit}
                type= "number"
                onChange={(e) => setXpLimit(parseInt(e.target.value))}
                variant="filled" label="Límite de XP" sx={crudDialogTextField}/>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" sx={crudDialogButton} onClick={() => setOpen(false)}>Cancelar</Button>
                <Button variant="contained" sx={crudDialogButton}
                    onClick={() => {
                        const requestData = {
                            name: name,
                            rarity: rarity,
                            health: health,
                            attack: attack,
                            defense: defense,
                            evasion: evasion,
                            xp_limit: xpLimit
                        };
                        if (modifyRow != null && request === "PUT") {
                            modifyCard({...requestData, id: modifyRow.id});
                        } else {
                            createCard(requestData);
                        }
                    }}>{title}</Button>
            </DialogActions>
        </Dialog>   
    )
}