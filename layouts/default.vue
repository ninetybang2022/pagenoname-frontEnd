<template>
    <div class="main">
        <blog-header></blog-header>
        <nuxt />
    </div>
</template>

<script>
    import BlogHeader from '~/components/BlogHeader'
    export default {
        name: 'LayoutPage',
        components: {
            BlogHeader
        }
    }
</script>

<style>
</style>
