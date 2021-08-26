import Carousel from "react-bootstrap/Carousel";

function About() {
  return (
    <>
      <div>
        <h1>Who is Sean Hughes?</h1>
        <br />
        <h1>
          When I'm not learning about software development, I enjoy photography.
          I mostly do portraits and family events such as graduations and
          weddings. Below are a few examples of my work.{" "}
        </h1>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="hughes"
            src="https://live.staticflickr.com/65535/51403026192_57457a51e9_o_d.jpg"
            alt="graduation"
          />
          <Carousel.Caption>
            <h3>Graduation</h3>
            <p>Photographed by Sean Hughes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="hughes"
            src="https://live.staticflickr.com/65535/51404750785_4bfbc96030_o_d.jpg"
            alt="sitting on the bench"
          />

          <Carousel.Caption>
            <h3>Graduation</h3>
            <p>Photographed by Sean Hughes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="hughes"
            src="https://live.staticflickr.com/65535/51404518399_7522e87327_k_d.jpg"
            alt="girl sitting on the bench"
          />

          <Carousel.Caption>
            <h3>Look at Me</h3>
            <p>Photographed by Sean Hughes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="hughes"
            src="https://live.staticflickr.com/65535/51403773146_e3cb8f05c9_h_d.jpg"
            alt="girl sitting on the bench"
          />

          <Carousel.Caption>
            <h3>Queen</h3>
            <p>Photographed by Sean Hughes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="hughes"
            src="https://live.staticflickr.com/65535/51404032238_06de13a43c_h_d.jpg"
            alt="graduation"
          />
          <Carousel.Caption>
            <h3>Graduation</h3>
            <p>Photographed by Sean Hughes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="hughes"
            src="https://live.staticflickr.com/65535/51403852681_2b61ddaaa9_k_d.jpg"
            alt="Married in Nature"
          />

          <Carousel.Caption>
            <h3>Married in Nature</h3>
            <p>Photographed by Sean Hughes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="hughes"
            src="https://live.staticflickr.com/65535/51403848936_fc63cb19ca_k_d.jpg"
            alt="Mom"
          />

          <Carousel.Caption>
            <h3>Happy 50th Birthday</h3>
            <p>Photographed by Sean Hughes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="hughes"
            src="https://live.staticflickr.com/65535/51404111978_2e9c609a27_k_d.jpg"
            alt="Married in Nature"
          />

          <Carousel.Caption>
            <h3>Married in Nature</h3>
            <p>Photographed by Sean Hughes</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default About;
