<template>
    <div class="blog-head">
        <h1 class="blog-head-logo">PageNOName</h1>
        <div class="btn-nav-list" :class="{active: isActive}" @click="mobileNavToggle">
            <span class="fa" :class="icon" aria-hidden="true"></span>
        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'

    export default {
        name: 'BlogHead',
        computed: {
            isActive() {
                return this.$store.state.header.mobileNavActive
            },
            icon() {
                return this.$store.state.header.mobileNavActive ? 'fa-times' : 'fa-bars'
            }
        },
        methods: {
            ...mapMutations({
                mobileNavToggle: 'header/mobileNavActiveToggle'
            })
        }
    }
</script>
