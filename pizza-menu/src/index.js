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
    const pizzas=pizzaData;
    const numPizza = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Menu:</h2>
            {/* {numPizza>0 && (
                <ul className="pizzas">
                    {
                        pizzaData
                            .map((pizza) => (
                                <Pizza pizzaObj={pizza} key={pizza.name} />
                            ))
                    }
                </ul>
            )} */}

            {numPizza > 0 ? (
                <ul className="pizzas">
                    {
                        pizzaData
                            .map((pizza) => (
                                <Pizza pizzaObj={pizza} key={pizza.name} />
                            ))
                    }
                </ul>
            ) : (
            <p>We're still working on our menu.Please come back later :)</p>
            )
        }
            
        </main>
    )
}

function Footer() {
    const hour = new Date().getHours();
    // console.log(hour);
    const openHour=12;
    const closeHour=24;
    const isOpen = hour >= openHour && hour < closeHour;

    // console.log(isOpen,'restreo is open')
    // if (hour >= openHour && hour<closeHour) alert("we're currently open!");
    // else alert("sorry,we're currently closed!");

    return (
        <footer className="footer">
            {/* {new Date().toLocaleTimeString()}.We're currently open! */}
            {isOpen && (
                <div className="order">
                    <p>
                        We're open until {closeHour}:00 . Come visit us or order online.
                    </p>
                    <button className="btn">Order</button>
                </div>
            )}
        </footer>
    );
    // return React.createElement("footer", null, "We're currently open!")
}

function Pizza(props) {
    console.log(props);
    return (
        <div className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <h1>Name: {props.pizzaObj.name}</h1>
            <h2>ingredients: {props.pizzaObj.ingredients}</h2>
            <span>price: {props.pizzaObj.price + 3}</span>
        </div>
    )
}

const root =ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);