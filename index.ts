import redis from "redis";

const redisClient = redis.createClient();

redisClient.on("connect", () => {
  console.log("Connected to Redis");
  // redisClient.set('redisKey',"working redis")
});

redisClient.on("error", () => {
  console.log("Error in connecting to redis");
});

redisClient.connect();

const init = async () => {
  // SET
  const redisSET = await redisClient.SET("username", "redis123");
  console.log("redisSET", redisSET);

  // GET
  const redisGET = await redisClient.GET("username");
  console.log("redisGET", redisGET);

  // SETNX
  // for unique keys
  const redisSETNX = await redisClient.SETNX("username", "new username");
  console.log("redisSETNX", redisSETNX);

  // MGET
  const redisMGET = await redisClient.MGET(["username","new username"]);
  console.log('redisMGET',redisMGET);
};

init();
