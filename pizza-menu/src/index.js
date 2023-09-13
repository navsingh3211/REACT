import React from "react";
import ReactDom from "react-dom/client"
import "./index.css"

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>  
    );
}

function Header() {
    // const style = { color: "red", fontSize: "48px", textTransform:"uppercase" }
    const style = {}
    return <h1 style={style} className="header">Fast react pizza Co.</h1>
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu:</h2>
            <div>
                {pizzaData.map(pizza => <Pizza name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} photoName={pizza.photoName}/>)}
            </div>
        </main>
    )
}

function Footer() {
    // const hour = new Date().getHours();
    // console.log(hour);
    // const openHour=12;
    // const closeHour=24;
    // if (hour >= openHour && hour<closeHour) alert("we're currently open!");
    // else alert("sorry,we're currently closed!");
    return (
        <footer>
            {new Date().toLocaleTimeString()}.We're currently open!
        </footer>
    );
    // return React.createElement("footer", null, "We're currently open!")
}

function Pizza(props) {
    console.log(props);
    return (
        <div className="pizza">
            <img src={props.photoName} alt={props.name} />
            <h1>Name: {props.name}</h1>
            <h2>ingredients: {props.ingredients}</h2>
            <h3>price: {props.price + 3}</h3>
        </div>
    )
}

const root =ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);