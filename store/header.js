export const state = () => ({
    mobileNavActive: false
})

export const mutations = {
    mobileNavActiveToggle(state) {
        state.mobileNavActive = !state.mobileNavActive
    }
}
