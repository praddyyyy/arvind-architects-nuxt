<template>
  <UContainer :ui="{ constrained: 'max-w-8xl' }" class="text-black pt-20">
    <div>
      <div class="py-10 h-[600px] flex flex-col justify-center">
        <h1 class="font-bold text-6xl">Let&apos;s be</h1>
        <h1 class="font-bold text-6xl">proud together.</h1>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-3">
        <div v-for="(image, index) in data" :key="index">
          <div class="my-5">
            <!-- <Link :to="`/projects/${image.id}`"> -->
            <div
              class="relative inline-block overflow-hidden rounded-md shadow-md bg-gray-100 hover:shadow-2xl transition-all duration-300 ease-in-out"
              @click="$router.push(`/projects/${image.id}`)"
            >
              <NuxtImg
                :src="$urlFor(image.mainImg)"
                alt="image-alt-text-here"
                class="hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer h-[400px] w-[400px]"
              />
            </div>
            <!-- </Link> -->
            <h1 class="text-2xl font-bold py-5">{{ image.location }}</h1>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const { $urlFor } = useNuxtApp();

const getProjectsTitle = groq`
*[_type == "projects"]{
    "id": _id,
    "location": location->name,
    "mainImg": mainImage.asset->url,
    "imageUrls": images[].asset->url,
} | order(_createdAt desc)
`;

const sanity = useSanity();
// const builder = imageUrlBuilder(sanity.config);

// function urlFor(source: string) {
//   return builder.image(source).width(300).height(300).url();
// }

const { data } = await useAsyncData("articles", () =>
  sanity.fetch(getProjectsTitle)
);
</script>

<style scoped></style>
