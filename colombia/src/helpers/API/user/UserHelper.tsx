// Constants
import { API_URL } from "../../../constants/Constants";
// Dependencies
import axios from "axios"
import { NavigateFunction } from "react-router-dom";
import Swal from "sweetalert2";

// Register
export async function registerUser(name:string, password:string){
    try {
        const response = await axios.post(`${API_URL}/user/register`,{
            name: name,
            password: password
        });
        Swal.fire({
            icon: 'success',
            title: 'Usuario registrado',
            text: response.data.message
        })
    } catch (error:any) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message
        })
    }
}

export async function loginUser(name:string, password:string,
    navigate: NavigateFunction
){
    try {
        await axios.post(`${API_URL}/login`,{
            name: name,
            password: password
        });
        navigate("/home")
    } catch (error:any) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message
        })
    }
}