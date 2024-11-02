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
                        <img width="100%" src="./Images/AnnelisesPhotos/Compressed/IMGL2103-min.JPG"
                        alt="Reset Meassage gallery 1" />
                        <br /><br />
                        <img width="100%" src="./Images/AnnelisesPhotos/Compressed/IMG-2131-min.jpg"
                        alt="Reset Meassage gallery 2"/>
                        <br /><br />
                        <img width="100%" src="./Images/AnnelisesPhotos/Compressed/IMGL2344-min.JPG"
                        alt="Reset Meassage gallery 3"/>
                        <br /><br />
                        <img width="100%" src="./Images/AnnelisesPhotos/Compressed/IMGL2371-min.JPG"
                        alt="Reset Meassage gallery 4"/>
                        <br /><br />
                        <img width="100%" src="./Images/AnnelisesPhotos/Compressed/IMG-2182-min.jpg"
                        alt="Reset Meassage gallery 5"/>
                        <br /><br />
                        <img width="100%" src="./Images/AnnelisesPhotos/Compressed/IMGL2218-min.JPG"
                        alt="Reset Meassage gallery 6"/>
                        <br /><br />
                    </div>
                    <div className="col-6">
                        <img width="100%" src="./Images/AnnelisesPhotos/Compressed/IMGL2259-min.JPG"
                        alt="Reset Meassage gallery 7"/>
                        <br /><br />
                        <img width="100%" src="./Images/AnnelisesPhotos/Compressed/IMG-2179-min.jpg" 
                        alt="Reset Meassage gallery 9"/>
                        <br /><br />
                        <img width="100%" src="./Images/AnnelisesPhotos/Compressed/IMG-1276-min.jpg" 
                        alt="Reset Meassage gallery 10"/>
                        <br /><br />
                        <img width="100%" src="./Images/AnnelisesPhotos/Compressed/IMGL2438-min.JPG" 
                        alt="Reset Meassage gallery 12"/>
                        <br /><br />
                        <img width="100%" src="./Images/AnnelisesPhotos/Compressed/IMGL2344-2-min.JPG" 
                        alt="Reset Meassage gallery 13"/>
                        
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Gallery