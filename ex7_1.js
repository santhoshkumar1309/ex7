calc = require(".ex7_2");

http = require('http');
url = require('url');
querystring = require('querystring');

function onRequest(request, response) {
    var path = url.parse(request.url).pathname;
    console.log('Request for ' + path + 'received.');
    var query = url.parse(request.url).query;
    console.log(query);
    var a = Number(querystring.parse(query)["a"]);
    var b = Number(querystring.parse(query)["b"]);
    var option = querystring.parse(query)["option"];
    switch(option){
        case "+":
            var ans = (calc.add(a,b));
            response.write("value is "+ans.toString());
            break;
        case "-":
            var ans = (calc.sub(a,b));
            response.write("value is "+ans.toString());
            break;
        case "*":
            var ans = (calc.mul(a,b));
            response.write("value is "+ans.toString());
            break;
        case "/":
            var ans = (calc.div(a,b));
            response.write("value is "+ans.toString());
            break;
    }
    response.end();
}

http.createServer(onRequest).listen(8000);
console.log('Server started..');
