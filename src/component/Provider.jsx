import {useState,createContext} from 'react'
import DATA from '../assets/file.js'
export const context=createContext()

function Default(){
    const cart={}
    for(let i=1;i<DATA.length+1;i++){
        cart[i]=0
    }
    return cart
}
export default function Provider(props){
    const [val,setVal]=useState(Default)
    function Add(id){
        setVal((prev)=>({...prev,[id]:prev[id]+1}))
    }
    function Remove(id){
        setVal((prev)=>({...prev,[id]:prev[id]-1}))
    }
    function Uppdat(id,newvalue){
        setVal((prev)=>({...prev,[id]:newvalue}))
    }
    function Totalmony(){
        let total=0
        for(let i=1;i<DATA.length+1;i++){
            total+=Number(val[i])*DATA[i-1].price
        }
        return total
    }
    const mony=Totalmony()
    const allvall={val,Add,Remove,Uppdat,mony}
    console.log(Totalmony())

    return(<context.Provider value={allvall} >{props.children}</context.Provider>)
}