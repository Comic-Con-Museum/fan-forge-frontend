import React, { Component } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Nav,
  NavItem,
  NavLink,
  CardBody,
  Card,
  CardText,
  CardSubtitle,
  CardTitle,
  CardLink,
  Row,
  Col,
  TabContent,
  TabPane } from 'reactstrap'
import SingleLineGridList from './SingleLineGridList'
import { Grid, Button, Avatar, List, ListItem, ListItemText } from '@material-ui/core'
import '../css/DetailPage.css'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Collapsible from 'react-collapsible'
import axios from "axios/index";
import {connect} from "react-redux";
import CommentsList from './CommentsList'

const images = [
  {
    src: 'https://www.sideshowtoy.com/wp-content/uploads/2017/11/dc-comics-justice-league-batman-statue-prime1-studio-feature-903246-1.jpg',
    caption: 'Batman Exhibit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib.',
    altText: 'Batman'
  },
  {
    src: 'https://assets1.ignimgs.com/2018/08/06/batman-batwoman-series-1533579230710_1280w.jpg',
    caption: 'Batman Exhibit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib.',
    altText: 'Batman'
  }
]

const styles = {
  avatar: {
    margin: 20,
  },
  bigAvatar: {
    width: 80,
    height: 80,
  },
};

class Detail extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = { activeIndex: 0, 
      activeTab: '1',
      description: true,
      inspiration: true,
      artifacts: false,
      isLoaded: false,
      id: this.props.id
    }
    this.loadDetails()
  }

  loadDetails() {
    axios.get("/exhibit/" + this.state.id)
      .then(data => {
        if (data.data) {
          this.setState({description: data.data.title, inspiration:data.data.description, image:data.data.images[0], isLoaded: true})
        } else {
          this.setState({isLoaded: true})
        }
      })
      .catch(err =>
        console.log(err)
      )
  }

  onExiting = () => {
    this.animating = true
  }

  onExited = () => {
    this.animating = false
  }

  next = () => {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === images.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous = () => {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? images.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex = newIndex => {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {
    const { activeIndex, description, inspiration } = this.state
    const { classes } = this.props;
    const slides = images.map(img => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={img.src}
      >
        <img src={img.src} alt={img.altText} />
        <CarouselCaption captionText={img.description} captionHeader={img.caption} />
      </CarouselItem>
    ))

    return (
      <div>
        <Grid container direction="row" alignItems="center" spacing={24}>
            <Grid item sm={9}>
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                pause='hover'>
                <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
                <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
              </Carousel>
            </Grid>
            <Grid item sm={3}>
              <Card>
                <Avatar className={classnames(classes.avatar, classes.bigAvatar)} src='https://www.thefamouspeople.com/profiles/images/stan-lee-5.jpg'/>
                <CardBody>
                  <CardTitle>Stan Lee</CardTitle>
                  <CardSubtitle>comic-book writer</CardSubtitle>
                  <CardText>more information goes here</CardText>
                  <CardLink href='#'>Follow</CardLink>
                </CardBody>
              </Card>
              <div className='buttonWrapper'>
                <h4>325 people liked this idea!</h4>
                <Button variant="contained">Like This Idea!</Button>
              </div>
            </Grid>
          </Grid>
          <div className='detail-body'>
            <h4>Submitted Artifacts</h4>
            <Button variant="contained">Submit Your Artifact!</Button>
            <SingleLineGridList />
            <Collapsible trigger="Inspiration" open>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec.</p>
            </Collapsible>
            <Collapsible trigger="Description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec.</p>
            </Collapsible>
            <Collapsible trigger="Artifacts I want to see">
              <List>
                <ListItem>
                  <ListItemText primary="Batman Cape"/>
                </ListItem>
              </List>
            </Collapsible>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => {this.toggle('1')}}>
                  Comments
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => {this.toggle('2')}}>
                  Updates
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col xs="12">
                    <CommentsList />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col xs="12">
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </h5>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
      </div>)
  }
}

const mapStateToProps = ({detail}) => ({id:detail});
export default withStyles(styles)(connect(mapStateToProps)(Detail));
