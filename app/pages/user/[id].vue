<script setup lang="ts">
  import {useRouter} from "nuxt/dist/app";
  const route = useRoute();
</script>

<template>
  <div>
    user {{route.params.id}}
  </div>
</template>
