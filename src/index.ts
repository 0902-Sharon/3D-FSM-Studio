import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { TTFLoader } from "three/examples/jsm/loaders/TTFLoader";
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

// CAMERA
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  1,
  1500
);
camera.position.set(-35, 70, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// RENDERER
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// WINDOW RESIZE HANDLING
export function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize);

// SCENE
const scene: THREE.Scene = new THREE.Scene();
// scene.background = new THREE.Color(0x000000);
const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;

// CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);

export function animate() {
  dragObject();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

// ambient light
let hemiLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(hemiLight);

//Add directional light
let dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-30, 50, -30);
scene.add(dirLight);
// dirLight.castShadow = true;
// dirLight.shadow.mapSize.width = 2048;
// dirLight.shadow.mapSize.height = 2048;
// dirLight.shadow.camera.left = -70;
// dirLight.shadow.camera.right = 70;
// dirLight.shadow.camera.top = 70;
// dirLight.shadow.camera.bottom = -70;

function createFloor() {
  let pos = { x: 0, y: -1, z: 3 };
  let scale = { x: 100, y: 2, z: 100 };

  const thistexture = new THREE.TextureLoader().load("metal1.jpg");
  const thisnormaltexture = new THREE.TextureLoader().load("metal3.jpg");

  let blockPlane = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshPhongMaterial({ map: thistexture, color: 0xcce3de })
  );
  blockPlane.position.set(pos.x, pos.y, pos.z);
  blockPlane.scale.set(scale.x * 1.2, scale.y * 1.2, scale.z * 1.2);
  blockPlane.castShadow = true;
  blockPlane.receiveShadow = true;
  scene.add(blockPlane);

  blockPlane.userData.ground = true;
}

// ArrowHeads

function createARHDS1() {
  let scale = { x: 1, y: 1, z: 1 };
  let pos = { x: 25, y: 3, z: -30 };

  let box = new THREE.Mesh(
    new THREE.ConeBufferGeometry(1.5, 2.5, 15),
    new THREE.MeshPhongMaterial({ color: 0xdc143c })
  );
  box.position.set(pos.x, pos.y, pos.z);
  box.scale.set(scale.x, scale.y, scale.z);
  box.rotation.x = Math.PI / 2;
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = "BOX";
}

function createARHDN1() {
  let scale = { x: 1, y: 1, z: 1 };
  // let pos = { x: 35, y: scale.y / 2, z: -30 };
  let pos = { x: 35, y: 3, z: -30 };

  let box = new THREE.Mesh(
    new THREE.ConeBufferGeometry(1.5, 2.5, 15),
    new THREE.MeshPhongMaterial({ color: 0xdc143c })
  );
  box.position.set(pos.x, pos.y, pos.z);
  box.scale.set(scale.x, scale.y, scale.z);
  box.rotation.x = -Math.PI / 2;
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = "BOX";
}

function createARHDE1() {
  let scale = { x: 1, y: 1, z: 1 };
  let pos = { x: 20, y: 3, z: -30 };

  let box = new THREE.Mesh(
    new THREE.ConeBufferGeometry(1.5, 2.5, 15),
    new THREE.MeshPhongMaterial({ color: 0xdc143c })
  );
  box.position.set(pos.x, pos.y, pos.z);
  box.scale.set(scale.x, scale.y, scale.z);
  box.rotation.x = Math.PI / 2;
  box.rotation.z = Math.PI / 2;
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = "BOX";
}

function createARHDW1() {
  let scale = { x: 1, y: 1, z: 1 };
  let pos = { x: 30, y: 3, z: -30 };

  let box = new THREE.Mesh(
    new THREE.ConeBufferGeometry(1.5, 2.5, 15),
    new THREE.MeshPhongMaterial({ color: 0xdc143c })
  );
  box.position.set(pos.x, pos.y, pos.z);
  box.scale.set(scale.x, scale.y, scale.z);
  box.rotation.x = Math.PI / 2;
  box.rotation.z = -Math.PI / 2;
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = "BOX";
}

