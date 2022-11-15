import { type LoaderArgs } from "@remix-run/node";
import { sharpTransformer } from "remix-image-sharp";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { imageLoader, DiskCache } from "remix-image/server";
export function loader({ request }: LoaderArgs) {
  let url = new URL("/", request.url);

  const config = {
    selfUrl: url.href,
    cache: new DiskCache(),
  };
  
  return imageLoader(config, request);

  // return imageLoader(
  //   {
  //     selfUrl: url.href,
  //     cache: new DiskCache({
  //       path: "../../../.cache/images",
  //     }),
  //     resolver: async (asset, url, options, basePath) => {
  //       return await fetchResolver(asset, url, options, basePath);
  //     },
  //     transformer: sharpTransformer,
  //   },
  //   request
  // );


  
}
