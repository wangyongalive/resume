<template>
  <div id="swap">
    <div id="container"></div>
    <div id="blocker"></div>
    <button id="btn" @click="close"></button>
    <div id="discribe">
      <p style=" font-size:18px; color: #111;">
        &nbsp;&nbsp;&nbsp;&nbsp;该视频演示了系统的操作过程，视频会自动播放。由于网速原因，视频加载可能会比较慢，请等一等。
      </p>
    </div>
  </div>
</template>

<script>
  import * as THREE from 'three';
  import TrackballControls from 'three-trackballcontrols';
  import {CSS3DRenderer, CSS3DObject} from 'three-css3drenderer';

  export default {
    name: "myvideo",
    data() {
      return {
        fov: 45,
        near: 1,
        far: 100000,
        animateId: 0
      }
    },
    beforeDestroy() {
      let self = this;
      cancelAnimationFrame(this.animateId);
      self.camera = null,
        self.scene = null ,
        self.controls = null,
        self.renderer = null;
    },
    mounted() {

      this.camera = null,
        this.scene = null ,
        this.controls = null ,
        this.renderer = null;

      this.init();
      this.animate();


    },
    methods: {
      init() {

        var Element = function (id, x, y, z, ry) {
          let div = document.createElement('div');
          div.style.width = '480px';
          div.style.height = '360px';
          div.style.backgroundColor = '#000';

          let iframe = document.createElement('iframe');
          iframe.style.width = '480px';
          iframe.style.height = '360px';
          iframe.style.border = '1px';
          // iframe.src = '../../static/媒体1.mp4';
          iframe.src = "./媒体1.mp4"; // 打包用
          div.appendChild(iframe);

          let object = new CSS3DObject(div);
          object.position.set(x, y, z);
          object.rotation.y = ry;

          return object;
        }


        let container = document.getElementById('container');

        this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
        this.camera.position.set(500, 350, 750);

        this.scene = new THREE.Scene();

        this.renderer = new CSS3DRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(this.renderer.domElement);

        let group = new THREE.Group();
        group.add(new Element('SJOz3qjfQXU', 0, 0, 240, 0));
        // group.add(new Element('Y2-xZ-1HE-Q', 240, 0, 0, Math.PI / 2));
        // group.add(new Element('IrydklNpcFI', 0, 0, -240, Math.PI));
        // group.add(new Element('9ubytEsCaS0', -240, 0, 0, -Math.PI / 2));
        this.scene.add(group);

        this.controls = new TrackballControls(this.camera);
        this.controls.rotateSpeed = 4;


        window.addEventListener('resize', this.onWindowResize, false);

        // Block iframe events when dragging camera

        let blocker = document.getElementById('blocker');
        blocker.style.display = 'none';

        document.addEventListener('mousedown', function () {

          blocker.style.display = '';

        });
        document.addEventListener('mouseup', function () {

          blocker.style.display = 'none';

        });


      },
      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      },
      animate() {
        this.animateId = requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      },
      close() {
        this.$store.commit('change', false);
      }
    }
  }
</script>

<style scoped>
  #swap {
    background-color: rgba(240, 242, 241, 0.6);
  }

  #blocker, #swap {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  #btn {
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0;
    left: 50%;
    border-radius: 25px;
    width: 50px;
    height: 50px;
    border: none;
    background: url("../assets/关闭.png");
    background-size: 50px 50px;
  }

  #discribe {
    position: absolute;
    left: 30px;
    top: 20px;
    width: 20%;
  }
</style>