function createARHDNW1() {
  let scale = { x: 1, y: 1, z: 1 };
  let pos = { x: 25, y: 3, z: -35 };

  let box = new THREE.Mesh(
    new THREE.ConeBufferGeometry(1.5, 2.5, 15),
    new THREE.MeshPhongMaterial({ color: 0xdc143c })
  );
  box.position.set(pos.x, pos.y, pos.z);
  box.scale.set(scale.x, scale.y, scale.z);
  box.rotation.x = -Math.PI / 2;
  box.rotation.z = -Math.PI / 4;
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = "BOX";
}
function createARHDNS1() {
  let scale = { x: 1, y: 1, z: 1 };
  let pos = { x: 20, y: 3, z: -35 };

  let box = new THREE.Mesh(
    new THREE.ConeBufferGeometry(1.5, 2.5, 15),
    new THREE.MeshPhongMaterial({ color: 0xdc143c })
  );
  box.position.set(pos.x, pos.y, pos.z);
  box.scale.set(scale.x, scale.y, scale.z);
  box.rotation.x = -Math.PI / 2;
  box.rotation.z = Math.PI / 4;
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = "BOX";
}

function createARHDSW1() {
  let scale = { x: 1, y: 1, z: 1 };
  let pos = { x: 30, y: 3, z: -35 };

  let box = new THREE.Mesh(
    new THREE.ConeBufferGeometry(1.5, 2.5, 15),
    new THREE.MeshPhongMaterial({ color: 0xdc143c })
  );
  box.position.set(pos.x, pos.y, pos.z);
  box.scale.set(scale.x, scale.y, scale.z);
  box.rotation.x = Math.PI / 2;
  box.rotation.z = -Math.PI / 4;
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = "BOX";
}
function createARHDSE1() {
  let scale = { x: 1, y: 1, z: 1 };
  let pos = { x: 35, y: 3, z: -35 };

  let box = new THREE.Mesh(
    new THREE.ConeBufferGeometry(1.5, 2.5, 15),
    new THREE.MeshPhongMaterial({ color: 0xdc143c })
  );
  box.position.set(pos.x, pos.y, pos.z);
  box.scale.set(scale.x, scale.y, scale.z);
  box.rotation.x = Math.PI / 2;
  box.rotation.z = Math.PI / 4;
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = "BOX";
}

function createSphere() {
  let radius = 4;
  let pos = { x: -40, y: radius, z: -30 };

  const thistexture = new THREE.TextureLoader().load("ballbg1.webp");
  const thisnormaltexture = new THREE.TextureLoader().load("ballnormalmap.png");
  let sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius, 32, 32),
    new THREE.MeshPhongMaterial({
      map: thistexture,
      normalMap: thisnormaltexture,
      color: 0xf72585,
    })
  );
  sphere.position.set(pos.x, pos.y, pos.z);
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  scene.add(sphere);

  sphere.userData.draggable = true;
  sphere.userData.name = "SPHERE";
}

function createSphere2() {
  let radius = 4;
  let pos = { x: -30, y: radius, z: -30 };
  const thisnormaltexture = new THREE.TextureLoader().load("ballnormalmap.png");
  let sphere2 = new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius, 32, 32),
    new THREE.MeshPhongMaterial({
      normalMap: thisnormaltexture,
      color: 0x07c8f9,
    })
  );
  sphere2.position.set(pos.x, pos.y, pos.z);
  sphere2.castShadow = true;
  sphere2.receiveShadow = true;
  scene.add(sphere2);

  sphere2.userData.draggable = true;
  sphere2.userData.name = "SPHERE2";
}

