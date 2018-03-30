<template>
    <span class="fa fa-clock-o icon icon-clock">
        <span class="icon-text">
            {{date}}
        </span>
    </span>
</template>
<script>
    export default {
        name: 'IconClock',
        props: {
            date: String
        }
    }
</script>
