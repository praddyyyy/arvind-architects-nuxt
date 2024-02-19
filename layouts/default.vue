<template>
  <div class="h-full bg-white">
    <nav
      class="bg-white fixed w-full py-4 px-6 md:flex shadow justify-between items-center z-50"
    >
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold uppercase tracking-wider text-black">
          Arvind Architects
        </h1>
      </div>

      <span class="absolute md:hidden right-6 top-1.5">
        <Icon
          name="ion:menu"
          class="h-6 w-6"
          @click="open = !open"
          v-if="!open"
        />
        <Icon name="ion:close" class="h-6 w-6" @click="open = !open" v-else />
      </span>

      <ul
        class="md:flex md:items-center md:space-x-6 space-y-4 py-4 md:static absolute bg-gray-900 md:bg-transparent md:py-0 md:space-y-0 md:w-auto w-full top-14 font-semibold tracking-wider text-md uppercase"
        :class="[open ? 'left-0' : '-left-[-100%]']"
      >
        <li class="md:inline-block">
          <nuxt-link
            to="/"
            class="block text-slate-900 hover:text-slate-700 focus:text-black focus:outline-none"
          >
            Home
          </nuxt-link>
        </li>
        <li class="md:inline-block">
          <nuxt-link
            to="/about-us"
            class="block text-slate-900 hover:text-slate-500 focus:text-black focus:outline-none"
          >
            About
          </nuxt-link>
        </li>
        <li class="md:inline-block">
          <nuxt-link
            to="/projects"
            class="block text-slate-900 hover:text-slate-500 focus:text-black focus:outline-none"
          >
            Projects
          </nuxt-link>
        </li>
        <li class="md:inline-block">
          <nuxt-link
            to="/contact-us"
            class="block text-slate-900 hover:text-slate-500 focus:text-black focus:outline-none"
          >
            Contact
          </nuxt-link>
        </li>
      </ul>
      <div></div>
    </nav>
    <slot />

    <!-- Footer -->
    <footer
      class="bg-zinc-900 h-auto p-10 flex flex-col justify-between text-white"
    >
      <div class="flex flex-col sm:flex-row justify-between">
        <div class="flex flex-col gap-y-5">
          <p class="text-4xl font-semibold">Follow Us on</p>
          <div class="flex space-x-5">
            <!-- {footerLinks.map((link, i) => (
              <Link href="{link.link}" key="{i}">
                <link.icon
                  class="h-8 w-8 hover:text-slate-700 hover:scale-90 transition-all duration-300 ease-in-out"
                />
              </Link>
              ))} -->
          </div>
        </div>
        <div class="mx-0 my-20 sm:my-0 sm:mx-20">
          <div>
            <p class="text-4xl font-semibold">Let&apos;s Connect</p>
            <div
              class="grid grid-cols-2 sm:grid-cols-3 gap-y-5 sm:gap-y-0 gap-x-5 sm:gap-x-20 py-10"
            >
              <div class="leading-7">
                <p
                  @click="$router.push('/projects')"
                  class="hover:cursor-pointer"
                >
                  Projects
                </p>
                <p
                  @click="$router.push('/about-us')"
                  class="hover:cursor-pointer"
                >
                  About Us
                </p>
                <p
                  @click="$router.push('/contact-us')"
                  class="hover:cursor-pointer"
                >
                  Contact Us
                </p>
              </div>
              <div class="leading-7">
                <p>Clients</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col space-y-10 sm:space-y-0 sm:flex-row sm:space-x-20 sm:justify-between"
          >
            <div>
              <p>
                <a href="tel:9443630096">+91 9443630096</a>
              </p>
              <p>
                <a href="mailto:info@arvindarchitects.com">
                  info@arvindarchitects.com
                </a>
              </p>
            </div>
            <div>
              <p class="text-xl font-bold">Arvind Architects</p>
              <div
                class="leading-5 hover:cursor-pointer hover:underline"
                @click="onAddressClick"
              >
                <p class="text-md font-sans">
                  No 17, Valiammal Street,
                </p>
                <p class="text-md font-sans">New Avadi Road, Kilpauk,</p>
                <p class="text-md font-sans">Chennai - 600 010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Separator class="w-full bg-gray-400 mt-5" />
        <div class="p-3">
          <p class="text-md">&copy; {{ currentYear }} Arvind Architects</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const open = ref(false);
const currentYear = new Date().getFullYear();
const onAddressClick = () => {
  window.open(
    "https://www.google.com/maps/place/Arvind+Architects/@13.0795293,80.2339976,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5261fdd1d0cbf7:0x5d5b719ca92f9cef!8m2!3d13.0795293!4d80.2339976!16s%2Fg%2F11r4cmh5fk?entry=ttu"
  );
};
</script>

<style scoped></style>
