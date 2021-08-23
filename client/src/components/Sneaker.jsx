import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import axios from "axios";

function Sneaker(props) {
  const [name, setName] = useState("");
  const [sku, setSKU] = useState("");
  const [images, setImages] = useState("");

  const params = useParams();

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
  // console.log(sneaker)

  const removeSneaker = async () => {
    await axios.delete(`${baseURL}/${params.id}`, config);
    props.setToggleFetch((prevState) => !prevState);
  };

  return (
    <>
      <h1>{name}</h1>
      <h2>{sku}</h2>
      <img src={images} alt={name} />
      <button onClick={removeSneaker}>Remove From Collection!</button>
    </>
  );
}
export default Sneaker;
