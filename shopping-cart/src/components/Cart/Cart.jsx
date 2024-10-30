import { useState, useEffect } from "react";
/* import AddItem from "./AddItem"; */

function Cart() {

    const [buyedItems, setBuyedItems] = useState([])
    
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));

        if (items) {
            if (items.length !== buyedItems.length) {
                setBuyedItems(items);
            } if (buyedItems.length === 0) {
                setBuyedItems(items);
            }
        } 
                
    }, [buyedItems], console.log(buyedItems));

    const handleAddDeleteButtons = (item, itemList, event) => {

        for (let i = 0; i < itemList.length; i++) {
    
            if (item.ammount >= 0 && itemList[i].id === item.id) {
                
                if (event.target.className === 'additem-btn') {
                    item.ammount++;
                } else {
                    item.ammount--;
                }
                
                const array = [...itemList];
                localStorage.setItem('items', JSON.stringify(itemList));
                setBuyedItems(array)

            } 

            if (!(item.ammount) && itemList[i].id === item.id) {

                const array = [...itemList];
                itemList[i].ammount = 1;
                localStorage.setItem('items', JSON.stringify(itemList));
                setBuyedItems(array)

            };
        }   
    
    }

    return (
        buyedItems.map(item => {

            return(
                <div key={item.id} className="shop-item">
                    <p>{item.title}</p>
                    <p>Amount: {item.ammount}</p>
                    <p>Price: </p>
                    <button className="delete-btn" onClick={(event) => {handleAddDeleteButtons(item, buyedItems, event)}}>Delete</button>
                    <button className="additem-btn" onClick={(event) => {handleAddDeleteButtons(item, buyedItems, event)}}>+</button>
                    {/* <button className="additem-btn" onClick={(event) => {handleClick(event)}}>+</button> */}
                </div>
            )
    
        })
    )
}

export default Cart;