import buildQuadrant from './buildQuadrants';

const showQuadrant = (array) => {
  array.forEach((action) => {
    if (action.activity === 'Eat') {
      $('#eat').html(buildQuadrant.buildQuadrant(action));
    } else if (action.activity === 'Play') {
      $('#play').html(buildQuadrant.buildQuadrant(action));
    } else if (action.activity === 'Fight') {
      $('#fight').html(buildQuadrant.buildQuadrant(action));
    } else if (action.activity === 'Sleep') {
      $('#sleep').html(buildQuadrant.buildQuadrant(action));
    }
  });
};

export default { showQuadrant };
