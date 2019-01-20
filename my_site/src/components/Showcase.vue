<template>
    <div class="display" :style="{color: textColor}">
        <div id="description">
            <div id="greeting">{{message.greeting}}</div>
            <div id="info">{{message.content}}</div>
            <ContactMethods v-show="showContacts"></ContactMethods>
        </div>
        <!--<Portfolio v-if="!showContacts" id="my-portfolio"></Portfolio>-->
    </div>
</template>

<script>
    // import Portfolio from '../components/Portfolio';
    import ContactMethods from '../components/ContactMethods';

    export default {
        name: "Main",
        data: function () {
            return {
                textColor: '#e2e6e8',
                colors: ['#1c1f21', '#e2e6e8'],
                c: 0,
                messages: {
                    original: {
                        greeting: "Hello, World!",
                        content:  "I am Ryan Florida, a Software Engineer from Nashville who likes to find creative and" +
                        " new ways to integrate code, machine learning, mathematics, music, procedural generation, and" +
                        " animations. I work primarily with C++ and Java but all my more creative endeavors are" +
                        " realized via JavaScript (with Vue.JS or AngularJS), Python, Processing 3, and p5.JS."
                    },
                    github: {
                        greeting: "Goodbye, World!",
                        content: "Thank you for visiting my site and, if you see something on my GitHub that intrigues" +
                        " you, feel free to reach out!"
                    },
                    aboutme: {
                        greeting: "About Me",
                        content: ""
                    },
                    contact: {
                        greeting: "Methods of Contact",
                        content: ""
                    },
                    projects: {
                        greeting: "Projects",
                        content: "Coming Soon!"
                    }
                },
                message: {
                    greeting: "Hello, World!",
                    content:  "I am Ryan Florida, a Software Engineer from Nashville who likes to find creative and" +
                    " new ways to integrate code, machine learning, mathematics, music, procedural generation, and" +
                    " animations. I work primarily with C++ and Java but all my more creative endeavors are realized" +
                    " via JavaScript (with Vue.JS or AngularJS), Python, Processing 3, and p5.JS."
                },
                showContacts: false
            }
        },
        components: {
            // Portfolio,
            ContactMethods
        },
        mounted() {
            this.$root.$on('Original', () => {this.message = this.messages.original; this.textColor = this.colors[this.c];
                this.c = (this.c + 1)%2; this.showContacts = false;});
            this.$root.$on('GitHub', () => {this.message = this.messages.github; this.textColor = this.colors[this.c];
                this.c = (this.c + 1)%2;});
            this.$root.$on('About Me', () => {this.message = this.messages.aboutme; this.textColor = this.colors[this.c];
                this.c = (this.c + 1)%2;});
            this.$root.$on('Contact', () => {this.message = this.messages.contact; this.textColor = this.colors[this.c];
                this.c = (this.c + 1)%2; this.showContacts = true;});
            this.$root.$on('Projects', () => {this.message = this.messages.projects; this.textColor = this.colors[this.c];
                this.c = (this.c + 1)%2;});

        }
    }

</script>

<style scoped>
.display {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
    z-index: 2;
    opacity: 50%;
}

#description {
    margin: auto;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
}

#info {
    position: relative;
    opacity: 0;
    top: 1em;
    animation: animateOverlay 2s ease-in-out forwards;
    animation-delay: 1.5s;
}

#greeting {
    position: relative;
    opacity: 0;
    top: 1em;
    animation: animateOverlay 1s ease-in-out forwards;
}

@keyframes animateOverlay {
    to {
        opacity: 1;
        top: 0;
    }
}

a {
    text-decoration: none;
    color: inherit;
}

#my-portfolio {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    position: relative;
    opacity: 0;
    top: 1em;
    animation: animateOverlay 1s ease-in-out forwards;
    animation-delay: 3.5s;
}

</style>