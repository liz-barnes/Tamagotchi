import Data from '../helpers/data/quadrantsData';
import ShowQuadrant from './showQuadrants';

const scoreMax = (action) => {
  if (action.score >= 100) {
    action.score = 100;
  }
};

const updateScore = (array, target) => {
  array.forEach((action) => {
    if (action.button1 === target) {
      action.score += action.button1Value;
    } else if (action.button2 === target) {
      action.score += action.button2Value;
    }
    $('#eat').html('');
    $('#play').html('');
    $('#fight').html('');
    $('#sleep').html('');
    scoreMax(action);
    ShowQuadrant.showQuadrant(Data.getQuadrantData());
  });
};

const buttonEvents = () => {
  $('body').on('click', '.button', (e) => {
    const target = e.target.id;
    updateScore(Data.getQuadrantData(), target);
  });
};

export default { buttonEvents };
