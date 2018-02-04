import React from 'react';

const ShowProducts = (props) => {

    return (
        <div>
            {props.products.length != 0 && <h2>All Products Detalils</h2>}

            {props.products.map((product, index) => {
                return (
                    <div className="productDiv border" key={index}>
                        <h4>Product Name is     <b>{product.productName}</b></h4>
                        <h4>Product Quantity is <b>{product.productQuantity}</b></h4>
                        <h4>Product Link is     <b>{product.productLink}</b></h4>
                        <button className="btn btn-default" onClick={() => {
                            props.deleteOption(product.productName)
                        }}>Remove This Product</button>
                    </div>
                )
            })}
            {props.products.length == 0 ? "There Is No Product To Show" :
                <button className="btn btn-default" onClick={props.removeAll}>Remove All Products</button>
            }
        </div>
    );
}
export default ShowProducts;