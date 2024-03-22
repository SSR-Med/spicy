// Dependencies
import { TextField, Button } from '@mui/material';
// Css
import "/src/static/css/configuration/changePassword.css"
// Themes
import { textFieldThemePassword, buttonThemePassword } from '../../styles/configuration/PasswordStyle';
// Components
import { createHomeFooter,createHomeHeaderElement } from "../../components/home/HomeComponent"
export function ChangePassword(){
    return (
        <div className="home">
            {createHomeHeaderElement()}
            <main className="home-main">
            <div className="configuration-container">
                <TextField label="Contraseña actual" variant="outlined" sx= {textFieldThemePassword} />
                <TextField label="Contraseña nueva" variant="outlined" sx= {textFieldThemePassword} />
                <TextField label="Confirmar contraseña nueva" variant="outlined" sx= {textFieldThemePassword} />
                <div className="configuration-button-container">
                    <Button variant="contained" sx= {buttonThemePassword} >Cancelar</Button>
                    <Button variant="contained" sx= {buttonThemePassword} >Confirmar</Button>
                </div>
            </div>
                
            </main>
            {createHomeFooter()}
        </div>
    )
}