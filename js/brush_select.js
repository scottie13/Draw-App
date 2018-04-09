// gets the selected brush type
function selectNib(brush_val = pencil) {

    // this.brush_type = brush_type;
    brush_size(brush_size);
}

// calls the class that creates the ellipse
let pencil = (size) => {

    // constrols the size of the pencil
    this.size = size;
    draw = new DrawingTools(size);
    draw.pencils();
}

let markers = (size) => {

    // constrols the size of the pencil
    this.size = size;
    drawing = new DrawingTools(size);
    drawing.marker();
}