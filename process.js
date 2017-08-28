// console.log(process.argv)
// 异步 I/O
// var fs =require('fs')
// var path = process.argv[2]
// var buf = fs.readFile(path,(err,buf)=>{
//     var content = buf.toString(); 
//     var items = content.split('\n');
// 	console.log(items.length - 1);
// })
// var sum = 0
// for (var i = 2;i<process.argv.length;i++){
//     sum += Number(process.argv[i])
//     // sum += +process.argv[i]
// }
// console.log(sum)
// baby-step
// 同步IO
// var fs =require('fs')
// var path = process.argv[2];
// var buf = fs.readFileSync(path);
// var content =buf.toString();
// var items =content.split('\n');
// console.log(items.length - 1);
// const fs = require('fs');
// const path = process.argv[2];

// const buf = fs.readFileSync(path);
// const content = buf.toString();

// const items = content.split('\n');
// console.log(items.length - 1);
//ls 过滤器
// var fs =require('fs')
// var path = require('path');
// var dir  = process.argv[2];
// var extention = process.argv[3];
// fs.readdir(dir,(err,files)=>{
//     for(let file of files){
//         if(path.extname(file).replace('.','')== extention)
//         console.log(file);
//     }
// })
// var fs = require('fs')
//     var path = require('path')

//     var folder = process.argv[2]
//     var ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })



// var fs = require('fs');
//     function endsWith(str, suffix) {
//         var s = str.slice(str.length - suffix.length - 1);
//         if (s == "." + suffix)
//             return true;
//         else
//             return false;
// };


// fs.readdir(process.argv[2], function (err, list) {
//     if (process.argv[3]) {
//         for (var i = 0; i < list.length; i++) {
//             if (endsWith(list[i], process.argv[3]))
//                 console.log(list[i]);
//         }
//     }
// });
//模块化,类似于java中的包
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// console.log(dir)
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

// // solution_filter.js
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
//HTTP client
// var http = require('http')
// //http://nodejs.org/api/http.html#http_http_get_options_callback
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })


//http collect
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// })


//http_json_api_server
// var


//异步请求
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count =0
// function printResults(){
//     for(var i=0;i<3;i++)
//     console.log(results[i])
// }
// function httpGet(index){
//     http.get(process.argv[2 + index],function (response){
//         response.pipe(bl(function(err,data){
//             if(err)
//             return console.error(err)
//             results[index] = data.toString()
//             count++
//             if(count == 3)
//             printResults()
//         }))
//     })
// }
// for(var i =0 ;i<3;i++)
// httpGet(i)


//time_server
// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))


//http_file_server
// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))

//http 大写转换器
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))