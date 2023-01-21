import { useLocation } from 'react-router-dom';

export interface Path {
  path: string;
  lastParam: string;
}

export const usePathArray = (): Path[] => {
  const { pathname } = useLocation();
  const result = pathname
    .split('/')
    .slice(1)
    .map((el, i, arr) => ({ path: arr.filter((el2, j) => j <= i).join('/'), lastParam: el }));
  return result;
};
