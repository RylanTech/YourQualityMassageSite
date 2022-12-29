import { Card, Container, Row } from "react-bootstrap"
import { Helmet } from "react-helmet-async"

function about() {
    return (
        <div>
        <Helmet>
            <title>Quality Massage About Page</title>
            <meta name="title" content="Quality Massage"/>
            <meta name="description" content="The about page for Quality Massage where you can find out more about us"/>
            <meta name="keywords" content="Massage, relax, chill, break, comfort, Richmond VA, local business, calm, time off, About"/>
            <meta name="robots" content="index, follow"/>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="language" content="English"/>
            <link rel='canonical' href='/about'/>
        </Helmet>
        <Container>
            <Row>
                <img className="col-12 col-lg-6" src="Images/Annelise1.png" alt="Quality Massage"></img>
                <Card className="col-lg-6">
                    <Card.Body>
                        <Card.Title>About the owner</Card.Title>
                        <Card.Text>
                        My name is Annelise Fa Non and I have been a licensed massage therapist in the state of Virginia for 8 years, graduating 
                        from Fortis College in 2014. My approach is therapeautic, but relaxing. I specialize in trigger point, Swedish, 
                        prenatal massage, myofascial release, cupping, hot stone, lymphatic drainage, sports massage, deep tissue, energy healing, 
                        Dynamic Neuromuscular Stabilization, aromatherapy, and CBD massage.
                        My mission is to release tension in every session,
                        meaning I utilize various tools necessary to promote healing and balance within the body physically and spiritually.
                        Each service is uniquely taylored to the client. 
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
        </div>
    )
}
export default about