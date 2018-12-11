function Initiate2()
{
    var canvas  = document.getElementById("canvas2");
    var context = canvas.getContext("2d");
    var size    = document.getElementById("canvas_size2").value;
    var unit    = 50; //This defines a unit number of pixels to be a unit.
    var l       = size*unit;
    var n_C_2   = 0;
    var n_1_C_2;
    var s       = size;
    var s2      = size*size;
    var n_1     = size - -1;

    canvas.width  = l;
    canvas.height = l;
    var bw = l;
    var bh = l;

    function drawBoard(){
        for(var i = 0; i < size - 1; ++i) {
            for (var x = 0; x < bw - (i + 1) * unit; x += unit) {
                context.beginPath();
                context.rect(x, i * unit, unit, unit);
                context.fillStyle = "black";
                context.fill();
                for (var y = 0; y <= x; y += unit) {
                    context.moveTo(y, x);
                    context.lineTo(y, bh);
                }


                for (var y = 0; y <= x; y += unit) {
                    context.moveTo(x, y);
                    context.lineTo(bw, y);
                }
                context.strokeStyle = "white";
                context.stroke();
                ++n_C_2;
            }

        }

        var i = 0;
        for(var x = bw; x >= 0; x -= unit, i += unit) {
            context.beginPath();
            context.moveTo(x, bh);
            context.lineTo(x, i % bh);
            context.strokeStyle = "black";
            context.stroke();

            context.beginPath();
            context.moveTo(bw, x);
            context.lineTo(i % bw, x);
            context.strokeStyle = "black";
            context.stroke();
        }


    }

    drawBoard();

    s       = s.toString();
    n_1_C_2 = s2 - n_C_2;
    n_1_C_2 = n_1_C_2.toString();
    n_C_2   = n_C_2.toString();
    n_1 = n_1.toString();

    var _ = document.createElement("p");
    var txt = document.createTextNode("As can be seen above, there are $$\\binom{"
        + s +"}{2} = " + n_C_2 + "$$ black boxes and $$\\binom{"
        + n_1 +"}{2} = " + n_1_C_2 + "$$ white boxes. There are a "
        + "total of $$" + s + "^2 = " + s2.toString() + "$$ boxes. Thus we find "
        + "$$" + s2 + " = " + n_C_2 + "+" + n_1_C_2 + "\\Rightarrow "
        + s + "^2 = \\binom{" + s + "}{2} + \\binom{" + n_1 + "}{2}$$");
    _.appendChild(txt);
    var e = document.getElementById("bin_1");
    e.innerHTML = '';
    e.appendChild(_);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, bin_1]);
}

function Fire2()
{
    var canvas  = document.getElementById("canvas2");
    var context = canvas.getContext("2d");
    var size    = document.getElementById("canvas_size2").value;
    var unit    = 50; //This defines a unit number of pixels to be a unit.
    var l       = size*unit;
    var n_C_2   = 0;
    var n_1_C_2;
    var s       = size;
    var s2      = size*size;
    var n_1     = size - -1;

    canvas.width  = l;
    canvas.height = l;
    var bw = l;
    var bh = l;

    function drawBoard(){
        for(var i = 0; i < size - 1; ++i) {
            for (var x = 0; x < bw - (i + 1) * unit; x += unit) {
                context.beginPath();
                context.rect(x, i * unit, unit, unit);
                context.fillStyle = "black";
                context.fill();
                for (var y = 0; y <= x; y += unit) {
                    context.moveTo(y, x);
                    context.lineTo(y, bh);
                }


                for (var y = 0; y <= x; y += unit) {
                    context.moveTo(x, y);
                    context.lineTo(bw, y);
                }
                context.strokeStyle = "white";
                context.stroke();
                ++n_C_2;
            }

        }

        var i = 0;
        for(var x = bw; x >= 0; x -= unit, i += unit) {
            context.beginPath();
            context.moveTo(x, bh);
            context.lineTo(x, i % bh);
            context.strokeStyle = "black";
            context.stroke();

            context.beginPath();
            context.moveTo(bw, x);
            context.lineTo(i % bw, x);
            context.strokeStyle = "black";
            context.stroke();
        }


    }

    drawBoard();

    s       = s.toString();
    n_1_C_2 = s2 - n_C_2;
    n_1_C_2 = n_1_C_2.toString();
    n_C_2   = n_C_2.toString();
    n_1 = n_1.toString();

    var _ = document.createElement("p");
    var txt = document.createTextNode("As can be seen above, there are $$\\binom{"
        + s +"}{2} = " + n_C_2 + "$$ black boxes and $$\\binom{"
        + n_1 +"}{2} = " + n_1_C_2 + "$$ white boxes. There is a "
        + "total of $$" + s + "^2 = " + s2.toString() + "$$ boxes. Thus we find "
        + "$$" + s2 + " = " + n_C_2 + "+" + n_1_C_2 + "\\Rightarrow "
        + s + "^2 = \\binom{" + s + "}{2} + \\binom{" + n_1 + "}{2}$$");
    _.appendChild(txt);
    var e = document.getElementById("bin_1");
    e.innerHTML = '';
    e.appendChild(_);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, bin_1]);
}

window.addEventListener("load", Initiate2);