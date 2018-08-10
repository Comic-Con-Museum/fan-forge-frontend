import React, {Component} from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import '../css/Home.css'
import CCMSketch from '../assets/ccm_sketch.jpeg'
import CCMBuilding from '../assets/ccm_building.jpeg'
import CCMSanDiego from '../assets/ccm_sanDiego.jpeg'

const items = [
  {
    src: CCMSketch,
    altText: 'Submit a Design',
    header: 'Submit a design',
    caption:
      'Fan curated designs can make their way into the museum with enough support!'
  },
  {
    src: CCMBuilding,
    altText: 'About the Museum',
    header: 'About the Museum',
    caption: "Learn more about Comic-Con's year round experience"
  },
  {
    src: CCMSanDiego,
    header: 'Explore Designs',
    caption: 'Support your interests'
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
