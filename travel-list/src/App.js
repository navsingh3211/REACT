import './index.css'
import { useState } from "react";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {

    //below technique is called lifting-up technique
    //(if you are not able to take data in siblings then in that case we will lift the data to nearest parent component)
    
    const [items, setItems] = useState([]);
    function handleAddItems(item) {
        setItems((items) => [...items, item]);//here we have paased a callback function inside setItems
    }
    return (
        <div className="App">
            <Logo />
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items}/>
            <Stats />
        </div>
    );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
   
    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = { description, quantity, packed: false ,id:Date.now()};
        // console.log(newItem);
        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {
                Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))
                }
            </select>
            <input type="text" placeholder="item..." value={description} onChange={(e) => {
                    // console.log(e.target.value);
                    setDescription(e.target.value)
                }} />
            <button>Add Item</button>
        </form>
    );
}

function PackingList({items}) {
  return (
    <div className="list">
      <ul>
              {items.map((item) => <Item item={item} key={item.id} />)}
      </ul>
    </div>
  );
}

function Item({ item }) {
  // console.log(item);
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.description} : {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> 💼 You have X items on your list, and you already packed X(X%)</em>
    </footer>
  );
}
