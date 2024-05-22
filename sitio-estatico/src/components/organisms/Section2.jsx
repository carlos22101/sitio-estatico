import './Section2.css'
import mysql from "../../data/mysql";
import Box from '../molecules/Box';

function Section2 (){
    return (
    <div id="card-section">
        {mysql.contacs2.map(contacts => <Box image={contacts.Image} text = {contacts.texts}></Box>)}
        </div>
    )
}
export default Section2;