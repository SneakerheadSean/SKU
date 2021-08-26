import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../styles/Sneaker.css";
import { useHistory } from "react-router-dom";

function Sneaker(props) {
  const [name, setName] = useState("");
  const [sku, setSKU] = useState("");
  const [images, setImages] = useState("");

  
  const history = useHistory();

  useEffect(() => {
    if (props.id && props.sneakers.length > 0) {
      const thisSneaker = props.sneakers.find(
        (sneaker) => props.id === sneaker.id
      );
      if (thisSneaker) {
        setName(thisSneaker.fields.name);
        setSKU(thisSneaker.fields.sku);
        setImages(thisSneaker.fields.images);
      }
    }
  }, [props.id, props.sneakers]);

  const removeSneaker = async () => {
    await axios.delete(`${baseURL}/${props.id}`, config);
    props.setToggleFetch((prevState) => !prevState);
    history.push("/");
  };

  return (
    <>
      <Modal
        {...props}
        size="xxxl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>{name}</h1>
            <h2>{sku}</h2>
            <Button onClick={removeSneaker}>Remove From Collection!</Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="sneaker-info" src={images} alt={name} />
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Sneaker;
