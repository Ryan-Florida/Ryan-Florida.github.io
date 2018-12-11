function Initiate()
{
    var c           = document.getElementById("canvas");
    var ctx         = c.getContext("2d");
    var l           = document.getElementById("canvas_size").value;
    var r           = l/2;
    c.width         = l;
    c.height        = l;

    ctx.beginPath();
    ctx.arc(r, r, r, 0, 2*Math.PI, true);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.fillStyle   = 'black';
    ctx.fill();
}

function Fire()
{
    var c     = document.getElementById("canvas");
    var ctx   = c.getContext("2d");
    var l     = document.getElementById("canvas_size").value;
    var r     = l/2;
    var darts = document.getElementById("darts").value;
    var pi = 0;

    c.width  = l;
    c.height = l;

    ctx.beginPath();
    ctx.arc(r, r, r, 0, 2*Math.PI, true);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.fillStyle   = 'black';
    ctx.fill();

    for(var i = 0; i < darts; ++i)
    {
        var x = Math.floor(Math.random()*l)%l;
        var y = Math.floor(Math.random()*l)%l;
        ctx.beginPath();
        if(Math.sqrt((r-x)*(r-x) + (r-y)*(r-y)) <= r)
        {
            ctx.arc(x, y, 4, 0, 2*Math.PI, true);
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.fillStyle   = 'white';
            ctx.fill();
            pi++;
        }

        else
        {
            ctx.arc(x, y, 4, 0, 2*Math.PI, true);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            ctx.fillStyle   = 'black';
            ctx.fill();
        }
    }

    pi *= 4/darts;
    // pi = pi.toString();

    var _ = document.createElement("p");
    var txt = document.createTextNode("\\(4\\frac{A_{c}}{A_{s}}\\): " + pi.toFixed(3));
    _.appendChild(txt);
    var e = document.getElementById("pi_approx");
    e.innerHTML = '';
    e.appendChild(_);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, pi_approx]);
}

window.addEventListener("load", Initiate);