const AddItem = (item, itemList) => {

    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].id === item.id) {
            itemList[i].ammount = itemList[i].ammount + 1;
            console.log(itemList);
        }                
    }

    /* itemList.forEach(element => {
        let num = 0;
        element.ammount = num++;
    });
    console.log(itemList) */
    /* localStorage.setItem('items', JSON.stringify(itemList)) */
}

export default AddItem;