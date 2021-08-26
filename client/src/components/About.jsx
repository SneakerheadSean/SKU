import Carousel from "react-bootstrap/Carousel";
import Accordion from 'react-bootstrap/Accordion'
import "../styles/AboutMe.css"


function About() {
  return (
    <div className="aboutme">
      
        <h1>
          My name is Sean Hughes and when I'm not learning about software development, I enjoy photography.
          I mostly do portraits and family events such as graduations and
          weddings. Below are a few examples of my work.{" "}
      </h1>
      <h1>Let's Connect</h1>
      <br />
      
      <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Instagram</Accordion.Header>
          <Accordion.Body>
            <a href="https://www.instagram.com/thehypebeastdeveloper/">Follow Me!</a>
  
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Twitter</Accordion.Header>
          <Accordion.Body>
            <a href="https://twitter.com/thehypebeastdev">Follow Me!</a>
  
    </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
    <Accordion.Header>LinkedIn</Accordion.Header>
          <Accordion.Body>
            <a href="https://www.linkedin.com/in/seanhughes3/">Let's Connect!</a>
  
    </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
    <Accordion.Header>GitHub</Accordion.Header>
          <Accordion.Body>
            <a href="https://github.com/SneakerheadSean">Let's Build Together!</a>
  
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
      

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
    </div>
  );
}

export default About;
