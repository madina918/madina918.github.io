
// script.js

const homeworks = [
    { title: "Homework 1", link: "path/to/homework1" },
    { title: "Homework 2", link: "path/to/homework2" },
    { title: "Homework 3", link: "path/to/homework3" }
    // Add more homework objects as needed
];

const homeworkList = document.querySelector("#homeworks ul");
homeworkList.innerHTML = ""; // Clears any existing content

homeworks.forEach(homework => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = homework.title;
    a.href = homework.link;
    li.appendChild(a);
    homeworkList.appendChild(li);
});
console.log("Script is running");

