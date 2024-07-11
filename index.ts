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
  // INCR
  const redisINCR = await redisClient.INCR("count");
  console.log("redisINCR", redisINCR);

  // INCRBY
  const redisINCRBY = await redisClient.INCRBY("count", 5);
  console.log("redisINCRBY", redisINCRBY);
};

init();
