import axios from "axios";
import dotenv from 'dotenv';
import {SearchResults} from "@/type";
dotenv.config();

const URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export default async function fetchTMDB(endpoint: string) {
    return await axios.get(`${URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`)
        .then((response) => {
            return response.data;
        }, (error) => {
            console.log(error);
            throw new Error(error);
        });
}

