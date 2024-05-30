import React, { useEffect } from 'react';

// Import images
import canvas from './img/canvas.png';
import wireframe from './img/wireframe.png';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';
import img10 from './img/10.jpg';
import img11 from './img/11.jpg';
import pagecloudLogo from './img/PageCloud_logo.svg';

const IsometricGrid = () => {
  useEffect(() => {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    [].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
      new IsoGrid(el, {
        type: 'scrollable',
        transform: 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
        stackItemsAnimation: {
          properties: function(pos) {
            return {
              translateZ: (pos + 1) * 50,
              rotateZ: getRandomInt(-3, 3)
            };
          },
          options: function(pos, itemstotal) {
            return {
              type: dynamics.bezier,
              duration: 500,
              points: [{ x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] }, { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] }]
            };
          }
        },
        onGridLoaded: function() {
          classie.add(document.body, 'grid-loaded');
        }
      });
    });
  }, []);

  return (
    <main>
      <header className="codrops-header">
        <h1>Photography Website</h1>
        <p>We capture your moments as valuable piece</p>
        <nav className="codrops-demos">
          <a className="current-demo" href="#">Home</a>
          <a href="./index2">About</a>
        </nav>

        <button className="button-menu">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 67.75 43.63">
            <rect width="67.75" height="8.38" />
            <rect x="4.15" y="17.63" width="59.45" height="8.38" />
            <rect y="35.25" width="67.75" height="8.38" />
          </svg>
        </button>
      </header>
      <div className="isolayer isolayer--scroll1 isolayer--shadow">
        <ul className="grid grid--effect-flip">
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img1} alt="01" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img2} alt="021" />
              <span className="grid__title">Julien Lavallee</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img3} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img4} alt="042" />
              <span className="grid__title">Cosmin Capitanu</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img5} alt="011" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img6} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img7} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img8} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img9} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img10} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img11} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img1} alt="01" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img2} alt="021" />
              <span className="grid__title">Julien Lavallee</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img3} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img4} alt="042" />
              <span className="grid__title">Cosmin Capitanu</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img5} alt="011" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img6} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img7} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img8} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img9} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img10} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img11} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img1} alt="01" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img2} alt="021" />
              <span className="grid__title">Julien Lavallee</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img3} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img4} alt="042" />
              <span className="grid__title">Cosmin Capitanu</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img5} alt="011" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img6} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img7} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img8} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img9} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img10} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img11} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img1} alt="01" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img2} alt="021" />
              <span className="grid__title">Julien Lavallee</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img3} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img4} alt="042" />
              <span className="grid__title">Cosmin Capitanu</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img5} alt="011" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img6} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img7} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img8} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img9} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img10} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              <img className="grid__img layer" src={canvas} alt="Canvas Dummy" />
              <img className="grid__img layer" src={wireframe} alt="Wireframe Dummy" />
              <img className="grid__img layer" src={img11} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          
        </ul>
      </div>

    </main>
  );
};

export default IsometricGrid;
