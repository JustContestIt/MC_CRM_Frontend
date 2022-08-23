import axios from "axios";

export default class ProfileService {
    static async getProfile() {
        return await axios.get('https://jsonplaceholder.typicode.com/users');
    }
}