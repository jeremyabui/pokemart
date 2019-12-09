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
    user: {},
    userId: localStorage.getItem('uid'),
    loaded: false,
    // productId: {"shoppingCart": [document.location.href.split('/')[4]]},
    productId: document.location.href.split('/')[4],
    shoppingCart: [],
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
        console.log(this.props)
      })
      .catch((err) => console.log(err));

    axios.get(`${process.env.REACT_APP_API_URL}/auth/${this.state.userId}`, { 
      withCredentials: true
    })
      .then((res) => {
        this.setState({
          user: res.data.data,
          shoppingCart: [...res.data.data.shoppingCart],
          loaded: true
        })
        console.log(this.state.user)
        console.log(this.state.shoppingCart)
      })
      .catch((err) => console.log(err));
    
  };

  addToCart = (event) => {
    event.preventDefault();
    // const productId = document.location.href.split('/')[4];
    // let newObj = Object.assign({}, document.location.href.split('/')[4])
    // const userId = localStorage.getItem('uid');
    // console.log(newObj)
    this.setState({
      shoppingCart: this.state.shoppingCart.push(this.state.productId)
    })
    console.log(this.state.shoppingCart)
    let newObj = {"shoppingCart": this.state.shoppingCart}
    console.log(newObj)
    axios.put(`${process.env.REACT_APP_API_URL}/auth/${this.state.userId}`, newObj, {
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