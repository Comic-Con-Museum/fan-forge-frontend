import React from 'react'

export default (props) => (
  <div className={`${props.className} ${props.currentStep === props.stepNumber ? '' : 'hide'}`}>
    {props.children}
  </div>
);