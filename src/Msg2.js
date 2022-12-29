import { Card, Container } from "react-bootstrap"

function Msg2() {
    return (
        <div>
            <Container>
                <center><h1>Deep Tissue Massage</h1></center>
                <Card>
                    <Card.Body>
                    <Card.Text>
                    Deep tissue massage therapy is similar to Swedish massage but with a deep tissue massage, 
                    your therapist applies slow, firm pressure to release muscle tension. The focus is on the deepest 
                    layers of muscle tissue, tendons, and fascia {`(the protective layer surrounding muscles, bones and joints)`}.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default Msg2