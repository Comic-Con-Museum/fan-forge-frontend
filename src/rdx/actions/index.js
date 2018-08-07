export function sampleClick(number) {
  return {
    type: 'SAMPLE_BUTTON_CLICK',
    payload: number + 1
  };
}
