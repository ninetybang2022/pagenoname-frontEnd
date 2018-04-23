<template>
    <section class="container">
        <div class="blog-page-index">
            <div class="article-list">
                <article-item></article-item>
            </div>
            <aside class="blog-aside">
                <div class="aside-search">
                    <blog-search></blog-search>
                    <blog-list-group></blog-list-group>
                    <blog-list-group></blog-list-group>
                </div>
            </aside>
        </div>
    </section>
</template>
<script>
    import ArticleItem from '~/components/ArticleItem'
    import BlogSearch from '~/components/BlogSearch'
    import BlogListGroup from '~/components/BlogListGroup'

    export default {
        name: 'PageIndex',
        components: {
            ArticleItem,
            BlogSearch,
            BlogListGroup
        }
    }
</script>
<style>
    .input[type=radio] {width:100px;height:100px;}
</style>
