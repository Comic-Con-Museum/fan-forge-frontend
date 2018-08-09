import React from 'react'
import CCMSketch from '../assets/scc_sketch.jpeg';


class About extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <img className='bannerImg' src={CCMSketch} alt='Logo' width="80%" />

      <h3><Why the Museum?</h3>
      Comic-Con is a world wide sensation that only comes around once a year!
      To help combat the long lines we want to create an experience where fans
      can indulge in their favorite comics all year long.

      <h3>What is this website?</h3>
      This website is a place for our fans to have their own take on what
      exhibits will be shown at our Museum!
      With the Create an Exhibit Idea feature, you will be able create your
      own exhibit idea where your peers will be able to support your idea.
      The more support you get the more chance you have to get the exhibit built.

      <h3>How to create and support?</h3>
      In order to create or support an exhibit idea you must be a Comic-Con Museum member.
      If you are already a member then you are all set!
      If you are not a member you can visit https://www.comic-con.org/optin to sign up!

    )
  }
}

export default About
