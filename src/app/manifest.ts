import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sri Sudarshan Vastu Jyothishalayam",
    short_name: "Sudarshan Vastu",
    description:
      "Vedic astrology, Vastu, palmistry and spiritual remedies consultation.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f3ea",
    theme_color: "#08111f",
  };
}