function createSphere3() {
  let radius = 4;
  let pos = { x: -20, y: radius, z: -30 };
  const thisnormaltexture = new THREE.TextureLoader().load("ballnormalmap.png");
  let sphere2 = new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius, 32, 32),
    new THREE.MeshPhongMaterial({
      normalMap: thisnormaltexture,
      color: 0x07c8f9,
    })
  );
  sphere2.position.set(pos.x, pos.y, pos.z);
  sphere2.castShadow = true;
  sphere2.receiveShadow = true;
  scene.add(sphere2);

  sphere2.userData.draggable = true;
  sphere2.userData.name = "SPHERE2";
}
function createSphere4() {
  let radius = 4;
  let pos = { x: -10, y: radius, z: -30 };
  const thisnormaltexture = new THREE.TextureLoader().load("ballnormalmap.png");
  let sphere2 = new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius, 32, 32),
    new THREE.MeshPhongMaterial({
      normalMap: thisnormaltexture,
      color: 0x07c8f9,
    })
  );
  sphere2.position.set(pos.x, pos.y, pos.z);
  sphere2.castShadow = true;
  sphere2.receiveShadow = true;
  scene.add(sphere2);

  sphere2.userData.draggable = true;
  sphere2.userData.name = "SPHERE2";
}
function createSphere5() {
  let radius = 4;
  let pos = { x: 0, y: radius, z: -30 };

  const thisnormaltexture = new THREE.TextureLoader().load("ballnormalmap.png");

  let sphere2 = new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius, 32, 32),
    new THREE.MeshPhongMaterial({
      normalMap: thisnormaltexture,
      color: 0x07c8f9,
    })
  );
  sphere2.position.set(pos.x, pos.y, pos.z);
  sphere2.castShadow = true;
  sphere2.receiveShadow = true;
  scene.add(sphere2);

  sphere2.userData.draggable = true;
  sphere2.userData.name = "SPHERE2";
}

function createSphere6() {
  let radius = 4;
  let pos = { x: 10, y: radius, z: -30 };
  const thistexture = new THREE.TextureLoader().load("ballmap1.webp");
  const thisnormaltexture = new THREE.TextureLoader().load("ballnormalmap.png");

  let sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius, 32, 32),
    new THREE.MeshPhongMaterial({
      normalMap: thisnormaltexture,
      // transparent: true,
      // opacity: 0.4,
      color: 0x41f4,
    })
  );
  sphere.position.set(pos.x, pos.y, pos.z);
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  scene.add(sphere);

  sphere.userData.draggable = true;
  sphere.userData.name = "SPHERE";
}

function createArver1() {
  let radius = 0.5;
  let pos = { x: 20, y: 3, z: -20 };

  let arrow1 = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(radius, 0.6, 15),
    new THREE.MeshPhongMaterial({ color: 0xffeefe })
  );
  arrow1.position.set(pos.x, pos.y, pos.z);
  arrow1.rotation.x = Math.PI / 2;
  arrow1.castShadow = true;
  arrow1.receiveShadow = true;
  scene.add(arrow1);

  arrow1.userData.draggable = true;
  arrow1.userData.name = "arrow1";
}
// function createArver2() {
//   let radius = 0.5;
//   let pos = { x: 20, y: radius, z: -20 };

//   let arrow1 = new THREE.Mesh(
//     new THREE.CylinderBufferGeometry(radius, 0.6, 15),
//     new THREE.MeshPhongMaterial({ color: 0xffeefe })
//   );
//   arrow1.position.set(pos.x, pos.y, pos.z);
//   arrow1.rotation.x = Math.PI / 2;
//   arrow1.castShadow = true;
//   arrow1.receiveShadow = true;
//   scene.add(arrow1);

//   arrow1.userData.draggable = true;
//   arrow1.userData.name = "arrow1";
// }
// function createArver3() {
//   let radius = 0.5;
//   let pos = { x: 20, y: radius, z: -20 };

