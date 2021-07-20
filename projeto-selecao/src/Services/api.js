import axios from 'axios';

export default axios.create ({
    baseURL: 'https://processo-seletivo-hut8.herokuapp.com',
    headers: {
        'Contet-Type': 'application/json'
    },
})