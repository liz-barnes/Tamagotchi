const quadrantData = [
  {
    name: 'eat',
    score: 100,
    button1: 'Healthy',
    button2: 'Unhealthy'
  },
  {
    name: 'play',
    score: 50,
    button1: 'Best time ever',
    button2: 'Have an OK time'
  },
  {
    name: 'fight',
    score: 100,
    button1: 'Avoid Confrontation',
    button2: 'Put Em Up'
  },
  {
    name: 'sleep',
    score: 100,
    button1: 'Nap Pls',
    button2: 'CYA 2MRW'
  }

];

const getQuadrantData = () => quadrantData;

export default { getQuadrantData };