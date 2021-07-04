

React app die verbinding maakt met de Github API voor Appeel. Het toont alle repos van Redux bedenker en React expert Dan Abramov. Op de eerste pagina kan je je favoriete repos kiezen, die dan automatisch bovenaan de tabel worden gezet. Click je op een repo dan kom je op een detailpagina terecht met de 20 laatste commits.

Gemaakt met:
  - React,
  - Redux
  - Material UI
  - CSS modules

Hier licht ik 2 ES6 methodes toe: Dit is een methode die ervoor zorgt dat de state van de favorieten overschreven wordt met een nieuwe state. De nieuwe state wordt dus de payload, in dit geval een id (geen object). De spread operator is in principe niet nodig omdat er maar 1 value overschreven wordt, maar is handig voor als in de toekomst meer values overschreven zouden moeten worden.

```javascript
export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      const favourites = state.favourites.filter(
        (item) => item !== action.payload
      );
      return {
        ...state,
        favourites,
      };
    default:
      return state;
  }
};
```

Deze methode maakt gebruik van de Fetch API om op een asynchrone manier data van de Github API op te halen. De state wordt geinitialiseerd als een lege array en wordt overschreven eens de data is omgevormd tot JSON formaat. De file zit in een aparte hooks folder en wordt geexporteerd. Dit zorgt voor modulariteit omdat de presentatie van het component en het ophalen van data gescheiden worden.

```javascript
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
```

Stappen:

git clone https://github.com/TitusdeMaupeou/react-appeel.git

npm i

npm start

tests: npm run test
