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
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Container = styled.div`
    width: min(max(70vw, 350px), 600px);
    margin: auto;
`;

const WebBall = ({ color, ...rest }) => {
    const canvasRef = useRef();
    const widthFactor = 0.7;
    useEffect(() => {
        let then = 0;
        const renderScene = () => {
            if (renderer) {
                renderer.render(scene, camera);
            }
        };

        const animate = now => {
            const time = (now - then) / 100;
            mesh.rotation.y += time * 0.05;
            mesh.rotation.x += time * 0.05;
            then = now;
            renderScene();
            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            let width = getWidth();
            renderer.setSize(width, width, false);
            renderScene();
        };

        const getWidth = () => Math.min(Math.max(widthFactor * window.innerWidth, 350), 600);
        const renderer = new WebGLRenderer({ antialias: true });

        // WebGL background color
        //renderer.setClearAlpha('');
        renderer.setClearColor('white', 1);
        let width = getWidth();
        canvasRef.current.appendChild(renderer.domElement);
        // Setup a camera
        const camera = new PerspectiveCamera(50, 1, 1, 100);
        camera.position.set(0, 0, 4);
        camera.lookAt(new Vector3());
        renderer.setPixelRatio(1);
        renderer.setSize(width, width, false);
        camera.aspect = 1;
        camera.updateProjectionMatrix();

        // Setup camera controller
        //const controls = new OrbitControls(camera, renderer.domElement);

        // Setup your scene
        const scene = new Scene();
        //scene.background =  new THREE.Color(0x7D86F7);
        const light = new DirectionalLight(0xffffff);
        light.position.set(0, 0, 1);
        scene.add(light);
        // Setup a geometry
        const geometry = new SphereGeometry(1, 32, 16);
        //const geometry = new THREE.SphereBufferGeometry(1,32,16);
        const loader = new TextureLoader();
        const texture = loader.load('images/webwords.png');
        const material = new MeshPhongMaterial({
            //wireframe: true,
            flatShading: true,
            vertexColors: true,
            shininess: 0,
            color,
            map: texture,
        });

        // Setup a mesh with geometry + material
        const mesh = new Mesh(geometry, material);
        scene.add(mesh);
        renderScene();
        requestAnimationFrame(animate);
        window.addEventListener('resize', handleResize);

        return () => {
            renderer.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <Container ref={canvasRef} {...rest}></Container>;
    //return <model-viewer src="models/webball.gltf" background-color="#70BCD1" controls auto-rotate alt="A 3D model of an astronaut"></model-viewer>
};

WebBall.propTypes = {
    color: PropTypes.string,
};

export default WebBall;
