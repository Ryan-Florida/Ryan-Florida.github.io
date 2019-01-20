<template>
    <div class="bottom">
        <div id="copyright">
            &copy; Ryan Florida. All rights reserved.
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomCenter"
    }
</script>

<style scoped>
.bottom {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
}

#copyright {
    text-decoration: none;
    color: inherit;
    margin: auto;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
}
</style>