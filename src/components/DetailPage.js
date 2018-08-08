import React, { Component } from 'react'
import { Button,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Nav,
  NavItem,
  NavLink,
  CardImg,
  CardBody,
  Card,
  CardText,
  CardSubtitle,
  CardTitle } from 'reactstrap'
import '../css/DetailPage.css'
import classnames from 'classnames';


const images = [
  {
    src: 'https://www.sideshowtoy.com/wp-content/uploads/2017/11/dc-comics-justice-league-batman-statue-prime1-studio-feature-903246-1.jpg',
    caption: 'Title',
    altText: 'Batman'
  }
];

class DetailPage extends Component {

  constructor() {
    super();
    this.state = { activeIndex: 0, activeTab: '1'};
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === images.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? images.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render () {
    const { activeIndex } = this.state;
    const slides = images.map((img) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={img.src}
        >
          <img src={img.src} alt={img.altText} />
          <CarouselCaption captionText={img.caption} captionHeader={img.caption} />
        </CarouselItem>
      );
    });

    return (
      <div> 
        <Container fluid>
          <Row>
            <Col xs="9"> 
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            </Col>
            <Col xs="3"> 
              <div className="buttonWrapper">
                <Button>Support This Idea!</Button>
              </div>
              <Card style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardImg top width="100%" src="https://www.thefamouspeople.com/profiles/images/stan-lee-5.jpg" />
                <CardBody>
                  <CardTitle>Stan Lee</CardTitle>
                  <CardSubtitle>comic-book writer</CardSubtitle>
                  <CardText>more information goes here</CardText>
                  <Button>Follow</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Comments
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Updates
              </NavLink>
            </NavItem>
          </Nav>

        </Container>
    </div>)
  }
}

export default DetailPage
