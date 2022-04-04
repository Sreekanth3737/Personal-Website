function sendMail(params){
    let msg={
        from_name:document.getElementById("name").value,
        from_email:document.getElementById('email').value,
        subject:document.getElementById('subject').value,
        message:document.getElementById('message').value
    };
    emailjs.send("service_sffrs1r","template_zcf2t6n",msg).then((res)=>{
        console.log(alert("message send success."));
        document.getElementById('name')="",
        document.getElementById('email')="",
        document.getElementById('subject')="",
        document.getElementById('message')=""

    });
}