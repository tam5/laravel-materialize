import fs from 'fs';
import Config from '../config';
import Elixir from 'laravel-elixir';
import CssTask from '../tasks/CssTask';

/*
 |----------------------------------------------------------------
 | Materialize Sass
 |----------------------------------------------------------------
 |
 | This task will handle all preprocessing of the MDL sass.
 | We also allow the user to include a variables file so
 | that he's able to override the default MDL styles.
 */

function materializeSass () {
  new CssTask('sass', getPaths(
    constructImportsFile(),
    Elixir.config.publicPath + '/css/materialize.css', 
  ));
  
  /**
   * Creates the main sass file for importing mdl.
   *
   * @return {string}
   */
  function constructImportsFile() {
    let importsFilePath = './node_modules/laravel-materialize/dist/tmp/materialize.scss';

    fs.writeFile(importsFilePath, buildImports());

    return importsFilePath;
  }

  /**
   * Build up the contents of the sass import file.
   *
   * @return {string}
   */
  function buildImports () {
    let imports = [];

    if (variablesFileExists()) {
      imports.push('./' + Config.mdlPath + 'color-definitions');
      imports.push('./' + Config.sassPath + 'mdl-variables');
    }

    imports.push('./' + Config.mdlSassFile);

    let toImport = '';
    imports.forEach(function (sassPath) {
        toImport += "@import '" + sassPath + "';\n";
    });

    toImport += "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n"

    return toImport;
  }

  /**
   * Checks if a variables file exists in 'resources/assets/sass'.
   *
   * @return {bool}
   */
  function variablesFileExists () {
    return fileExists(Config.variablesFile);
  }

  /**
   * Checks if a file exists.
   *
   * @param  {string} file
   * @return {bool}
   */
  function fileExists (file) {
    try {
      fs.accessSync(file);
      return true;
    } catch (e) { return false; }
  }

  /**
   * Prep the Gulp src and output paths.
   *
   * @param  {string|Array} src
   * @param  {string|null}  baseDir
   * @param  {string|null}  output
   * @return {GulpPaths}
   */
  function getPaths (src, baseDir, output) {
      return new Elixir.GulpPaths()
          .src(src, baseDir || Elixir.config.get('assets.css.sass.folder'))
          .output(output || Elixir.config.get('public.css.outputFolder'), 'app.css');
  };
}

export default materializeSass;
