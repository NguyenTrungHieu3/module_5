import {students, majors} from "../data/student.js";


function getAllStudents() {
    return students;
}

function getAllMajor() {
    return majors;
}

function searchStudent(searchName, searchMajor) {
    return students.filter((student) => {
        return ((searchName === '' || student.name.toLowerCase().includes(searchName.toLowerCase())) && (searchMajor === '' || student.major.id === Number(searchMajor)));
    })
}

function deleteStudentById(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === Number(id)) {
            students.splice(i, 1);
            return true;
        }
    }
    return false;
}

function addStudent(student) {
    try {
        const studentId = Number(student.id);

        const existingIndex = students.findIndex((student) => {
            return student.id === studentId;
        });

        if (existingIndex !== -1) {
            students[existingIndex] = {
                ...students[existingIndex],
                ...student
            };
        } else {
            students.push(student);
        }
        return true;
    } catch (err) {
        return false;
    }
}

function getStudentById(id) {
    return students.find((student) => {
        return student.id === Number(id);
    })
}

export {getAllStudents, getAllMajor, searchStudent, deleteStudentById, addStudent, getStudentById};