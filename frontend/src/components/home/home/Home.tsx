import "./Home.css";
// if you have an image to display, this is how you would import it
import boardImageSource from '../../../assets/images/board meet.jpg';

function Home(): JSX.Element {

   
    return (
        <div className="Home">
            <p>welcome to  board meetings</p>

           
            <img src={boardImageSource}/>

        </div>
    );
}

export default Home;
