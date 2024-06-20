import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";


const Contact =()=>{
    return(
        <>

         <div className="contact-div">
            <div className="contact1-div">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14726.484349228942!2d75.88825034999999!3d22.667911949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716574853866!5m2!1sen!2sin" width="700" height="400"></iframe>
           
            </div>
            <div className="contact2-div">
            <h1>Meet Me</h1>
                <FaPhoneAlt/> 1111111111<br/>
                <TbBrandGmail/> contact.@gmail.com<br/>

            </div>
         </div>
        </>
    )
}
export default Contact;