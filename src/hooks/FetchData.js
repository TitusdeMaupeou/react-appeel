import { useState, useEffect } from "react";

const FetchData = (url) => {
  const [dataState, setDataState] = useState({ data: [] });

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        await fetch(url)
          .then((resp) => resp.json())
          .then(function (d) {
            setDataState({
              ...dataState,
              data: d,
            });
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataFromApi();
  }, []);

  return [dataState];
};

export default FetchData;
