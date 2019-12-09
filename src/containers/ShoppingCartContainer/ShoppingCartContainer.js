import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

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

  submitOrder = (event) => {
    event.preventDefault();
    const userId = localStorage.getItem("uid");
    let newOrder = {
      "products": this.state.shoppingCart,
      "user": userId,
      "total": this.state.total,
    }
    axios.post(`${process.env.REACT_APP_API_URL}/orders`, newOrder, {
      withCredentials: true,
    })
      .then((res) =>
        console.log(res)
      )
      .catch((err) => console.log(err));
    let emptiedCart = {
      "shoppingCart": [],
    }
    axios.put(`${process.env.REACT_APP_API_URL}/auth/${userId}`, emptiedCart, {
      withCredentials: true
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <h2>Shopping Cart</h2>
        {this.displayCart(this.state.shoppingCart)}
        <h4>Total: ${this.state.total}</h4>
        {/* <Link to='/orderconfirmation' submitOrder={this.submitOrder}><button>Submit Order</button></Link> */}
        <Link to='/orderconfirmation'>
          <button onClick={(event) => this.submitOrder(event)}>Submit Order</button>
        </Link>
      </>
    )
  }
}

export default ShoppingCartContainer; 