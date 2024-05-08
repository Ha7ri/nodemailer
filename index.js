const nodemailer = require('nodemailer');

const sender = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: "krishnanharir97@gmail.com",
         pass:"buqcossuumrlksjf"

    }
});

const composeMail = {
    from: "krishnanharir97@gmail.com",
     to: "ashin209@gmail.com",
     subject: "Node Js Mail Testing!",
     text: "Hello this is a text mail"
    
};

sender.sendMail(composeMail,function(error,info){
    if(error)
        {
            console.log(error);
        
        }
        else{
            console.log("Mail sent succesfully" + info.response);
        }
});
