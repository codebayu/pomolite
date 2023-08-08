type SoundType = 'alarm' | 'click';

export const playSound = (type: SoundType) => {
  const source = type === 'alarm' ? '/alarm.wav' : 'clicked.wav';
  const audio = new Audio(source);
  audio.play();
};
