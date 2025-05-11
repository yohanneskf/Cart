import Provider from './component/Provider.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar.jsx'
import Shop from './component/Shop.jsx'
import Cart from './component/Cart.jsx'

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </Provider>

  )
}

export default App
