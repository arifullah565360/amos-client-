import {useState, useEffect} from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products , setProducts  ] = useState([]) 
    
      useEffect(() => {
        fetch('https://young-beyond-69977.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
      }, [])  
            const handleAddProduct =() =>{
            console.log('Add-product')
        }

        return (
        <div className="home">
            {
                products.map(product => <Product 
                    product={product}
                    handleAddProduct = {handleAddProduct}
                ></Product>)
            }
        </div>
    );
};

export default Home;