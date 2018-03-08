<template>
    <nav class="blog-mobile-nav" :class="{active: isActive}">
        <a href="" class="nav-item">首页</a>
        <a href="" class="nav-item">心情</a>
        <a href="" class="nav-item">思路</a>
    </nav>
</template>
<script>

    export default {
        name: 'BlogMobileNav',
        computed: {
            isActive() {
                return this.$store.state.header.mobileNavActive
            }
        }
    }
</script>
