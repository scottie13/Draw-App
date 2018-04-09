class DrawingTools {

    constructor(size) {

            this.size = size;
            this.color = color;

            color_picked = $("#flat").spectrum("get");
            choose_clr = color_picked.toRgb();
        }
        // pencil brush
    pencils(size) {

            strokeWeight(this.size);
            stroke(choose_clr.r, choose_clr.g, choose_clr.b);
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
        //  marker brush
    marker(size) {
        strokeWeight(this.size);
        stroke(choose_clr.r, choose_clr.g, choose_clr.b);
        line(mouseX - 10, mouseY - 10, pmouseX + 10, pmouseY + 10);
    }
    crayon(size) {

    }
    pen() {

    }
    brushPen(size) {

    }
    eracer(size) {

    }
}