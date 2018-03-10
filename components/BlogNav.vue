<template>
    <nav class="blog-nav" :class="{flex: isShow}">
        <a href="#" class="nav-item">首页</a>
        <a href="#" class="nav-item">心情</a>
        <a href="#" class="nav-item">思路</a>
        <blog-search></blog-search>
    </nav>
</template>

<script>
    import BlogSearch from '~/components/BlogSearch'

    export default {
        name: 'BlogNav',
        components: {
            BlogSearch
        },
        computed: {
            isShow() {
                return this.$store.state.header.mobileNavActive
            }
        }
    }
</script>