//   let arrow1 = new THREE.Mesh(
//     new THREE.CylinderBufferGeometry(radius, 0.6, 15),
//     new THREE.MeshPhongMaterial({ color: 0xffeefe })
//   );
//   arrow1.position.set(pos.x, pos.y, pos.z);
//   arrow1.rotation.x = Math.PI / 2;
//   arrow1.castShadow = true;
//   arrow1.receiveShadow = true;
//   scene.add(arrow1);

//   arrow1.userData.draggable = true;
//   arrow1.userData.name = "arrow1";
// }
// function createArver4() {
//   let radius = 0.5;
//   let pos = { x: 20, y: radius, z: -20 };

//   let arrow1 = new THREE.Mesh(
//     new THREE.CylinderBufferGeometry(radius, 0.6, 15),
//     new THREE.MeshPhongMaterial({ color: 0xffeefe })
//   );
//   arrow1.position.set(pos.x, pos.y, pos.z);
//   arrow1.rotation.x = Math.PI / 2;
//   arrow1.castShadow = true;
//   arrow1.receiveShadow = true;
//   scene.add(arrow1);

//   arrow1.userData.draggable = true;
//   arrow1.userData.name = "arrow1";
// }
// function createArver5() {
//   let radius = 0.5;
//   let pos = { x: 20, y: radius, z: -20 };

//   let arrow1 = new THREE.Mesh(
//     new THREE.CylinderBufferGeometry(radius, 0.6, 15),
//     new THREE.MeshPhongMaterial({ color: 0xffeefe })
//   );
//   arrow1.position.set(pos.x, pos.y, pos.z);
//   arrow1.rotation.x = Math.PI / 2;
//   arrow1.castShadow = true;
//   arrow1.receiveShadow = true;
//   scene.add(arrow1);

//   arrow1.userData.draggable = true;
//   arrow1.userData.name = "arrow1";
// }
function createArHor1() {
  let radius = 0.5;
  let pos = { x: 30, y: 3, z: -20 };

  let arrow1 = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(radius, 0.6, 15),
    new THREE.MeshPhongMaterial({ color: 0xffeefe })
  );
  arrow1.position.set(pos.x, pos.y, pos.z);
  arrow1.rotation.x = Math.PI / 2;
  arrow1.rotation.z = Math.PI / 2;
  arrow1.castShadow = true;
  arrow1.receiveShadow = true;
  scene.add(arrow1);

  arrow1.userData.draggable = true;
  arrow1.userData.name = "arrow1";
}
function createArSW1() {
  let radius = 0.5;
  let pos = { x: 30, y: 3, z: -10 };

  let arrow1 = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(radius, 0.6, 25),
    new THREE.MeshPhongMaterial({ color: 0xffeefe })
  );
  arrow1.position.set(pos.x, pos.y, pos.z);
  arrow1.rotation.x = Math.PI / 2;
  arrow1.rotation.z = Math.PI / 4;
  arrow1.castShadow = true;
  arrow1.receiveShadow = true;
  scene.add(arrow1);

  arrow1.userData.draggable = true;
  arrow1.userData.name = "arrow1";
}
function createArSE1() {
  let radius = 0.5;
  let pos = { x: 35, y: 3, z: -10 };

  let arrow1 = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(radius, 0.6, 25),
    new THREE.MeshPhongMaterial({ color: 0xffeefe })
  );
  arrow1.position.set(pos.x, pos.y, pos.z);
  arrow1.rotation.x = Math.PI / 2;
  arrow1.rotation.z = -Math.PI / 4;
  arrow1.castShadow = true;
  arrow1.receiveShadow = true;
  scene.add(arrow1);

  arrow1.userData.draggable = true;
  arrow1.userData.name = "arrow1";
}
// function createArHor2() {
//   let radius = 0.5;
//   let pos = { x: 30, y: radius, z: -20 };

