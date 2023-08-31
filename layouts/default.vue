<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto py-4 px-2 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/" class="btn"> Home</NuxtLink>
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
    </div>
</template>

<script setup>
</script>

<style scoped></style>