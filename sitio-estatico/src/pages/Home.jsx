import Section from "../components/organisms/Section";
import './Home.css'
import Section2 from "../components/organisms/Section2";
import Section3 from "../components/organisms/Section3";


function Home(){
    return (
    <>
        <div class="cards-home">
            <Section></Section>
            </div>
            <div class="cards-home"> 
                <Section2></Section2>
            </div>
            <div class="cards-home">
                <Section3></Section3>
            </div>
            </>
    )
}
export default Home;