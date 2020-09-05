const buildQuadrant = (action) => {
  const quadrant = `
    <div id="containerQuadrant${action.activity}">
      <div id="containerActivity${action.activity}">${action.activity}</div>
      <div id="containerScore${action.score}">${action.score}</div>
      <div id="containerButtons">
        <button class="button" id="${action.button1}">${action.button1}</button>
        <button class="button" id="${action.button2}">${action.button2}</button>
      </div>
    </div>
  `;
  return quadrant;
};

export default { buildQuadrant };
