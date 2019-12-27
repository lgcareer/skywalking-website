(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{291:function(n,e,a){"use strict";a.r(e);var s=a(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"关于使用elasticsearch，需要basic认证问题"}},[n._v("关于使用elasticsearch，需要basic认证问题")]),n._v(" "),a("p",[n._v("skywalking依赖elasticsearch集群，如果elasticsearch安装有x-pack插件的话，那么就会存在一个Basic认证,导致skywalking无法调用elasticsearch,解决方法是使用nginx做代理，让nginx来做这个Basic认证，那么这个问题就自然解决了。")]),n._v(" "),a("p",[n._v("方法如下:")]),n._v(" "),a("p",[n._v("1.安装nginx")]),n._v(" "),a("blockquote",[a("p",[n._v("yum install -y nginx")])]),n._v(" "),a("p",[n._v("2.配置nginx")]),n._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[n._v('\n\nserver {\n        listen       9200 default_server;\n        server_name  _;\n        \n        location / {\n                 proxy_set_header Host $host;\n                 proxy_set_header X-Real-IP $remote_addr;\n                 proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n                 proxy_pass http://localhost:9200;\n                 #Basic字符串就是使用你的用户名(admin),密码(12345)编码后的值\n                 #注意:在进行Basic加密的时候要使用如下格式如:admin:123456 注意中间有个冒号\n                 proxy_set_header Authorization "Basic YWRtaW4gMTIzNDU2";\n        }\n    }\n\n\n')])])]),a("p",[n._v("3.验证")]),n._v(" "),a("blockquote",[a("p",[n._v("curl localhost:9200")])]),n._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[n._v('{\n  "name" : "Yd0rCp9",\n  "cluster_name" : "es-cn-4590xv9md0009doky",\n  "cluster_uuid" : "jAPLrqY5R6KWWgHnGCWOAA",\n  "version" : {\n    "number" : "6.3.2",\n    "build_flavor" : "default",\n    "build_type" : "tar",\n    "build_hash" : "053779d",\n    "build_date" : "2018-07-20T05:20:23.451332Z",\n    "build_snapshot" : false,\n    "lucene_version" : "7.3.1",\n    "minimum_wire_compatibility_version" : "5.6.0",\n    "minimum_index_compatibility_version" : "5.0.0"\n  },\n  "tagline" : "You Know, for Search"\n}\n\n\n')])])]),a("h2",{attrs:{id:"看到如上结果那么恭喜你成功了。"}},[n._v("看到如上结果那么恭喜你成功了。")])])}],!1,null,null,null);e.default=t.exports}}]);