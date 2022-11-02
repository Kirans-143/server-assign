let http = require("http");
let server = http.createServer((req,res) => {
    switch(req.url){
        case "/grocery":
            res.write("This is Grocery Section");
            break;
        case "/sports":
            res.write("This is Sports Section");
            break;
        case "/electronics":
            res.write("This is Electronics Section");
            break;
        default:
            res.write("This is Homepage")
            break;
    }
   
    res.end();
});

server.listen(8448,()=>{
    console.log('Server is up and running');
});