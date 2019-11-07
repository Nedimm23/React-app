import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-burger-app-7a823.firebaseio.com/'
});

export default instance;