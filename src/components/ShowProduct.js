import React from 'react';

const ShowProducts = (props) => {
      
    return(
        <div>
       <ol>{props.products.map((e) => {
           return (
          <div key={e}>
          <li>
          <span>Product Name : {e.productName}</span><br/>
          <span>Product Quantity: {e.productQuantity}</span><br/>
          <span>Product Link : {e.productLink}</span><br/>
          <button className="button" onClick={() => {
              props.deleteOption(e.productName)
          }}>Remove This Product</button>
          <button className="button" onClick={() => {
              props.editProduct(e.productName,e.productQuantity,e.productLink)
          }}>Edit This Product</button>
          </li><hr/>
          </div>
                  )
       }) }
       </ol>
       { props.products.length !==0 &&
       <button className="button" onClick={props.removeAll}>Remove All Products</button>
       }
        </div>
    );
}
export default ShowProducts;