//   let arrow1 = new THREE.Mesh(
//     new THREE.CylinderBufferGeometry(radius, 0.6, 15),
//     new THREE.MeshPhongMaterial({ color: 0xffeefe })
//   );
//   arrow1.position.set(pos.x, pos.y, pos.z);
//   arrow1.rotation.x = Math.PI / 2;
//   arrow1.rotation.z = Math.PI / 2;
//   arrow1.castShadow = true;
//   arrow1.receiveShadow = true;
//   scene.add(arrow1);

//   arrow1.userData.draggable = true;
//   arrow1.userData.name = "arrow1";
// }
// function createArHor3() {
//   let radius = 0.5;
//   let pos = { x: 30, y: radius, z: -20 };

//   let arrow1 = new THREE.Mesh(
//     new THREE.CylinderBufferGeometry(radius, 0.6, 15),
//     new THREE.MeshPhongMaterial({ color: 0xffeefe })
//   );
//   arrow1.position.set(pos.x, pos.y, pos.z);
//   arrow1.rotation.x = Math.PI / 2;
//   arrow1.rotation.z = Math.PI / 2;
//   arrow1.castShadow = true;
//   arrow1.receiveShadow = true;
//   scene.add(arrow1);

//   arrow1.userData.draggable = true;
//   arrow1.userData.name = "arrow1";
// }
// function createArHor4() {
//   let radius = 0.5;
//   let pos = { x: 30, y: radius, z: -20 };

//   let arrow1 = new THREE.Mesh(
//     new THREE.CylinderBufferGeometry(radius, 0.6, 15),
//     new THREE.MeshPhongMaterial({ color: 0xffeefe })
//   );
//   arrow1.position.set(pos.x, pos.y, pos.z);
//   arrow1.rotation.x = Math.PI / 2;
//   arrow1.rotation.z = Math.PI / 2;
//   arrow1.castShadow = true;
//   arrow1.receiveShadow = true;
//   scene.add(arrow1);

//   arrow1.userData.draggable = true;
//   arrow1.userData.name = "arrow1";
// }
// function createArHor5() {
//   let radius = 0.5;
//   let pos = { x: 30, y: radius, z: -20 };

//   let arrow1 = new THREE.Mesh(
//     new THREE.CylinderBufferGeometry(radius, 0.6, 15),
//     new THREE.MeshPhongMaterial({ color: 0xffeefe })
//   );
//   arrow1.position.set(pos.x, pos.y, pos.z);
//   arrow1.rotation.x = Math.PI / 2;
//   arrow1.rotation.z = Math.PI / 2;
//   arrow1.castShadow = true;
//   arrow1.receiveShadow = true;
//   scene.add(arrow1);

//   arrow1.userData.draggable = true;
//   arrow1.userData.name = "arrow1";
// }
function createCylinder() {
  let radius = 0.5;
  let height = 6;
  let pos = { x: -15, y: height / 2, z: 15 };

  // threejs
  let cylinder = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(radius, radius, height, 32),
    new THREE.MeshPhongMaterial({ color: 0x90ee90 })
  );
  cylinder.position.set(pos.x, pos.y, pos.z);
  cylinder.castShadow = true;
  cylinder.receiveShadow = true;
  scene.add(cylinder);

  cylinder.userData.draggable = true;
  cylinder.userData.name = "CYLINDER";
}

