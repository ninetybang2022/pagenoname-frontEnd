<template>
    <article class="blog-article-item">
        <h2 class="title">Flex 布局教程：语法篇</h2>
        <div class="article-item-attr">
            <icon-clock :date="date">
            </icon-clock>
        </div>
        <div class="article-item-intro">
            <img src="https://img-blog.csdn.net/20180327085900265" alt="" class="article-item-intro-img">
            <p class="article-item-intro-text">
                你可以用 v-model 指令在表单  及元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。
                尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行
                一些特殊处理...
            </p>
            <a href="#" class="article-item-read btn-block">阅读全文</a>
        </div>
        <div class="article-item-tags">
            <a href="#" class="btn-default">CSS</a>
            <a href="#" class="btn-default">前端技术</a>
        </div>
    </article>
</template>
<script>
    import IconClock from '~/components/icon/Clock'

    export default {
        name: 'ArticleItem',
        components: {
            IconClock
        },
        data() {
            return {
                date: '2018年05月07日'

            }
        }
    }
</script>
