<script setup lang="ts">

defineProps<{
  link : {
    name:string,
    url:string
  }
}>()
</script>



<template>
  <a :href="link.url" class="w-full text-white font-semibold bg-neutral-gray py-3 transition-colors hover:bg-primary hover:text-neutral-dark-gray inline-flex justify-center rounded-lg">{{link.name}}</a>
</template>