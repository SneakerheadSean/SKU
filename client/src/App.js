import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { baseURL, config } from "./services";
import Sneaker from "./components/Sneaker";
import Form from "./components/Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Masonry from "react-masonry-css";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [modalShow, setModalShow] = useState(false);

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
            <Link to={`/${sneaker.id}`} key={index}>
              <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                <img
                  className="sneaker-pics"
                  onClick={() => setModalShow(true)}
                  src={sneaker.fields.images}
                  alt={sneaker.fields.name}
                />
              </Masonry>
            </Link>
          ))}
        </Route>
        <Route path="/new" exact>
          <Form setToggleFetch={setToggleFetch} />
        </Route>
        <Route path={"/:id"} exact>
          <Sneaker
            show={modalShow}
            onHide={() => setModalShow(false)}
            sneakers={sneakers}
            setToggleFetch={setToggleFetch}
          />
        </Route>
        <Route path="/edit/:id">
          <Form sneakers={sneakers} setToggleFetch={setToggleFetch} />
        </Route>
      </div>
    </>
  );
}

export default App;
