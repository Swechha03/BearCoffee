import menuItems from '../data/menuItems.js'
import './Menu.css'

function Menu({ showAddToCart}) {
    return (
        <div className="Menu">
            {menuItems.map((item) => {
                return (
                    <div className="menuItem" key={item.id}>
                        <div className="menuItemContent">
                            <p className="itemName"> {item.name}</p>
                            <p className="itemDescription">{item.description}</p>
                            <p className="itemPrice">{item.price}</p>
                        </div>


                        {showAddToCart && (<button> Add to Cart</button>)}
                    </div>
                )
            })
            }

        </div>
    )
}

export default Menu;