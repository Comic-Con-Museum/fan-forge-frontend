import React, { PureComponent } from 'react';
import AriaModal from 'react-aria-modal';
import Dropzone from 'react-dropzone'
import CreatableSelect from 'react-select/lib/Creatable';
import { fetchTags } from '../../utils/api';
import { createExhibit } from '../../utils/api';

import axios from 'axios';
import './style.scss';

import {
  Artifact,
  ArtifactImg,
  ImageSection,
  VerticalSection,
  Label,
  RemoveArtifact,
  Splitter,
  SubmitButton,
  SubmitForm,
  TextArea,
  TitleInput,
  SubmitFormTitle,
  SubmitFormRow,
  TagSupport,
  TagContainer,
  TagTitle
} from './StyledComponents';

class Submit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        images: [], // base64 data array to show
        files: [], // references to the file objects
        // options for the dropdown
        options: [{ label: 'Loading', value: '' }],
        tags: [],
        title: '',
        description: ''
    };
  }

  componentDidMount() {
    fetchTags().then(result => {
      const tagData = [].concat(result.data.map(tag => ({
        label: tag,
        value: tag
      })));
      this.setState({ options: tagData });
    });
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

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  handleTagsChange = (newValues) => {
      const tags = [];
      newValues.map(tag => tags.push(tag.value));
      this.setState({ tags });
  };

  submit = () => {
    const { tags, title, description, images } = this.state;
    if (!tags || !title || !description || !images) {
        alert("All fields must be filled out, and there must be at least one image.");
    }
    const artifacts = [];
    this.state.files.map(file => artifacts.push({
        image: file.name,
        cover: false,
        // TODO add these fields to the form & detail page, required by backend
        title: "A title",
        description: "A description"
    }));
    // first one is cover
    artifacts[0].cover = true;

    const data = {
      title, description, tags, artifacts
    };

    const sent = new FormData();
    sent.append('data', JSON.stringify(data));
    this.state.files.map(file =>
        sent.append(file.name, file)
    );

    createExhibit(
      sent,
      () => alert("posted"),
      () => alert("failed")
    );
    //this.props.deactivateModal();
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
        focusDialog
        getApplicationNode={this.getApplicationNode}
        underlayStyle={{ paddingTop: '2em' }}
      >
        <SubmitForm>
          <SubmitFormTitle>Submit an exhibit</SubmitFormTitle>
          <SubmitFormRow>Add some images to show off your exhibit, the first one will be the cover </SubmitFormRow>
          <VerticalSection>
            <Dropzone id="dropzone-images"
              accept={'image/*'}
              onDrop={this.onDrop}
            >
              Drag and drop some files here, or click to add them
            </Dropzone>
            <ImageSection>
              {this.state.images.map((data, index) => this.renderImage(data, index))}
            </ImageSection>
          </VerticalSection>
          <Splitter>
            <Label>
              Title
              <TitleInput
                name="Title"
                type="text"
                value={this.state.title}
                placeholder="My Cool Exhibit"
                onChange={this.handleTitleChange} />
            </Label>

            <Label>
              Description
              <TextArea
                name="Description"
                value={this.state.description}
                placeholder="Why this is the best idea ever"
                onChange={this.handleDescriptionChange} />
            </Label>
          </Splitter>
          <TagContainer>
            <TagTitle>Tags</TagTitle>
            <TagSupport>Select or type to create your own</TagSupport>
              <CreatableSelect
                isMulti
                options={this.state.options}
                onChange={this.handleTagsChange}
              />
          </TagContainer>
          <SubmitButton onClick={this.submit}>Submit</SubmitButton>
        </SubmitForm>
      </AriaModal>
    );
  }
}

export default Submit;
