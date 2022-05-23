import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import captainImage from "../assets/images/poster/captain.jpg"
import bubblebeeImage from "../assets/images/poster/bubblebee.webp"
import fantasticImage from "../assets/images/poster/fantastic.jpg"
import unchartedImage from "../assets/images/poster/uncharted.jpg"
import morbiusImage from "../assets/images/poster/morbius.jpg"
import avengerImage from "../assets/images/poster/avenger.jpg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <h1 className='text-white'>SUPERHERO MOVIES</h1>
                <Row>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={morbiusImage} alt="morbius" className='Images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Morbius</Card.Title>
                                    <Card.Text className='align-left'>
                                        This is a wider card with supporting text below as a natural.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={captainImage} alt="captain" className='Images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Captain America</Card.Title>
                                    <Card.Text className='align-left'>
                                        This is a wider card with supporting text below as a natural.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={bubblebeeImage} alt="bumblebee" className='Images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Bumblebee</Card.Title>
                                    <Card.Text className='align-left'>
                                        This is a wider card with supporting text below as a natural.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={fantasticImage} alt="fantastic" className='Images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Fantastic Beast</Card.Title>
                                    <Card.Text className='align-left'>
                                        This is a wider card with supporting text below as a natural.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={unchartedImage} alt="uncharted" className='Images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Uncharted</Card.Title>
                                    <Card.Text className='align-left'>
                                        This is a wider card with supporting text below as a natural.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={avengerImage} alt="avenger" className='Images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Avenger</Card.Title>
                                    <Card.Text className='align-left'>
                                        This is a wider card with supporting text below as a natural.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuperHero