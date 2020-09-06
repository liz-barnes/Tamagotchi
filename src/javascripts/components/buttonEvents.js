import Data from '../helpers/data/quadrantsData';
import ShowQuadrant from './showQuadrants';

// const calculateButtonOne = (action) => {
//   Data.getQuadrantData().score += action.button1Value;
// };

// const calculateButtonTwo = (action) => {
//   Data.getQuadrantData().score += action.button2Value;
// };

const updateScore = (array, target) => {
  array.forEach((action) => {
    if (action.button1 === target) {
      // calculateButtonOne(action);
      action.score += action.button1Value;
      // const scoreChange = action.score + action.button1Value;
      // Data.getQuadrantData().push(scoreChange);
      // console.log(scoreChange);
      // return scoreChange;
    } else if (action.button2 === target) {
      // calculateButtonTwo(action);
      action.score += action.button2Value;
    }
    $('#eat').html('');
    $('#play').html('');
    $('#fight').html('');
    $('#sleep').html('');
    ShowQuadrant.showQuadrant(Data.getQuadrantData());
  });
};

// const buttonEventFunction = (e) => {
//   const target = e.target.id;
//   updateScore(Data.getQuadrantData(), target);
// };

const buttonEvents = () => {
  // $('body').on('click', ''.button buttonEventFunction);
  $('body').on('click', '.button', (e) => {
    const target = e.target.id;
    updateScore(Data.getQuadrantData(), target);
  });
};

export default { buttonEvents };
