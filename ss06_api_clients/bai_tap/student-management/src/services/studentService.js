import axios from "axios";

const api = import.meta.env.VITE_API_URL;

async function getAllStudents() {
    try {
        const response = await axios.get(`${api}/students`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getStudentById(id) {
    try {
        const response = await axios.get(`${api}/students/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return {};
    }
}

async function addStudent(student) {
    try {
        const response = await axios.post(`${api}/students`, student);
        console.log("response status", response.status);
        return response.status === 201;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function updateStudent(student) {
    try {
        const response = await axios.put(`${api}/students/${student.id}`, student);
        console.log("response status", response.status);
        return response.status === 200;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function deleteStudentById(id) {
    try {
        const response = await axios.delete(`${api}/students/${id}`);
        console.log("response status", response.status);
        return response.status === 200;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function getAllMajor() {
    try {
        const response = await axios.get(`${api}/majors`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function searchStudent(searchName, searchMajor) {
    try {
        const students = (await axios.get(`${api}/students`)).data;
        return students.filter((student) => {
            return ((searchName === '' || student.name.toLowerCase().includes(searchName.toLowerCase())) && (searchMajor === '' || student.major.id === Number(searchMajor)));
        })
    } catch (error) {
        console.error(error);
        return {};
    }
}

export {getAllStudents, getStudentById, addStudent, updateStudent, deleteStudentById, getAllMajor, searchStudent};