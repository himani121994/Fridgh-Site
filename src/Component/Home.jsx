import "./home.css";
import homeimg from "../assets/Img/home.png"
const Home = () => {
    return (
        <div id="firstdiv">
            
                <div className="hero-section">
                    <div className="hero-section1"><h1>Repair and<br />Maintenance<br />Services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem 
                    adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus solut
                    abrhic praesentium mollitia consequatur beatae, aspernatur culpa.</p>
                    </div>
                    <div className="hero-section2">
                        <img className="hero-img" src={homeimg} alt="" />
                    </div>
                </div>

                {/* ======================= */}
                <div className="second-div">
                    <div >
                        hellow
                    </div>
                    <div >
                        hellow
                    </div>
                    <div >
                        hellow
                    </div>
                </div>
        </div>
    )
}
export default Home;
