import axios from 'axios';
const instance =  () => axios.create({
    baseURL: 'https://avazum.com.br/'
});
export default instance;