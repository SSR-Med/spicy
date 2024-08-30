//Dependencies
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
// Css
import "/src/static/css/login.css"
// Styles
import { textFieldThemeLogin, buttonThemeLogin, buttonThemeRegister } from "../../styles/LoginStyle"
// Helpers
import { loginUser } from '../../helpers/API/user/UserHelper';

function Login() {

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    return (
    <div className="access">
        <div className="login-data">
            <div className= "login-form">
                <TextField label="Usuario" variant="outlined"  sx={textFieldThemeLogin} 
                    value={name} onChange={(e) => setName(e.target.value)}/>
                <TextField label="Contraseña" variant="outlined"  sx={textFieldThemeLogin} type='password'
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button variant="contained" sx={buttonThemeLogin} onClick={() => loginUser(name,password,navigate)} >Iniciar Sesión</Button>
            </div>
            <Button variant="contained" sx= {buttonThemeRegister} component={Link} to="/register">Registrarse</Button>
        </div>
    </div>
    )
  }
  
  export default Login
  