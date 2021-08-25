import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";


function Form(props) {
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
    <form onSubmit={handleSubmit}>
      <br />
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label htmlFor="sku">SKU: </label>
      <input
        id="sku"
        type="text"
        value={sku}
        onChange={(e) => setSKU(e.target.value)}
      />
    <br />
      <label htmlFor="images">Images: </label>
      <input
        id="images"
        type="text"
        value={images}
        onChange={(e) => setImages(e.target.value)}
      />
      <br />
      <button type="submit">Add to Collection</button>
    </form>
  );
}

export default Form;
