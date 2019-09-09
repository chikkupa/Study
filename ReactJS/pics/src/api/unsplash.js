import axios from 'axios';

export default axios.create({
    baseURL: "",
    headers: {
        Authorization: 'Client-ID 5cf6d9b48b7234d9eebc4a72f3943a36f4250abefe5e7f8d1baca4f4b565d513'
    }
});