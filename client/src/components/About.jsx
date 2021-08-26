import Carousel from 'react-bootstrap/Carousel'

function About() {
  return (
    <>
      <h1>Who is Sean Hughes?</h1>
      <p>When I'm not learning about software development, I enjoy photography and cinematagraphy. I love the </p>




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
            <p>
              Photographed by Sean Hughes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
            </>
    );
  }

export default About;