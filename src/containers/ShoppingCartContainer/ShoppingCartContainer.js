import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

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
    // console.log(event.target.id)
    // console.log(this.state.shoppingCart)
    let productIndex = event.target.id
    const userId = localStorage.getItem("uid");
    this.state.shoppingCart.splice(productIndex,1)
    let updatedCartObj = {"shoppingCart": this.state.shoppingCart}
    axios.put(`${process.env.REACT_APP_API_URL}/auth/${userId}`, 
    updatedCartObj,
    {
      withCredentials: true
    })
      .then(res => {
        // console.log(res)
        this.calculateTotal(this.state.shoppingCart)
      })
      .catch((err) => console.log(err))
  }

  displayCart = products => {
    return products.map((product,index) => {
      console.log(product)
      console.log(index)
      return (
        <>
          <ShoppingCartProduct
            productData={product}
            removeFromCart={this.removeFromCart}
            key={product.slug}
            index={index}
          />
          {/* <button onClick>New remove</button>  */}
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
    // let orderId = '';
    axios.post(`${process.env.REACT_APP_API_URL}/orders`, newOrder, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res)
        // this.orderId = res.data.data._id
        // console.log(orderId)
        // console.log(this.orderId)
      })
      .catch((err) => console.log(err));
    let emptiedCart = {
      "shoppingCart": [],
      // "orders": [orderId]
    }
    // console.log(emptiedCart)
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
      <div className='shoppingCartContainer'>
        <h2 className='shoppingCartHeader'>Shopping Cart</h2>
        {this.displayCart(this.state.shoppingCart)}
        <hr></hr>
        <h4>Total: ${this.state.total}</h4>
        {/* <Link to='/orderconfirmation' submitOrder={this.submitOrder}><button>Submit Order</button></Link> */}
        {/* <Link to='/orderconfirmation'> */}
          <button onClick={(event) => {this.submitOrder(event); this.props.history.push('/orderconfirmation')}} className='btn btn-primary'>Submit Order</button>
        {/* </Link> */}
      </div>
    )
  }
}

export default withRouter(ShoppingCartContainer); 