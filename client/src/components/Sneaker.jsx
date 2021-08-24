import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import axios from "axios";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "../styles/Sneaker.css"
import { useHistory } from "react-router-dom"


function Sneaker(props) {
  const [name, setName] = useState("");
  const [sku, setSKU] = useState("");
  const [images, setImages] = useState("");

  const params = useParams();
  const history = useHistory()

  useEffect(() => {
    if (params.id && props.sneakers.length > 0) {
      const thisSneaker = props.sneakers.find(
        (sneaker) => params.id === sneaker.id
      );
      if (thisSneaker) {
        setName(thisSneaker.fields.name);
        setSKU(thisSneaker.fields.sku);
        setImages(thisSneaker.fields.images);
      }
    }
  }, [params.id, props.sneakers]);
  

  const removeSneaker = async () => {
    await axios.delete(`${baseURL}/${params.id}`, config);
    props.setToggleFetch((prevState) => !prevState);
    history.push("/")
  };
  
  return (
    
    <>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
      <h1>{name}</h1>
      <h2>{sku}</h2>
      <button onClick={removeSneaker}>Remove From Collection!</button>
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        
      <img className="sneaker-info" src={images} alt={name} />
          
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  
    
     </>
  );
}
export default Sneaker;
