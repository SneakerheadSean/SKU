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
            src="https://live.staticflickr.com/65535/51403026192_be526979c7_c_d.jpg"
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
            src="https://live.staticflickr.com/65535/51404750785_aa64853fe2_c_d.jpg"
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
            src="https://live.staticflickr.com/65535/51404518399_2c2a4f1cfb_c_d.jpg"
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
            src="https://live.staticflickr.com/65535/51403773146_2e1cb43e6f_c_d.jpg"
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
            src="https://live.staticflickr.com/65535/51404032238_d882458e47_c_d.jpg"
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
            src="https://live.staticflickr.com/65535/51403852681_ca07a13c0e_c_d.jpg"
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
            src="https://live.staticflickr.com/65535/51403848936_58ee2052ba_c_d.jpg"
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
            src="https://live.staticflickr.com/65535/51404829740_10ef08d6df_c_d.jpg"
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
