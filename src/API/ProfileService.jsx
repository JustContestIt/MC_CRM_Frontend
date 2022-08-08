import axios from "axios";

export default class ProfileService {
    static async getProfile() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response;
    }
}