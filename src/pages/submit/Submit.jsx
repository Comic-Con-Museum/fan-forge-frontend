import React, { Component } from 'react';
import axios from 'axios';

import {
  PageWrapper,
  Title,
  Heading
} from './StyledComponents';

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        description: "",
        tags: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
      this.setState({ title: event.target.value });
  }

  handleDescriptionChange(event) {
      this.setState({ description: event.target.value });
  }

  handleTagsChange(event) {
      this.setState({ tags: event.target.value });
  }

  handleSubmit(event) {
      event.preventDefault();

      const { description, title } = this.state;
      const tags = [];

      if (!description || !title) {
          alert("Description and title must be filled in.");
          return;
      }
      const headers = {
          "Content-Type": "application/json",
          "Authorization": "Bearer zjones"
      }
      axios.post('http://localhost:8080/exhibit/', { description, title, tags }, { headers: headers })
        .then(() => {
            alert("Exhibit posted, see it in the feed!");
        })
        .catch(() => {
            alert("Exhibit couldn't be posted, please try again later.");
        });

  }

  render() {
    return (
      <PageWrapper>
        <Title>Have an idea of your own?</Title>
        <Heading>That's awesome! We will show you a live preview of your post on the right as we walk you through
            the process on the left.</Heading>
        <Heading>Let's get down to basics</Heading>

        <form onSubmit={this.handleSubmit}>
            <label>Exhibit name:
                <input type="text" value={this.state.title} onChange={this.handleNameChange} />
            </label>
            <label>Provide us with a detailed description of this exhibit, including all necessary background knowledge.
                <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
            </label>
            <label>Add some tags to your post to make it easier for others to find! (Comma separated)
                <input type="text" value={this.state.tags} onChange={this.handleTagsChange} />
            </label>
            <input type="submit" value="Finish" />
        </form>
      </PageWrapper>
    );
  }
}

/*
Also we had a tag system, where when you typed something and hit enter, it will add a tag icon with the text
  next to the input. That was nice.

Fields we used to have in the OG MVP that we don't here:

 - short summary
 - thumbnail
 - additional images
 - inspiration
 - Tell us the kind of things you want to see in this exhibit
*/

export default Submit;
