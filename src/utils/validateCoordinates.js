export default function validateCoordinates(box, bounds, screenSize) {
  let {clientX, clientY} = box || {},
    {top, left} = bounds || {},
    arrow = {top: -18, bottom: null, borderBottomColor: '#4D4F5C', borderTopColor: null};
  
  if (clientY >= 600 || top >= 600) {
    clientY = clientY - 350;
    top = top - 350;
    arrow.bottom = arrow.top;
    arrow.top = null;
    arrow.borderTopColor = '#4D4F5C'
    arrow.borderBottomColor = null;
  }
  
  return {
    clientX: clientX || left,
    clientY: clientY || top,
    arrow
  }
}