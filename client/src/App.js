import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { baseURL, config } from "./services";
import Sneaker from "./components/Sneaker";
import AddSneaker from "./components/AddSneaker";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Nav from "react-bootstrap/Nav";
import About from "./components/About";


function App() {
  const [sneakers, setSneakers] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const getSneakers = async () => {
      const resp = await axios(baseURL, config);
      setSneakers(resp.data.records);
    };
    getSneakers();
  }, [toggleFetch]);
  return (
    <>
      <header className="App-Header">
        <div className="App-Name">
          <Link to="/">
            <h1>SKU</h1>
          </Link>

          <div className="profile-pic">
            <img
              src="https://live.staticflickr.com/65535/51401900331_08e1b76742_o_d.jpg"
              alt="Sean Hughes sitting down"
            />
          </div>
        </div>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link>
              <Link to="/new">
                <h3>Add Sneaker</h3>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/About-Me">
                <h3>About Me</h3>
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>

      <div className="App">
        <Route path="/" exact>
          {sneakers.map((sneaker, index) => (
            
            <CardGroup>
              <Card>
                <img
                  className="sneaker-pics"
                  onClick={() => {
                    setId(sneaker.id);
                    setModalShow(true);
                  }}
                  src={sneaker.fields.images}
                  alt={sneaker.fields.name}
                />
              </Card>
            </CardGroup>
            
          ))}
          <Sneaker
            show={modalShow}
            id={id}
                        onHide={() => setModalShow(false)}
            sneakers={sneakers}
            setToggleFetch={setToggleFetch}
          />
        </Route>
        <Route path="/new" exact>
          <AddSneaker setToggleFetch={setToggleFetch} />
        </Route>
        
        <Route path="/edit/:id">
          <AddSneaker sneakers={sneakers} setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/About-me">
          <About />
        </Route>
      </div>
        
    </>
     
  );
}

export default App;
