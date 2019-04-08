import axios from 'axios';
const URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default {
    search: (query) => {
        let urlquery = query.replace(/ /g, "+");
        return axios.get(URL + urlquery);
    }
};