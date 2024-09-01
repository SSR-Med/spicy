// Constants
import { API_URL } from "../../../constants/Constants";
// Dependencies
import axios from "axios"
import { NavigateFunction } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

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
        const response = await axios.post(`${API_URL}/login`,{
            name: name,
            password: password
        });
        Cookies.set("token",response.data.token)
        navigate("/home")
    } catch (error:any) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message
        })
    }
}

export async function checkAdmin(){
    try{
        const response = await axios.get(`${API_URL}/user/admin`,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        return response.data.admin
    }catch(error){
        return false
    }
}

export async function userRedirect(navigate:NavigateFunction){
    const admin = await checkAdmin();
    if(!admin){
        navigate("/")
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No tienes permisos para acceder a esta página.'
        })
    }
}

export async function deleteUser(id:number){
    try {
        const response = await axios.delete(`${API_URL}/admin/${id}`,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        Swal.fire({
            icon: 'success',
            title: 'Usuario eliminado',
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

export async function createUser(requestData: Record<string,any>){
    try {
        const response = await axios.post(`${API_URL}/admin`,requestData,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        Swal.fire({
            icon: 'success',
            title: 'Usuario creado',
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

export async function modifyUser(requestData: Record<string,any>){
    try {
        const id = requestData.id
        delete requestData.id
        const response = await axios.put(`${API_URL}/admin/${id}`,requestData,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        Swal.fire({
            icon: 'success',
            title: 'Usuario modificado',
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

export async function getName(){
    try {
        const response = await axios.get(`${API_URL}/user/name`,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        return response.data.name
    } catch (error:any) {
        return ""
    }
}

export async function getRole(){
    try {
        const response = await axios.get(`${API_URL}/user/role`,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        return response.data.role
    } catch (error:any) {
        return ""
    }
}

export async function getResources(){
    try {
        const userData = await axios.get(`${API_URL}/user/resources`,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        const responseData: Record<string,any> = {}
        for(const key in userData.data){
            responseData[key] = userData.data[key]
        }

        const items = await axios.get(`${API_URL}/user/item/quantity`,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })

        for(const key in items.data){
            responseData[key] = items.data[key]
        }
        
        return responseData

    } catch (error:any) {
        return {}
    }
}

export async function deleteSelf(navigate:NavigateFunction){
    await Swal.fire({
        title: '¿Está seguro de borrar su cuenta?',
        text: "Perderá todo su progreso y no podrá recuperarlo.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#D73636',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, borrar cuenta',
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if(result.isConfirmed){
            try{
                await axios.delete(`${API_URL}/user`,{
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`
                    }
                })
                navigate("/")
            }catch(error:any){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.response.data.message
            })
            }
        }else{
            Swal.fire({
                icon: 'info',
                title: 'Operación cancelada',
                text: 'No se ha borrado la cuenta'
            })
        }
    })
}

export async function changePassword(oldPassword:string, newPassword:String, confirmPassword:string,
    navigate:NavigateFunction
){
    if(confirmPassword !== newPassword){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas no coinciden'
        })
    }else{
        try{
            await axios.patch(`${API_URL}/user/`,
                {
                    oldPassword: oldPassword,
                    newPassword: newPassword
                },
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`
                    }
                })
            Swal.fire({
                icon: 'success',
                title: 'Contraseña cambiada',
                text: 'La contraseña ha sido cambiada con éxito'
            }).then(() => navigate("/"))
        }catch(error:any){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data.message
            })
        }
    }
}