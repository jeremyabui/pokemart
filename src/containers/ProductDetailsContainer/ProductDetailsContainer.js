import React from 'react'
import axios from 'axios'

import ProductDetail from '../../components/ProductDetails/ProductDetails'

class ProductDetailsContainer extends React.Component{
  state= {
    productData: [],
    loaded: false,
  }

  componentDidMount() {
    const productId = document.location.href.split('/')[4];
    axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}`, { 
      withCredentials: true
    })
      .then((res) => {
        this.setState({
          postDetail: res.data.data,
          loaded: true
        })
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className='container'>
        <h2>Product Details page</h2> 
        {/* <h3>{this.state.productData.name}</h3>  */}
        {/* <img src={this.state.productData.image} /> */}
    {this.state.productData && <ProductDetail productData={this.state.productData} /> }
      </div>
    )
  }
}

export default ProductDetailsContainer;