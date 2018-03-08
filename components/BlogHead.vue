<template>
    <div class="blog-head">
        <div class="btn-nav-list" :class="{active: isActive}" @click="mobileNavToggle">
            <span class="fa fa-bars" aria-hidden="true"></span>
        </div>
        <h1 class="blog-head-logo">PageNOName</h1>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'

    export default {
        name: 'BlogHead',
        computed: {
            isActive() {
                return this.$store.state.header.mobileNavActive
            }
        },
        methods: {
            ...mapMutations({
                mobileNavToggle: 'header/mobileNavActiveToggle'
            })
        }
    }
</script>
