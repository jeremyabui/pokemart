import React from 'react';
// import './Categories.css'

class Categories extends React.Component {
  render() {
    return (
      // Hardcoded
      <>
      <h4><u>Categories</u></h4>
        <h5 className='categories' id='pokeballs' onClick={this.props.setCategory}>Pokeballs</h5>
        <h5 className='categories' id='medicine' onClick={this.props.setCategory}>Medicine</h5>
      </>

    )
  }
}

export default Categories;