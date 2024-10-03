import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import { ICountry } from "./interfaces";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;
  if (cities.length === 0) return <Message message={"Add your first city by clicking on the map"} />;

  /*
    Display only unique countries that user visits 
      - check if inital array includes country inside the city
      - if so then return arr
      - otherwise display current arr then add country to inital array
  */

  const countries: ICountry[] = cities.reduce((arr: ICountry[], city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { emoji: city.emoji, country: city.country }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i} />
      ))}
    </ul>
  );
}
export default CountryList;
