import axios from "axios";

const Base_URL = "https://api.themoviedb.org/3"
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGI4ZjQ3MWU5MjIwYmJhNzY0Y2Y2ZWVkNDU4ODE3YiIsInN1YiI6IjY0OTMwNmIzNDNjZDU0MDEwNmJkNjczYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zgu8o-8AGoEW6Hc3bcV7o-hTM_CXNHdLwB6-B2ZdXr8"

const headers = {
    Authorization: "bearer " + API_TOKEN,
};

export const fetchApiData = async (url, params) => {
    try {
        const {data} = await axios.get(Base_URL + url, {
            headers,
            params
        })
        return data
    } catch (error) {
        console.log(error)
        return error;
    }
}
