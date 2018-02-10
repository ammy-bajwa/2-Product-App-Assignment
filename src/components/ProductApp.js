import React from 'react';
import AddProduct from './AddProduct';
import ShowProducts from './ShowProduct';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ProductApp extends React.Component {
    state = {
        products: []
    }

    addProduct = (productName, productLink, productQuantity) => {
        if (!productName || !productLink || !productQuantity ||typeof productName !=='string') {
            return alert('Please enter valid value');
        }

        return this.setState((preState) => {
            return {
                products: preState.products.concat({ productName, productQuantity, productLink })
            }
        })
    }
    removeAll = () => {
        this.setState(() => ({ products: [] }))
    }
    deleteOption = (optionsToRemove) => {
        //   console.log(optionsToRemove);
        this.setState((prevState) => ({
            products: prevState.products.filter((option) => {
                return optionsToRemove !== option.productName;
            })
        }))
    }
    render() {
        return (
            <Router>
                <div className='mainDiv container-fluid'>
                    <div className='HeaderDiv border row'>
                        <h1 className="text-center">Product App</h1>
                        <h3 className="text-center">By Amir Ali</h3>
                    </div>
                    <div className="contentDiv">
                        <button className="btn btn-default"><Link to="/">Home</Link></button>
                        <button className="btn btn-default"><Link to="/Add_Product">Add Product</Link></button>
                        <button className="btn btn-default"><Link to="/Show_Product">Show Product</Link></button>
                    </div>
                    <div className='outerContent container-fluid border'>
                        <Route path="/Add_Product" component={() => (<AddProduct addProduct={this.addProduct} />)}></Route>
                        <Route path="/Show_Product" component={() => (<ShowProducts
                            products={this.state.products}
                            removeAll={this.removeAll}
                            deleteOption={this.deleteOption}
                            editProduct={this.editProduct}
                        />)}></Route>
                        <Route path="/" component={Home} exact={true}></Route>
                    </div>
                </div>
            </Router>
        )
    }
}
export default ProductApp;