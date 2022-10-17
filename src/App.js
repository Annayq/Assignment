import React, {useEffect, useState} from 'react';
import FunctionalSearch from './Component/FunctionalSearch';
import './App.css';


function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [menuData, setMenuData] = useState([]);

  useEffect(()=> {
    fetch("https://stream-restaurant-menu-svc.herokuapp.com/item")
      .then((res)=>{
        // if(res.ok){
          return res.json();
        // }
        // throw res;
      })
      .then((data => {
        setMenuData(data);
      }))
      .catch(error =>{
        // setIsLoaded(true);
        console.log("Something wrong when fetching data");
        // setError(error);
      })
  });
  
  return (
    <div className="App">
      <FunctionalSearch menu={menuData} />
    </div>
  );
}

export default App;
