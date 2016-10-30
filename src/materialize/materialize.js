import materializeSass from './sass';
import materializeImages from './images';
import materializeScripts from './scripts';

class materialize {

  /**
   * Build the Sass assets.
   *
   * @return {this}
   */
  sass () {
    materializeSass();
    return this;
  }

  /**
   * Build the JavaScript assets.
   *
   * @return {this}
   */
  js () {
    materializeScripts();
    return this;
  }

  /**
   * Build the image assets.
   *
   * @return {this}
   */
  images () {
    materializeImages();
    return this;
  }
}

export default new materialize();
