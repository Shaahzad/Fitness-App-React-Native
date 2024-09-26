import axios from "axios";
import { RapidApiKey } from "../src/constant";

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apicall = async (url,params)=>{
    try {
        const option = {
            method: 'GET',
            url,
            params,
            headers: {
                'x-rapidapi-key': RapidApiKey,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
              }
        }
        const response = await axios.request(option);
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchbodyexercisesparts = async(bodypart)=>{
let Data = await apicall(baseUrl+`/exercises/bodyPart/${bodypart}`);
return Data
}