let http=require('http');
let fs=require('fs');
let server=http.createServer(function(request,response){
    response.setHeader('content-type','text/html;charset=utf-8');
    fs.readFile('./tem/tem.html',function(err,data){
        if(err){
            console.log(err)
        }else{
            response.end(data);
        }
    })
    
})
server.listen(80,'127.0.0.1',function(){
    console.log('监听成功');
})