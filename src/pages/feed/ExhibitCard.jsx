import React from 'react';
import {
  ExhibitContainer, ExhibitTitle, ExhibitDescriptionDiv, ExhibitDescriptionText, Tag
} from './StyledComponents';

const ExhibitCard = ({title, description, tags}) => {
  return (
    <ExhibitContainer>
      <ExhibitTitle>{title}</ExhibitTitle>
      <ExhibitDescriptionDiv>
        <ExhibitDescriptionText>
          {description}
        </ExhibitDescriptionText>
        <div style={{display: 'flex'}}>
          {tags.map((item) => {
            return <Tag>{item}</Tag>
          })}
        </div>
      </ExhibitDescriptionDiv>
    </ExhibitContainer>
  );
}

export default ExhibitCard;