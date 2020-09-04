const buildQuadrant = () => {
  const quadrant = `
    <div id="containerQuadrant${activity}">
      <div id="containerActivity${activity}">${activity}</div>
      <div id="containerScore${score}">${score}</div>
      <div id="containerButtons">
        <button id="btn${button1}">${button1}</button>
        <button id="btn${button2}">${button2}</button>
      </div>
    </div>
  `;
  return quadrant;
};

export default { buildQuadrant };
