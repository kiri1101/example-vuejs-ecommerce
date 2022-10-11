<script setup>
import { RouterLink } from "vue-router";
import IconFacebook from "../icons/IconFacebook.vue";
import IconDribble from "../icons/IconDribble.vue";
import IconGithub from "../icons/IconGithub.vue";
import IconTwitter from "../icons/IconTwitter.vue";
import IconInstagram from "../icons/IconInstagram.vue";
</script>

<template>
  <footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
    <div class="md:flex md:justify-between mx-6 my-20">
      <div class="mb-6 md:mb-0">
        <RouterLink to="/" class="flex items-center">
          <img
            alt="Vue logo"
            class="logo ml-3"
            src="@/assets/logo.svg"
            width="75"
            height="75"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Utarana</span
          >
        </RouterLink>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Resources
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <RouterLink to="/" class="hover:underline">Utarana</RouterLink>
            </li>
            <li>
              <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Follow us
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">Github</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Discord</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Legal
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between mx-6">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© {{ new Date().getFullYear() }}
        <RouterLink to="/" class="hover:underline">Utarana™</RouterLink>. All Rights
        Reserved.
      </span>
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <IconFacebook />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <IconInstagram />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <IconTwitter />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <IconGithub />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <IconDribble />
        </a>
      </div>
    </div>
  </footer>
</template>
