import Config from '../config';
import Elixir from 'laravel-elixir';

/*
 |----------------------------------------------------------------
 | Materialize Images
 |----------------------------------------------------------------
 |
 | This task simply copies over the necessary images
 | from the Material Design Lite source, into the
 | public directory of the user's application.
 |
 */

function materializeImages () {
    let src = Config.mdlPath + 'images';
    let output = Config.imagesOutputFolder;
    let paths = new Elixir.GulpPaths().src(src).output(output);

    new Elixir.Task('copy', function ($) {
        return (
            gulp
            .src(paths.src.path, { dot: true })
            .pipe($.if(! paths.output.isDir, $.rename(paths.output.name)))
            .pipe(this.saveAs(gulp))
        );
    }, paths)
    .watch(paths.src.path)
    .ignore(paths.output.path);
}

export default materializeImages;
