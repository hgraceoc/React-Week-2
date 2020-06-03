import axios from "./axios";


//return articles

axios.get("/articles").then(({ data }) => console.log(data.data));



//create new article

// axios.post("/articles", {
//     title: "Aloha",
//     content: "Stuff and tings",
//     tags: ["stuff", "tings"],
// }).then(({data})) => console.log(data.data.id));

// console.log("/articles/42");



//fetch an article & then console log it 
// axios.get("/articles/42").then(({ data }) => console.log(data.data));


//add a new tag to one of the articles
// axios.put("/articles/42", {
//     tags: ["hello", "yellow"],
// }).then(({data}) => console.log(data.data.tags));