import "../Component/about.css"
import aboutImg from "../assets/Img/about-img.jpg"
import professional from "../assets/Img/professional-img.png"

const About =()=>{
    return(
        <>
        <div className="about-section1">
            <div className="s1-first-div">
               <h1>ABOUT US</h1>
               <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</h4>
               <button>contact me</button>
            </div>
            <div className="s1-second-div">
            <img src={aboutImg} alt="" />
            </div>
        </div>
        <div className="about-section2">
        <div className="s2-first-div">
        <img src={professional} alt="" />
        </div>
            <div className="s2-second-div">
               <h1>WE PROVIDE PROFESSIONAL <br />HOME SERVICES.</h1>
               <h4>randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly</h4>
               <button>contact me</button>
            </div>
        </div>
        </>
    )
}
export default About;