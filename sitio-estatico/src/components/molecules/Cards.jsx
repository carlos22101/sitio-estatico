import Images from "../atoms/Images";
import Text from "../atoms/Text";
import './Cards.css'

function Cards(props){
    return (
        <div id="Cards-box">
        <Images image={props.image}></Images>
        <Text text ={props.text}></Text>
        </div>
    )
}
export default Cards;