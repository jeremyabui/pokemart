import React from 'react';
import { Link } from 'react-router-dom'

import './Product.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Product extends React.Component {
  render() {
    return (
      <>
        {/* <div className='product-container'>
          <Link to={'/mall/'+ this.props.productData._id} >
            <img src={this.props.productData.image} alt={this.props.productData.name}/>
          </Link>
          <h4>{this.props.productData.name}</h4>
          <p>{this.props.productData.description}</p>
          <p>${this.props.productData.price}</p>
          
        </div> */}


        {/* React bootstrap */}
        <Card style={{ width: '18rem' }}>
          <Link to={'/mall/'+ this.props.productData._id} >
            <Card.Img variant="top" src={this.props.productData.image} />
          </Link>
          <Card.Body>
            <Card.Title>{this.props.productData.name}</Card.Title>
            <Card.Text>
              Price: ${this.props.productData.price}
            </Card.Text>
            <Link to={'/mall/'+ this.props.productData._id}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Product;