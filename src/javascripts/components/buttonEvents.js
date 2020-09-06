import Data from '../helpers/data/quadrantsData';
import ShowQuadrant from './showQuadrants';

const calculateScore = (array, target) => {
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
    ShowQuadrant.showQuadrant(Data.getQuadrantData());
  });
};

const buttonEvents = () => {
  $('.button').on('click', (e) => {
    const target = e.target.id;
    calculateScore(Data.getQuadrantData(), target);
  });
};

export default { buttonEvents };
