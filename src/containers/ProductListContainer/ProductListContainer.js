import React from 'react';
import axios from 'axios';

class ProductDetailContainer extends React.Component{
  state = {
    productsData: this.props.productsData,
    selectedCategory: this.props.selectedCategory,
    loaded: false,
  }

  // componentDidUpdate(prevPros) {
  //   if (prevProps.selectedCategory !== this.props.selectedCategory) {

  //   }
  // }
}

export default ProductDetailContainer