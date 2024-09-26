import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const navigate = useNavigate();

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map {id}</h1>
      <h3>
        lat= {lat} and lng = {lng}
      </h3>
      <button
        onClick={() => {
          setSearchParams({ lat: "20", lng: "40" });
        }}
      >
        Change position
      </button>
    </div>
  );
}

export default Map;
