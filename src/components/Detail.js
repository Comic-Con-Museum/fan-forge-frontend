import React, {Component} from 'react'
import SingleLineGridList from './SingleLineGridList'
import {Avatar, Button, Grid, List, ListItem, ListItemText, Chip} from '@material-ui/core'
import '../css/DetailPage.css'
import classnames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import Collapsible from 'react-collapsible'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { clean, getBase64 } from '../helpers';
import Select from '@material-ui/core/Select';
import axios from "axios/index";
import {connect} from "react-redux";
import CommentsList from './CommentsList'
import TextField from '@material-ui/core/TextField';
import {postArtifact, postSurvey} from "../actions";
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
        this.toggleSupport = this.toggleSupport.bind(this);
        this.submitSurvey = this.submitSurvey.bind(this);
    }

    toggleSupport() {
      this.setState({
        modal: !this.state.modal
      })
    }

    handleTimeChange = event => {
      this.setState({ time: event.target.value })
    };

    handleLikelinessChange = event => {
      this.setState({ likeliness: event.target.value })
    };

    handleAmountChange = event => {
      this.setState({ amount: event.target.value })
    };

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
                        eid: data.data.eid,
                        tags: data.data.tags,
                        images: data.data.images,
                        uid: data.data.uid,
                        upvoteCount: Object.keys(data.data.upvotes).length,
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

    submitSurvey(e) {
      e.preventDefault()
      const stateCopy = Object.assign({}, this.state);
      delete stateCopy['modal']
      delete stateCopy['timeout']
      clean(stateCopy)
      this.props.postSurvey(stateCopy);
      this.setState({ upvoteCount: this.state.upvoteCount + 1 })
      this.toggleSupport()
    }

    submitArtifact(event) {
        this.props.postArtifact({
            title: this.state.title,
            description: this.state.description
        })
        this.setState({ showArtifactModal: false })
    }

    render() {
        console.log(this.state)
        const {activeIndex, description, inspiration, upvotes, upvoteCount, uid, image, tags, title, images} = this.state
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
                        <div onClick={this.toggleSupport} className='buttonWrapper'>
                            <h4>{upvoteCount} people support this idea!</h4>
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
                                        <CommentsList />
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
                  <Modal
                  backdrop='static'
                  isOpen={this.state.modal}
                  toggle={this.toggleSupport}
                  className='exhibit-modal'
                  centered
                  size='lg'>
                    <ModalHeader>Support Survey</ModalHeader>
                    <ModalBody>
                      <h5>What part of day do you see yourself coming to the exhibit?</h5>
                      <FormControl fullWidth={1}>
                        <InputLabel>Time</InputLabel>
                        <Select
                          value={this.state.time}
                          onChange={this.handleTimeChange}
                          input={<Input name="Time" />}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value='Morning'>Morning</MenuItem>
                          <MenuItem value='Noon'>Noon</MenuItem>
                          <MenuItem value='Evening'>Evening</MenuItem>
                          <MenuItem value='Night'>Night</MenuItem>
                          <MenuItem value='Late Night'>Late Night</MenuItem>
                        </Select>
                      </FormControl>
                      <h5 style={{marginTop: 30}}>If this exhibit gets built, how likely are you to visit?</h5>
                      <FormControl fullWidth={1}>
                        <InputLabel>Likeliness</InputLabel>
                        <Select
                          value={this.state.likeliness}
                          onChange={this.handleLikelinessChange}
                          input={<Input name="" />}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value='I will not'>I will not</MenuItem>
                          <MenuItem value='Not Very'>Not very likely</MenuItem>
                          <MenuItem value='Maybe'>Maybe</MenuItem>
                          <MenuItem value='Most Likely'>Most Likely</MenuItem>
                          <MenuItem value='Definitely'>Definitely</MenuItem>

                        </Select>
                      </FormControl>
                      <h5 style={{marginTop: 30}}>How much would you spend to see this exhibit?</h5>
                      <FormControl fullWidth={1}>
                        <InputLabel>Amount</InputLabel>
                        <Select
                          value={this.state.amount}
                          onChange={this.handleAmountChange}
                          input={<Input name="Amount" />}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value='10'>$5 to $10</MenuItem>
                          <MenuItem value='25'>$10 to $25</MenuItem>
                          <MenuItem value='50'>$25 to $50</MenuItem>
                          <MenuItem value='75'>$50 to $75</MenuItem>
                          <MenuItem value='More'>$75+</MenuItem>

                        </Select>
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={this.submitSurvey}>Support this idea!</Button>{' '}
                      <Button color="secondary" onClick={this.toggleSupport}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </div>
            </div>)
    }
}

const mapStateToProps = ({detail}) => ({id: detail});
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({postArtifact, postSurvey}, dispatch)
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Detail));
