import React from 'react';
import axios from 'axios';

import Categories from '../../components/Categories/Categories'
import Product from '../../components/Product/Product';

// import './MallContainer.css'

class MallContainer extends React.Component {
  state = {
    productsData: [],
    selectedCategory: '',
    loaded: false
  }

  setCategory = (event) => {
    this.setState({
      selectedCategory: event.target.id
    })
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/products`, {
      withCredentials: true
    })
      .then(res => {
        console.log(res)
        this.setState({
          productsData: res.data.data,
          loaded: true
        });
      })
      .catch(err => console.log(err))
  }

  // Component did update - DO NOT SET STATE 

  // displayCategories = products => {
  //   return products.map(product => {
  //     return (
  //       <li>
  //         Need to make category container/compo
  //       </li>
  //     )
  //   })
  // }

  displayProducts = products => {
    return products.map(product => {
      return (
        <>
          <Product 
            productData={product}
            setCurrentCity={this.setCurrentCity}
            key={product.slug}
          />
        </>
      )
    })
  }

  render() {
    return (
      <div>
        <h2 className='mallHeader'>Shopping Mall</h2>
        <div className='mallContainer'>
          <div className='sidenav'>
            <Categories setCategory={this.setCategory} />
          </div>
          <div className='productList'> 
            {this.displayProducts(this.state.productsData)}
          </div>
        </div>
      </div>
    )
  }
}

export default MallContainer;