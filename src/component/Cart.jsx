import { useContext } from "react"
import DATA from '../assets/file.js'
import { context } from "./Provider"
import Cartitem from "./Cartitem.jsx"
import { useNavigate } from "react-router-dom"

export default function Cart(){
    const {val,Add,Remove,mony}=useContext(context)
    const navigate=useNavigate()
    return(
        <div>
            <div>
                <h1 className="text-center m-14 font-bold text-4xl">Yor Cart Item</h1>
            </div>
            <div className="items-center justify-items-center">
                {
                    DATA.map((product)=>{
                        if(val[product.id]!==0){
                            return(<Cartitem data={product} />)
                        }
                    })
                }
            </div>
            {mony===0?
            <h1 className="text-center m-14 font-bold text-4xl">Your Cart Is Empity</h1>:
            <h1 className="text-center">Total: ${mony}</h1>}
            <div className="items-center justify-items-center">
                <div className="items-center justify-items-center">
                    <button className="w-60 border m-3 ml-16 p-1.5 pl-3 cursor-pointer pr-3 rounded-2xl hover:bg-amber-950 hover:text-white bg-black text-white" onClick={()=>navigate('/')}>Continue Shopping</button>
                    <button className="w-60 border m-3 ml-16 p-1.5 pl-3 cursor-pointer pr-3 rounded-2xl hover:bg-amber-950 hover:text-white border-amber-950">ChackOut</button>
                </div>
            </div>

        </div>
    )
}