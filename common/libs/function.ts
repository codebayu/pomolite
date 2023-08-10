import { v4 as uuidv4 } from 'uuid';

type SoundType = 'alarm' | 'click';

export const playSound = (type: SoundType) => {
  const source = type === 'alarm' ? '/alarm.wav' : 'clicked.wav';
  const audio = new Audio(source);
  audio.play();
};

export const generateUUID = () => {
  return uuidv4();
};

export const generateIdNumber = () => {
  const length = 8;
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
