import { createClient } from "redis";
console.log('process.env.REDIS_URL => ',process.env.REDIS_URL)
if (!process.env.REDIS_URL) {
  throw new Error("REDIS_URL environment variable is not set");
}

declare global {
  var redisClient: ReturnType<typeof createClient>;
}

let redisClient = (global.redisClient =
  global.redisClient ||
  createClient({
    url: process.env.REDIS_URL,
  }));

export default redisClient;

