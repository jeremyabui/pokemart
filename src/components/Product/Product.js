import React from 'react';
import { Link } from 'react-router-dom'

class Product extends React.Component {
  render() {
    return (
      <>
        <div className='product-container'>
          <Link to={'/mall/'+ this.props.productData._id} >
            <img src={this.props.productData.image} alt={this.props.productData.name}/>
          </Link>
          <h4>{this.props.productData.name}</h4>
          <p>{this.props.productData.description}</p>
          <p>${this.props.productData.price}</p>
          {/* <p>{this.props.productData.name}</p> */}
        </div>
      </>
    )
  }
}

export default Product;