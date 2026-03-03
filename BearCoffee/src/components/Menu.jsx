import menuItems from '../data/menuItems.js'
import './Menu.css'

function Menu({ showAddToCart, setCartNumber, cartNumber }) {
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
                                        setCartNumber(cartNumber + 1)
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