// Constants
import { API_URL } from "../../constants/Constants";
// Dependencies
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export const getEnemiesByMission = async (missionId: number) => {
    try {
        const response = await axios.get(`${API_URL}/enemy/${missionId}`, {
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
        return []
    }
}