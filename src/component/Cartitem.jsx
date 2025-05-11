import { useContext } from "react"
import { context } from "./Provider";

export default function Cartitem(props){
    const {val,Add,Remove,Uppdat}=useContext(context)
    const {id,productname,price,im}=props.data;
    return(
        <div className="flex items-center shadow-2xl border-t-2 border-white rounded-2xl w-72 sm:w-xl m-14">
            <div className="m-4">
                <img src={im} className="w-40 h-40 bg-white" />
            </div>
            <div className="pl-6">
                <p className="font-bold text-2xl m-2">{productname}</p>
                <p className="font-bold m-2">${price}</p>
                <div className="m2">
                    <button className="bg-gray-300 w-5  border-black border rounded-sm font-bold" onClick={()=>{Remove(id)} }>-</button>
                    <input className="w-10 outline-1 text-center" value={val[id]} onChange={(e)=>{Uppdat(id,Number(e.target.value))}} />
                    <button className="bg-gray-300 w-5  border-black border rounded-sm font-bold" onClick={()=>{Add(id)}}>+</button>
                </div>
            </div>
        </div>
    )
}