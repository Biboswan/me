import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    DirectionalLight,
    SphereGeometry,
    TextureLoader,
    MeshPhongMaterial,
    Mesh,
    Vector3,
} from 'three';
import styled, { ThemeContext } from 'styled-components';
import { useEffect, useContext, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Container = styled.div`
    width: min(max(40vw, 150px), 200px);
    margin: 0 auto;
    background-color: transparent;
`;

const widthFactor = 0.4;
let mesh, renderer, scene, camera;

const renderScene = () => {
    if (renderer) {
        renderer.render(scene, camera);
    }
};

const WebBall = props => {
    const { themeMode } = useContext(ThemeContext);
    const canvasRef = useRef();

    useEffect(() => {
        let then = 0;

        const animate = now => {
            const time = (now - then) / 100;
            mesh.rotation.y += time * 0.05;
            mesh.rotation.x += time * 0.05;
            then = now;
            controls.update();
            renderScene();
            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            let width = getWidth();
            renderer.setSize(width, width, false);
            renderScene();
        };

        const getWidth = () => Math.min(Math.max(widthFactor * window.innerWidth, 150), 200);
        renderer = new WebGLRenderer({ antialias: true, alpha: true });

        // WebGL background color
        //renderer.setClearAlpha('');
        renderer.setClearColor(0xffffff, 0);
        let width = getWidth();
        // Setup a camera
        camera = new PerspectiveCamera(30, 1, 0.1, 20);
        camera.position.set(0, 0, 4);
        camera.lookAt(new Vector3());
        renderer.setPixelRatio(1);
        renderer.setSize(width, width, false);
        camera.aspect = 1;
        camera.updateProjectionMatrix();

        // Setup camera controller
        //const controls = new OrbitControls(camera, renderer.domElement);

        // Setup your scene
        scene = new Scene();
        //scene.background =  new THREE.Color(0x7D86F7);
        const light = new DirectionalLight(0xffffff);
        light.position.set(0, 0, 1);
        scene.add(light);
        scene.background = null;

        // Setup a geometry
        const geometry = new SphereGeometry(1, 32, 16);
        //const geometry = new THREE.SphereBufferGeometry(1,32,16);
        const loader = new TextureLoader();
        const texture = loader.load(require('public/images/webwords.png'));

        const material = new MeshPhongMaterial({
            //wireframe: true,
            flatShading: true,
            vertexColors: true,
            shininess: 0,
            color: getComputedStyle(document.documentElement).getPropertyValue('--color-webballBg'),
            map: texture,
        });

        // Setup a mesh with geometry + material
        mesh = new Mesh(geometry, material);
        const controls = new OrbitControls(camera, renderer.domElement);

        scene.add(mesh);
        canvasRef.current.appendChild(renderer.domElement);
        renderScene();
        requestAnimationFrame(animate);
        window.addEventListener('resize', handleResize);

        return () => {
            controls.update();
            renderer.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        mesh.material.color.set(
            getComputedStyle(document.documentElement).getPropertyValue('--color-webballBg')
        );
        renderScene();
    }, [themeMode]);

    return <Container ref={canvasRef} {...props}></Container>;
};

export default WebBall;
