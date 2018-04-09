let brushes = {
    pencil: $('#pencil'),
    marker: $('#marker'),
    inkpen: $('#inkpen'),
    pen: $('#pen'),
    crayon: $('#crayon'),
    eracer: $('#eracer')
}

$(function() {


    $.each(brushes, (key, value) => {

        let brush_val = key.clicked = false;

        // when button is clicked
        value.on('click', () => {

            value.toggleClass("add_nib_color");

            // checks what brush was selected

            if (key === "pencil") {

                $('p#pcl').css('color', '#0070ff');

                try {

                    setTimeout(() => {

                        $('p#pcl').css('color', 'lightgray');

                    }, 1000);

                } catch (e) {
                    console.log(e)
                }

            } else if (key === "marker") {

                $('p#mrk').css('color', '#0070ff');
                try {

                    setTimeout(() => {

                        $('p#mrk').css('color', 'lightgray');

                    }, 1000);

                } catch (e) {
                    console.log(e)
                }

            } else if (key === "inkpen") {

                $('p#ikp').css('color', '#0070ff');
                try {

                    setTimeout(() => {

                        $('p#ikp').css('color', 'lightgray');

                    }, 1000);

                } catch (e) {
                    console.log(e)
                }

            } else if (key === "pen") {

                $('p#pen_nib').css('color', '#0070ff');
                try {

                    setTimeout(() => {

                        $('p#pen_nib').css('color', 'lightgray');

                    }, 1000);

                } catch (e) {
                    console.log(e)
                }

            } else if (key === "crayon") {

                $('p#cyon').css('color', '#0070ff');
                try {

                    setTimeout(() => {

                        $('p#cyon').css('color', 'lightgray');

                    }, 1000);

                } catch (e) {
                    console.log(e)
                }

            } else if (key === "eracer") {

                $('p#erc').css('color', '#0070ff');
                try {

                    setTimeout(() => {

                        $('p#erc').css('color', 'lightgray');

                    }, 1000);

                } catch (e) {
                    console.log(e)
                }

            }
        });
    });
    // toggle the brush pannel
    $('#select_nibs').on('click', () => {

        $('#nibs').toggle('fast');
    })

});