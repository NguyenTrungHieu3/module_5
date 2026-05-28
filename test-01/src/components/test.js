// async function getPost() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data = await response.json();
//         console.log("title: " + data.title);
//         console.log("body: " + data.body);
//     } catch (error) {
//         console.log("error: " + error);
//     }
// }

// getUser();

const userProfile = {
    id: 5,
    username: "minh_dev",
    skills: ["JavaScript", "HTML"],
    level: "junior"
};

const newUserProfile = {
    ...userProfile,
    skills: [...userProfile.skills, "React"],
    level: "mid"
};

console.log(newUserProfile);