<template>
    <div class="blog-list-group">
        <div class="list-group-title">
            <blog-icon type="calendar" text="新文章"></blog-icon>
        </div>
        <div class="list-group-items">
            <blog-list-group-item></blog-list-group-item>
            <blog-list-group-item></blog-list-group-item>
        </div>
    </div>
</template>
<script>
    import BlogListGroupItem from '~/components/BlogListGroupItem'
    import BlogIcon from '~/components/BlogIcon'

    export default {
        name: 'BlogListGroup',
        components: {
            BlogListGroupItem,
            BlogIcon
        }
    }
</script>
