

React app die verbinding maakt met de Github API voor Appeel. Het toont alle repos van Redux bedenker en React expert Dan Abramov. Op de eerste pagina kan je je favoriete repos kiezen, die dan automatisch bovenaan de tabel worden gezet. Click je op een repo dan kom je op een detailpagina terecht met de 20 laatste commits.

Gemaakt met:
  - React,
  - Redux
  - Material UI
  - CSS modules

Hier licht ik 2 ES6 methodes toe: Dit is een methode die ervoor zorgt dat de state van de favorieten overschreven wordt met een nieuwe state. De nieuwe state wordt dus de payload, in dit geval een id (geen object).

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
Deze methode maakt gebruik van de Fetch API om op een asynchrone manier data van de Github API op te halen. De state wordt geinitialiseerd als een lege array en wordt overschreven eens de data is omgevormd tot JSON formaat. Eerst heb ik dit gedaan via een aparte hook, maar heb daarna de code gerefactored zodat Redux Thunk instaat voor de asynchrone side effects. De dispatch methode zorgt ervoor dat de setRepos action naar de repo store gestuurd wordt.

```javascript
export const fetchRepos = () => async (dispatch, getState) => {
  const data = await fetch(API_URL).then((res) => res.json());

  dispatch(setRepos(data));
};
```
Het ophalen van de data wordt getriggerd net voor het renderen van de app.

```javascript
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchRepos());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
}
```

Stappen:

git clone https://github.com/TitusdeMaupeou/react-appeel.git

npm i

npm start

tests: npm run test