function createArrow() {
  const arrow = new THREE.Group();
  const arrowShaft = new THREE.Mesh(
    // We want to ensure our arrow is completely offset into one direction
    // So the translation ensure every bit of it is in Y+
    new THREE.CylinderBufferGeometry(0.5, 0.5 / 2, 8).translate(0, 1.5, 0),
    new THREE.MeshPhongMaterial({ color: "blue" })
  );
  const arrowPoint = new THREE.Mesh(
    // Same thing, translate to all vertices or +Y
    new THREE.ConeBufferGeometry(1.5, 2.5 / 2, 15).translate(0, 3, 0),
    new THREE.MeshPhongMaterial({ color: "red" })
  );
  const trackerPoint = new THREE.Mesh(
    new THREE.SphereGeometry(0.2),
    new THREE.MeshBasicMaterial({ color: "green" })
  );
  const clickerPoint = new THREE.Mesh(
    trackerPoint.geometry,
    new THREE.MeshBasicMaterial({ color: "yellow" })
  );

  // Place the point at the top of the shaft
  arrowPoint.position.y = 3;
  // Point the shaft into the z-direction
  arrowShaft.rotation.x = Math.PI / 2;

  // Attach the point to the shaft
  arrowShaft.add(arrowPoint);
  // Add the shaft to the global arrow group
  arrow.add(arrowShaft);

  // Add the arrow to the scene
  arrow.position.set(10, 2, 10);
  scene.add(arrow);
  arrow.userData.draggable = true;
  arrowPoint.userData.draggable = true;
  arrowShaft.userData.draggable = true;
  arrow.userData.name = "ARROW";
}

function createCastle() {
  const objLoader = new OBJLoader();

  objLoader.loadAsync("./castle.obj").then((group) => {
    const castle = group.children[0];

    castle.position.x = -15;
    castle.position.z = -15;

    castle.scale.x = 5;
    castle.scale.y = 5;
    castle.scale.z = 5;

    castle.castShadow = true;
    castle.receiveShadow = true;

    castle.userData.draggable = true;
    castle.userData.name = "CASTLE";

    scene.add(castle);
  });
}

const raycaster = new THREE.Raycaster(); // create once
const clickMouse = new THREE.Vector2(); // create once
const moveMouse = new THREE.Vector2(); // create once
var draggable: THREE.Object3D;

function intersect(pos: THREE.Vector2) {
  raycaster.setFromCamera(pos, camera);
  return raycaster.intersectObjects(scene.children);
}

window.addEventListener("click", (event) => {
  if (draggable != null) {
    console.log(`dropping draggable ${draggable.userData.name}`);
    draggable = null as any;
    return;
  }

  // THREE RAYCASTER
  clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  clickMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const found = intersect(clickMouse);
  if (found.length > 0) {
    if (found[0].object.userData.draggable) {
      draggable = found[0].object;
      console.log(`found draggable ${draggable.userData.name}`);
    }
  }
});

