    const http = require('http');
    const fs = require('fs');
    http.createServer(function(request, response) {
    let data;
    let posts = fs.readdirSync('./posts/');
    fs.writeFileSync('./build/index.html', '', 'utf8');
    data = fs.readFileSync('./templates/index_h.html', 'utf8');
    fs.appendFileSync('./build/index.html', data);
    posts.forEach((file)=>{
    data = fs.readFileSync('./templates/post_h.html', 'utf8');
    fs.appendFileSync('./build/index.html', data);
    data = fs.readFileSync('./posts/' + file, 'utf8');
    fs.appendFileSync('./build/index.html', data);
    data = fs.readFileSync('./templates/post_f.html', 'utf8');
    fs.appendFileSync('./build/index.html', data);
    })
    data = fs.readFileSync('./templates/index_f.html', 'utf8');
    fs.appendFileSync('./build/index.html', data);
    fs.readFile("./build/index.html", function(err, data){
    if (err) throw err;
    console.error(err);
    response.writeHead(200, {'data-Type': 'text/html'});
    response.write(data);
    response.end();
     });
    }).listen(process.env.PORT || 3000);