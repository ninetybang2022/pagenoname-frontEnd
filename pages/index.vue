<template>
    <section class="container">
        <div class="blog-page-index">
            <div class="article-list">
                <article-item></article-item>
            </div>
            <aside class="blog-aside">
                <div class="aside-search">
                    <blog-search></blog-search>
                </div>
            </aside>
        </div>
    </section>
</template>
<script>
    import ArticleItem from '~/components/ArticleItem'
    import BlogSearch from '~/components/BlogSearch'

    export default {
        name: 'PageIndex',
        components: {
            ArticleItem,
            BlogSearch
        }
    }
</script>
