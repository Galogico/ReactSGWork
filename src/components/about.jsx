import "./about.css"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"

const About = () =>{
    return(
        
            <div className="general">
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap" rel="stylesheet"></link>
            <div className="Home">
                <div className="left">
                    <p>
                        <span className="principalTxt">Create, Sell &<br/> Collect Your Own<br/> Creative NFT <br/></span>
                        <span className="desc">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Nunc vulputate libero et velit.</span>
                    </p>
                    <div className="buttonDiv">
                        <button className="button1">Explore Now</button>
                        <button className="button2">Sell NFT</button>
                    </div>
                    <div className="stats">
                        <p>
                            <span className="infoNumbers">37K+<br/></span>
                            <span className="infoText">artworks</span>
                        </p>
                        <p>
                            <span className="infoNumbers" >20K+<br/></span>
                            <span className="infoText">artists</span>
                        </p>
                        <p>
                            <span className="infoNumbers">99K+<br/></span>
                            <span className="infoText">aucations</span>
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div className="box1">
                        <div className="imgsCont">
                            <img className="img" height="140px" width="187px" src={img1}></img>
                            <img className="img" width="187px" height='220'  src={img3}></img>
                            <img className="img" width="187px" height="127px" src={img2}></img>
                        </div>
                        <div className="imgsCont2">
                            <img className="img" width="187px" height='108' src={img6}></img>
                            <img className="img" width="187px" height='220' src={img5}></img>
                            <img className="img" width="179px" height='159px' src={img4}></img>
                        </div>
                    </div>
                    <div className="box2">
                        <img className="img" width="187px" height='412' src={img7}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;