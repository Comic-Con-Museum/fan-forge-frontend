import React, {Component} from 'react'
import SingleLineGridList from './SingleLineGridList'
import {Avatar, Button, Grid, List, ListItem, ListItemText, Chip} from '@material-ui/core'
import '../css/DetailPage.css'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import Collapsible from 'react-collapsible'
import axios from "axios/index";
import {connect} from "react-redux";
import CommentsList from './CommentsList'
import TextField from '@material-ui/core/TextField';
import {postArtifact} from "../actions";
import {bindActionCreators} from 'redux'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Card,
    CardBody,
    CardLink,
    CardSubtitle,
    CardText,
    CardTitle,
    Carousel,
    CarouselCaption,
    CarouselControl,
    CarouselIndicators,
    CarouselItem,
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from 'reactstrap'

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
    toggleArtifactModal = () => {
        console.log("pressed")
        console.log(JSON.stringify(this.state))
        this.setState({
            showArtifactModal: !this.state.showArtifactModal
        })
    }
    onExiting = () => {
        this.animating = true
    }
    onExited = () => {
        this.animating = false
    }
    next = () => {
        if (this.animating) return
        const nextIndex = this.state.activeIndex === this.state.images.length - 1 ? 0 : this.state.activeIndex + 1
        this.setState({activeIndex: nextIndex})
    }
    previous = () => {
        if (this.animating) return
        const nextIndex = this.state.activeIndex === 0 ? this.state.images.length - 1 : this.state.activeIndex - 1
        this.setState({activeIndex: nextIndex})
    }
    goToIndex = newIndex => {
        if (this.animating) return
        this.setState({activeIndex: newIndex})
    }
    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            activeTab: '1',
            isLoaded: false,
            id: this.props.id,
            showArtifactModal: false
        }
        this.loadDetails()
        this.submitArtifact = this.submitArtifact.bind(this);
    }

    loadDetails() {
        axios.get("/exhibit/" + this.state.id)
            .then(data => {
              console.log(data)
                if (data.data) {
                    this.setState({
                        description: data.data.description,
                        title: data.data.title,
                        inspiration: data.data.description,
                        image: data.data.images[0],
                        isLoaded: true,
                        tags: data.data.tags,
                        images: data.data.images,
                        uid: data.data.uid,
                        upvotes: data.data.upvotes
                    })
                } else {
                    this.setState({ isLoaded: true })
                }
            })
            .catch(err => undefined)
    }

    handleChange(name, event) {
        this.setState({
            [name]: event.target.value,
        });
    };

    submitArtifact(event) {
        this.props.postArtifact({
            title: this.state.title,
            description: this.state.description
        })
        this.setState({showArtifactModal: false})
    }

    render() {
        console.log(this.state)
        const {activeIndex, description, inspiration, upvotes, uid, image, tags, title, images} = this.state
        const {classes} = this.props;
        if(!this.state.upvotes) return <p> loading </p>
        const slides = images.map(curimg => (
            <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={curimg}
            >
                <img src={curimg} alt='Exhibit thumbnail'/>
                <CarouselCaption captionText={description} captionHeader={title}/>
            </CarouselItem>
        ))
        const chips = tags.map(tag => (
          <Chip
            style={{ marginRight: 10 }}
            label={tag}
            component='a'
            href={`/feed/tagged-${tag}`}
            clickable
          />
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
                            <CarouselIndicators items={images} activeIndex={activeIndex}
                                                onClickHandler={this.goToIndex}/>
                            {slides}
                            <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous}/>
                            <CarouselControl direction='next' directionText='Next' onClickHandler={this.next}/>
                        </Carousel>
                    </Grid>

                    <Grid item sm={3}>
                        <Card>
                            <Avatar className={classnames(classes.avatar, classes.bigAvatar)}
                                    src='https://www.thefamouspeople.com/profiles/images/stan-lee-5.jpg'/>
                            <CardBody>
                                <CardTitle>Stan Lee</CardTitle>
                                <CardSubtitle>comic-book writer</CardSubtitle>
                                <CardText>more information goes here</CardText>
                                <CardLink href={`/profile/${uid}`}>Follow</CardLink>
                            </CardBody>
                        </Card>
                        <div className='buttonWrapper'>
                            <h4>{Object.keys(upvotes).length} people support this idea!</h4>
                            <Button variant="contained">Support this idea!</Button>
                        </div>
                    </Grid>
                </Grid>
                <div className='detail-body'>
                    <div>
                        <h4>Submitted Artifacts</h4>
                        <Button variant="contained" onClick={this.toggleArtifactModal}>Submit Your Artifact!</Button>
                        <Modal
                            isOpen={this.state.showArtifactModal}
                            toggle={this.toggleArtifactModal}
                            className='exhibit-modal'
                            centered
                            size='lg'
                        >
                            <ModalHeader toggle={this.state.toggle}>Add An Artifact</ModalHeader>
                            <ModalBody>
                                <TextField
                                    label='Title'
                                    margin='normal'
                                    onChange={(event) => this.handleChange('title', event)}
                                    autoFocus
                                    className="title"
                                />{' '}
                                <TextField
                                    label='Description'
                                    margin='normal'
                                    onChange={(event) => this.handleChange('description', event)}
                                    autoFocus
                                    className="description"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color='primary' onClick={this.submitArtifact}>Submit</Button>
                            </ModalFooter>
                        </Modal>
                        <SingleLineGridList tileData={images}/>
                    </div>
                    <Collapsible trigger="Inspiration" open>
                        <p>
                          {inspiration}
                        </p>
                    </Collapsible>
                    <Collapsible trigger="Description">
                        <p>
                          {description}
                        </p>
                    </Collapsible>
                    <Collapsible trigger="Artifacts I want to see">
                        <List>
                            <ListItem>
                                <ListItemText primary="Batman Cape"/>
                            </ListItem>
                        </List>
                    </Collapsible>
                    <div>
                      <p>Tags</p>
                      {chips}
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '1'})}
                                    onClick={() => {
                                        this.toggleTab('1')
                                    }}>
                                    Comments
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === '2'})}
                                    onClick={() => {
                                        this.toggleTab('2')
                                    }}>
                                    Updates
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col xs="12">
                                        <CommentsList/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col xs="12">
                                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                                            Praesent libero. </h5>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>)
    }
}

const mapStateToProps = ({detail}) => ({id: detail});
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({postArtifact}, dispatch)
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Detail));
