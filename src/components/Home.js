import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import '../css/Home.css'
import CCMLogo from '../assets/Logo.png'
import CCMSketch from '../assets/ccm_sketch.jpeg'
import CCMBuilding from '../assets/ccm_building.jpeg'
import CCMSanDiego from '../assets/ccm_sanDiego.jpeg'

const items = [
  {
    src: CCMSketch,
    altText: 'Submit a Design',
    header: 'Submit A design',
    caption:
      'Fan curated designs can make their way into the museum with enough support!'
  },
  {
    src: CCMBuilding,
    altText: 'About Comic-Con Museum',
    header: 'About Comic-Con Museum',
    caption: "Learn more about Comic-Con's year round experience"
  },
  {
    src: CCMSanDiego,
    header: 'Slide 3',
    caption: 'Slide 3'
  }
]

const Home = () => (
  <div className='home'>
    <div className='fullTop'>
      <UncontrolledCarousel className='fullimg' items={items} />
      <img className='top-left iconimg' src={CCMLogo} alt='Logo' />
      <h1>
        {' '}
        You
        {' '}
        <a href='http://www.yahoo.com'>
create
        </a>
. We
        {' '}
        <a href='http://www.yahoo.com'>
Display
        </a>
      </h1>
    </div>
    <div>
      <p />
    </div>
  </div>
)
export default Home
