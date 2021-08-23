import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { baseURL, config } from "./services";
import Sneaker from "./components/Sneaker";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getSneakers = async () => {
      const resp = await axios(baseURL, config);
      console.log(resp.data.records);
      setSneakers(resp.data.records);
    };
    getSneakers();
  }, [toggleFetch]);
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/new">Add Sneaker</Link>
      </nav>
      <div className="App">
        <Route path="/" exact>
          {sneakers.map((sneaker, index) => (
            <Link to={`/${sneaker.id}`}>{sneaker.fields.name}</Link>
          ))}
        </Route>
        <Route path="/new" exact>
          <Form setToggleFetch={setToggleFetch} />
        </Route>
        <Route path={"/:id"} exact>
        <Sneaker sneakers={sneakers}/>
      </Route>
      <Route path='/edit/:id'>
        <Form sneakers={sneakers} setToggleFetch={setToggleFetch} />
      </Route>
      </div>
    </>
  );
}

export default App;
