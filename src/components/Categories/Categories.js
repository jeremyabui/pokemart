import React from 'react';

class Categories extends React.Component {
  render() {
    return (
      // Hardcoded
      <>
        <h3 className='categories' id='pokeballs' onClick={this.props.setCategory}>Pokeballs</h3>
        <h3 className='categories' id='medicine' onClick={this.props.setCategory}>Medicine</h3>
      </>

    )
  }
}

export default Categories;