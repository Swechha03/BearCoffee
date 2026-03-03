import Header from '../components/Header'

export function Cart({cartNumber, setCartNumber}){
    return(
        <>
        <Header  cartNumber={cartNumber}/>

        <button onClick={()=>{
            setCartNumber(0);
        }}>Empty Cart</button>
        </>
    )
}

