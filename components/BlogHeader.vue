<template>
    <header class="blog-header">
        <div class="container">
            <BlogHead></BlogHead>
            <BlogNav></BlogNav>
        </div>
    </header>
</template>
<script>
    import BlogNav from '~/components/BlogNav'
    import BlogHead from '~/components/BlogHead'

    export default {
        name: 'BlogHeader',
        components: {
            BlogNav,
            BlogHead
        },
        methods: {
        }
    }
</script>
