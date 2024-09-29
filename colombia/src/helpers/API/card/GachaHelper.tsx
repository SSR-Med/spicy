import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { API_URL } from "../../../constants/Constants";
import { NavigateFunction } from "react-router-dom";


// Register
export async function getGachaCards(amount:number, featuredCharacterId:number, navigate: NavigateFunction){
    try {
        const response = await axios.post(`${API_URL}/gacha/draw`,{
            amount: amount,
            featuredCharacterId: featuredCharacterId
        },
        {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        sessionStorage.setItem("draw", JSON.stringify(response.data.results))
        navigate("/gacha/" + amount)
    } catch (error:any) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message
        })
    }
}