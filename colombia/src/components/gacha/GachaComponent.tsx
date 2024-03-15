//Dependencies
import { Button, Modal, Typography, Box, Tooltip } from '@mui/material';
import { useState } from 'react';
// Helpers
import { handleRedirect } from "../../helpers/HandleRedirect";
// Themes
import { buttonThemeGacha, ModalThemeGacha, ModalTextThemeGacha, tooltipThemeGacha } from "../../styles/gacha/GachaStyle"

export function createGachaElement(name:string, path:string,id:number){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <div className="gacha-popular">
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={ModalThemeGacha}>
                <Typography  variant="h6" component="h2" sx={ModalTextThemeGacha}>
                    Probabilidades:
                </Typography>
                <Typography  sx={ModalTextThemeGacha}>
                    <ul>
                        <li>Platanito: 10%</li>
                        <li>OwO: 2%</li>
                    </ul>
                </Typography>
                </Box>
            </Modal>
            <h1>{name}</h1>
            <Tooltip title="Click para ver probabilidades" placement='top' componentsProps={tooltipThemeGacha} arrow>
            <img src={path} onClick={handleOpen}></img>
            </Tooltip>
            <div className="gacha-buttons">
                <Button type="submit" variant="contained" sx= {buttonThemeGacha} onClick={() => handleRedirect("/gacha/",1)}>1 Tiro</Button>
                <Button variant="contained" sx= {buttonThemeGacha} onClick={() => handleRedirect("/gacha/",10)}>10 Tiros</Button>
            </div>
        </div>
    )
}
