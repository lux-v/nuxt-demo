<template>
    <div class="card text-center">
        <div>
            <img :src="product.image" :alt="product.title" class="thumb">
            <p class="font-bold text-gray-500 m-4 truncate"> {{ product.title }}</p>
        </div>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">
                View Details
            </p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])

</script>

<style scoped>
.thumb {
    max-width: 120px;
    max-height: 70%;
    margin: 0 auto;
}
</style>