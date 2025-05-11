import { useContext } from "react";
import { context } from "./Provider";
export default function Product(props){
    const {val,Add,Remove}=useContext(context)
    const {id,productname,price,im}=props.data;
    return(
        <div className="w-4xs font-mono mb-5 shadow-2xl rounded-2xl text-center  m-7 pt-7 bg-white">
            <div className=" items-center"><img src={im} alt="" className="h-64 w-75 " /></div>
            <p>{productname}</p>
            <p>$${price}</p>
            <button onClick={()=>{Add(id)}} className='border mb-3 p-1.5 pl-3 cursor-pointer pr-3 rounded-2xl hover:bg-amber-950 hover:text-white border-amber-950'>Add Chart {val[id]>0&& <>({val[id]})</>}</button>
        </div>
    )
}