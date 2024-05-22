import Cards from "../molecules/Cards";
import mysql from "../../data/mysql";
import './Section.css'

function Section(){
    return (

        <div id="card-section">
        {mysql.contacts.map(contacts => <Cards image={contacts.Image} text = {contacts.texts}></Cards>)}
        </div>
        
    )
}
export default Section;