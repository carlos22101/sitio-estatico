import Images from "../atoms/Images";
import Text from "../atoms/Text";
 function Box (props){
    return (
        <div id="box">
        <Images image={props.image}></Images>
        <Text text ={props.text}></Text>
        </div>
    )
 }
 export default Box;