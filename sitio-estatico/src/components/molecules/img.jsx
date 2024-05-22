import Images from "../atoms/Images";
import Text from "../atoms/Text";
 function IMG (props){
    return (
        <div id="img">
        <Images image={props.image}></Images>
        <Text text ={props.text}></Text>
        </div>
    )
 }
 export default IMG;