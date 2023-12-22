export interface SearchShow {
  id: number;
  name: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface SelectedShow {
  id: number;
  name: string;
  image: Image;
  premiered: string;
  language: string;
}


interface ShowData {
  show: SelectedShow;
}




