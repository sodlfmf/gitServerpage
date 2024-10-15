import { ContactType } from "@/util/email";

export async function SandContactEmail(emailFrom : ContactType) {
    const response = await fetch('/contact/api', {
        method: 'POST',
        body : JSON.stringify(emailFrom),
        headers:{
            'Contact-Type' : 'application/json',
        }
    })
    
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "서버요청 실패");
    }

    return data;
}