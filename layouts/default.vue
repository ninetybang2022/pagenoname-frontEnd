<template>
    <div class="main">
        <blog-header></blog-header>
        <nuxt />
        <blog-footer></blog-footer>
    </div>
</template>

<script>
    import BlogHeader from '~/components/BlogHeader'
    import BlogFooter from '~/components/BlogFooter'
    export default {
        name: 'LayoutPage',
        components: {
            BlogHeader,
            BlogFooter
        }
    }
</script>
