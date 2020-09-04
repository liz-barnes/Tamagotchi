const buildQuadrant = (action) => {
  const quadrant = `
    <div id="containerQuadrant${action.activity}">
      <div id="containerActivity${action.activity}">${action.activity}</div>
      <div id="containerScore${action.score}">${action.score}</div>
      <div id="containerButtons">
        <button id="btn${action.button1}">${action.button1}</button>
        <button id="btn${action.button2}">${action.button2}</button>
      </div>
    </div>
  `;
  return quadrant;
};

const showQuadrant = (array) => {
  array.forEach((action) => {
    if (action.name === 'Eat') {
      $('#eat').append(buildQuadrant());
    } else if (action.name === 'Play') {
      $('#play').append(buildQuadrant());
    } else if (action.name === 'Fight') {
      $('#fight').append(buildQuadrant());
    } else if (action.name === 'Sleep') {
      $('#sleep').append(buildQuadrant());
    }
  });
};

export default { buildQuadrant, showQuadrant };
