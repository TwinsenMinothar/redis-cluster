const Redis = require("ioredis");

const cluster = new Redis.Cluster([
    {
        port: 6379,
        host: "10.0.2.4",
    },
    {
        port: 6381,
        host: "10.0.0.6",
    },
]);

cluster.set("foo", "bar");
cluster.get("foo", (err, res) => {
    // res === 'bar'
    console.log('Awnswer:', res);
});