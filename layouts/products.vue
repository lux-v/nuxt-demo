<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto py-4 flex justify-between">
                <NuxtLink to="/products">Nuxt products layout</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/" class="btn">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products" class="btn">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="btn">About</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-center border-t-2">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="https://fakestoreapi.com" target="_blank" class="btn--secondary">API used </NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>



</script>

<style scoped></style>