const fs = require('fs');


const requestHandler = (req,res)=>{

    const url = req.url;
    if(url === '/'){

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
       return res.end();
    

    }else if(req.url === '/message' && req.method === 'POST'){

        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);            
        });
        req.on('end', () =>{
            const strBody = Buffer.concat(body).toString();
            const msg = strBody.split('=')[0]
            console.log(strBody);
            fs.writeFile('message.txt', msg, err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();     
            }); 
        });  
        
       
    
    }else{

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
    }
}
module.exports = requestHandler;

