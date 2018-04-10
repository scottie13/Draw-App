// class to control the different brushes

class DrawingTools {

    constructor(size) {

            this.size = size;
            this.color = color;

            color_picked = $("#flat").spectrum("get");
            choose_clr = color_picked.toRgb();
        }
        // pencil tool
    pencils(size) {

            strokeWeight(this.size);
            stroke(choose_clr.r, choose_clr.g, choose_clr.b);
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
        //  marker brush
    marker(size) {
        strokeWeight(this.size);
        stroke(choose_clr.r, choose_clr.g, choose_clr.b);
        line(mouseX - 1 * 3, mouseY - 1 * 3, pmouseX + 1 * 3, pmouseY + 1 * 3);
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