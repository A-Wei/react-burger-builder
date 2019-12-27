import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-566df.firebaseio.com/'
});

export default instance;
