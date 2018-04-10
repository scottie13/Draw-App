let page_h = window.innerHeight;
let page_w = window.innerWidth;
let drawing_pos = [];
let drawn, canvs;

// BUTTONS
let clr_btn;

// CANVAS COLOR & BRUSH SIZE
let canvas_color = 155;
let brush_size, brush_size_val;

let toolbox, color_picked, choose_clr, slider;

// using p5.js set up
function setup() {
    canvs = createCanvas(page_w / 1.60, page_h / 1.20).parent('the_canvas').position(10, 0);
    background(canvas_color);

    // control the brush size
    slider = createSlider(3, 200, 10).parent('controls').position(300, 27).class('sliderClass');

    // div the tells the size of the current brush
    brush_size_val = createDiv(slider.value()).parent('controls').position(329, -7).class('brush_size_val');

    // updates the slider value box 
    slider.changed(() => {
        brush_size_val.html(slider.value());
    });


    // clears the canvas
    clr_btn = createButton('CLEAR CANVAS').class('btn btn-primary btn-lg clr-btn').parent('controls').position(40, -10);

    clr_btn.mousePressed(() => {
        background(canvas_color);
    });
}

function draw() {}

function mouseDragged() {

    brush_size = slider.value();

    // checks if the mouse is insisde the canvas
    if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {

        // selects the pencil
        pencil(brush_size);
        // the marker tool
        // markers(brush_size);

        // selectNib();

    } else {

        console.log('Outside the canvas!');
    }
}

// resets the canvas size when the window is resized
$(window).resize(() => {

    canvs = createCanvas(page_w / 1.60, page_h / 1.20).parent('the_canvas').position(60, 0);
    background(canvas_color);

});