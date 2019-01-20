<template>
    <div id="app" :style="{backgroundColor: color}">
        <Corner id="upper-left" msg="About Me"></Corner>
        <TopCenter id="upper-center"></TopCenter>
        <Corner id="upper-right" msg="GitHub"></Corner>
        <LeftSideBar id="left-side-bar"></LeftSideBar>
        <div id="canvas" :sytle="{backgroundColor: color}"></div>
        <Showcase id="middle"></Showcase>
        <RightSideBar id="right-side-bar"></RightSideBar>
        <Corner id="lower-left" msg="Contact"></Corner>
        <BottomCenter id="lower-center"></BottomCenter>
        <Corner id="lower-right" msg="Projects"></Corner>
    </div>
</template>

<script>
import Corner from './components/Corner.vue';
import LeftSideBar from './components/LeftSideBar.vue';
import Showcase from './components/Showcase.vue';
import RightSideBar from './components/RightSideBar.vue';
import TopCenter from './components/TopCenter.vue';
import BottomCenter from './components/BottomCenter.vue';

export default {
    name: 'app',
    data: function () {
        return {
        color: '#1c1f21'
        }
    },
    components: {
        Corner,
        Showcase,
        LeftSideBar,
        RightSideBar,
        TopCenter,
        BottomCenter
    }
};

var s = function( sketch ) {
    class Circle {
        constructor(x, y, r) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.color = [sketch.random(255), sketch.random(255), sketch.random(255)];
        }

        updatePos(group_v) {
            var v_x = sketch.random(-2, 2);
            var v_y = sketch.random(-2, 2);
            this.x += v_x;
            this.y += v_y;
            if(group_v > 0.5) {
                this.x += group_v/this.r;
            }
            else {
                this.y += group_v/this.r;
            }
            if(this.x < 0 || this.x > sketch.width || this.y < 0 || this.y > sketch.height) {
                this.x = sketch.random(sketch.width);
                this.y = sketch.random(sketch.height);
            }
        }

        display() {
            sketch.fill(this.color[0], this.color[1], this.color[2]);
            sketch.ellipse(this.x, this.y, this.r*2, this.r*2);
        }
    }

    var min_r = 2;
    var max_r = 25;
    var w = screen.width*0.80;
    var h = screen.height*0.80;
    var max_circles = 200;
    var circle_list = [];
    var v_choices = [sketch.random(1), sketch.random(1), sketch.random(1), sketch.random(1)]
    var iters = 0;
    var group_velocity;

    sketch.setup = function() {
        sketch.createCanvas(w, h);
        for(var i = 0; i < max_circles; ++i) {
            circle_list.push(new Circle(Math.random()*w, Math.random()*h, sketch.random(min_r, max_r)));
        }
    };

    sketch.draw = function() {
        if(iters%1000 == 0) {
            group_velocity = v_choices[Math.floor(sketch.random(0, 4))];
        }
        sketch.clear();
        circle_list.forEach(c => {
            c.display()
            c.updatePos(group_velocity);
        });
        ++iters;
    };
};

var myp5 = new p5(s, "canvas");

</script>

<style>
#app {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 5% 90% 5%;
}

#upper-left {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
}

#upper-center {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
}

#upper-right {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
}

#lower-left {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 3;
}

#lower-center {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 3;
}

#lower-right {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 3;
}

#middle {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
    z-index: 6;
}

#canvas {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
    width: 100%;
    height: 100%;
    z-index: 5;
}

#left-side-bar {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
}

#right-side-bar {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
}

</style>
