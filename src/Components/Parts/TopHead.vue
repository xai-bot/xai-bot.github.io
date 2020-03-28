<template>
    <header class="app-head">
        <img :alt="app.displayName" class="app-icon" src="https://images.newscientist.com/wp-content/uploads/2020/01/27123401/f0070229-coronavirus_artwork-spl.jpg" />

        <div class="app-info">
            <div class="app-name">{{app.displayName}}</div>
            <div class="app-poweredby"> <a href="https://github.com/xai-bot/corona-xaibot"> GitHub </a>
                <a href="https://mi2-warsaw.github.io/"> WWW </a>
                <a href="https://linkedin.com/in/michalkuzba "> LinkedIn </a>
            </div>
        </div>
    </header>
</template>

<style lang="sass" scoped>
@import '@/Style/Mixins'

.app-head
    z-index: 666
    padding: 12px
    position: fixed
    width: 100%

    @media screen and (max-width: 1000px)
        background-color: var(--background)

    .app-icon
        border-radius: 8px
        width: 30px
        height: 30px
        object-fit: cover
        background-color: var(--image-background)

    .app-info
        display: inline-block
        margin-left: 10px

        .app-name
            font-size: 18px
            font-weight: 500
            color: var(--text)
            line-height: 15px

        .app-poweredby
            color: var(--text-secondary)
            font-size: 14px

            a[href]
                color: var(--text)
                text-decoration: none

.audio-toggle
    @include reset
    display: flex
    position: fixed
    top: 0
    right: 0
    margin: 8.5px 0
    z-index: 999
    padding: 8px
    background-color: var(--element-background)
    border-radius: 20px 0 0 20px
    cursor: pointer
    color: var(--text)
    transition: padding .25s ease

    &:hover
        padding-right: 20px
</style>

<script>
export default {
    name: 'TopHead',
    props: {
        app: {
            type: Object,
            default: null
        }
    }
}
</script>