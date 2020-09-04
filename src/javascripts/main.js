import '../styles/main.scss';
import quadrantsData from './helpers/data/quadrantsData';
import quadrant from './components/showQuadrants';

const init = () => {
  quadrant.showQuadrant(quadrantsData.getQuadrantData());
};

init();
