import ICONS from "./icons";

export const getShuffledIcons = () => {
  const newIcons = JSON.parse(JSON.stringify(ICONS));
  return newIcons.sort(() => Math.random() - 0.5);
};