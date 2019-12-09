import React from 'react';
import axios from 'axios';

import ShoppingCartProduct from '../../components/ShoppingCartProduct/ShoppingCartProduct'

class ShoppingCartContainer extends React.Component {
  state = {
    shoppingCart: [],
    total: 0,
    loaded: false,
  }

  componentDidMount() {
    const userId = localStorage.getItem("uid");
    axios.get(`${process.env.REACT_APP_API_URL}/auth/${userId}`, {
      withCredentials: true
    })
      .then(res => {
        this.setState({
          shoppingCart: res.data.data.shoppingCart,
          loaded:true
        })
        this.calculateTotal(this.state.shoppingCart)
        console.log(this.state.shoppingCart)
      })
      .catch(err => console.log(err))
  }

  calculateTotal = (arr) => {
    let tempTotal = 0;
    for (let i = 0; i < arr.length; i++) {
      tempTotal += arr[i].price
    }
    this.setState({
      total: tempTotal,
    })
  }

  // removeFromCart = (event, updatedState) => {
  removeFromCart = (event) => {
    event.preventDefault();
    console.log(event)
    const userId = localStorage.getItem("uid");
    // axios.put(`${process.env.REACT_APP_API_URL}/auth/${userId}`, 
    // updatedState,
    // {
    //   withCredentials: true
    // })
    //   .then(res => {
    //     console.log(res)
    //   })
  }

  displayCart = products => {
    return products.map(product => {
      return (
        <>
          <ShoppingCartProduct
            productData={product}
            removeFromCart={this.removeFromCart}
            key={product.slug}
          />
        </>
      )
    })
  }

  render() {
    return (
      <>
        <h2>Shopping Cart</h2>
        {this.displayCart(this.state.shoppingCart)}
        <h4>Total: ${this.state.total}</h4>
        
      </>
    )
  }
}

export default ShoppingCartContainer; 