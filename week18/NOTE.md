# 发布系统 第一部分

发布系统的内容比较少， 主要内容包括：
* 发布系统组成：
    1. node hello world 编写部署上线 => server
    2. 使用双服务器进行发布流程的管理：
        * publish_tool: 这个tool主要负责拿到鉴权结果后进行： 压缩包/往publish传递该包/并触发release的指令。
        * publish_server: 主要负责接入鉴权， 完成鉴权后通知publish_tool， 进行压缩， 得到包后， 执行deploy.

* 知识点： Stream

* 相关包： unzipper/archive

* 扩展： 要使用koa完整的写一个发布系统。并接入监控系统。
