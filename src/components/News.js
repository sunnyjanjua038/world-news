
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CardBody,Card,CardText,CardTitle,Button} from 'reactstrap'
import './News.css'
import image from '../Images/newsone.webp'
import { fetchBitcoinTechnologyData ,fetchNewsData } from '../Api/apiService';
const News = () => {
    const [newsdata, setArticles] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetchNewsData(); 
          if (response && response.data && Array.isArray(response.data.articles)) {
            console.log("Stories data", response.data.articles);
            setArticles(response.data.articles);
          } else {
            console.error('Invalid data received or empty articles array:', response.data.articles);
          }
        } catch (error) {
          console.error('Error fetching articles data:', error);
        }
      };
  
      fetchData();
    }, []);

    const [displayCount, setDisplayCount] = useState(10);

    const handleReadMore = () => {
      setDisplayCount(prevCount => prevCount + 10);
    };
  return (
    <>
    {/* <h1>This is news</h1> */}
        <div className='box'> <p className='para'>Advertisement</p></div>
     <div className='firstmaindiv'>
     <img src={image} className='homefirstimage'></img>
     <div className='firsttext'>
        <h1 className='firstheading' >GOP debate: Haley's rivals lob <br/> deeply personal attacks</h1>
        <p className='firstpara'>
The president is trying to focus his reelection campaign on Donald Trump's comments and policy proposals, often more than his own.</p>
        <p className='secondpara'>deal come underline arliear </p>
     </div>
     </div>
   
     <div className='firstcart'>
    <Card className='cardsfive' > <img alt="Sample" style={{borderRadius:'10px'}} src="https://s.yimg.com/uu/api/res/1.2/k9lRYpGjWjOHEoCe.zM1GA--~B/Zmk9c3RyaW07aD0xODA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2023-12/55b8e1b0-977d-11ee-bdfd-2eaf8ac1f314.cf.webp"/>
  <CardBody>
    <CardText>
       U.S. defends sale of weapons to Israel without prior approval from
    </CardText>
  </CardBody>
</Card>
<Card className='cardsfive'> <img alt="Sample" style={{borderRadius:'10px'}} src="https://s.yimg.com/uu/api/res/1.2/LlLavIE1I5Uhdhm.jaEPTg--~B/Zmk9c3RyaW07aD0xODA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2023-12/974df650-9779-11ee-aff7-9b0226e8613e.cf.webp"/>
  <CardBody>
    <CardText>
       Romney throws cold water on plan to impeach Biden
    </CardText>
  </CardBody>
</Card>
<Card className='cardsfive'> <img alt="Sample" style={{borderRadius:'10px'}} src="https://s.yimg.com/uu/api/res/1.2/RkFhzq48gVxqP9AqYiyKkA--~B/Zmk9c3RyaW07aD0xODA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2023-12/d24b2b50-977a-11ee-bcff-d2f22663dcca.cf.webp"/>
  <CardBody>
    <CardText>
  
Disgraced ex-'Today' host Matt Lauer attends wedding with former NBC
    </CardText>
  </CardBody>
</Card>
<Card className='cardsfive'> <img alt="Sample" style={{borderRadius:'10px'}} src="https://s.yimg.com/uu/api/res/1.2/nlsJ1ZbWh_thWjxp8BzSgw--~B/Zmk9c3RyaW07aD0xODA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2023-12/a88d2780-9768-11ee-bc3f-c2dcff9ce0fb.cf.webp"/>
  <CardBody>
    <CardText>
       Sears quietly reopens 2 stores. What is behind the comeback?
    </CardText>
  </CardBody>
</Card>
<Card className='cardsfive' > <img alt="Sample" style={{borderRadius:'10px'}} src="https://s.yimg.com/uu/api/res/1.2/vhrsIaV02GiGBOoC2qf1Vg--~B/Zmk9c3RyaW07aD0xODA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2023-12/233a50e0-977b-11ee-bdff-2fad8d588f04.cf.webp"/>
  <CardBody>
    <CardText>
         Telehealth orthodontics company SmileDirectClub shuts down   </CardText>
  </CardBody>
</Card>
</div>
<div className='sidefooter'>
    
   <div className='awsomeicons'><i class="fa-brands fa-x-twitter msss"></i><i class="fa-brands fa-facebook-f mx-2"></i><i class="fa-brands fa-instagram mx-2"></i><i class="fa-brands fa-youtube mx-2"></i><i class="fa-brands fa-tiktok mx-2"></i></div>
   <p className='fotparaone'><span className='fotparaonestyle'>Terms</span> and <span className='fotparaonestyle'> Privacy Policy</span> <span className='fotparaonestyle'> Privacy  Dashboard</span> <span className='fotparaonestyle'> Advertise </span> <span className='fotparaonestyle'>About Our Ads </span><span className='fotparaonestyle'> Careers </span><span className='fotparaonestyle'> Help </span><span className='fotparaonestyless'> Feedback </span></p>
   <p className='fotparasecond'>© 2023 Yahoo. All rights reserved.</p>
  </div>
  
<div className='mainbox'>
<div className='boxone'></div>
<h1 className='headingsecond' >Stories of life</h1>
</div>
 {newsdata.slice(0, displayCount).map((article, index) => (
        <Card className='secondcard' key={index}>
            <div>
            <img className='imagesecndcard' src={article.urlToImage} alt={article.title}/>  
            </div>
          <CardBody>
            <CardTitle className='headingcardtwo' tag="h5">{article.title}</CardTitle>
            <CardText>
              {`${article.content.split(' ').slice(0, 20).join(' ')}${article.content.split(' ').length > 20 ? '...' : ''}`}
            </CardText>
          </CardBody>
        </Card>
      ))}
      {displayCount <newsdata.length && (
        <button className='btnfirst' onClick={handleReadMore}>Read More</button>
      )}



<div className='sidenewsbox'>
<div className='boxsideone'> </div>
<p className='headingsecond' > <span className='trandingnews'>Trending Now</span> <span className='sideone'> <span className='holidaygift'>Holiday Gift </span> <i class="fa-solid fa-gift"></i> </span></p>
<p className='sideparanews'> <span className='colorside'>1.</span><span className='fistspenever'>Army-Navy Game </span><span className='sixethside'>6.</span><span className='lastspan'>Derek Hough</span></p>
<p className='sideparanews'> <span className='colorside'>2.</span><span className='fistspenever'>Ryan O'Neal </span><span className='sevelntside'>7.</span><span className='lastspan'>Chris Evert</span></p>
<p className='sideparanews'> <span className='colorside'>3.</span><span className='fistspenever'>Donald Trump </span><span className='eightside'>8.</span><span className='lastspan'>Gaza</span></p>
<p className='sideparanews'> <span className='colorside'>4.</span><span className='fistspenever'>Taylor Swift </span><span className='ninethside'>9.</span><span className='lastspan'>Russia-Ukraine..</span></p>
<p className='sideparanews'> <span className='colorside'>5.</span><span className='fistspenever'>Shohei Ohtani </span><span className='tenthside'>10.</span><span className='lastspan'>Jevel</span></p>
</div>


    </>
  )
}
export default News
