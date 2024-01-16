import { useState, useEffect } from "react";
/* import AddItem from "./AddItem"; */

function Cart() {

    const [buyedItems, setBuyedItems] = useState([])
    /* const [flag, setFlag] = useState(false) */
    
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        
        if (items.length !== buyedItems.length) {
            localStorage.setItem('items', JSON.stringify(items));
            /* setBuyedItems(items); */
        } 
        if (buyedItems.length === 0) {
            setBuyedItems(items);
        }
        
    }, [buyedItems], () => console.log('useeffect'));

    const AddItem = (item, itemList) => {

        for (let i = 0; i < itemList.length; i++) {
    
            if(item.ammount >= 0 && itemList[i].id === item.id) {
                item.ammount++;
                console.log('Existe');
                console.log(buyedItems[i].ammount)
                setBuyedItems(itemList)
            } if(!(item.ammount) && itemList[i].id === item.id) {
                itemList[i].ammount = 1;
                console.log('No existe')
                console.log(buyedItems[i].ammount);
                setBuyedItems(itemList)
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
                    <button>Delete</button>
                    <button onClick={() => {AddItem(item, buyedItems)}}>+</button>
                </div>
            )
    
        })
    )
}

export default Cart;