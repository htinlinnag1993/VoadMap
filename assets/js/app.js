
AFRAME.registerComponent('scale-on-mouseenter', {
  schema: {
    to: {default: '2.5 2.5 2.5'}
  },
  init: function () {
    var data = this.data;
    this.el.addEventListener('mouseenter', function () {
      this.setAttribute('scale', data.to);
    });
  }
});
AFRAME.registerComponent('scale-on-mouseleave', {
  schema: {
    to: {default: '1 1 1'}
  },
  init: function () {
    var data = this.data;
    this.el.addEventListener('mouseleave', function () {
      this.setAttribute('scale', data.to);
    });
  }
});

AFRAME.registerComponent('cameramove'), {

});
