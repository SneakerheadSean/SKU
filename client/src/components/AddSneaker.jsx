import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddSneaker(props) {
  const [name, setName] = useState("");
  const [sku, setSKU] = useState("");
  const [images, setImages] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newSneaker = {
      name,
      sku,
      images,
    };
    await axios.post(baseURL, { fields: newSneaker }, config);
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Sneaker Name</Form.Label>
          <Form.Control
            placeholder="Nike Air Max"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className="text-muted">
            Enter the name of the sneaker you wish to add to your collection!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>SKU </Form.Label>
          <Form.Control
            placeholder="CD57188-800"
            id="sku"
            type="text"
            value={sku}
            onChange={(e) => setSKU(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Images</Form.Label>
          <Form.Control
            placeholder="Enter URL"
            id="images"
            type="text"
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Add to Collection</Button>
      </Form>
    </>
  );
}

export default AddSneaker;
