import './App.css';
import {useState} from 'react';
import Header from './Header';
import CartList from './CartList';
import ProductList from './ProductList';

function App() {
  const [product,setproduct]=useState([
    {
      url:'https://www.pexels.com/photo/brown-hummingbird-selective-focus-photography-1133957/',
      name:'photo1',
      seller:'sahil',
      category:'campus',
      price:20,
    },
    {
      url:'https://www.pexels.com/photo/woman-holding-pink-tulips-1386604/',
      name:'photo2',
      seller:'hello',
      category:' sport',
      price:200,
    }
   ])
  
  const [ShowCart,setShowCart]= useState(false);
  
  const handleShowCart=(value)=> {
    setShowCart(value)
  }
  const[cart,setcart]=useState([]);
    const addToCart=(data)=>{
      setcart([...cart,{...data,quantity:1}]);
      console.log(cart)
    }
  
  return (
    <div className="App">
      <Header count={cart.length} handleShowCart={handleShowCart} />
      {
      ShowCart? <ProductList product={product} addToCart={addToCart}/>:
      <CartList cart={cart}/>
      }
    </div>
    );
}
export default App;
