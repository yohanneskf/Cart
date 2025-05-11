import { Link } from "react-router-dom"
import {ShoppingCart} from 'phosphor-react'
export default function Navbar(){
    return(
        <div className="flex justify-end h-14 p-2 bg-black text-white fixed top-0 left-0 right-0">
            <Link to='/' className="text-2xl outline-0 mr-4">Shop</Link>
            <Link to='/cart' className="mr-4 align-baseline pt-0.5 decoration-0">
                <ShoppingCart size={32}/> 
            </Link> 
        </div>
    )
}