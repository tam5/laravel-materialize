import Elixir from 'laravel-elixir';
import CombineTask from '../tasks/CombineTask';
import Config from '../config';

/*
 |----------------------------------------------------------------
 | Materialize Scripts
 |----------------------------------------------------------------
 |
 | This task will concatenate and minify your the Material
 | Design Lite JavaScript files. This way, all the user
 | has to do is add one script tag to his HTML page.
 |
 */

function materializeScripts () {
  new CombineTask('scripts', 
    getPaths(
      [
        './' + Config.mdlPath + '*.js',
        './' + Config.mdlPath + '*/*.js',
      ], 
      null,
      Config.jsOutputFile
    )
  );

  /**
   * Prep the Gulp src and output paths.
   *
   * @param  {string|Array} src
   * @param  {string|null}  baseDir
   * @param  {string|null}  output
   * @return {GulpPaths}
   */
  function getPaths(src, baseDir, output) {
      return new Elixir.GulpPaths()
          .src(src, baseDir || Elixir.config.get('assets.js.folder'))
          .output(output || Elixir.config.get('public.js.outputFolder'), 'all.js');
  }
}

export default materializeScripts;
