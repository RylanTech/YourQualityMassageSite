import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet-async';

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>Quality Massage Homepage</title>
                <meta name="title" content="Quality Massage"/>
                <meta name="description" content="The homepage for quality massage where you can get information about us"/>
                <meta name="keywords" content="Massage, relax, chill, break, comfort, Richmond VA, local business, calm, time off, Homepage"/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <link rel='canonical' href='/'/>
            </Helmet>
            <Container>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 slide brdr"
                src="Images/photo1.jpeg"
                alt="Quality Massage relax"
                />
                <Carousel.Caption>
                <p className='slidetxt'>Get your massage for an affordable price!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slide brdr"
                src="Images/photo2.png"
                alt="Quality Massage Start at $85"
                />
                <Carousel.Caption>
                <p className='slidetxt'>Book your appointment today!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slide brdr"
                src="Images/photo3.png"
                alt="Welcome to Quality Massage!"
                />
                <Carousel.Caption>
                <p className='slidetxt'>Feeling stressed? We can help with that!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>
        <Row>
            <br/>
            <div className='col-12 col-md-6'>
            <Container>
                <Row>
                    <Card className='cclr1'>
                    <Card.Body>
                        <Card.Title>Need to relax?</Card.Title>
                        <Card.Text>
                            Schedule your appointment today and take your time to relax! Our prices start at just $85!
                        </Card.Text>
                        <Link to="/schedule" className="btn btn-light">Schedule your massage!</Link>
                    </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className='cclr3'>
                        <Card.Body>
                            <Card.Text>
                            My mission at Quality Home Massage, LLC is to provide a sanctuary with treatments customized to each client personally. I take a holistic approach to your healing journey, utilizing every tool and modality to ensure your tension and pain is released and you are able to function better than before mentally, physically, spiritually and emotionally. My vision is to get every knot out, and give you homework to care for yourself to keep the tension away. The world may fall apart, but your health does not have to. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            </div>
            <br/>
            <div className='col-12 col-md-6'>
            <Card className='cclr2'>
                <Card.Body>
                    <Card.Img className='brdr cardwi' variant="top" src="Images/Annelise2.jpg" alt="Annelise"/>
                </Card.Body>
            </Card>
            </div>
        </Row>
        </Container>
        <footer>
            <Container>
                <Row>
                    <div className='col-12 col-md-6 col-lg-8 col-xxl-9'>
                        Website made by Rylan Workman
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 col-xxl-3'>
                        Email: QualityMassageLLC@gmail.com<br/>
                        or call {`(804)`}-972-7672
                    </div>
                </Row>
            </Container>  
            </footer>
        </div>
        
    )
}
export default HomePage