<template>
    <div>

        <Head>
            <Title>
                Nuxt | {{ product.title }}
            </Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <div>
            <ProductDetails :product="product" />
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
    throw createError({ statusCode: 404, message: 'Product not found', fatal: true })
}

definePageMeta({
    title: 'Products',
    description: 'This is the products page',
    layout: 'products'
})

</script>

<style scoped></style>