import Header from '../components/Header'
import './Cart.css'

export function Cart({ cartNumber, setCartNumber, cartItems, setCartItems }) {
    return (
        <>
            <Header cartNumber={cartNumber} />
            {cartItems.map((cartItem) => {
                return (
                    <>
                        <div className="cart-container" key={cartItem.id}>
                            <div className="cart-item-content">
                                <p className="item-name"> {cartItem.name}</p>
                                <p className="item-description">{cartItem.description}</p>
                                <p className="item-price">{cartItem.price}</p>
                                <p className="item-quantity">qty:{cartItem.qty}</p>
                            </div>
                        </div>
                    </>
                )
            })}
            <button className="empty-cart-button" onClick={() => {
                setCartNumber(0);
                setCartItems([]);
            }}>Empty Cart</button>
        </>
    )
}

