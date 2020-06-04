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
    },
});


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

axios.get("/articles").then(({ data }) => console.log(data.data.map(article => article.id)));
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


render() {
    let { articles, loaded } = this.state;
}
return !loaded ? <p>Loading...</p> : (
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

//HOOKS

let arr = [1, 2, 3]

let ob = { name: "Jim", age: 34 }

let { colour } = ob
//object destructuring 

let [first, second] = arr;
//array destructuring 

let [, , , , fifth] = arr;
//skip over values 


//CounterHooks.js
import React, { useState } from "react";

//efffectively to what you return from a class based component in the render method
const Counter = () => {
    const [counter, setCounter] = useState(0);
    //(0) setting the inital value 
    const [name, setName] = useState("");
    //useState is a hook that should be used if you only need to keep track of one or two states 

    const handleClick = () => setCounter(counter + 1);

    return (
        <p onClick={handleClick}>{counter}</p>
    );
};

export default Counter;


//Tuple
("mark", 36)




const Counter = () => {
    const [player1, setPlayer1] = useState(0)
    const [player2, setPlayer2] = useState(0)

    const handleP1Click = () => setPlayer1(counter + 1);
    const handleP2Click = () => setPlayer2(counter + 1);


    return (
        <>
            <div>onClick{handleP1Click}</div>
            <div>onClick{handleP2Click}</div>
        </>
    )
}


//Reducers
//not react specific

//counter.js
const reducer = () => {

};

let arr = [1, 2, 3, 4];

arr.reduce((total, current) => total + current, 0)

//each time the reducer runs, it builds on the previous state 

const reducer = (state, action) => {
    if (action.type === "INCREMENT_P1") {
        return {
            ...state,
            //copied across all the properties of state
            player1: state.player1 + 1,
            //player one is a property of the variable state 
            //update the value of whatever we target in state 
        }

        return state;

    };
    //gets given a version of state, and returns a version of state 
    //action is the second parameter, and tells the reducer what to do 

    let initialState = {
        player1: 0,
        player2: 0,
    };
    let incremenetP1 = { type: "INCREMENT_P1" };
    //action type, uppercase string 
    //type is a naming convention 

    let result = reducer(initialState, incrementP1);


    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT_P1": return {
                ...state,
                player1: state.player1 + 1,
            };

            case "INCREMENT_P2": return {
                ...state,
                player2: state.player2 + 1, s
            };
        }

        return state;

    };

    let initialState = {
        player1: 0,
        player2: 0,
    };
    let incrementP1 = { type: "INCREMENT_P1" };
    let incrementP2 = { type: "INCREMENT_P2" };

    let first = reducer(initialState, incrementP1);
    let second = reducer(first, incrementP1);
    let third = reducer(second, incrementP1);


    //to use the same function for differnt players
    const increment = (state, action) => {
        return {
            ...state,
            ["player" + action.player]: state["player" + action.player] + 1,
        }

        const reducer = (state, action) => {
            switch (action.type) {
                case "INCREMENT": return increment(state, action);
                case "RESET": return initialState;
                default: return state;
            }
        }

    let increment = { type: "INCREMENT", player: 1 };


let result = [incrementP1, incrementP1, incrementP2].reduce(reducer, initialState);


const increment = (state, { player }) => {
    let key = "player" + player;

    return {
        ...state
        [key]: state[key] + 1,
    };
};

//BACK IN REACT 
import React, { useReducer } from "react";

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div onClick={ () => dispatch({type: "INCREMENT", player: 1}) }
                >
                    <h1 { state.player1 }></h1>
            </div>

            <button onClick={ () =>dispatch({type: "RESET"})}>Reset</button>
        </>
    )
}