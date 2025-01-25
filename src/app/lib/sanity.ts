import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";


interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
  };
}

export const client = createClient({
  projectId: 'xd63m7jl',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}
