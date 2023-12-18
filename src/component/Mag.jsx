import HTMLFlipBook from "react-pageflip";
import React from "react";



import font from "./technical/font.png"
import p2 from "./technical/3rd.png"
import p6 from "./technical/4th.png"
import p9 from "./technical/5th.png"
import p8 from "./technical/6th.png"
import p4 from "./technical/7th.png"
import p3 from "./technical/8th.png"
import p5 from "./technical/9th.png"
import p7 from "./technical/extra.png"
import articleback from "./technical/2nd.png"
import article1 from "./technical/Article1.png"
import article2 from "./technical/Article2.png"
import article3 from "./technical/Article3.png"
import article4 from "./technical/Article4.png"
import article5 from "./technical/Article5.png"
import article6 from "./technical/Article6.png"
import article7 from "./technical/Article7.png"
import article8 from "./technical/Article8.png"
import article9 from "./technical/Article9.png"
import article10 from "./technical/Article10.png"
import article11 from "./technical/Article11.png"
import article12 from "./technical/Article12.png"
import article13 from "./technical/Article13.png"
import article14 from "./technical/Article14.png"
import article15 from "./technical/Article15.png"
import article16 from "./technical/Article16.png"
import article17 from "./technical/Article17.png"
import article18 from "./technical/Article18.png"
import article19 from "./technical/Article19.png"
import article20 from "./technical/Article20.png"
import article21 from "./technical/Article21.png"
import article22 from "./technical/Article22.png"
import article23 from "./technical/Article23.png"
import article24 from "./technical/Article24.png"
import article25 from "./technical/Article25.png"
import article26 from "./technical/Article26.png"
import article27 from "./technical/Article27.png"
import article28 from "./technical/Article28.png"
import article29 from "./technical/Article29.png"
import article30 from "./technical/Article30.png"
import article31 from "./technical/Article31.png"
import article32 from "./technical/Article32.png"
import article33 from "./technical/Article33.png"
import article34 from "./technical/Article34.png"
import article35 from "./technical/Article35.png"
import article36 from "./technical/Article36.png"
import article37 from "./technical/Article37.png"
import article38 from "./technical/Article38.png"
import article39 from "./technical/Article39.png"
import article40 from "./technical/Article40.png"
import article41 from "./technical/Article41.png"
import article42 from "./technical/Article42.png"
import article43 from "./technical/Article43.png"
import article44 from "./technical/Article44.png"
import story1 from "./technical/story.1png.png"
import story2 from "./technical/story.2png.png"
import story3 from "./technical/story.3png.png"
import story4 from "./technical/story.4png.png"
import story5 from "./technical/story.5png.png"
import story6 from "./technical/story.6png.png"
import story7 from "./technical/story.7png.png"
import story8 from "./technical/story.8png.png"
import story9 from "./technical/story.9png.png"
import story10 from "./technical/story.10png.png"
import story11 from "./technical/story.11png.png"
import story12 from "./technical/story.12png.png"

import story13 from "./technical/story13.png"
import story14 from "./technical/story14.png"
import end from "./technical/end.png"
import storyfont from "./technical/artfront.png"

import "./Cssmag2.css"
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import arrow from "./arrow.png";



const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  
   
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        
        <div className="page-image"></div>
        
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
        
      </div>
    </div>
  );
});

class DemoBook extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 108,
    };
  }

  
  nextButtonClick = () => {
    this.flipBook.pageFlip().turnToNextPage()
  };



