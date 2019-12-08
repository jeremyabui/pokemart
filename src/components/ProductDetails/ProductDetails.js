// import React from 'react'

// const ProductDetails = props => {
//   return (
//     <div>
//       <h2>Product Details></h2>
//       <p>{props.productData.name}</p>
//     </div>
//   )
// }

import React from 'react'
import axios from 'axios'

import ProductDetail from '../../components/ProductDetails/ProductDetails'

class ProductDetails extends React.Component{
  state= {
    productData: [],
    loaded: false,
  }

  componentDidMount() {
    const productId = document.location.href.split('/')[4];
    console.log(productId)
    axios.get(`${process.env.REACT_APP_API_URL}/products/5de815a8805f6907d6c677b0`, { 
      withCredentials: true
    })
      .then((res) => {
        this.setState({
          productData: res.data.data,
          loaded: true
        })
        console.log(this.state.productData)
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className='container'>
        <h2>Product Details page</h2> 
        <h3>{this.state.productData.name}</h3> 
        <img src={this.state.productData.image} />
        
    {/* {this.state.productData && <ProductDetail productData={this.state.productData} /> } */}
      </div>
    )
  }
}


export default ProductDetails;