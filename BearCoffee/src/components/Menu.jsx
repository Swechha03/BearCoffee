import menuItems from '../data/menuItems.js'
import './Menu.css'

function Menu({ showAddToCart, setCartNumber, cartNumber, cartItems, setCartItems }) {
    return (
        <div className="Menu">
            <p className="menu-title">
                Our Menu
                <span className="bear" aria-hidden="true">🐻</span>
            </p>
            {menuItems.map((item) => {
                return (
                    <div className="menuItem" key={item.id}>
                        <div className="menuItemContent">
                            <p className="itemName"> {item.name}</p>
                            <p className="itemDescription">{item.description}</p>
                            <p className="itemPrice">{item.price}</p>
                        </div>


                        {showAddToCart && (
                            <button className="add-to-cart-button"
                                onClick={
                                    () => {
                                        setCartItems((cartItems) => {
                                            //find loops through each element in cartItems,returns the item in exisiting Item if it can find one. 
                                            const existingItem = cartItems.find((cartItem) => {
                                                return cartItem.id === item.id
                                            })

                                            if (existingItem) {
                                                return (
                                                    cartItems.map((cartItem) => {
                                                        return cartItem.id === item.id
                                                            // double ? is if i t exists use it or else use 1. 
                                                            ? { ...cartItem, qty: (cartItem.qty ?? 1) + 1 }
                                                            : cartItem;
                                                    })

                                                )
                                            }

                                            return (
                                                [...cartItems, { ...item, qty: 1 }]
                                            )
                                        }
                                        )


                                        setCartNumber((cartNumber) => {
                                            return cartNumber + 1
                                        })
                                    }
                                }
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                )
            })
            }

        </div>
    )
}

export default Menu;