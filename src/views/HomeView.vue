<script setup lang="ts">
import ProfileImage from '@/assets/images/avatar-jessica.jpeg'
import LinkButton from '@/components/LinkButton.vue'

const profile = {
  avatarUrl: ProfileImage,
  fullName: 'Jessica Randall',
  country: 'United Kingdom',
  city: ' London',
  summary: 'Front-end developer and avid reader.',
  links: [
    { name: 'GitHub', url: '#' },
    { name: 'Frontend Mentor', url: '#' },
    { name: 'Linkedin', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' }
  ]

}
</script>

<template>
  <main class="p-5 flex items-center justify-center min-h-screen">
    <div
      class="bg-neutral-dark-gray rounded-2xl p-6 text-center max-w-xs mx-auto space-y-6 md:p-8 md:max-w-[22rem] w-full">
      <div class="space-y-2">
        <img :src="profile.avatarUrl" alt="Profile image" class="size-20 rounded-full mx-auto md:size-24">
        <h1 class="text-white font-bold text-2xl md:text-3xl">{{ profile.fullName }}</h1>
        <h2 class="text-primary font-semibold">{{ profile.city }}, {{ profile.country }}</h2>
      </div>
      <p class="text-white text-sm md:text-base">"{{ profile.summary }}"</p>

      <ul class="space-y-4">
        <li v-for="(link,index) in profile.links" :key="index">
          <LinkButton :link="link" />
        </li>
      </ul>
    </div>
  </main>
</template>
