const net = require('net');
const parser = require('./ParserHtml');
const { ResponseParse } = require('./ResponseParse');


class Request {
    constructor(options) {
        this.method = options.method || 'GET';
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || '/';
        this.body = options.body || {};
        this.headers = options.headers || {};

        if (!this.headers['Content-Type']) {
            this.headers['Content-Type'] = "application/x-www-form-urlencoded";
        }

        if (this.headers['Content-Type'] === 'application/json') {
            this.bodyText = JSON.stringify(this.body);
        } else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            this.bodyText = Object.keys(this.body).map(k => `${k}=${encodeURIComponent(this.body[k])}`).join('&');
        }

        this.headers['Content-Length'] = this.bodyText.length;
    }

    toString() {
        return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r
\r
${this.bodyText}`
    }

    send(connection) {
        return new Promise((resolve, reject) => {
            const parser = new ResponseParse();
            if (connection) {
                connection.write(this.toString());
            } else {
                connection = net.createConnection({
                    host: this.host,
                    port: this.port,
                }, () => {
                    console.log(this.toString());
                    connection.write(this.toString());
                });
            }

            connection.on('data', (data) => {
                console.log(data.toString());
                parser.receive(data.toString());
                if (parser.isFinished) {
                    resolve(parser.response);
                    connection.end();
                }
            });
            connection.on('error', (err) => {
                reject(err);
                connection.end();
            })


        });
    }
}

void async function () {
    let request = new Request({
        method: 'POST',
        host: 'localhost',
        port: '8080',
        path: '/',
        headers: {
            ["X-Foo2"]: 'customed',
        },
        body: {
            name: 'winter'
        },
    });

    let response = await request.send();
    let dom = parser.parseHTML(response.body);
}();
