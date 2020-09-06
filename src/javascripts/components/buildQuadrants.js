const buildQuadrant = (action) => {
  const quadrant = `
    <div class= quad-${action.activity} id= quad-${action.activity} style="border: 2px solid #000000;">
      <div id="containerActivity${action.activity}">
        <h1><bold>${action.activity}</bold></h1>
      </div>
      <div id="containerScore${action.score}">
        <h3>${action.score}</h3>
      </div>
      <div id="containerButtons">
        <button class="button" id="${action.button1}">${action.button1}</button>
        <button class="button" id="${action.button2}">${action.button2}</button>
      </div>
    </div>
  `;
  return quadrant;
};

export default { buildQuadrant };
