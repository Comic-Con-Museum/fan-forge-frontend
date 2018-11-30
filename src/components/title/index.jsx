import React, { PureComponent } from 'react'

import {
  Container,
  TitleText
} from './Styled'

class Title extends PureComponent {
  render() {
    return (
      <Container {...this.props}>
        <TitleText {...this.props}>Fan Forge</TitleText>
        <TitleText {...this.props}>Fan Forge</TitleText>
      </Container>
    )
  }
}

export default Title