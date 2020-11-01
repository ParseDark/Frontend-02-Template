let http = require('http');
let https = require('https');
let unzipper = require('unzipper');
let querystring = require('querystring');




// 2. 增加auth路由， 接受code, 使用code + client_id + client_secret换取token
 
function auth(request, response) {
    let query  = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
    console.log(query);
    getToken(query.code, (options) => {
        console.log(options);
        // response.write(JSON.stringify(options));
        // response.write(`<a href="http://v2.hawei.fun:8083/?token=${info.access_token}">publish</a>`);
        response.write(`<a href="http://localhost:8083/?token=${options.access_token}">publish</a>`);
        response.end();
    });
}

function getToken(code, callback) {
    let request = https.request({
        hostname: 'github.com',
        path: `/login/oauth/access_token?code=${code}&client_id=Iv1.bc980ec1f0e04348&client_secret=4c846683f73b350ef406adf1c932031529c197e2`,
        port: 443,
        method: 'POST'
    }, function(response) {
        let body = "";
        response.on('data', (chunk) => {
            body += (chunk.toString());
        });

        response.on('end', (chunk) => {
            let options = querystring.parse(body);
            callback(options)
        });
    });
    request.end();
}

// 4. publish路由： 用toke获取用户信息
function publish(request, response) {
    let query  = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);

    if(query.token) {
        getUser(query.token, (userInfo) => {
            console.log('validation user', userInfo);
            const userInfoObj = JSON.parse(userInfo);
            if(userInfoObj.login === 'ParseDark') {
                console.log(' ======> ');
                request.pipe(unzipper.Extract({path: '../server/public/'}));
                request.on('end', function() {
                    response.end("sucess publish!!!");
                })
            }
           
       })
        
    }


    


}

function getUser(token, cb) {
    let request = https.request({
        hostname: 'api.github.com',
        path: `/user`,
        port: 443,
        method: 'GET',
        headers: {
            Authorization: `token ${token}`,
            'User-Agent': "publish-demo-auth" 
        }
    }, function(response) {
        let body = "";
        response.on('data', (chunk) => {
            body += (chunk.toString());
        });

        response.on('end', (chunk) => {
            console.log('end', body);
            cb(body)
        });
    });
    request.end();
}


http.createServer(function(request, response) {

    if(request.url.match(/^\/auth\?/)) {
        return auth(request, response);
    }
    if(request.url.match(/^\/publish\?/)) {
        return publish(request, response);
    }
}).listen(8082);

