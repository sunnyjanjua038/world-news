
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CardBody,Card,CardText,CardTitle,Button} from 'reactstrap'
import {getStoriesData,getNewsData } from '../redux/features/NewsSlice'; 
import './Home.css'
import ApiPages from '../Pages/ApiPages'
import image from '../Images/conf.webp'
const Home = () => {
  const dispatch = useDispatch();
  const {stories,latestnews} = useSelector((state) => state.news);
  console.log("latestnews in Home",latestnews)
  console.log("stories in Home",stories)

  useEffect(() => {
       dispatch(getStoriesData())
    dispatch(getNewsData())
  }, [dispatch]);

   const [selectedStory, setSelectedStory] = useState(null);
  const [displayCount, setDisplayCount] = useState(10);

  const handleStoryClick = (index) => {
    setSelectedStory(index); 
  };
  return (
   <div>
    {selectedStory !== null ? (
      <ApiPages story={stories[selectedStory]} />
      ) : (
        <>
       <div className='box'> 
       <p className='para'>Advertisement</p></div>
     <div className='firstmaindiv'>
     <img src={image} className='homefirstimage'></img>
     <div className='firsttext'>
        <h1 className='firstheading' >GOP debate: Haley's rivals lob <br/> deeply personal attacks</h1>
        <p className='firstpara'>Whether you’re creating fictional characters or writing a personal bio, keep a list of adjectives that describe personality handy so you always have great options</p>
        <p className='secondpara'>deal come underline arliear </p>
     </div>
     </div>
     <div className='firstcart'>
    <Card className='cardsfive' > <img alt="Sample" style={{borderRadius:'10px'}} src="https://s.yimg.com/uu/api/res/1.2/GdLRpgADnLWhJ2QaCbWytw--~B/Zmk9c3RyaW07aD0xODA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2023-12/fc0efce0-955a-11ee-b3b7-819e25d6e8d0.cf.webp"/>
  <CardBody>
    <CardText>'He is hated': House GOP secrtly considers expelling Matt Gaetz</CardText>
  </CardBody>
</Card>
<Card className='cardsfive'> <img alt="Sample" style={{borderRadius:'10px'}} src="https://s.yimg.com/uu/api/res/1.2/xeIZgj75z994Qh5ydalxDw--~B/Zmk9c3RyaW07aD0xODA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2023-12/cdbe4700-9547-11ee-bfff-c3228527c60b.cf.webp"/>
  <CardBody>
    <CardText>Antimicrobial resistance is spreading in Ukraine amid war with Russia</CardText>
  </CardBody>
</Card>
<Card className='cardsfive'> <img alt="Sample" style={{borderRadius:'10px'}} src="https://s.yimg.com/uu/api/res/1.2/YiKRO84g9AHk8FtOTE_MmA--~B/Zmk9c3RyaW07aD0xODA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2023-12/8d4647b0-9536-11ee-affb-e3086a5feee2.cf.webp"/>
  <CardBody>
    <CardText>Is the U.S. economy in bad shape? Why Americans disagree with the experts</CardText>
  </CardBody>
</Card>
<Card className='cardsfive'> <img alt="Sample" style={{borderRadius:'10px'}} src="https://s.yimg.com/uu/api/res/1.2/Ss6PpiKypf8rkpub8KlAKA--~B/Zmk9c3RyaW07aD0xODA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2023-12/752ded50-953a-11ee-aeff-4a9f0cdd7ac5.cf.webp"/>
  <CardBody>
    <CardText>Sex cult survivors accuse Sarah Lawrence of negligence: 'They failed us'</CardText>
  </CardBody>
</Card>
<Card className='cardsfive' > <img alt="Sample" style={{borderRadius:'10px'}} src="https://s.yimg.com/uu/api/res/1.2/zsiNva02.9_G1tL4R6nobA--~B/Zmk9c3RyaW07aD0xODA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2023-12/1691f3d0-9545-11ee-a7fc-b9836704afda.cf.webp"/>
  <CardBody>
    <CardText>Texas judge grants pregnant woman's request for abortion</CardText>
  </CardBody>
</Card>

</div>
<div className='mainbox'>
<div className='boxone'></div>
<h1 className='headingsecond' >Stories of life</h1>
</div>




         {stories.slice(0, displayCount).map((article, index) => (
            <Card className='secondcard' key={index} onClick={() => handleStoryClick(index)}>
              <div>
                <img className='imagesecndcard' src={article.urlToImage} alt={article.title} />
              </div>
              <CardBody>
                <CardTitle className='headingcardtwo' tag="h5">{article.title}</CardTitle>
                <CardText>{`${article.content.split(' ').slice(0, 20).join(' ')}${
                  article.content.split(' ').length > 20 ? '...' : ''
                }`}</CardText>
                 </CardBody>
            </Card>
          ))}
                {displayCount < stories.length && (
                  <button className='btnfirst' onClick={() => setDisplayCount(displayCount + 10)}>
                    Read More
                  </button>
                )}
             

 {/* {stories.slice(0, displayCount).map((article, index) => (
        <Card className='secondcard' key={index}>
          <div> <img className='imagesecndcard' src={article.urlToImage} alt={article.title}/> </div>  
          <CardBody>
            <CardTitle className='headingcardtwo' tag="h5">{article.title}</CardTitle>
            <CardText>  {`${article.content.split(' ').slice(0, 20).join(' ')}${article.content.split(' ').length > 20 ? '...' : ''}`}</CardText>
          </CardBody>
        </Card>
      ))}
      {displayCount < stories.length && (
        <button className='btnfirst' onClick={handleReadMore}>Read More</button> )} */}
    <Card  className='sidecard'>
   {latestnews.length > 0 ? (
  <div> <img className='thirdparaimg'
    src={latestnews[0].urlToImage}  
  />
  <CardBody>
    <CardTitle tag="h5">
    {latestnews[0].author}
    </CardTitle>
    <CardText className='sideparades'>
    {latestnews[0].description}
    </CardText>
    <Button className='secondbutton'>
      Read the 360
    </Button>
  </CardBody>
  </div>
   ) : (
    <p>No articles available</p>
  )}
</Card>
<div className='sideheading'>
<div className='boxsideone'></div>
<h1 className='headingsecond' >Stories of life</h1>
</div>
<div className='sidefooter'>
  
   <div className='awsomeicons'><i class="fa-brands fa-x-twitter msss"></i><i class="fa-brands fa-facebook-f mx-2"></i><i class="fa-brands fa-instagram mx-2"></i><i class="fa-brands fa-youtube mx-2"></i><i class="fa-brands fa-tiktok mx-2"></i></div>
   <p className='fotparaone'><span className='fotparaonestyle'>Terms</span> and <span className='fotparaonestyle'> Privacy Policy</span> <span className='fotparaonestyle'> Privacy  Dashboard</span> <span className='fotparaonestyle'> Advertise </span> <span className='fotparaonestyle'>About Our Ads </span><span className='fotparaonestyle'> Careers </span><span className='fotparaonestyle'> Help </span><span className='fotparaonestyless'> Feedback </span> </p>
   <p className='fotparasecond'>© 2023 Yahoo. All rights reserved.</p>
  </div>

</>
      )}
      
  </div>
  
  
 
    
  );
};

export default Home;




