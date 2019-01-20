var vm1 = new Vue({
    el: '#wrapper',
    data: {
        colors: ['#110011', '#e2e6e8'],
        c: 0,
        active1: false,
        active2: false,
        active3: false,
        active4: false,
        active5: false,
        color: '#110011',
        textcolor1: '#e2e6e8',
        textcolor2: '#e2e6e8',
        textcolor3: '#e2e6e8',
        textcolor4: '#e2e6e8',
        textcolor5: '#e2e6e8',
        contactMethods: ['Email', 'LinkedIn', 'Twitter', 'Instagram'],
        hobbies: ['Books', 'Music', 'Projects'],
        degrees: ['Professional Computer Science', 'Professional Mathematics', 'Applied Physics'],
        stgoals: ['Obtain MS in Computer Science.', 'Obtain MBA.',
            'Sponsor one person per year from a third-world country to come to college.'],
        ltgoals: ['Obtain PhD (probably in machine learning).', 'Sponsor five people per year from a third-world country' +
        ' to come to college.', 'Deliver laptops to all age groups in third-world country.'],
        projects: [{name: 'Gates of Disorder', page: 'gates_of_disorder.js'}]
    },
    methods: {
        mouseOver1: function () {
            this.textcolor1 = this.colors[this.c];
            this.c = (this.c + 1)%2;
            this.color = this.colors[this.c];
            this.active1 = !this.active1;
        },
        mouseOver2: function () {
            this.textcolor2 = this.colors[this.c];
            this.c = (this.c + 1)%2;
            this.color = this.colors[this.c];
            this.active2 = !this.active2;
        },
        mouseOver3: function () {
            this.textcolor3 = this.colors[this.c];
            this.c = (this.c + 1)%2;
            this.color = this.colors[this.c];
            this.active3 = !this.active3;
        },
        mouseOver4: function () {
            this.textcolor4 = this.colors[this.c];
            this.c = (this.c + 1)%2;
            this.color = this.colors[this.c];
            this.active4 = !this.active4;
        },
        mouseOver5: function () {
            this.textcolor5 = this.colors[this.c];
            this.c = (this.c + 1)%2;
            this.color = this.colors[this.c];
            this.active5 = !this.active5;
        },
    }
});
