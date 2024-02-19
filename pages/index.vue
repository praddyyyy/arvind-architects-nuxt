<template>
  <UContainer :ui="{ constrained: 'max-w-8xl' }" class="text-black pt-20">
    <div class="py-8">
      <p class="font-bold text-4xl sm:text-7xl">Crafting Dreams</p>
      <p class="font-bold text-4xl sm:text-7xl">Into Reality</p>
    </div>

    <div class="sm:py-8 py-2">
      <NuxtImg
        src="/images/hero-arch-1.jpg"
        class="h-[800px] w-full object-cover"
        fit="cover"
      />
    </div>

    <!-- About Us -->
    <UDivider label="ABOUT US" :ui="{ label: 'text-gray-800 text-lg' }" />

    <div>
      <div class="py-6">
        <p class="text-xl sm:text-3xl font-normal">
          We dig deep to understand what the space means to you, what purpose it
          should serve,how it should make you feel, what you want it to say
        </p>
        <button
          class="mt-8 p-2 bg-black rounded-md text-white hover:bg-gray-800 uppercase tracking-wider text-md"
        >
          About Us
        </button>
      </div>
    </div>

    <!-- Projects -->
    <UDivider label="PROJECTS" :ui="{ label: 'text-gray-800 text-lg' }" />
    <div>
      <div class="grid grid-cols-2 py-12">
        <div v-for="(image, index) in data" :key="index" class="m-2">
          <div
            class="relative inline-block overflow-hidden rounded-md bg-gray-100 hover:shadow-2xl transition-all duration-300 ease-in-out"
            @click="$router.push(`/projects/${image.id}`)"
          >
            <NuxtImg
              preload
              :src="$urlFor(image.mainImg)"
              class="h-[500px] w-[700px] rounded-sm hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              alt="image-alt-text-here"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Services -->
    <UDivider label="SERVICES" :ui="{ label: 'text-gray-800 text-lg' }" />
    <div class="pb-20">
      <div class="py-10">
        <p class="font-regular text-xl">
          With a passion for design and a commitment to excellence, we offer a
          wide range of services that cater to your unique needs. Whether
          you&apos;re seeking to build a residential masterpiece, construct a
          commercial marvel, or renovate an existing space, our team of talented
          architects and designers is here to guide you through every step of
          the process.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, index) in serviceData"
          :key="index"
          class="border rounded-md p-3 h-auto w-auto m-5"
        >
          <p class="font-bold text-2xl pb-5">{{ service.title }}</p>
          <p class="font-regular text-md">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const getProjectsHomePage = groq`
*[_type == "projects"]{
    "id": _id,
    "mainImg": mainImage.asset -> url,
} | order(_createdAt desc) [0...4]
`;

const sanity = useSanity();
const { data } = await useAsyncData("projects", () =>
  sanity.fetch(getProjectsHomePage)
);

const serviceData = [
  {
    title: "Interior Design Consultation",
    description:
      "We offer consultations to help you clarify your design goals, develop a plan of action, and choose the right materials and finishes for your project.",
  },
  {
    title: "Space Planning and Layout",
    description:
      "We can help you optimize your space for functionality, flow, and aesthetics, taking into account your specific needs and preferences.",
  },
  {
    title: "Concept Development and Visualization",
    description:
      "Our designers use 3D modeling and rendering software to create realistic visualizations of your project, allowing you to see the design before it's even built.",
  },
  {
    title: "Project Management",
    description:
      "We take care of all aspects of the project, from procurement to installation, ensuring that everything is completed on time and within budget.",
  },
  {
    title: "Custom Furniture and Decor",
    description:
      "We can design and produce custom furniture, window treatments, and decor to complement your design.",
  },
  {
    title: "Interior Styling",
    description:
      "We can help you put the finishing touches on your space, from selecting the right artwork and accessories to arranging furniture and decor.",
  },
];
</script>

<style scoped></style>
