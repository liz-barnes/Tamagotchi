import Data from '../helpers/data/quadrantsData';

// const addScore = (array) => {
//   activity.score += 10;
// };

const calculateScore = (array, target) => {
  console.log(array, 'array');
  console.log(target, 'target');
  array.forEach((activity) => {
    if (activity.button1 === target) {
      const scoreChange = activity.score + activity.button1Value;
      return scoreChange;
    }
  });
};

const buttonEvents = () => {
  $('.button').on('click', (e) => {
    const target = e.target.id;
    calculateScore(Data.getQuadrantData(), target);
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