prevButtonClick = () => {
    this.flipBook.pageFlip().turnToPrevPage();
  };
  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };

 
    

  render() {
    return (
      <div><body >
      <div className="container"><div className="block">
      <div className="back3"> </div>
        <HTMLFlipBook
         width={450}
          height={673}
          size="stretch"
          minWidth={361}
          maxWidth={370}
          minHeight={450}
          maxHeight={433}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          autoSize={true}
          
          flippingTime={960}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
          
          clickEventForward={true}
          showPageCorners={true}
          
    disableFlipByClick={true}
        >

          <PageCover><Zoom>
      <img
        src={font} alt="react logo" 
        
        align-items= "center"
        width="100%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
      
    </Zoom></PageCover>
    <Page number={1}><Zoom>
      <img
        src={p2} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={2}><Zoom>
      <img
        src={p3} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={3}><Zoom>
      <img
        src={p4} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={4}><Zoom>
      <img
        src={p5} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={5}><Zoom>
      <img
        src={p6} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={6}><Zoom>
      <img
        src={p7} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={7}><Zoom>
      <img
        src={p8} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={8}><Zoom>
      <img
        src={p9} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
         
    <Page number={9}><Zoom>
      <img
        src={articleback} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
          
    <Page number={10}><Zoom>
      <img
        src={article1} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    
    
    
    
    <Page number={11}><Zoom>
      <img
        src={article2} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={12}><Zoom>
      <img
        src={article3} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={13}><Zoom>
      <img
        src={article4} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={14}><Zoom>
      <img
        src={article5} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={15}><Zoom>
      <img
        src={article6} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={16}><Zoom>
      <img
        src={article7} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={17}><Zoom>
      <img
        src={article8} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={18}><Zoom>
      <img
        src={article9} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={19}><Zoom>
      <img
        src={article10} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={20}><Zoom>
      <img
        src={article11} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={21}><Zoom>
      <img
        src={article12} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={22}><Zoom>
      <img
        src={article13} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={23}><Zoom>
      <img
        src={article14} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={24}><Zoom>
      <img
        src={article15} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={25}><Zoom>
      <img
        src={article16} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={26}><Zoom>
      <img
        src={article17} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={27}><Zoom>
      <img
        src={article18} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={28}><Zoom>
      <img
        src={article19} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={29}><Zoom>
      <img
        src={article20} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={30}><Zoom>
      <img
        src={article21} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={31}><Zoom>
      <img
        src={article22} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={32}><Zoom>
      <img
        src={article23} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={33}><Zoom>
      <img
        src={article24} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={34}><Zoom>
      <img
        src={article25} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={35}><Zoom>
      <img
        src={article26} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={36}><Zoom>
      <img
        src={article27} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={37}><Zoom>
      <img
        src={article28} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={38}><Zoom>
      <img
        src={article29} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={39}><Zoom>
      <img
        src={article30} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={40}><Zoom>
      <img
        src={article31} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={41}><Zoom>
      <img
        src={article32} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={42}><Zoom>
      <img
        src={article33} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={43}><Zoom>
      <img
        src={article34} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={44}><Zoom>
      <img
        src={article35} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={45}><Zoom>
      <img
        src={article36} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={46}><Zoom>
      <img
        src={article37} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={47}><Zoom>
      <img
        src={article38} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={48}><Zoom>
      <img
        src={article39} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={49}><Zoom>
      <img
        src={article40} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={50}><Zoom>
      <img
        src={article41} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={51}><Zoom>
      <img
        src={article42} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={52}><Zoom>
      <img
        src={article43} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={53}><Zoom>
      <img
        src={article44} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    
    {/*story*/ }

    <Page number={54}><Zoom>
      <img
        src={storyfont} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>

    <Page number={55}><Zoom>
      <img
        src={story1} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page><Page number={56}><Zoom>
      <img
        src={story2} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={57}><Zoom>
      <img
        src={story3} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={58}><Zoom>
      <img
        src={story4} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={59}><Zoom>
      <img
        src={story5} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={60}><Zoom>
      <img
        src={story6} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={61}><Zoom>
      <img
        src={story7} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={62}><Zoom>
      <img
        src={story8} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={63}><Zoom>
      <img
        src={story9} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={64}><Zoom>
      <img
        src={story10} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={65}><Zoom>
      <img
        src={story11} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={66}><Zoom>
      <img
        src={story12} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={67}><Zoom>
      <img
        src={story13} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={68}><Zoom>
      <img
        src={story14} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={69}><Zoom>
      <img
        src={end} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
     {/*Drawing */}
     
         

        </HTMLFlipBook>
        <div className="container">
          
          <div>
          <div>

<button className="button1" type="button1" onClick={this.prevButtonClick} >
  
</button>
<div className="Bottom2">
[<span>{this.state.page}</span> of 
   <span>{this.state.totalPage}</span>]
</div>
<button className="button2" type="button2" onClick={this.nextButtonClick}>
 
</button>

</div>
           

          </div>
        </div>

        </div>
</div>
<i className="number">{this.state.state}</i><i>{this.state.orientation}</i>
</body>
              </div>
    );
  }
}

export default DemoBook;