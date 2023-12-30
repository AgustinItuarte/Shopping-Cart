import Cart from "./Cart";

const AddItem = (item, itemList) => {
    
    /* for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].ammount && itemList[i].id === item.id) {
            itemList[i].ammount = itemList[i].ammount ++;
            console.log(itemList[i].ammount);
        } else {
            itemList[i].ammount = 0;
            console.log(itemList[i].ammount);
        }
    } */

    for (let i = 0; i < itemList.length; i++) {

        if(item.ammount >= 0 && itemList[i].id === item.id) {
            item.ammount++;
            localStorage.setItem('items', JSON.stringify(itemList));
            console.log('Existe');
            console.log(itemList)
        } if(!(item.ammount) && itemList[i].id === item.id) {
            itemList[i].ammount = 1;
            localStorage.setItem('items', JSON.stringify(itemList));
            console.log('No existe')
            console.log(itemList);
            
        };
        <Cart></Cart>
    }
        
    

}

export default AddItem;