//Dependencies
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
// Css
import "/src/static/css/login.css"
// Styles
import { textFieldThemeLogin, buttonThemeLogin, buttonThemeRegister } from "../../styles/LoginStyle"

function Login() {

    return (
    <div className="access">
        <div className="login-data">
            <div className= "login-form">
                <TextField label="Usuario" variant="outlined"  sx={textFieldThemeLogin}/>
                <TextField label="Contraseña" variant="outlined"  sx={textFieldThemeLogin}/>
                <Button variant="contained" sx={buttonThemeLogin} component={Link} to="/home" >Iniciar Sesión</Button>
            </div>
            <Link to="/f" id="forgot-password">
                <p>¿Olvidaste tu contraseña?</p>
            </Link>
            <Button variant="contained" sx= {buttonThemeRegister} component={Link} to="/register">Registrarse</Button>
        </div>
    </div>
    )
  }
  
  export default Login
  