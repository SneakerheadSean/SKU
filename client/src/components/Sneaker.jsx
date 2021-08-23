import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Sneaker(props) {

  const [name, setName] = useState("")
  const [sku, setSKU] = useState("")
  const [images, setImages] = useState("")
  
  const params = useParams()

  useEffect(() => {
    if (params.id && props.sneakers.length > 0) {
      const thisSneaker = props.sneakers.find(sneaker => params.id === sneaker.id)
      if (thisSneaker) {
        setName(thisSneaker.fields.name)
        setSKU(thisSneaker.fields.sku)
        setImages(thisSneaker.fields.images)
      }
    }


  }, [params.id, props.sneakers])

  return (
    <>
      <h1>{name}</h1>
      <h2>{sku}</h2>
      <img src={images} alt={name} />
      </>
  )

}
export default Sneaker