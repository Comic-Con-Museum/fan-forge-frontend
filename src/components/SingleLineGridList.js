import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core/'
import InfoIcon from '@material-ui/icons/Info'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const tileData = [
  {
    img: 'https://img.etsystatic.com/il/7ae4a6/714259788/il_fullxfull.714259788_qa6m.jpg?version=0',
    title: 'Image',
    author: 'author',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib.'
  },
  {
    img: 'https://i0.wp.com/www.partyowlmanila.com/wp-content/uploads/2017/09/batmankids.jpg?fit=540%2C540&w=640',
    title: 'Image',
    author: 'author',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib.'
  },
  {
    img: 'https://c1.staticflickr.com/8/7333/27122863934_c86f2af42c_b.jpg',
    title: 'Image',
    author: 'author',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib.'
  },
  {
    img: 'http://www.blastoffcomics.com/wp-content/uploads/2017/09/Untitled-design156.png',
    title: 'Image',
    author: 'author',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib.'
  }
]

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  }
})


class SingleLineGridList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleOnInfoClicked = () => {
    this.setState({
      modal: true
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton>
                     <InfoIcon style={{color: "white"}} onClick={this.handleOnInfoClicked}/>
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        <Modal centered isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Artifact Name</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>ok</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(SingleLineGridList)