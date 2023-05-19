const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setClearColor("#222222");
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

// resize 事件
window.addEventListener("resize", () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// 立体方
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
    color: 0xff0051,
    flatShading: true,
    metalness: 0,
    roughness: 1,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 维数据集
const geometry2 = new THREE.BoxGeometry(3, 3, 3);
const material2 = new THREE.MeshBasicMaterial({
    color: "#dadada",
    wireframe: true,
    transparent: true,
});
const wireframeCube = new THREE.Mesh(geometry2, material2);
scene.add(wireframeCube);

// 环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

// 点光源
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 50, 25);
scene.add(pointLight);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;
    wireframeCube.rotation.x -= 0.01;
    wireframeCube.rotation.y -= 0.01;
    renderer.render(scene, camera);
}
animate();