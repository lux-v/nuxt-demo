<template>
    <div>
        <h1>Products</h1>
        <div>
            <div class="grid grid-cols-4 gap-5 ">
                <div v-for="p in products" :key="p.id">
                    <ProductCard :product="p" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Products',
    meta: [
        {
            name: 'description',
            content: 'Nuxt 3 - Products page'
        }
    ],
})

</script>
<style scoped></style>