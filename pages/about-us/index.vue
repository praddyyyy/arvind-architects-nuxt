<template>
  <UContainer :ui="{ constrained: 'max-w-8xl' }" class="text-black pt-20">
    <div class="pt-10 text-5xl sm:text-7xl font-extrabold">
      <p>Oh,</p>
      <p>Hello There!</p>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-y-10 py-10 font-light text-xl sm:text-2xl justify-items-center"
    >
      <div class="max-w-[500px]">
        <p>
          At Arvind Architects, we believe that a beautifully designed space can
          transform the way you live and work. Our team of experienced designers
          is dedicated to creating customized interiors that are not only
          functional but also aesthetically pleasing.
        </p>
      </div>
      <div class="max-w-[500px]">
        <p>
          We offer a range of services to cater to your needs, whether it be a
          complete home or office renovation, a single room makeover, or even
          just interior styling. We work closely with our clients to understand
          their unique vision and preferences, and we strive to exceed their
          expectations every step of the way.
        </p>
      </div>
      <div class="max-w-[500px]">
        <p>
          Thank you for considering Arvind Architects for your interior design
          needs. We look forward to the opportunity to work with you and bring
          your vision to life.
        </p>
      </div>
    </div>
    <!-- <UDivider /> -->
    <div class="text-center pt-10 leading-loose">
      <p class="text-5xl sm:text-7xl font-black">Hello, I&apos;m Arvind</p>
      <p
        class="text-xl sm:text-2xl font-bold font-serif italic tracking-widest pt-5"
      >
        Chief Executive Officer
      </p>
    </div>
    <div
      class="flex flex-col sm:flex-row py-16 justify-center space-y-10 sm:space-y-0 space-x-20 font-serif items-start text-xl"
    >
      <div class="grid grid-cols-1 gap-y-10">
        <div class="max-w-[500px]">
          <p>
            Hello this is Arvind and I own Arvind Architects. I started this
            business with a vision of creating beautiful and functional spaces
            that truly reflect my clients&apos; personalities and lifestyles.
            From the beginning, honesty and genuine care for my clients has been
            the foundation of my business. I believe that open communication and
            transparency are essential in building trust and long-lasting
            relationships with my clients.
          </p>
        </div>
        <div class="max-w-[500px]">
          <p>
            At Arvind Architects, we pride ourselves on our commitment to
            quality and creativity. We approach each project with a fresh
            perspective and a genuine passion for design. Our goal is to create
            a space that not only looks beautiful but also feels comfortable and
            functional for our clients&apos; unique needs and lifestyle.
          </p>
        </div>
        <div class="max-w-[500px]">
          <p>
            We offer a range of services to cater to your needs, whether it be a
            complete home or office renovation, a single room makeover, or even
            just interior styling. We work closely with our clients to
            understand their unique vision and preferences, and we strive to
            exceed their expectations every step of the way.
          </p>
        </div>
        <div class="max-w-[500px]">
          <p>
            Thank you for considering Arvind Architects for your interior design
            needs. We look forward to the opportunity to work with you and bring
            your vision to life.
          </p>
        </div>
      </div>
      <div>
        <NuxtImg
          src="images/arvind-about.png"
          alt="Picture of the author"
          fit="cover"
          sizes="100vw sm:50vw md:400px"
        />
      </div>
    </div>
    <div
      class="text-center font-serif text-xl sm:text-4xl pb-10 font-bold tracking-wider"
    >
      <p>Villager &#8226; Visionary &#8226; Winner</p>
    </div>
    <UDivider class="w-full bg-gray-400" />
    <div class="pt-10">
      <p class="text-6xl font-bold">Meet Our Team</p>
    </div>
    <div class="text-left flex justify-end">
      <p class="font-serif py-10 max-w-[700px] text-xl">
        Meet the talented and passionate team behind our interior design
        company. Our team is composed of highly skilled professionals with
        backgrounds in interior design, architecture, and construction. With
        their extensive experience, innovative thinking, and commitment to
        excellence, they&apos;re dedicated to bringing your vision to life and
        creating a space that perfectly reflects your style and personality. Get
        to know our team and discover how their expertise can help you achieve
        the living space of your dreams.
      </p>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10 justify-items-center"
    >
      <div v-for="(person, index) in teamData" :key="index">
        <div
          class="group flex flex-col relative cursor-pointer overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-shadow"
        >
          <div class="h-[20rem] w-[15rem] sm:h-[25rem] sm:w-[20rem]">
            <NuxtImg
              :src="person.image"
              alt="Picture of the author"
              class="h-full w-full rounded-md duration-500 object-cover group-hover:scale-110 transition-transform"
            />
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent transition-all to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center text-center translate-y-[60%] group-hover:translate-y-0 transition-all"
          >
            <h1 class="text-white font-bold text-3xl">{{ person.name }}</h1>
            <p
              class="group-hover:opactiy-100 transition-opacity text-white italic font-xl text-bold duration-300"
            >
              {{ person.role }}
            </p>
          </div>
        </div>
        <div class="font-semibold capitalize py-3">
          <p class="text-xl">{{ person.name }}</p>
          <p class="text-sm">{{ person.role }}</p>
        </div>
      </div>
    </div>

    <UDivider class="w-full bg-gray-400" />
    <div class="pb-10">
      <div class="pt-10">
        <p class="text-6xl font-bold">Our Partners</p>
      </div>
      <div class="text-center text-4xl font-semibold space-y-3 py-10">
        <p>Collaboration Brings</p>
        <p>Out The Best In Us</p>
      </div>
      <p class="max-w-[1200px] m-auto text-2xl text-center">
        In our efforts to bring our designs alive, we are proud to work with not
        only some of the best brands in the world but also with a host of
        talented builders, architects and developers.
      </p>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const teamData = [
  {
    image: "/images/team-arvind.jpeg",
    name: "Aravind",
    role: "CEO & Founder",
  },
  {
    image: "/images/team-prashanth.jpeg",
    name: "Prashanth Ram",
    role: "Strategic Partner",
  },
  {
    image: "/images/team-bazeem.jpeg",
    name: "Bazeem",
    role: "Sales & Marketing Head",
  },
  {
    image: "/images/team-ramji.jpeg",
    name: "Ramji",
    role: "Business Development Manager",
  },
  {
    image: "/images/team-malini.jpeg",
    name: "Malini",
    role: "Architect",
  },
  {
    image: "/images/team-keerthika.jpeg",
    name: "Keerthika",
    role: "Design Head & CRM",
  },
  {
    image: "/images/team-paramesh.jpeg",
    name: "Paramesh",
    role: "Civil Engineer / Sales Executive",
  },
];
</script>

<style scoped></style>
