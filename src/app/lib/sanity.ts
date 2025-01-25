import  ImageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity"
// import { client } from "@/sanity/lib/client";


export const client = createClient({
    projectId: 'xd63m7jl',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}