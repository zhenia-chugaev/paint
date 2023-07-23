import { get } from 'firebase/database';
import refs from './refs';

interface Drawing {
  id: string;
  dataUrl: string;
  authorId: string;
  timestamp: number;
}

interface Drawings {
  [id: Drawing['id']]: Drawing;
}

const loadDrawings = async () => {
  const data = await get(refs.drawings());
  return (data.exists() ? data.val() : {}) as Drawings;
};

export { loadDrawings };
export type { Drawing, Drawings };
