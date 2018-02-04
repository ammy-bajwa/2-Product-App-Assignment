import React from 'react';
import AddProduct from './AddProduct';
import ShowProducts from './ShowProduct';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ProductApp extends React.Component {
    constructor(props){
        super(props);
        this.addProduct   = this.addProduct.bind(this);
        this.removeAll    = this.removeAll.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        this.editProduct  = this.editProduct.bind(this);
        this.state = {
            products: []
        }
    }
    addProduct(productName,productLink,productQuantity) {
        if(!productName ||!productLink||!productQuantity)
        {
            return alert('Please enter valid value');
        }
       
        return this.setState((preState) => {
            return {
                products: preState.products.concat({productName,productQuantity,productLink})
            }
        })
    }
    removeAll() {
        this.setState(() => ({products: []}))
    }
    deleteOption(optionsToRemove) {
    //   console.log(optionsToRemove);
      this.setState((prevState) =>({
          products: prevState.products.filter((option) => {
              return optionsToRemove !== option.productName;
          })
      }))
    }
    editProduct(productName,productLink,productQuantity) {
       console.log(`This is editor for ${productName}`);

    }
    render() {
        return (
            <Router>
            <div className="main">
            <div className="main__content">
            <h1>Product App</h1>
            <button className="button"><Link className="links" to="/Add_Product">Add Product</Link></button>
            <button className="button"><Link className="links" to="/Show_Product">Show Product</Link></button>
            <button className="button"><Link className="links" to="./">Home</Link></button>
            <Route path="/Add_Product" component={() => ( <AddProduct addProduct = {this.addProduct} />)}></Route>
            <Route path="/Show_Product" component={() => (<ShowProducts 
                products = {this.state.products}
                removeAll = {this.removeAll}
                deleteOption = {this.deleteOption}
                editProduct = {this.editProduct}
                />)}></Route>
            <Route path="./" component={ProductApp}></Route>
            </div>
            </div>
            </Router>
        )
    }
}
export default ProductApp;