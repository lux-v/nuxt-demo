<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" :alt="product.title" class="mx-auto my-7">
            </div>

            <div class="p-7">
                <button class="btn btn--secondary flex" @click="handleGoBack">
                    <i class="material-icons mr-2">arrow_back</i>
                </button>
                <h2 class="text-4xl my-7">
                    {{ product.title }}
                </h2>

                <p class="text-2xl my-7">
                    Price - ${{ product.price }}
                </p>

                <h3 class="font-bold border-b-2 mb-4 pb-2">
                    Product description
                </h3>
                <p>
                    {{ product.description }}
                </p>
                <button class="btn mt-7 flex">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])

const handleGoBack = () => {
    if (process.client) {
        window.history.back()
    }
}

</script>

<style  scoped>
img {
    max-width: 400px;
}
</style>