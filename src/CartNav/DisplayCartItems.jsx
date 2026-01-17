import FetchProducts from "../ShopNav/FetchProducts";
function DisplayCartItems({items}) {
    return (
        <div>
            <h2>My Cart Items</h2>
            <p>{items}</p>
        </div>
    )
}

export default DisplayCartItems;