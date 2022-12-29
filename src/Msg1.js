import { Card, Container } from "react-bootstrap"

function Msg1() {
    return (
        <div>
            <Container>
                <center><h1>Swedish Massage</h1></center>
                <Card>
                    <Card.Body>
                    <Card.Text>
                    Swedish massage therapy is the most well-known and widely practiced type of 
                    therapeutic massage—and for good reason. This type of massage focuses on muscle relaxation, 
                    targeting superficial muscles {`(rather than the connective tissues targeted in deep-tissue massage)`}` 
                    and increasing blood circulation. It is a great starter massage and wonderful for relaxation. 
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default Msg1