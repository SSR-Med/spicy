// Constants
import { API_URL } from "../../constants/Constants";
// Dependencies
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export const getTeamCards = async () => {
    try {
        const response = await axios.get(`${API_URL}/teamcard`, {
            headers : {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response.data;
    } catch (error: any) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message
        });
        return []
    }
}

export async function createTeamCard(reqBody:Record<string,any>) {
    try {
        const response = await axios.post(`${API_URL}/teamcard`, reqBody, {
            headers : {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response.data;
    } catch (error:any) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message
        })
    }
};