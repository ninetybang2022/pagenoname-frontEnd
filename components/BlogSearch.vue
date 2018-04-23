<template>
    <div class="blog-search">
        <input class="blog-search-word" placeholder="请输入关键字" type="text">
        <a href="#" class="blog-search-btn"><blog-icon type="search"></blog-icon></a>
    </div>
</template>
<script>

    import BlogIcon from '~/components/BlogIcon'

    export default {
        name: 'BlogSearch',
        components: {
            BlogIcon
        }
    }
</script>
