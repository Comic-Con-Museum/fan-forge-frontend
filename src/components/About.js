import React from 'react'
import CCMSketch from '../assets/ccm_sketch.jpeg';
import '../css/About.css'


class About extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className='about'>
        <img className='bannerImg' src={CCMSketch} alt='Logo' width="80%" />

        <h3>Why the Museum?</h3>
        Comic-Con is a world wide sensation that only comes around once a year!
        To help combat the long lines we want to create an experience where fans
        can indulge in their favorite comics all year long.

        <h3>Why a website?</h3>
        At Comic-Con, as we are an organization by the people, for the people, we
        want to make the Museum as fan supported as possible. As there will be
        a continuous flow of ideas, we wanted to reach out to you, our fans for
        your creative genious.

        <h3>What is this website?</h3>
        This website is a place for our fans to have their own take on what
        exhibits will be shown at our Museum!
        With the
        <a href="/Entry"> Create an Exhibit Idea </a>
        feature, you will be able create your
        own exhibit idea where your peers will be able to support your idea.
        The more support you get the more chance you have to get the exhibit built!

        <h3>How to create and support?</h3>
        In order to create or support an exhibit idea you must be a Comic-Con Museum member.
        If you are already a member then you are all set!
        If you are not a member you can visit
        <a href="https://www.comic-con.org/optin"> www.comic-con.org/optin </a>
         to sign up!
      </div>
    )
  }
}

export default About
