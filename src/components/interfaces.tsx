export interface ICities {
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
export interface ICountry {
  country: string;
  emoji: string;
}
