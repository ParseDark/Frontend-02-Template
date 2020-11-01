let http = require('http');

let fs = require('fs');

const archiver = require('archiver');

let child_process = require('child_process');

let querystring = require('querystring');

const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});


// 1. open auth page : https://github.com/login/oauth/authorize
child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.bc980ec1f0e04348`);

// 3. 创建server接受token， 之后再点击发布
function publish(req,res, token) {
    let request = http.request({
        hostname: "v2.hawei.fun",
        // hostname: '127.0.0.1',
        port: "8082",
        method: "POST",
        path: `/publish?token=${token}`,
        headers: {
            "Content-Type": "application/octet-stream",
        }
    }, response => {
        console.log(response);
        res.end("sucess publish!!!");
    });
    

    archive.directory('sample/', false);
    
    archive.finalize();
    
    //  local
    archive.pipe(fs.createWriteStream('tmp.zip'));
    
    // request
    archive.pipe(request);

    request.on('end', function() {
        request.end();
    });
    
    
}

http.createServer(function(request, response) {
    let query  = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1]);
    publish(request, response, query.token);

}).listen(8083);

