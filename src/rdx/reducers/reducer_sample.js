export default function(state = 0, action) {

  switch(action.type) {
    case 'SAMPLE_BUTTON_CLICK':
      return action.payload;
  }
  
  return state;
}
