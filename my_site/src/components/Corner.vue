<template>
  <div class="corner">
    <a :href="getLink()" :class="pos" :style="{color: textColor}" @mouseover="BGSwap"> {{msg}}</a>
  </div>
</template>

<script>
export default {
    name: 'Corner',
    data: function () {
        return {
            colors: ['#1c1f21', '#e2e6e8'],
            c: 0,
            textColor: '#e2e6e8',
            active: false
        };
    },
    props: {
        msg: String,
        pos: String /*top = 1, bottom = 0*/
    },
    methods: {
        getLink: function () {
            if (this.msg == "GitHub") {
                return "https://github.com/ryan-florida";
            }
        },
        BGSwap: function () {
            if(this.textColor != this.$parent.color)
            {
                this.textColor = this.colors[this.c];
                this.c = (this.c + 1)%2;
                this.$parent.color = this.colors[this.c];
                if(this.active) {
                    this.$root.$emit("Original");
                }
                else {
                    this.$root.$emit(this.msg);
                }
                this.active = !this.active;
            }
        }
    }
}
</script>

<style scoped>
.corner {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
}
a {
    text-decoration: none;
    color: inherit;
    margin: auto;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
}

</style>
