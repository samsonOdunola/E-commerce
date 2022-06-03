import Navbar from "./Navbar";
import image1 from "./images/image1.png"

const Herosection = ({cartCount,cartDisplay,activeUser}) => {
    return <header>
        <Navbar cartCount={cartCount} activeUser={activeUser}cartDisplay={cartDisplay}/>
        <div className="hero">
            <div>
             <h1>Give Your Work out <br></br>A New Style!</h1>
             <p>Success isnt always about greatness. It's about consistency.<br /> Consistent 
                hard work gains success. Greatness will come.
             </p>
             <button>Explore more</button>
            </div>
            <img src={image1} alt="" />
        </div>
    </header>;
}


export default Herosection;