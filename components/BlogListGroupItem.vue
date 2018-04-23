<template>
    <a class="blog-group-list-item">
        <blog-icon type="chevronRight"></blog-icon>
        <span class="blog-group-item-text">这是一篇非常牛X的入门文章 </span>
    </a>
</template>
<script>

    import BlogIcon from '~/components/BlogIcon'

    export default {
        name: 'BlogListGroupItem',
        components: {
            BlogIcon
        }
    }
</script>
