async function GetData() {
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json();
    console.log(data);
} 

export default GetData();