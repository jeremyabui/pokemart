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
    productId: {"shoppingCart": [document.location.href.split('/')[4]]},
  }

  componentDidMount() {
    const productId = document.location.href.split('/')[4];
    console.log(this.state.productId)
    axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}`, { 
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

  addToCart = (event) => {
    event.preventDefault();
    const productId = document.location.href.split('/')[4];
    // let newObj = Object.assign({}, this.state.productId).then(console.log(newObj))
    const userId = localStorage.getItem('uid');
    
    axios.put(`${process.env.REACT_APP_API_URL}/auth/${userId}`, this.state.productId, {
      withCredentials: true
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className='container'>
        <h2>Product Details page</h2> 
        <h3>{this.state.productData.name}</h3> 
        <img src={this.state.productData.image} />
        <p>{this.state.productData.description}</p>
        <p>${this.state.productData.price}</p>
        <button onClick={(event) => this.addToCart(event) }>Add to Cart</button>
        
    {/* {this.state.productData && <ProductDetail productData={this.state.productData} /> } */}
      </div>
    )
  }
}


export default ProductDetails;