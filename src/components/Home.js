import React, {Component} from 'react'
import {UncontrolledCarousel} from 'reactstrap'
import '../css/Home.css'
import CCMSketch from '../assets/ccm_sketch.jpeg'
import CCMBuilding from '../assets/ccm_building.jpeg'
import CCMSanDiego from '../assets/ccm_sanDiego.jpeg'

const items = [
  {
    src: CCMBuilding,
    altText: <a href={`/About`}>About the Museum</a>,
    header: <a href={`/About`}>About the Museum</a>,
    caption: "Learn more about Comic-Con's year round experience"
  },
  {
    src: CCMSanDiego,
    header: <a href={`/feed`}>Explore Ideas</a>,
    caption: 'Support your interests'
  },
  {
    src: CCMSketch,
    altText: <a href={`/Entry`}>Submit Your Ideas</a>,
    header: <a href={`/Entry`}>Submit Your Ideas</a>,
    caption:
    'Fan curated exhibits can make their way into the museum with enough support!'
  }
]

export class Home extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = undefined;
    this.topbarRef = undefined;
  }

  updateDimensions() {
    this.sliderRef.style.height = 'calc(100vh - 2px - ' + this.topbarRef.clientHeight + 'px)';
  }

  componentDidMount() {
    this.sliderRef = document.querySelector('.carousel-inner');
    this.topbarRef = document.querySelector('.topbar');
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div className='home'>
        <div className='fullTop'>
          <UncontrolledCarousel className='fullimg' items={items} />
        </div>
      </div>
    );
  }
}

export default Home
