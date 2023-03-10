
import '../index.css';
import Navbar from './Navbar';
import { Heading, ImageBox, Colors } from '../ui/ui';
//import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CleanHandsIcon from '@mui/icons-material/CleanHands';

  



export default function AboutPage(){

    useEffect(()=>{
        document.title = 'UnderBelly Express | AboutPage';
    }, [])
    

    // Styling
    const divStyle = {
        paddingBottom: '3rem',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
    }

    return(
        <div className='dark-background' style={divStyle}>
            <Navbar />
            
            <div id='aboutus-wrapper'>
                <div>
                    <img src={require('../assets/images/About-us.jpg')} alt="aboutus" width="420" height="600" style={{borderRadius: '10px'}}/>
                </div>
                <div>
                    <img  src={require('../assets/images/aboutus-2.jpg')} alt="aboutus" width="400" height="300" style={{borderRadius: '10px', marginTop: '5rem'}} />
                    <img src={require('../assets/images/aboutus-3.jpg')} alt="aboutus" width="400" height="490" style={{borderRadius: '10px', marginTop: '2rem'}}/>
                </div>
                <div>
                    <h1 style={{marginTop: '12.5rem',marginLeft: '25.5rem',color:"#ff9f0d"}}>About us </h1>
                    <p style={{marginTop: '2rem', marginLeft: '20.5rem', fontSize: '1.5rem'}}>“A to Z of a healthy diet to help you tackle the complexities of science all day long. <br></br> <br />
                    Cakes, Homemade Cookies, Range of Pastas, and much more now available at <br /> VIT Bhopal Food Court at Bhopal, Madhya Pradesh.” </p>
                    <button id='showmore'>Show more</button>
                </div>
            </div>

            <div id='choose-us-wrapper'>
                <h1 id='choose-us-heading' style={{}}>Why Choose Us </h1>
                <p style={{marginTop: '2rem', padding: '0 10rem'}}>
                    Quality of Service, Food, Ambience and Value of Money are the primary elements for choosing a food venture. Underbelly Express is one of the most exquisite food venture in the campus of VIT Bhopal with a captivating view of  nature, perfect ambience and scrumptious food.
                </p>
                <p>
                    Our team is always looking forward to provide you exceptional services and win your hearts out.
                </p>
            </div>
    

            <img  src={require('../assets/images/Why-choose-us.jpg')} alt="image cannot be loaded" style={{width: '100%'}} />

            <ul className='row-alignment icons' style={{background: '#1e1e1e', width: '100%'}}>
                <li className='column-alignment'> 
                    <i class="fa-solid fa-graduation-cap fa-3x"></i>
                    <p>Best Chefs</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nulla ante, varius consectetur convallis vel, aliquam at arcu.</p>
                </li>
                <li className='column-alignment'>  
                    <i class="fa-solid fa-mug-hot fa-3x" ></i> 
                    <p>120+ Item food</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nulla ante, varius consectetur convallis vel, aliquam at arcu.</p>
                </li>
                <li className='column-alignment'> 
                    <i class="fa-solid fa-hands-bubbles fa-3x"></i>  
                    <p>Clean Environment</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nulla ante, varius consectetur convallis vel, aliquam at arcu.</p>
                </li>

            </ul>
            
            {/* <div>
                <div id='overlay'>
                    <img  src={require('../assets/images/meet.jpeg')} alt="meet" width="2300" height="700" />
                    <ul className='row-alignment'>
                        <li id='pic'> <img id='pic' src={require('../assets/images/eshaan.jpeg')} alt="eshaan" width="380" height="450" />
                        <div id='polaroid'> <b>Eshaan Bahuguna</b>  <br /> Read more </div></li>

                        <li id='pic'> <img id='pic' src={require('../assets/images/Asmi.jpg')} alt="eshaan" width="380" height="450" />
                        <div id='polaroid'> <b>Asmi Bhardwaj</b>  <br /> Read more</div></li>

                        <li id='pic'> <img id='pic' src={require('../assets/images/Parth.jpg')} alt="eshaan" width="380" height="450" />
                        <div id='polaroid'> <b>Parth Dubey</b>  <br /> Read more</div></li>

                        <li id='pic'> <img id='pic' src={require('../assets/images/nabiha.jpeg')} alt="eshaan" width="380" height="450" />
                        <div id='polaroid'> <b>  Nabiha Khan </b> <br /> Read more</div></li>
                    </ul>
                </div>
            </div> */}
                    
     
                 
        

            
        </div>
    )
}



