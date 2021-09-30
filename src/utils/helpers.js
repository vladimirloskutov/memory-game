import ICONS from './icons';

const getShuffledIcons = () => {
  const newIcons = JSON.parse(JSON.stringify(ICONS));
  return newIcons.sort(() => Math.random() - 0.5);
};

export default getShuffledIcons;
