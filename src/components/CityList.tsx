import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { ICites } from "./interfaces";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, isLoading }: { cities: ICites[]; isLoading: boolean }) {
  if (isLoading) return <Spinner />;
  if (cities.length === 0) return <Message message={"Add your first city by clicking on the map"} />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city: ICites) => {
        return <CityItem city={city} key={city.cityName} />;
      })}
    </ul>
  );
}

export default CityList;
