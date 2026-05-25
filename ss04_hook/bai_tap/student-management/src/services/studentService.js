let students = [
    {
        id: 1,
        name: "Nguyen Van A",
        age: 20,
        major: "Information Technology"
    },
    {
        id: 2,
        name: "Tran Thi B",
        age: 21,
        major: "Software Engineering"
    },
    {
        id: 3,
        name: "Le Van C",
        age: 22,
        major: "Computer Science"
    }
];

function getAllStudent() {
    return [...students];
}

function addStudent(student) {
    students = [...students, student];
}

function deleteStudentById(id) {
    students = students.filter(student => student.id !== Number(id));
    console.log(students);
}

export {getAllStudent, addStudent, deleteStudentById};
