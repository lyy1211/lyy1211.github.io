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
server.listen(5050,'0,0,0,0',function(){
    console.log('监听成功');
})