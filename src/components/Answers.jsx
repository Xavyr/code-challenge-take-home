import React from 'react';
import Icon from '@material-ui/core/Icon';

//determining whether a positive or negative icon is applied to the result component
const determinePlusMinusIcons = (userCorrect) => {
  if(userCorrect === "yes") {
    return  <Icon color="primary">add_circle</Icon>;
  } else {
    return <Icon color="secondary">not_interested</Icon>;
  }
}

const Answers = props =>
  <div>
    <h2>{determinePlusMinusIcons(props.userCorrect)}{" " + props.title}</h2>
    <br/>
  </div>


export default Answers;