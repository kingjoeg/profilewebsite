(function() {

    Pts.namespace( this );

    let space = new CanvasSpace("#my-graphic");
    space.setup({'bgcolor': '#000', 'retina': true, 'resize': true});
    let form = space.getForm();

    space.add({

        // create 200 random points //
        start:( bound ) => {
        pts = Create.distributeRandom( space.innerBound, 200 );
        },

        animate: (time, ftime) => {
            // make a line and turn it into an "op" (see the guide on Op for more) //
            let perpend = new Group( space.center.$subtract(0.1), space.pointer ).op( Line.perpendicularFromPt );
            pts.rotate2D( 0.0005, space.center );

            pts.forEach( (p, i) => {
                // for each point, find the perpendicular to the line //
                let lp = perpend( p );
                let ratio = Math.min( 1, 1 - lp.$subtract(p).magnitude()/(space.size.x/2) );
                form.stroke(`rgba(128,128,128,${ratio}`, ratio*2).line( [ p, lp ] );
                form.fillOnly( ["#fff"][i%3] ).point( p, 1 );
            });
        },

    });

    // Play //
    space.play();

})();
