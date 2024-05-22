import './Section3.css'
import mysql from "../../data/mysql";
import IMG from '../molecules/img';

function Section3 (){
    return (
    <div id="card-section">
        {mysql.contacs3.map(contacts => <IMG image={contacts.Image} text = {contacts.texts}></IMG>)}
        </div>
    )
}
export default Section3;