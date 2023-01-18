export type Film = {
  id: number;
  name: string;
  genre: string;
  released: number;
  director: string;
  starring: [string];
  runTime: number;
  description: string;
  videoLink: string;
  previewVideoLink: string;
  previewImage: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  isFavorite: boolean;
  rating: number;
  scoresCount: number;
};
