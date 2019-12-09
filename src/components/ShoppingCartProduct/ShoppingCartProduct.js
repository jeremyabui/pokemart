import React from 'react';

class ShoppingCartProduct extends React.Component{
  
  render() {
    return (
      <div>
        <h3>Shopping Cart Product item</h3>
        <p>Product Name: {this.props.productData.name}</p>
        <p>Price: ${this.props.productData.price}</p>
        {/* NOTE Added onClick method */}
        <button onClick={(event) => this.props.removeFromCart(event)}>Remove from Cart</button>
      </div>
    )
  }
}

export default ShoppingCartProduct