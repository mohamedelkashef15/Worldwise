export interface ICites {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: { lat: number; lng: number };
  id: number;
}

export interface ICityItem {
  cityName: string;
}
