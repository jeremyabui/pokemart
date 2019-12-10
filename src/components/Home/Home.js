import React from 'react';
import { Link } from 'react-router-dom'
// import './Home.css'

const Home = () => {
  return (
    <>
      {/* <Jumbotron>
        <img src='../../../public/images/pokemart.png'></img>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron> */}
      {/* <div>
        <img src='https://3.bp.blogspot.com/-P_Q45zLQQsY/UTIV6oRF_fI/AAAAAAAABjQ/XH-bNz5Sh8I/s1600/Centro+Pok%C3%A9mon.png' alt='Home Banner' className='homeBanner'></img>
        <h1>Welcome to the Pokemart</h1> 
      </div> */}
      <div className='backgroundContainer'>
        <div className='bannerContent'>
          <h1 className='bannerText'>Welcome to the Pokemart</h1> 
          <Link to='/mall'>
            <button className='shopNowButton btn btn-danger'>Shop Now</button>
          </Link>
        </div>
      </div>

    </>
    
  )
}

export default Home;