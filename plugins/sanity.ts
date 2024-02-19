import imageUrlBuilder from "@sanity/image-url";
export default defineNuxtPlugin(() => {
  const sanity = useSanity();

  if (!sanity.config.dataset) {
    throw new Error("Dataset is not defined in the Sanity configuration");
  }

  const builder = imageUrlBuilder(sanity.config);

  function urlFor(
    source: string,
    width?: number,
    height?: number
  ) {
    let image = builder.image(source).url();
    if (width) {
      image = builder.width(width).url();
    }
    if (height) {
      image = builder.height(height).url();
    }
    return image;
  }

  return {
    provide: { urlFor },
  };
});
