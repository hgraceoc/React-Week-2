//AJAX - making HTTP requests from JS

//Axios: fetch, XMLHttpRequest, Node

import axios from "axios";
// make a GET request
axios.get("/articles");
// make a POST request, with the given data
axios.post("/articles", {
    title: "Hello",
     
article: "Blah blah blah",
    tags: ["fish", "cat", "spoon"],
});
// make a PUT request, with the given data
axios.put("/articles/5", {
    title: "Hello Again",
    article: "Blah blah blah!",
    tags: ["fish", "cat"],
});
// make a DELETE request
axios.delete("/articles/4");

//ajax
//axios.js - configure axios set up in this file 

//Accept: "application/json"
//Authorisation: "Bearer<token>",

// import the library version of axios
import axios from "axios";
//importing the module/ library
// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://restful.training/api/",
    headers: {
        // make sure we get JSON back
        Accept: "application/json"
        // use your own key
    Authorization: "Bearer 15beab53cc8880738da99953d2f6ceffbe83418a"
    }, });


//ajax.js - call axios file into ajax
import axios from "./src/Ajax/axios" //path name, so forward slash 

axios.get("/articles")
//effectively calling "https://restful.training/api/articles",

axios.post("/articles", {
    title: "Hello",
    content: "Stuff and tings",
    tags: ["stuff", "tings"],
});

axios.delete("/articles/3")

//to run 
import "ajax/ajax";


//Asychnonistic requests

let promise = axios.get("/articles");

console.log("Hello")

promise.then(() => console.log("Response"));

console.log("Goodbye")

//Prints - Hello, Goodbye, Response
//sets up promise - but does not run until it gets a response back 


axios.get("/articles").then(({ data }) => console.log(data.data));
//in laravel data.data - returns the data we want, than console.log(data) which would return the data as well as the resources 

axios.get("/articles").then(({ data }) => console.log(data.data.map(article => article.id )));
//get back an array of article id's

//promises may not run in the order that they run in, as they take different amount of time
// test this at httpbin.org
axios.get("https://httbin.org/delay/5".then((5);

//errors
axios.get("/articles/7338").then(() => console.log('bla'), (error) => console.log(error.response));
//response is an axios key word
//error is not 


//Lifecycle Methods

//CONSTRUCTOR
//For class based components 
//constructor in React - used for setting up initial state and binding methods 

//RENDER
//render method is another lifecyle method - to return JSX (using state) - and anything to work that out 

//componentDidMount
//only fires when the component first gets added to the screen, only gets called once - not on re-rendering, unless it is changed 
//outside of constructor - 

componentDidMount() {
    setTimeout(() => {
        this.setState({ count: 0 });
    }, 5000);
}
//refresh every 5 seconds 
componentDidMount() {
    setInterval(() => {
        this.setState({ count: this.state.count + 1 });
    }, 1000);
}
//incrementally add to count every second

//componentWillUnmount()
//when a component stops being on the screen 
//used to reverse something set in the componentDidMount 
componentDidMount() {
   this.intervalID = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
    }, 1000);
}

componentWillUnmount() {
    clearInterval(this.intervalID);
}

//remove an event listener 
componentWillUnmount() {
    window.removeEventListener('mouseup', this.stopDrag);
}

//componentDidUpdate()
//fires when the props change
//fires when the state changess
componentDidUpdate() {
    
}

//an API request for when the component first loads 
componentDidMount() {
    axios.get('/articles').then(({ data }) => {
        this.setState({
            loaded; true
            articles: data.data,
        });
    });
}


render () {
    let { articles, loaded } = this.state;
  }
        return !loaded? <p>Loading...</p> : (
            <>
            <h2>Articles</h2>
            <ul className="list-group">
                {articles.map(article => (
                    <li key={article.id} className="list-group=item">
                    </li>

                ))}
            </ul>
            </>
        )
    }


handleSubmit() {
    axios.post()
}