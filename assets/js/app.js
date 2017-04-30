
AFRAME.registerComponent('scale-on-mouseenter', {
  schema: {
    to: {default: '2.5 2.5 2.5'}
  },
  init: function () {
    var data = this.data;
    this.el.addEventListener('mouseenter', function () {
      this.setAttribute('scale', data.to);
      var targetPosition = document.querySelector("#box1").object3D.position.z;
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

AFRAME.registerComponent('follow1', {

  schema: {
    target: {type: 'selector'},
    speed: {type: 'number', default: '100'}
  },
  init: function () {

    var data = this.data;
    this.el.addEventListener('click', function () {
      this.directionVec3 = new THREE.Vector3();

      //var targetPosition = this.data.target.object3D.position;
      //var currentPosition = this.object3D.position;

    });
  },

  tick: function (time, timeDelta) {
    var camPos = document.querySelector("#cameraWrapper");
    var directionVec3 = this.directionVec3;
    // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
    var targetPosition = this.data.target.object3D.position;
    var targetrotation = this.data.target.object3D.rotation;
    var currentPosition = this.el.object3D.position;

    //var camera = document.querySelector("#camera").object3D.position;
    this.el.addEventListener('click', function () {

      //camPos.setAttribute('position', {x: 0, y: -1,  z: targetPosition.z + 8});
      //while((targetPosition.z - currentPosition.z) < 1)
        camPos.setAttribute('position', {x: targetPosition.x, y: targetPosition.y,  z: targetPosition.z + 10});
        //camPos.setAttribute('rotation', {x: targetrotation.x, y: targetrotation.y,  z: targetrotation.z});
    });
  }
});


/*
AFRAME.registerComponent('follow', {
  schema: {
    target: {type: 'selector'},
  },
  init: function () {
    this.directionVec3 = new THREE.Vector3();
    //var data = this.data;
    this.el.addEventListener('click', function () {
      var directionVec3 = this.directionVec3;
      // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
      var targetPosition = this.data.target.object3D.position;
      var currentPosition = this.el.object3D.position;
      // Subtract the vectors to get the direction the entity should head in.
      directionVec3.copy(targetPosition).sub(currentPosition);
      // Calculate the distance.
      distance = directionVec3.length();
      console.log("hello");

    });
  },
  tick: function (time, timeDelta) {
    // Don't go any closer if a close proximity has been reached.
    if (distance < 1) { return; }
    // Scale the direction vector's magnitude down to match the speed.
    var factor = this.data.speed / distance;
    ['x', 'y', 'z'].forEach(function (axis) {
      directionVec3[axis] *= factor * (timeDelta / 1000);
    });
    // Translate the entity in the direction towards the target.
    var camera = sceneEl.querySelector('#camera');
    camera.el.setAttribute('position', {
      x: currentPosition.x + directionVec3.x,
      y: currentPosition.y + directionVec3.y,
      z: currentPosition.z + directionVec3.z
    });
  }
});
*/
