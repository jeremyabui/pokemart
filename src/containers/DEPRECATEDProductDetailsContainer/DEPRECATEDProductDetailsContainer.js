// import React from 'react'
// import axios from 'axios'

// import ProductDetail from '../../components/ProductDetails/ProductDetails'

// class ProductDetailsContainer extends React.Component{
//   state= {
//     productData: [],
//     loaded: false,
//   }

//   componentDidMount() {
//     const productId = document.location.href.split('/')[4];
//     axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}`, { 
//       withCredentials: true
//     })
//       .then((res) => {
//         this.setState({
//           postDetail: res.data.data,
//           loaded: true
//         })
//       })
//       .catch((err) => console.log(err));
//   };

//   render() {
//     return (
//       <div className='container'>
//         <h2>Product Details page</h2> 
//         {/* <h3>{this.state.productData.name}</h3>  */}
//         {/* <img src={this.state.productData.image} /> */}
//     {this.state.productData && <ProductDetail productData={this.state.productData} /> }
//       </div>
//     )
//   }
// }

// export default ProductDetailsContainer;

// import React from 'react'
// import axios from 'axios'

// import ProductDetailNew from '../../components/ProductDetails/DEPRECATEDProductDetailsNew'

// class ProductDetailsContainerNew extends React.Component{
//   state= {
//     productData: [],
//     user: {},
//     userId: localStorage.getItem('uid'),
//     loaded: false,
//     // productId: {"shoppingCart": [document.location.href.split('/')[4]]},
//     productId: document.location.href.split('/')[4],
//     shoppingCart: [],
//   }

//   componentDidMount() {
//     const productId = document.location.href.split('/')[4];
//     console.log(this.state.productId)
//     axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}`, { 
//       withCredentials: true
//     })
//       .then((res) => {
//         this.setState({
//           productData: res.data.data,
//           loaded: true
//         })
//         console.log(this.state.productData)
//       })
//       .catch((err) => console.log(err));

//     axios.get(`${process.env.REACT_APP_API_URL}/auth/${this.state.userId}`, { 
//       withCredentials: true
//     })
//       .then((res) => {
//         this.setState({
//           user: res.data.data,
//           shoppingCart: res.data.data.shoppingCart,
//           loaded: true,
//         })
//         console.log(this.state.user)
//       })
//       .catch((err) => console.log(err));
    
//   };

//   addToCart = (event) => {
//     event.preventDefault();
//     // const productId = document.location.href.split('/')[4];
//     // let newObj = Object.assign({}, document.location.href.split('/')[4])
//     // const userId = localStorage.getItem('uid');
//     // console.log(newObj)
//     let newObj = {"shoppingCart": [this.state.productId]}
//     console.log(newObj)

    

//     axios.put(`${process.env.REACT_APP_API_URL}/auth/${this.state.userId}`, newObj, {
//       withCredentials: true
//     })
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => console.log(err));
//   }

//   render() {
//     return (
//       <div className='container'>
//         <h2>Product Details Container</h2> 
//         {/* <h3>{this.state.productData.name}</h3> 
//         <img src={this.state.productData.image} />
//         <p>{this.state.productData.description}</p>
//         <p>${this.state.productData.price}</p>
//         <button onClick={(event) => this.addToCart(event) }>Add to Cart</button> */}
        
//     {this.state.productData && <ProductDetailNew productData={this.state.productData} addToCart={this.addToCart}/> }
//       </div>
//     )
//   }
// }


// export default ProductDetailsContainerNew;