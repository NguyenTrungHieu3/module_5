const students = [
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

export default getAllStudent;
