import styles from "./CountryItem.module.css";
import { ICountry } from "./interfaces";

function CountryItem({ country }: { country: ICountry }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
