<template>
    <span class="fa icon" v-bind:class="iconClassName">
        <span class="icon-text" v-if="text">
            {{text}}
        </span>
    </span>
</template>
<script>

    const iconList = {
        calendar: 'fa-calendar-plus-o',
        chevronRight: 'fa-chevron-right',
        clock: 'fa-clock-o',
        search: 'fa-search'
    }

    export default {
        name: 'BlogIcon',
        props: {
            type: String,
            text: String
        },
        computed: {
            iconClassName() {
                if (iconList[this.type]) {
                    return iconList[this.type]
                }
                console.warn(`${this.type} icon type not defined`)
                return ''
            }
        }
    }
</script>
