<template>
    <header class="blog-header">
        <div class="container">
            <BlogHead></BlogHead>
            <BlogMobileNav></BlogMobileNav>
            <BlogNav></BlogNav>
        </div>
    </header>
</template>
<script>
    import BlogNav from '~/components/BlogNav'
    import BlogHead from '~/components/BlogHead'
    import BlogMobileNav from '~/components/BlogMobileNav'

    export default {
        name: 'BlogHeader',
        components: {
            BlogNav,
            BlogHead,
            BlogMobileNav
        }
    }
</script>
