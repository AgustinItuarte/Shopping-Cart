function DeleteItem(item, itemList) {

    for (let i = 0; i < itemList.length; i++) {

        if (itemList[i].id === item.id) {

            if (item.ammount === '0') {
                itemList.splice([i], 1)
            }

        }

    }

}

export default DeleteItem;