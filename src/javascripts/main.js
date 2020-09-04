import '../styles/main.scss';
import quadrantsData from './helpers/data/quadrantsData';
import buildQuadrant from './components/buildQuadrants';

const init = () => {
  buildQuadrant.buildQuadrant(quadrantsData.getQuadrantData());
};

init();
