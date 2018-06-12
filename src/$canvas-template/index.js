class A {
  constructor(config) {
    this.config = config;
    this.canvas = config.el;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.init();
  }

  init() {

  }
}

export default {
  props: ['width', 'height'],
  mounted() {
    const element = this.$el;
    element.setAttribute('width', util.hasStr(this.width, '%') ? `${parseInt(this.width) * window.innerWidth / 100}px` : this.width);
    element.setAttribute('height', util.hasStr(this.height, '%') ? `${parseInt(this.height) * window.innerHeight / 100}px` : this.height);
    const instance = new A({
      el: element
    });
  }
};
