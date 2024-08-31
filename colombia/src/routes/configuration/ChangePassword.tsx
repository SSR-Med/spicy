// Dependencies
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Css
import "/src/static/css/configuration/changePassword.css"
// Themes
import { textFieldThemePassword, buttonThemePassword } from '../../styles/configuration/PasswordStyle';
// Components
import { createHomeFooter,createHomeHeaderElement } from "../../components/home/HomeComponent"
// Helpers
import { changePassword } from '../../helpers/API/user/UserHelper';

export function ChangePassword(){

    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const navigate = useNavigate();

    return (
        <div className="home">
            {createHomeHeaderElement()}
            <main className="home-main">
            <div className="configuration-container">
                <TextField label="Contraseña actual" variant="outlined" sx= {textFieldThemePassword} type="password"
                value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}/>
                <TextField label="Contraseña nueva" variant="outlined" sx= {textFieldThemePassword} type="password"
                value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <TextField label="Confirmar contraseña nueva" variant="outlined" sx= {textFieldThemePassword} type="password"
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <div className="configuration-button-container">
                    <Button variant="contained" sx= {buttonThemePassword} onClick= {() => navigate("/home")}>Cancelar</Button>
                    <Button variant="contained" sx= {buttonThemePassword} onClick= {() => changePassword(currentPassword,newPassword,confirmPassword,
                        navigate
                    )}>Confirmar</Button>
                </div>
            </div>
                
            </main>
            {createHomeFooter()}
        </div>
    )
}