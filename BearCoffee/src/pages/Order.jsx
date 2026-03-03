import Header from '../components/Header'
import Menu from '../components/Menu'

export function Order(){
    return(
        <>
        <Header></Header>
        <Menu showAddToCart={true}/>
        </>
    )
}