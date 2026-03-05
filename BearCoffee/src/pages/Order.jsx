import Header from '../components/Header'
import Menu from '../components/Menu'

export function Order({ cartNumber, setCartNumber, cartItems, setCartItems }) {
    return (
        <>
            <Header cartNumber={cartNumber}></Header>
            <Menu
                showAddToCart={true} setCartNumber={setCartNumber}
                cartNumber={cartNumber}
                cartItems={cartItems}
                setCartItems={setCartItems} />
        </>
    )
}