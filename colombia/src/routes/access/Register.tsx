//Dependencies
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
// Css
import "/src/static/css/login.css"
// Styles
import { textFieldThemeLogin, buttonThemeLogin, buttonThemeRegister } from "../../styles/LoginStyle"

function Register() {

    return (
    <div className="access">
        <div className="login-data">
            <div className= "login-form">
                <TextField label="Usuario" variant="outlined"  sx={textFieldThemeLogin}/>
                <TextField label="Contraseña" variant="outlined"  sx={textFieldThemeLogin}/>
                <Button variant="contained" sx={buttonThemeLogin}>Registrarse</Button>
            </div>
            <Link to="/f" id="forgot-password">
                <p>¿Olvidaste tu contraseña?</p>
            </Link>
            <Button variant="contained" sx= {buttonThemeRegister} component={Link} to="/">Iniciar Sesión</Button>
        </div>
    </div>
    )
  }
  
  export default Register