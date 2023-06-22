import React, { useState } from "react";
import Child from "./Child";
const Parent = ()=>{
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 30 }
    ]);
    const [id, setId] = useState(1);

    // form input values
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState("");

    const addItem = () => {
        let newItem;
        if(itemName && itemPrice){
            newItem = {id: id, name: itemName, price: itemPrice};
            setId(id + 1);
        } else {
            alert("Name and Price should not be empty.");
            return;
        }
        setCartItems((previousCartItems) => [...previousCartItems, newItem]);
        setItemName('');
        setItemPrice('');
    }

    const removeItem = (itemId) => {
        setCartItems((previousCartItems) => previousCartItems.filter((item) => item.id !== itemId))
    }

    return (
        <div className='parent'>
            <h1>Parent Component</h1>        
            <form onSubmit={(e) => {e.preventDefault()}}>
                <label htmlFor="itemName">Item Name:</label>
                <input type="text" id='itemName' value={itemName} onChange={(e) => setItemName(e.target.value)} />
                <label htmlFor="itemPrice">Item Price:</label>
                <input type="number" id='itemPrice' value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
                <button type='submit' onClick={() => {
                    addItem()
                    setId(id + 1)
                }}>Add Item</button>
            </form>
            <Child cartItems={cartItems} onRemove={removeItem} />
        </div>
    )
}
export default Parent