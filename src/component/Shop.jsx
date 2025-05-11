import DATA from '../assets/file.js'
import Product from './Product.jsx'
export default function Shop(){
    return(
        <div>
            <div className='text-center text-5xl m-16 font-bold'>
                <h1>Joshuwa Tech</h1>
            </div>
            <div className='flex flex-wrap items-center justify-center '>
                {DATA.map((product)=>{
                    return(<Product data={product} />)
                })}
            </div>
        </div>
    )
}