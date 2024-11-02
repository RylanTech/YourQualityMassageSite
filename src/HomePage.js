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
                <title>Reset Massage Homepage</title>
                <meta name="title" content="Quality Massage" />
                <meta name="description" content="The homepage for Reset Massage where you can get information about us" />
                <meta name="keywords" content="Massage, relax, chill, break, comfort, Richmond VA, local business, calm, time off, Homepage" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slide brdr"
                            src="./Images/AnnelisesPhotos/Graphics/psa.png"
                            alt="Reset Massage relax"
                        />
                        <Carousel.Caption>
                            <p className='slidetxt'>Feeling stressed? We can help with that!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slide brdr"
                            src="./Images/AnnelisesPhotos/Graphics/slide.JPG"
                            alt="Reset Massage Start at $125"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slide brdr"
                            src="./Images/AnnelisesPhotos/Graphics/photo1.jpg"
                            alt="Welcome to Reset Massage!"
                        />
                        <Carousel.Caption>
                            <p className='slidetxt'>Book your appointment today!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slide brdr"
                            src="./Images/AnnelisesPhotos/Graphics/psa2.png"
                            alt="Welcome to Reset Massage!"
                        />
                        <Carousel.Caption>
                            <p className='slidetxt'>Get your massage for an affordable price!</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                </Carousel>
                <br />
                <Row>
                    <br />
                    <div className='col-12 col-md-6'>
                        <Container>
                            {/* <Row>
                                <Card className='cclr1'>
                                    <Card.Body>
                                        <Card.Title>Need to relax?</Card.Title>
                                        <Card.Text>
                                            Schedule your appointment today and take your time to relax! Our prices start at just $85!
                                        </Card.Text>
                                        <Link to="/schedule" className="btn btn-light">Schedule your massage!</Link>
                                    </Card.Body>
                                </Card>
                            </Row> */}
                            <Row>
                                <div>
                                    <Card className='cclr2'>
                                        <Card.Body>
                                            <Card.Img className='brdr cardwi' variant="top" src="./Images/AnnelisesPhotos/Compressed/IMGL2103-min.JPG" alt="Annelise" />
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                        </Container>
                    </div>
                    <br />
                    <div className='col-12 col-md-6'>
                        <Card className='cclr3 col-12'>
                            <Card.Body>
                                <Card.Text>
                                    Instagram: <a href='https://www.instagram.com/resetmassageofrichmondllc/'>@resetmassageofrichmondllc</a>
                                    <br /><br />
                                    <b>I'm Annelise Fa Non</b>, a dedicated and knowledgeable massage therapist with over ten years of experience. I obtained my certification from Fortis College in Richmond, Virginia, in 2014 and received my license through the Board of Nursing in the same year. Since then, I have become a highly requested practitioner in Richmond and the surrounding areas.
                                    <br/><br/>
                                    I specialize in a variety of therapeutic massage techniques, including:
                                    <br/>
                                    - Swedish
                                    <br/>
                                    - Deep Tissue
                                    <br/>
                                    - Lymphatic Drainage
                                    <br/>
                                    - Trigger Point Therapy
                                    <br/>
                                    - Hot Stone Therapy
                                    <br/>
                                    - Cupping
                                    <br/>
                                    - Sports Massage
                                    <br/>
                                    - Energy Techniques
                                    <br/>
                                    - Myofascial Release
                                    <br/>
                                    - CBD Treatment
                                    <br/>
                                    - Assisted Stretching
                                    <br/>
                                    - Acupressure
                                    <br/>
                                    - Aromatherapy
                                    <br/><br/>

                                    My purpose in this field is to provide customizable care that resets each client. I personalize my treatments to address specific concerns, promoting healing and relaxation. With my knowledge of anatomy and an empathetic demeanor, I strive to create a comforting and rejuvenating atmosphere for everyone seeking my expertise.
                                    <br/><br/>
                                    I operate from a beautiful and lush studio located in the heart of historic Carytown, Richmond, Virginia. Here, I offer massage therapy in a calming and inclusive environment. Please note that prior appointments are required, along with a deposit to confirm your booking.

                                    =      </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
            <footer>
                <Container>
                    <Row>
                        <div className='col-12 col-md-6 col-lg-8 col-xxl-9'>
                            Website made by <a className='rwlink' target='_blank' href='https://rylanworkman.com'>Rylan Workman</a>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 col-xxl-3'>
                            Email: Resetmassageofrichmond@gmail.com<br />
                            or call {`(804)`}-972-7672
                        </div>
                    </Row>
                </Container>
            </footer>
        </div>

    )
}
export default HomePage