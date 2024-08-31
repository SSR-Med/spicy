// Constants
import { API_URL } from "../../../constants/Constants";
// Dependencies
import axios from "axios"
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export async function createCard(reqBody:Record<string,any>){
    try {
        const response = await axios.post(`${API_URL}/card/`,reqBody,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        Swal.fire({
            icon: 'success',
            title: 'Tarjeta creada',
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

export async function getCards(){
    try {
        const response = await axios.get(`${API_URL}/card/`,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response.data
    } catch (error:any) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message
        })
        return []
    }
}

export async function getCard(id:number){
    try {
        const response = await axios.get(`${API_URL}/card/${id}`,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response.data
    } catch (error:any) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message
        })
        return {}
    }
}

export async function deleteCard(id:number){
    try {
        const response = await axios.delete(`${API_URL}/card/${id}`,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        Swal.fire({
            icon: 'success',
            title: 'Tarjeta eliminada',
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

export async function modifyCard(reqBody:Record<string,any>){
    try {
        const id= reqBody.id
        delete reqBody.id
        const response = await axios.put(`${API_URL}/card/${id}`,reqBody,{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        Swal.fire({
            icon: 'success',
            title: 'Tarjeta modificada',
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