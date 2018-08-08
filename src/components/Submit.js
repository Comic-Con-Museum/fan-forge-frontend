import React from 'react'
import '../css/Submit.css'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' 
import { Row, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      title: '',
      description: '',
      picture: '',
    }
  }

  handleChange(value, fieldName) {
    const newState = {};
    newState[fieldName] = value;
    this.setState(newState);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    //this.props.submitForm(this.state);
  }

  render() {
    return (
      <Container>
        <Row>
          <Form onSubmit={this.handleFormSubmit}>
            <span class="input input--manami">
              <input class="input__field input__field--manami" type="text" id="input-32" />
              <label class="input__label input__label--manami" for="input-32">
                <span class="input__label-content input__label-content--manami">Username</span>
              </label>
            </span>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input onChange={(value) => this.handleChange(value, 'description')} value={this.state.description} type="textarea" name="description" id="description" />
            </FormGroup>
            <FormGroup>
              <Label for="picture">Picture</Label>
              <Input type="file" name="picture" multiple id="picture" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Tags</Label>
              <TagsInput addOnBlur value={this.state.tags} onChange={(value) => this.handleChange(value, 'tags')} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Top Artifact</Label>
              <Input name="topArtifact" id="topArtifact" />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </Row>
      </Container>
    );
  }
};