import './Aboutus.css'
import imageabout from "../images/aboutus.jpg"

const Aboutus = () =>{
    return(
        <div className='general'>
            <h1 className='txt title'>About Us</h1>
            <p className='txt complementar'><span>Lorem, ipsum dolor sit amet consectetur<br/> adipisicing elit.</span></p>
            <div className='SecPart'>
                <img src={imageabout} height="755px" width="503px"></img>
                <div>
                    <h1 className='txt titu2'>Get Popular NFT</h1>
                    <p className='txt comp2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam eu turpis molestie, dictum est a, mattis tellus. Sed<br/> dignissim, metus nec fringilla accumsan, risus sem<br/> sollicitudin lacus, ut interdum tellus elit sed risus.<br/> Maecenas eget condimentum velit, sit amet feugiat<br/> lectus. Class aptent taciti sociosqu ad litora torquent per<br/> conubia nostra, per inceptos himenaeos. Praesent auctor<br/> purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                    <button className='btn'>Show More</button>
                </div>
            </div>
        </div>
    )
}
export default Aboutus