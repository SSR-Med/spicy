// Constants
import { API_URL } from "../../constants/Constants";
// Dependencies
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

// Fetch cards by user
export const getCardsByUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/cardxuser`,{
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
};

export const getUserCard = async (userCardId : number ) => {
    try {
        const response = await axios.get(`${API_URL}/cardxuser/${userCardId}`,{
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

// Fetch items by user (NEW FUNCTION)
export const getItemsByUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/user/item/`, {
            headers: {
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
        return [];
    }
};

// Delete team card
export const deleteTeamCard = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}/teamCard/${id}`, {
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
};

// Fetch a single team card
export const getTeamCard = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/teamCard/${id}`, {
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
};
