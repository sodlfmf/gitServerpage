'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin ,faWhatsapp,faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./page.scss";
import { useState } from 'react';
import { SandContactEmail } from '@/components/contact-mail';

const Contact=()=>{
    const [contact,setcontact] = useState({name : '', mail : '' , inquiy : ''});
    const [submitText,setsubmitText] = useState("");
    const onchange = (e : any) =>{
        setcontact({...contact,[e.target.name] : e.target.value}) ;
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(contact.name == ""){
            setsubmitText("Please enter your name")
        }else if(contact.mail == "") { 
            setsubmitText("Please enter your email")
        }else if(contact.inquiy == ""){
            setsubmitText("Please enter inquiry")
        }else{
            setsubmitText("Your inquiry has been forwarded.")
            SandContactEmail({...contact})
            setcontact({name : '', mail : '' , inquiy : ''})
        }
    }
    
    
    return (
        <div className="contact">
            <div>
                <div className="contact_Us">
                    <h1>Contact us</h1>
                    <form className='gform' method='post' id="gform"
                    // action={"https://script.google.com/macros/s/AKfycbxtEVrS0fDRvEW23rUKvTi6vhnnCvwxK1QAMIcbrQKaihbzebr8UZm6yhRuh6dv5y2M/exec"}>
                         onSubmit={onSubmit}   >
                        <div>
                            <div><input id="name" name="name" placeholder="Name" onChange={onchange} value={contact.name}></input></div>
                            <div><input id="mail" name="mail" placeholder="Mail" onChange={onchange} value={contact.mail} ></input></div>
                            <div><textarea id="inquiy" name="inquiy" rows={1} placeholder="Inquiry" onChange={onchange} value={contact.inquiy}></textarea></div>
                        </div>
                        <button ><p>SUBMIT</p></button>
                        <div id="submit_message">
                        <h2>{submitText}
                        </h2>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contact_link">
                <div>
                    <div className="mailIcon"><FontAwesomeIcon icon={faEnvelope} size="6x" /></div>
                    <div><a href="mailto:yeowoon@yeowoon.co.kr"><b>yeowoon@yeowoon.co.kr</b></a></div>
                </div>
                <div className="links">
                    <div >
                        <div className="icon"><FontAwesomeIcon icon={faLinkedin} size="4x" /></div>
                        <b>LinkedIn</b>
                        <div>Jung Soonhee</div>
                    </div>
                    <div>
                        <div className="icon"><FontAwesomeIcon icon={faWhatsapp} size="4x" /></div>
                        <b>What&apos;sapp</b>   
                        <div>+8210-9573-4680</div>
                    </div>
                    <div>
                        <div className="icon"><FontAwesomeIcon icon={faInstagram} size="4x" /></div>
                        <b>Instagram</b>
                        <div><a href="https://www.instagram.com/s.tree_official/">@s.tree_offcial</a></div>
                        <div><a href="https://www.instagram.com/soonhee_official/">@soonhee.offcial</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact