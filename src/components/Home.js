import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import '../css/Home.css'
import CCMLogo from '../assets/Logo.png'
import CCMSketch from '../assets/ccm_sketch.jpeg'
import CCMBuilding from '../assets/ccm_building.jpeg'


const items = [
  {
    src: CCMSketch,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: CCMLogo,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: CCMBuilding,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
]

const Home = () => (
  <div className='home'>
    <div className='fullTop'>
      <img className='top-left iconimg' src={CCMLogo} alt='Logo' />
      <UncontrolledCarousel className='fullimg' items={items} />
      <h1> You <a href='http://www.yahoo.com'>create</a>. We <a href='http://www.yahoo.com'>Display</a></h1>
    </div>
    <div>
      <p />
    </div>
  </div>
)
export default Home
