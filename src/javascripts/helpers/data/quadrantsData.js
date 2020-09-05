const quadrantData = [
  {
    activity: 'Eat',
    score: 100,
    button1: 'Healthy',
    button1Value: 10,
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
    button1: 'Avoid Confrontation',
    button2: 'Put Em Up'
  },
  {
    activity: 'Sleep',
    score: 100,
    button1: 'Nap Pls',
    button2: 'CYA 2MRW'
  }
];

const getQuadrantData = () => quadrantData;

export default { getQuadrantData };
