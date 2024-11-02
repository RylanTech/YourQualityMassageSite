import { Card, Container, Row } from "react-bootstrap"
import { Helmet } from "react-helmet-async"

function about() {
    return (
        <div>
            <Helmet>
                <title>Reset Massage About Page</title>
                <meta name="title" content="Reset Massage" />
                <meta name="description" content="The about page for Reset Massage where you can find out more about us" />
                <meta name="keywords" content="Massage, relax, chill, break, comfort, Richmond VA, local business, calm, time off, About" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/about' />
            </Helmet>
            <Container>
                <Row>
                    <img className="col-12 col-lg-4 aboutImg" src="./Images/AnnelisesPhotos/Compressed/IMGL2406-min.JPG" alt="Quality Massage"></img>
                    <div className="col-lg-8">
                        <Card >
                            <Card.Body>
                                <div>
                                    <Card.Title>About the owner</Card.Title>
                                    <Card.Text>
                                        Step into a sanctuary of relaxation where expert care meets therapeutic healing. Annelise, a Fortis College graduate, specializes in a soothing blend of Swedish, trigger point, and myofascial techniques designed to rejuvenate your mind and body.
                                        <br/><br/>
                                        With a deep understanding of anatomy, she crafts personalized sessions that target your specific needs, helping to release tension and restore balance. Whether you’re seeking relief from stress or simply want to unwind, Annelise's nurturing approach will guide you on your journey to wellness.
                                        <br/><br/>
                                        Join us in the heart of Carytown and experience the transformative power of healing touch. Book your appointment today and embrace the path to a healthier, more relaxed you!
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default about