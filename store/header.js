export const state = () => ({
    mobileNavActive: false,
    activeIndex: 0
})

export const mutations = {
    mobileNavActiveToggle(state) {
        state.mobileNavActive = !state.mobileNavActive
    }
}
