
let students = [
    {
        id: 1,
        name: "Nguyễn Thị Ngọc Ánh",
        gender: "female",
        score: 10
    },
    {
        id: 2,
        name: "Nguyễn Trung Hiếu",
        gender: "male",
        score: 9
    },
    {
        id: 3,
        name: "Bùi Lê Tuấn",
        gender: "male",
        score: 9
    },
    {
        id: 4,
        name: "Phan Công Bình",
        gender: "male",
        score: 9
    }
]

function getStudents() {
    return [...students];
}

function searchStudents(searchName, searchGender) {
    console.log("searchName: ", searchName);
    console.log("searchGender: ", searchGender);
    console.log(students);
    return students.filter((student) => {
        return student.name.includes(searchName) && (searchGender === '' || student.gender === searchGender);
    })
}

function addNewStudent(student) {
    students = [...students, student];
    console.log(students);
}
export {getStudents, searchStudents, addNewStudent};