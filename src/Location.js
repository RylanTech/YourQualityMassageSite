import { Card, Container, Row } from "react-bootstrap"
import { Helmet } from "react-helmet-async"

function Location() {
    return (
        <div>
            <Helmet>
                <title>Reset Massage of Richmond Schedule an Appointment</title>
                <meta name="title" content="Reset Massage"/>
                <meta name="description" content="The Schedule Appointment page for Reset Massage where you can find out how to get in touch!"/>
                <meta name="keywords" content="Massage, relax, chill, break, comfort, Richmond VA, local business, calm, time off, Contact us"/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <link rel='canonical' href='/location'/>
            </Helmet>
            <Container>
                <Row>
                    <div className="col-12 col-lg-3">
                        <Card className="cclr1">
                            <Card.Body>
                                <Card.Title>
                                    Address
                                </Card.Title>
                                <Card.Text>
                                    3123 W Cary St, Suite 2, Richmond, VA 23221
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-lg-8 mapB">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.0801147881566!2d-77.48396412355206!3d37.55317622489309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b113e55420593f%3A0x924bb82e619f5542!2s3123%20W%20Cary%20St%2C%20Richmond%2C%20VA%2023221!5e0!3m2!1sen!2sus!4v1713056112743!5m2!1sen!2sus" 
                        className="map" width="100%" height="700px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Location