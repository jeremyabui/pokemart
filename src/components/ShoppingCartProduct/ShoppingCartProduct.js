import React from 'react';

class ShoppingCartProduct extends React.Component{
  
  render() {
    return (
      <div className='shoppingCartProductContainer'>
        {/* <h3>Shopping Cart Product item</h3> */}
        <img src={this.props.productData.image} className='shoppingCartProductImage'/>
        <div className='shoppingCartProductText'> 
          <p><b>Product Name:</b> {this.props.productData.name}</p>
          <p><b>Price:</b> ${this.props.productData.price}</p>
          {/* NOTE Added onClick method */}
          <p onClick={(event) => this.props.removeFromCart(event)} id={this.props.index} className='removeFromCart'>Remove from Cart</p>
        </div>
      </div>
    )
  }
}

export default ShoppingCartProduct