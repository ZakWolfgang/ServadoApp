import Carousel from 'react-bootstrap/Carousel';
import Food1 from '../Pictures/Food1.jpg'
import Food2 from '../Pictures/Food2.jpg'
import Food3 from '../Pictures/Food3.jpg'
import './Carousel.css'

function IndividualIntervalsExample() {
    return (
        <div className='car'>
            <Carousel className='carousel'>
                <Carousel.Item interval='2000'>
                    <img
                        className="d-block w-100"
                        src={Food1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval='2000'>
                    <img
                        className="d-block w-100"
                        src={Food2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval='2000'>
                    <img
                        className="d-block w-100"
                        src={Food3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default IndividualIntervalsExample;