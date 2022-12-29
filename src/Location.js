import { Card, Container, Row } from "react-bootstrap"

function Location() {
    return (
        <div>
            <Container>
                <Row>
                    <div className="col-12 col-lg-3">
                        <Card className="cclr1">
                            <Card.Body>
                                <Card.Title>
                                    Address
                                </Card.Title>
                                <Card.Text>
                                    3026 W Cary St, Richmond, VA 23221 Suite A
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-lg-8 mapB">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.7718253499016!2d-77.48096326588848!3d37.55300689930238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b113e533d98723%3A0x321f4d722af67fca!2s3026%20W%20Cary%20St%2C%20Richmond%2C%20VA%2023221!5e0!3m2!1sen!2sus!4v1672332497726!5m2!1sen!2sus" 
                        className="map" width="100%" height="700px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Location