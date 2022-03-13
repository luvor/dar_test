export interface Movie {
  id: number;
  title: string;
  original_title: string;
  type: string;
  year: string;
  country: string;
  director: string;
  genres: string[];
  actors: number[];
  slogan?: string;
  short_description: string;
  description: string;
  preview_img: string;
}
export interface Actor {
  id: number;
  name: string;
  height: string;
  birthdate: string;
  photo: string;
}
