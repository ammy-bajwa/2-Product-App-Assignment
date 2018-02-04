import React from 'react';

class AddProduct extends React.Component {
    formSubmit = (e) => {
        e.preventDefault();
        const productName = e.target.elements.productNameId.value.trim();
        const productQuantity = e.target.elements.productQuantityId.value.trim();
        const productLink = e.target.elements.productLinkId.value.trim();
        e.target.elements.productNameId.value = '';
        e.target.elements.productLinkId.value = '';
        e.target.elements.productQuantityId.value = '';
        return this.props.addProduct(productName, productQuantity, productLink);
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <h4>Product Name</h4>
                    <input className='input' type="text" name="productNameId" />
                    <h4>Product Quantity</h4>
                    <input className='input' type="number" name="productQuantityId" />
                    <h4>Product Link</h4>
                    <input className='input' type="url" name="productLinkId" /><br />
                    <button type="submit" className="btn btn-default ">Add Product</button>
                </form>
            </div>
        )
    }
}
export default AddProduct;