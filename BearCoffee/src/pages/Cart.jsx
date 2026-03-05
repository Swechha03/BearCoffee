import Header from '../components/Header'

export function Cart({ cartNumber, setCartNumber, cartItems, setCartItems }) {
    return (
        <>
            <Header cartNumber={cartNumber} />
            {cartItems.map((cartItem) => {
                return (
                    <>
                        <div className="menuItem" key={cartItem.id}>
                            <div className="menuItemContent">
                                <p className="itemName"> {cartItem.name}</p>
                                <p className="itemDescription">{cartItem.description}</p>
                                <p className="itemPrice">{cartItem.price}</p>
                                <p>qty:{cartItem.qty}</p>
                            </div>
                        </div>
                    </>
                )
            })}
            <button onClick={() => {
                setCartNumber(0);
                setCartItems([]);
            }}>Empty Cart</button>
        </>
    )
}

