import '../styles/main.scss';
import quadrantsData from './helpers/data/quadrantsData';
import quadrant from './components/showQuadrants';
import buttonEvents from './components/buttonEvents';

const init = () => {
  quadrant.showQuadrant(quadrantsData.getQuadrantData());
  buttonEvents.buttonEvents();
};

init();
