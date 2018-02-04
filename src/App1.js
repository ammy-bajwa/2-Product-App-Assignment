import React from 'react';
import ReactDOM from 'react-dom';
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
            <div>
            <h1>Product App</h1>
            <button><Link to="/Add_Product">Add Product</Link></button>
            <button><Link to="/Show_Product">Show Product</Link></button>
            <button><Link to="./">Home</Link></button>
            <Route path="/Add_Product" component={() => ( <AddProduct addProduct = {this.addProduct} />)}></Route>
            <Route path="/Show_Product" component={() => (<ShowProducts 
                products = {this.state.products}
                removeAll = {this.removeAll}
                deleteOption = {this.deleteOption}
                editProduct = {this.editProduct}
                />)}></Route>
            <Route path="./" component={ProductApp}></Route>
            </div>
            </Router>
        )
    }
}
class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }
    formSubmit(e)  {
        e.preventDefault();
        const productName = e.target.elements.productNameId.value.trim();
        const productQuantity = e.target.elements.productQuantityId.value.trim();
        const productLink = e.target.elements.productLinkId.value.trim();
        e.target.elements.productNameId.value = '';
        e.target.elements.productLinkId.value = '';
        e.target.elements.productQuantityId.value = '';
        return this.props.addProduct(productName,productQuantity,productLink);
        
    }
    render() {
        return (
            <div>
            <form onSubmit={this.formSubmit}>
            <label>Product Name</label><br/>
            <input type="text" name="productNameId" /><br/>
            <label>Product Quantity</label><br/>
            <input type="text" name="productQuantityId" /><br/>
            <label>Product Link</label><br/>
            <input type="text" name="productLinkId" /><br/>
            <button type="submit">Add Product</button>
            </form>
            </div>
        )
    }
}
const ShowProducts = (props) => {
      
      return(
          <div>
         <ol>{props.products.map((e) => {
             return (
            <div key={e}>
            <li>
            <span>Product Name : {e.productName}</span><br/>
            <span>Product Quantity : {e.productQuantity}</span><br/>
            <span>Product Link : {e.productLink}</span><br/>
            <button onClick={() => {
                this.props.deleteOption(e.productName)
            }}>Remove This Product</button>
            <button onClick={() => {
                props.editProduct(e.productName,e.productQuantity,e.productLink)
            }}>Edit This Product</button>
            </li><hr/>
            </div>
                    )
         }) }
         </ol>
         { props.products.length !==0 &&
         <button onClick={props.removeAll}>Remove All Products</button>
         }
          </div>
      );
  }
export default ProductApp;

