import React, { PureComponent } from 'react';
import AriaModal from 'react-aria-modal';
import Dropzone from 'react-dropzone'

import {
  Artifact,
  ArtifactImg,
  ImageSection,
  HorizontalSection,
  RemoveArtifact,
  SubmitButton,
  SubmitForm
} from './StyledComponents';

class Submit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        images: [], // base64 data array to show
        files: [] // references to the file objects
    };
  }

  getApplicationNode = () => {
    return document.getElementById('root');
  };

  onDrop = (acceptedFiles) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {

        // append the data url (base64) so that I can do src="..."
        const fileAsBase64String = reader.result;
        this.setState(prevState => ({
          images: [...prevState.images, fileAsBase64String],
          files: [...prevState.files, file]
        }));
      };
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsDataURL(file);
    });
  }

  removeArtifact = (index) => {
    this.setState({
      images: this.state.images.filter((_, i) => i !== index),
      files: this.state.files.filter((_, i) => i !== index)
    });
  }

  submit = () => {
    alert("submit clicked");

    this.props.deactivateModal();
  }

  renderImage = (data, index) => {
    return (
      <Artifact
        key={index}
      >
        <RemoveArtifact onClick={() => this.removeArtifact(index)}>
          X
        </RemoveArtifact>
        <ArtifactImg src={data} />
      </Artifact>
    );
  }

  render() {
    return (
      <AriaModal
        titleText={`Supporting exhibit: ${this.props.title}`}
        onExit={this.props.deactivateModal}
        initialFocus="#demo-one-modal"
        getApplicationNode={this.getApplicationNode}
        underlayStyle={{ paddingTop: '2em' }}
      >
        <SubmitForm id="demo-one-modal">
          <div>
            Add some images to show off your exhibit,
            the first one will be the cover
          </div>
          <HorizontalSection>
            <ImageSection>
              {this.state.images.map((data, index) => this.renderImage(data, index))}
            </ImageSection>
            <Dropzone
              accept={'image/*'}
              onDrop={this.onDrop}
            >
              Drag and drop some files here, or click to add them
            </Dropzone>
          </HorizontalSection>

          <SubmitButton onClick={this.submit}>Submit</SubmitButton>
        </SubmitForm>
      </AriaModal>
    );
  }
}

export default Submit;
