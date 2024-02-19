<template>
  <UContainer :ui="{ constrained: 'max-w-8xl' }" class="text-black pt-20">
    <div class="grid grid-cols-2">
      <div v-for="(image, index) in imageGallery" :key="index" class="m-2">
        <NuxtImg
          preload
          :src="$urlFor(image)"
          alt="image-alt-text-here"
          sizes="100vw sm:50vw md:400px"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute();

const getProjectGalleryById = groq`
*[_type == "projects" && _id == $id]{
    "imageUrls": images[].asset->url,
} | order(_createdAt desc)
`;

const sanity = useSanity();
const { data } = await useAsyncData("articles", () =>
  sanity.fetch(getProjectGalleryById, { id: route.params.id })
);

const imageGallery = ref(data.value[0].imageUrls);
</script>

<style scoped></style>
