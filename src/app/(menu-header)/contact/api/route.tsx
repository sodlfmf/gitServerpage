import { sendEmail } from "@/util/email";

export async function POST(req: Request) {
    const body = await req.json();
    return sendEmail(body)
    .then(
        ()=> 
        new Response(JSON.stringify({ messag : "메일 전송 완료"}),{
            status : 200,
        })
    )
    .catch(() =>{
        return new Response(
            JSON.stringify({ messag : "메일 전송 실패"}),{
                status : 500,
            }
        )
    })   
}