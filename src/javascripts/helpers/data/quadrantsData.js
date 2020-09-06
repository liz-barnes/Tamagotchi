const quadrantData = [
  {
    activity: 'Eat',
    score: 100,
    button1: 'Healthy',
    button2: 'Unhealthy'
  },
  {
    activity: 'Play',
    score: 50,
    button1: 'Best time ever',
    button2: 'Have an OK time'
  },
  {
    activity: 'Fight',
    score: 100,
    button1: 'Run',
    button2: 'Fight'
  },
  {
    activity: 'Sleep',
    score: 100,
    button1: 'Nap',
    button2: 'Sleep'
  }
];

const getQuadrantData = () => quadrantData;

export default { getQuadrantData };
