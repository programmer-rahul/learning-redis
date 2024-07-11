import redis from "redis";

const redisClient = redis.createClient();

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

redisClient.on("error", () => {
  console.log("Error in connecting to redis");
});

redisClient.connect();
