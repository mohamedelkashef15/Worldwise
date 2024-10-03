import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext({
  cities: [],
  isLoading: false,
});

function CitiesProvider({ children }: { children: React.ReactNode }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There are error while fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    getCities();
  }, []);
  return <CitiesContext.Provider value={{ cities, isLoading }}>{children}</CitiesContext.Provider>;
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("Cities context was used outside the cities provider");
  return context;
}

export { CitiesProvider, useCities };
