import React from 'react';

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
            <label className="labels">Product Name</label><br/>
            <input className="input" type="text" name="productNameId" /><br/>
            <label className="labels">Product Quantity</label><br/>
            <input className="input" type="text" name="productQuantityId" /><br/>
            <label className="labels">Product Link</label><br/>
            <input className="input" type="text" name="productLinkId" /><br/>
            <button className="button" type="submit">Add Product</button>
            </form>
            </div>
        )
    }
}
export default AddProduct;