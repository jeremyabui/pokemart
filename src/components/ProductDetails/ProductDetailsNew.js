import React from 'react'

class ProductDetailsNew extends React.Component {
  render() {
    return (
      <div>
        <h2>Product Details Component</h2>
        <h3>{this.props.productData.name}</h3>
        <img src={this.props.productData.image} />
        <p>{this.props.productData.description}</p>
        <p>${this.props.productData.price}</p>
        <button onClick={(event) => this.props.addToCart(event) }>Add to Cart</button> 

      </div>
    )
  }
}

export default ProductDetailsNew; 