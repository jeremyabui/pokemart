import React from 'react';
import axios from 'axios';

import Categories from '../../components/Categories/Categories'

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
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/products`, {
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

  displayCategories = products => {
    return products.map(product => {
      return (
        <li>
          // Need to make category container/compo
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Shopping Mall</h2>
        <Categories setCategory={this.setCategory} />
      </div>
    )
  }

}

export default MallContainer;