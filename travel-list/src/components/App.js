
import { useState } from "react";
import Logo from "./Logo"
import Form from "./Form"
import PackingList from './PackingList';
import Stats  from './Stats';


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

    function handleDeleteItem(id) {
        console.log(id);
        setItems(items => items.filter(item => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
    }

    function handleListClear(){
        const conformed = window.confirm("Are you sure you want to delete all items?")
        if (conformed) setItems([]);
    }

    return (
        <div className="App">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList 
                items={items} 
                onDeleteItem={handleDeleteItem} 
                onToggle={handleToggleItem} 
                onListClear={handleListClear} 
            />
            <Stats items={items} />
        </div>
    );
}


