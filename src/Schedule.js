import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Card from "react-bootstrap/Card"
import { Accordion, ListGroup, ListGroupItem } from "react-bootstrap"
import { Helmet } from "react-helmet-async"

function Schedule() {

    

    return (
        <div>
            <Helmet>
                <title>Quality Massage Schedule an Appointment</title>
                <meta name="title" content="Quality Massage"/>
                <meta name="description" content="The Schedule Appointment page for Quality Massage where you can find out how to get in touch!"/>
                <meta name="keywords" content="Massage, relax, chill, break, comfort, Richmond VA, local business, calm, time off, Contact us"/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <link rel='canonical' href='/schedule'/>
            </Helmet>
            <Container>
                <Row>
                    <div className="col-lg-2"></div>
                    <ListGroup className="col-12 col-lg-8 lgt pricingChart">
                        <ListGroupItem><div className="center"><h2>Pricing</h2></div></ListGroupItem>
                        <ListGroupItem>45 Minutes <div className="fr">$85</div></ListGroupItem>
                        <ListGroupItem>60 Minutes <div className="fr">$100</div></ListGroupItem>
                        <ListGroupItem>90 Minutes <div className="fr">$150</div></ListGroupItem>
                        <ListGroupItem>120 Minutes <div className="fr">$200</div></ListGroupItem>
                    </ListGroup>
                    <div className="col-lg-2"></div>
                </Row>
                <Row>
                    <div className="col-lg-2"></div>
                    <div className="col-md-8 col-lg-4 callorem">
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Call or email to schedule your appointment!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                        <Accordion className="col-12 col-md-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h4>Email</h4></Accordion.Header>
                                <Accordion.Body><a className="contact contact1" href="mailto:QualityMassageLLC@gmail.com">QualityMassageLLC@gmail.com</a></Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h4>Call</h4></Accordion.Header>
                                <Accordion.Body><div className="contact contact2">{"(804)-972-7672"}</div></Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    <div className="col-xl-2"></div>
                </Row>
            </Container>
        </div>
    )
}
export default Schedule