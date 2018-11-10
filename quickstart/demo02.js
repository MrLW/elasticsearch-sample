/**
 *  完成增删改查4个功能
 */
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});
/**
 * 根据关键字进行查询
 * @param {*} keyword 查询
 */
function find(keyword) {
    client.search({
        "index": "megacorp", // 索引名
        "type": "employee", // 类型名
        "body": {
            "query": {
                "match": {
                    "about":keyword
                }
            }
        }
    }).then(function (resp) {
        var hits = resp.hits.hits;
        console.log(hits);
    },function (err) {
        console.trace(err.message)
    })
};

find("rock")