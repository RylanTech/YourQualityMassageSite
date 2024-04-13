import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { Helmet } from "react-helmet-async"

function Schedule() {

    return (
        <div>
            <Helmet>
                <title>Quality Massage of Richmond Schedule an Appointment</title>
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
                    <div className="col-12">
                        <iframe title="square" width="100%" height="750px" src="https://squareup.com/appointments/book/a3vyvyjtfv0kx7/LG9M7GEGYG9Q4/services"/>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Schedule