### 简介
* Node.js 不是 JavaScript 应用，不是语言（JavaScript 是语言），不是像 Rails(Ruby)、 Laravel(PHP) 或 Django(Python) 一样的框架，也不是像 Nginx 一样的 Web 服务器。Node.js 是 JavaScript 运行时环境
* 构建在 Chrome's V8 这个著名的 JavaScript 引擎之上，Chrome V8 引擎以 C/C++ 为主，相当于使用JavaScript 写法，转成 C/C++ 调用，大大的降低了学习成本
* 事件驱动（event-driven），非阻塞 I/O 模型（non-blocking I/O model），简单点讲就是每个函数都是异步的，最后由 Libuv 这个 C/C++ 编写的事件循环处理库来处理这些 I/O 操作，隐藏了非阻塞 I/O 的具体细节，
  简化并发编程模型，让你可以轻松的编写
* 高性能的Web应用，所以它是轻量（lightweight）且高效（efficient）的
* 使用 npm 作为包管理器，目前 npm 是开源库里包管理最大的生态，功能强大，截止到2017年12月，模块数量超过 60 万+

### 应用场景
![应用场景](https://i5ting.github.io/How-to-learn-node-correctly/media/14912707129964/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-05-17%2007.25.05.png "nodejs")


### 官网API
[nodejs中文](http://nodejs.cn/api/)


### 示例
[入门讲解](https://www.nodebeginner.org/index-zh-cn.html)
```js
// 这段代码只会监听8888端口，不会做任何响应
var http = require("http");

var server = http.createServer();
server.listen(8888);

//
var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(8888);