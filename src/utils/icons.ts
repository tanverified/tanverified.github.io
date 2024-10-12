import * as fab from '@fortawesome/free-brands-svg-icons';

export const getBrandIcon = (function () {
  const iconMap = {};
  for (const key in fab) {
    iconMap[key.replace('fa', '').toLowerCase()] = fab[key];
  }
  return function (name: string, fallback: fab.IconDefinition) {
    return iconMap[name.toLowerCase()] || fallback;
  };
}());
