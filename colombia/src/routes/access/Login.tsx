//Dependencies
import { Link } from 'react-router-dom';
// Css
import "/src/static/css/login.css"

function Login() {

    return (
    <div className="access">
        <div className="login-data">
            <div className= "login-form">

            </div>
            <Link to="/f" id="forgot-password">
                <p>¿Olvidaste tu contraseña?</p>
            </Link>
            
        </div>
    </div>
    )
  }
  
  export default Login
  