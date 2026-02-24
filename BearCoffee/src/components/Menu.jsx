  import menuItems from '../data/menuItems.js'
  import './Menu.css'
  
  function Menu() {
        return (
            <div className="Menu">
                {menuItems.map((item, index) => {
                    return (
                        <div className="menuItem" key={item.id}>
                            <p className="itemName"> {item.name}</p>
                            <p className="itemDescription">{item.description}</p>
                            <p className="itemPrice">{item.price}</p>
                        </div>
                    )
                })
                }

            </div>
        )
    }

    export default Menu;