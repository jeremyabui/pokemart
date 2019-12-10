import React from 'react';
import './Categories.css'

class Categories extends React.Component {
  render() {
    return (
      // Hardcoded
      <>
      <h3>Categories</h3>
        <h4 className='categories' id='pokeballs' onClick={this.props.setCategory}>Pokeballs</h4>
        <h4 className='categories' id='medicine' onClick={this.props.setCategory}>Medicine</h4>
      </>

    )
  }
}

export default Categories;