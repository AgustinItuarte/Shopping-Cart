import GetData from "./GetData";
import buyItem from "./BuyItem";

const Shop = () => {

    const { items, error, loading } = GetData ();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading the page</div>;

    return (
        items.map(item => {

            return(
                <div key={item.id} className="shop-item">
                    <p>Name</p>
                    <button id={} onClick={buyItem(items, items[])}>Add to cart</button>
                </div>
            )
    
        })
    )
}

export default Shop;