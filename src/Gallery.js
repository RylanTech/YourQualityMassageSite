import { Card, Container, Row } from "react-bootstrap"
import { Helmet } from "react-helmet-async"

function Gallery() {
    return (
        <div>
            <Helmet>
                <title>Reset Massage of Richmond Gallery</title>
                <meta name="title" content="Reset Massage" />
                <meta name="description" content="The Gallery page for Reset Massage" />
                <meta name="keywords" content="Massage, relax, chill, break, comfort, Richmond VA, local business, calm, time off, Contact us" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/gallery' />
            </Helmet>
            <Container>
                <Row>
                    <div className="col-6">
                        <img width="100%" src="https://i.postimg.cc/nhzkkVn8/IMG-2141.jpg"
                        alt="Reset Meassage gallery 1" />
                        <br /><br />
                        <img width="100%" src="https://i.postimg.cc/8CGLY1SP/IMG-2152.jpg" 
                        alt="Reset Meassage gallery 2"/>
                        <br /><br />
                        <img width="100%" src="https://i.postimg.cc/bJCbdk2s/IMG-2183.jpg" 
                        alt="Reset Meassage gallery 3"/>
                        <br /><br />
                        <img width="100%" src="https://i.postimg.cc/PNGC84fr/IMG-1236.jpg" 
                        alt="Reset Meassage gallery 4"/>
                        <br /><br />
                        <img width="100%" src="https://i.postimg.cc/XNtL86pX/IMG-2203.webp" 
                        alt="Reset Meassage gallery 5"/>
                        <img width="100%" src="https://i.postimg.cc/sD3KM98g/IMG-1166.jpg" 
                        alt="Reset Meassage gallery 6"/>
                        <br /><br />
                    </div>
                    <div className="col-6">
                        <img width="100%" src="https://i.postimg.cc/8cpWzw58/IMG-2182.jpg" 
                        alt="Reset Meassage gallery 7"/>
                        <br /><br />
                        <img width="100%" src="https://i.postimg.cc/0jyMsQWP/IMG-2131.jpg" 
                        alt="Reset Meassage gallery 8"/>
                        <br /><br />
                        <img width="100%" src="https://i.postimg.cc/vTCQNHCP/IMG-2179.jpg" 
                        alt="Reset Meassage gallery 9"/>
                        <br /><br />
                        <img width="100%" src="https://i.postimg.cc/MH6PJ7JH/IMG-1276.jpg" 
                        alt="Reset Meassage gallery 10"/>
                        <br /><br />
                        <img width="100%" src="https://i.postimg.cc/25d7j1wZ/IMG-2171.jpg" 
                        alt="Reset Meassage gallery 11"/>
                        <br /><br />
                        <img width="100%" src="https://i.postimg.cc/Hsjz0spq/IMG-2147.jpg" 
                        alt="Reset Meassage gallery 12"/>
                        <br /><br />
                        <img width="100%" src="https://i.postimg.cc/NFF6xpw6/IMG-2165.jpg" 
                        alt="Reset Meassage gallery 13"/>
                        
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Gallery