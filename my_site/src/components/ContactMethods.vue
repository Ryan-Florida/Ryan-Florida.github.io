<template>
    <ul>
        <li v-for="contact in contactInfo" :key="contact.name">
            <a :href="contact.url" @mouseover="underlineClass = true" @mouseleave="underlineClass = false" :class="{underline: underlineClass}">{{contact.name}}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "ContactMethods",
        data: function () {
            return {
                contactInfo: [
                    {
                        name: "LinkedIn", url: "https://linkedin.com/in/ryanflorida"
                    },
                    {
                        name: "Twitter", url: "https://twitter.com/theryanflorida"
                    },
                    {
                        name: "Email", url: "mailto:RyanFlorida77@gmail.com"
                    },
                    {
                        name: "Instagram", url: "https://instagram.com/theryanflorida"
                    }
                ],
                underlineClass: false
            };
        }
    }
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
}

.underline > a{
    text-decoration: underline;
}
</style>