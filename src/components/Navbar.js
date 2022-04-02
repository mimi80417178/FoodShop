import { useContext } from 'react'
import '../css/Navbar.css'
import { DataContext } from "../Context"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const value = useContext(DataContext)
    const [cart] = value.cart



    return (
        <>
            {/*< !--navbar -->*/}
            <nav className="navbar">
                <div className="navbar-center">
                    <span className="nav-icon">
                        <Link to='/'>
                            <i class="fa fa-cutlery" aria-hidden="true"></i>
                        </Link>
                    </span>
                    <span>Shopping  Salad  Cart</span>

                    <Link to='/cart'>
                        <div className="cart-btn">
                            <span className="nav-icon">
                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                            </span>
                            <div className="cart-items"> {cart.length}</div>
                        </div>
                    </Link>

                </div>
            </nav>{/*< !--END of navbar-->*/}
        </>
    )
}

export default Navbar