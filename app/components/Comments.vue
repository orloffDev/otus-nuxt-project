<script setup>
  const route = useRoute()
  const routeName = route.params.slug?.[0] || 'index'

  const { data } = await useAsyncData(`comments-${route.path}`, () => {
    return queryCollection('comments').where("stem", "=", `comments/${routeName}`).first()
  })

</script>
<template>
  <pre>
    {{data.meta}}
  </pre>
</template>
