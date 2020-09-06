import Data from '../helpers/data/quadrantsData';
import ShowQuadrant from './showQuadrants';

// const addScore = (array) => {
//   activity.score += 10;
// };

const calculateScore = (array, target) => {
  array.forEach((action) => {
    if (action.button1 === target) {
      action.score += action.button1Value;
      // const scoreChange = action.score + action.button1Value;
      // console.log(scoreChange, 'score');
      // Data.getQuadrantData().push(scoreChange);
      // // return scoreChange;
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
    console.log(target, 'btn id');
    // $(target).on('click', () => {
    //   console.log('target clicked');
    //   // activity.score += 10;
    // });
  });
};

// const buttonFunction = () => {

// };

//   $('button').click((e => {
//     const target = e.target.id;
//   }));

//   if (target === )
// };

// export default { buttonEvents };

// $('#btnHealthy').click(( {
//   console.log("clicked", btn)
// }));

// const buttonEvents = () => {
//   $('#btnHealthy').on('click', () => {
//     console.log('clicked');
//   });
// };

// buttonEvents();

// console.log("hi");
export default { buttonEvents };