window.addEventListener("mousemove", (event) => {
  moveMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  moveMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

function dragObject() {
  if (draggable != null) {
    const found = intersect(moveMouse);
    if (found.length > 0) {
      for (let i = 0; i < found.length; i++) {
        if (!found[i].object.userData.ground) continue;

        let target = found[i].point;
        draggable.position.x = target.x;
        draggable.position.z = target.z;
      }
    }
  }
}

var loader = new THREE.FontLoader();
function createletter(mytext, x, y, z) {
  loader.load("fonts/helvetiker_bold.typeface.json", function (font) {
    var textGeo = new THREE.TextGeometry(mytext, {
      font: font,

      size: 5,
      height: 2,
      curveSegments: 12,

      bevelThickness: 0.2,
      bevelSize: 0.2,
      bevelEnabled: true,
    });

    var textMaterial = new THREE.MeshPhongMaterial({ color: 0xff7540 });

    var mesh = new THREE.Mesh(textGeo, textMaterial);
    mesh.position.set(x, y, z);
    mesh.rotation.x = -Math.PI / 4;
    mesh.userData.draggable = true;
    scene.add(mesh);
  });
}
function createtitle(mytext, x, y, z) {
  loader.load("fonts/helvetiker_bold.typeface.json", function (font) {
    var textGeo = new THREE.TextGeometry(mytext, {
      font: font,

      size: 5,
      height: 2,
      curveSegments: 12,

      bevelThickness: 0.2,
      bevelSize: 0.2,
      bevelEnabled: true,
    });
    // const thistexture = new THREE.TextureLoader().load("textwall2.jpg");
    // const thisnormaltexture = new THREE.TextureLoader().load("ballnormalmap.png");
    var textMaterial = new THREE.MeshLambertMaterial({
      // map: thistexture,
      color: 0xff7999,
    });

    var mesh = new THREE.Mesh(textGeo, textMaterial);
    mesh.position.set(x, y, z);
    mesh.rotation.x = -Math.PI / 5;
    mesh.userData.draggable = true;
    scene.add(mesh);
  });
}

createFloor();

createtitle("State Machine Studio", -36, 10, -40);
createletter("0", 30, 6, 20);
createletter("0", 30, 6, 20);
createletter("0", 30, 6, 20);
createletter("0", 30, 6, 20);
createletter("0", 30, 6, 20);
createletter("0", 30, 6, 20);
createletter("0", 30, 6, 20);
createletter("0", 30, 6, 20);

createletter("1", 35, 6, 20);
createletter("1", 35, 6, 20);
createletter("1", 35, 6, 20);
createletter("1", 35, 6, 20);
createletter("1", 35, 6, 20);
createletter("1", 35, 6, 20);
createletter("1", 35, 6, 20);
createletter("1", 35, 6, 20);

createletter("a", 27, 6, 30);
createletter("a", 27, 6, 30);
createletter("a", 27, 6, 30);
createletter("a", 27, 6, 30);
createletter("a", 27, 6, 30);
createletter("a", 27, 6, 30);
createletter("a", 27, 6, 30);
createletter("a", 27, 6, 30);

createletter("b", 32, 6, 30);
createletter("b", 32, 6, 30);
createletter("b", 32, 6, 30);
createletter("b", 32, 6, 30);
createletter("b", 32, 6, 30);
createletter("b", 32, 6, 30);
createletter("b", 32, 6, 30);
createletter("b", 32, 6, 30);

createletter("c", 37, 6, 30);
createletter("c", 37, 6, 30);
createletter("c", 37, 6, 30);
createletter("c", 37, 6, 30);
createletter("c", 37, 6, 30);
createletter("c", 37, 6, 30);
createletter("c", 37, 6, 30);
createletter("c", 37, 6, 30);
// createBox();
createSphere();
createSphere2();
createSphere3();
createSphere4();
createSphere5();
createSphere6();
createSphere();
createSphere2();
createSphere3();
createSphere4();
createSphere5();
createSphere6();
// createCylinder();
// createCastle();
// createArrow();
createArver1();
createArver1();
createArver1();
createArver1();
createArver1();
createArver1();
// createArver2();
// createArver3();
// createArver4();
// createArver5();

createArHor1();
createArHor1();
createArHor1();
createArHor1();
createArHor1();
createArHor1();
// createArHor2();
// createArHor3();
// createArHor4();
// createArHor5();
createArSW1();
createArSW1();
createArSW1();
createArSW1();
createArSW1();
createArSW1();

createArSE1();
createArSE1();
createArSE1();
createArSE1();
createArSE1();
createArSE1();

createARHDS1();
createARHDS1();
createARHDS1();
createARHDS1();
createARHDS1();

createARHDE1();
createARHDE1();
createARHDE1();
createARHDE1();
createARHDE1();

createARHDW1();
createARHDW1();
createARHDW1();
createARHDW1();
createARHDW1();

createARHDN1();
createARHDN1();
createARHDN1();
createARHDN1();
createARHDN1();

createARHDSW1();
createARHDSW1();
createARHDSW1();
createARHDSW1();
createARHDSW1();
createARHDSW1();

createARHDSE1();
createARHDSE1();
createARHDSE1();
createARHDSE1();
createARHDSE1();
createARHDSE1();

createARHDNW1();
createARHDNW1();
createARHDNW1();
createARHDNW1();
createARHDNW1();
createARHDNW1();

createARHDNS1();
createARHDNS1();
createARHDNS1();
createARHDNS1();
createARHDNS1();
createARHDNS1();

animate();
