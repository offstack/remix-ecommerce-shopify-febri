import { createShopifyProvider } from "./models/ecommerce-providers/shopify.server";
// import { createSwrRedisCache } from "./models/request-response-caches/swr-redis-cache.server";

// import redisClient from "./redis.server";

// if (!process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
//   throw new Error(
//     "SHOPIFY_STOREFRONT_ACCESS_TOKEN environment variable is not set"
//   );
// }

let commerce = createShopifyProvider({
  shop: 'mugens',
  storefrontAccessToken: '84a1a27543ee2d1d28d64c22af2a18b7',
  maxAgeSeconds: 60,
  // cache: createSwrRedisCache({
  //   redisClient,
  // }),
});

export default commerce;
