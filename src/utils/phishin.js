import axios from 'axios';

const baseUrl = 'http://phish.in/api/v1';

export function getSongs() {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/songs`)
            .then(res => resolve(res.data.data))
            .catch(res => reject(res));
    });
}
