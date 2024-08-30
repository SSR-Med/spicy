//Dependencies
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// Css
import "/src/static/css/login.css"
// Styles
import { textFieldThemeLogin, buttonThemeLogin, buttonThemeRegister } from "../../styles/LoginStyle"
// Helpers
import { registerUser } from '../../helpers/API/user/UserHelper';

function Register() {

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
    <div className="access">
        <div className="login-data">
            <div className= "login-form">
                <TextField label="Usuario" variant="outlined"  sx={textFieldThemeLogin} 
                value={name} onChange={(e) => setName(e.target.value)}/>
                <TextField label="Contraseña" variant="outlined"  sx={textFieldThemeLogin} type='password'
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button variant="contained" sx={buttonThemeLogin} onClick={() => registerUser(name,password)}>Registrarse</Button>
            </div>
            <Button variant="contained" sx= {buttonThemeRegister} component={Link} to="/">Iniciar Sesión</Button>
        </div>
    </div>
    )
  }
  
  export default Register