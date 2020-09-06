const quadrantData = [
  {
    activity: 'Eat',
    score: 100,
    button1: 'Healthy',
    button2: 'Unhealthy',
    button1Value: 10,
    button2Value: -3
  },
  {
    activity: 'Play',
    score: 50,
    button1: 'Fun',
    button2: 'Content',
    button1Value: 50,
    button2Value: 2
  },
  {
    activity: 'Fight',
    score: 100,
    button1: 'Run',
    button2: 'Fight',
    button1Value: 1,
    button2Value: -10
  },
  {
    activity: 'Sleep',
    score: 100,
    button1: 'Nap',
    button2: 'Sleep',
    button1Value: 50,
    button2Value: 60
  }
];

const getQuadrantData = () => quadrantData;

export default { getQuadrantData };
