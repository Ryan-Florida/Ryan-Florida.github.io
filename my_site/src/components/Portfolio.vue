<template>
    <div id="my-portfolio">
        <div>
            My Work
        </div>
        <div>
            <ul>
                <li v-for="project in projects" :key="project.name">
                    {{project.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Portfolio",
        data: function () {
            return {
                projects: [
                    {name: "Brownian Motion with Random Group Velocity"}
                ]
            }
        }
    }
</script>

<style scoped>
#my-portfolio {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 5% 90% 5%;
}
</style>