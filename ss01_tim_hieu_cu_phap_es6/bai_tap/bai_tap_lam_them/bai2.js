// Sử dụng  Destructuring, rest, spread

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};

// Hãy tạo ra 1 đối tượng student gồm các thuộc tính và giá trị lấy từ đối tượng person và hiển thị ra thông tin của student vừa tạo
const {
    firstName,
    gender,
    education: {degree},
    languages: [english, ...otherLanguages]
} = person;

const academicInfo = {degree, english};

const student = {
    firstName,
    gender,
    ...academicInfo
}
console.log(student);
console.log(otherLanguages);