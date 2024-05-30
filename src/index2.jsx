
import React, { useEffect } from 'react';
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

  const index2 = () => {
    useEffect(() => {
      function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			new IsoGrid(document.querySelector('.isolayer--deco1'), {
				transform : 'translateX(33vw) translateY(-340px) rotateX(45deg) rotateZ(45deg)',
				stackItemsAnimation : {
					properties : function(pos) {
						return {
							translateZ: (pos+1) * 30,
							rotateZ: getRandomInt(-4, 4)
						};
					},
					options : function(pos, itemstotal) {
						return {
							type: dynamics.bezier,
							duration: 500,
							points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
							delay: (itemstotal-pos-1)*40
						};
					}
				}
			});
    
			
			new IsoGrid(document.querySelector('.isolayer--deco2'), {
				perspective: 3000,
				transform : 'translateY(-150px) rotateX(55deg) rotateZ(-45deg)',
				stackItemsAnimation : {
					properties : function(pos) {
						return {
							translateX: getRandomInt(-60, 60),
							translateY: getRandomInt(-60, 60),
							rotateZ: getRandomInt(-10, 10)
						};
					},
					options : function(pos, itemstotal) {
						return {
							type: dynamics.bezier,
							duration: 800,
							points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
							delay: (itemstotal-pos-1)*20
						};
					}
				}
			});
			
			new IsoGrid(document.querySelector('.isolayer--deco3'), {
				transform : 'translateX(40vw) translateY(100px) rotateX(15deg) rotateY(0) rotateZ(40deg)',
				stackItemsAnimation : {
					properties : function(pos) {
						return {
							rotateY: pos * -15
						};
					},
					options : function(pos, itemstotal) {
						return {
							type: dynamics.bezier,
							duration: 500,
							points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
							delay: (itemstotal-pos-1)*40
						};
					}
				}
			});
			
			new IsoGrid(document.querySelector('.isolayer--deco4'), {
				perspective: 3000,
				transform : 'translate3d(-200px,-200px,0) scale3d(0.8,0.8,1) rotateY(45deg) rotateZ(-10deg)',
				stackItemsAnimation : {
					properties : function(pos) {
						return {
							rotateX: (pos+1) * -15
						};
					},
					options : function(pos, itemstotal) {
						return {
							type: dynamics.spring,
							delay: (itemstotal-pos-1)*30
						};
					}
				},
				onGridLoaded : function() {
					classie.add(document.body, 'grid-loaded');
				}
			});
    }, [])

    return (


<>
  <main>
    <header className="codrops-header">
      <h1>Photography Website</h1>
      <p>Decorative &amp; interactive isometric &amp; 3D grids.</p>
      <p></p>
    </header>
    <section className="section section--intro">
      <div className="isolayer isolayer--deco1 isolayer--shadow">
        <ul className="grid">
        <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img1} alt="01" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img2} alt="021" />
              <span className="grid__title">Julien Lavallee</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img3} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img4} alt="042" />
              <span className="grid__title">Cosmin Capitanu</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img5} alt="011" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img6} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
            
              <img className="grid__img layer" src={img7} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img8} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img9} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img10} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img11} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img1} alt="01" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img2} alt="021" />
              <span className="grid__title">Julien Lavallee</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img3} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img4} alt="042" />
              <span className="grid__title">Cosmin Capitanu</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img5} alt="011" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img6} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
            
              <img className="grid__img layer" src={img7} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img8} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
    {/*/intro*/}
    <section className="interval">
      <p className="interval__text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat incidunt, consequatur similique corporis eligendi voluptatibus voluptatem delectus doloribus iusto iste natus, nemo obcaecati repudiandae laboriosam, eos dolorum ullam neque. Dolorem repellat quam reiciendis voluptas, error ratione nam modi. Perferendis, beatae. Nulla labore vel voluptatum suscipit officiis {" "}
        <em>
          —{" "}
          <a href="https://en.wikipedia.org/wiki/Isometric_projection">
            Wikipedia
          </a>
        </em>
      </p>
     
    </section>
    <section className="section section--right section--portraits">
      <h2 className="section__heading">
        Celebration <em>of</em> Shapes
      </h2>
      <p className="section__subtitle">
        Even whilst the arched or doubled hypocotyl is still beneath the ground,
        it circumnutates as much as the pressure of the surrounding soil will
        permit.
      </p>
      <div className="isolayer isolayer--deco2">
      <ul className="grid">
        <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img1} alt="01" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img2} alt="021" />
              <span className="grid__title">Julien Lavallee</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img3} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img4} alt="042" />
              <span className="grid__title">Cosmin Capitanu</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img5} alt="011" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img6} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
            
              <img className="grid__img layer" src={img7} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img8} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img9} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img10} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img11} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img1} alt="01" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img2} alt="021" />
              <span className="grid__title">Julien Lavallee</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img3} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img4} alt="042" />
              <span className="grid__title">Cosmin Capitanu</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img5} alt="011" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img6} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
            
              <img className="grid__img layer" src={img7} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img8} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
        </ul> 
      </div>
    </section>
    {/*/portraits*/}
    <section className="interval">
      <p className="interval__text">
        Axonometric projection is a type of parallel projection used for
        creating a pictorial drawing of an object, where the object is rotated
        along one or more of its axes relative to the plane of projection.{" "}
        <em>
          —{" "}
          <a href="https://en.wikipedia.org/wiki/Axonometric_projection">
            Wikipedia
          </a>
        </em>
      </p>
    </section>
    <section className="section section--cards">
      <h2 className="section__heading">Symmetric Wisdom</h2>
      <p className="section__subtitle">
        It is to this violence of the rain that we must attribute the verdure at
        the bottom of the thickest woods.
      </p>
      <div className="isolayer isolayer--deco3">
        <ul className="grid">
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="#">
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
              <div className="layer">
                <span className="decoletter">A</span>
                <span className="deconumber">23</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section className="interval">
      <p className="interval__text">
        Isometric projection is a method for visually representing
        three-dimensional objects in two dimensions in technical and engineering
        drawings.{" "}
        <em>
          —{" "}
          <a href="https://en.wikipedia.org/wiki/Isometric_projection">
            Wikipedia
          </a>
        </em>
      </p>
    </section>
    <section className="section section--shots section--right">
      <h2 className="section__heading">
        Format <em>is</em> Everything
      </h2>
      <p className="section__subtitle">
        To raise new questions, new possibilities, to regard old problems from a
        new angle, requires creative imagination and marks real advance in
        science.
      </p>
      <div className="isolayer isolayer--deco4">
      <ul className="grid">
        <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img1} alt="01" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img2} alt="021" />
              <span className="grid__title">Julien Lavallee</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img3} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img4} alt="042" />
              <span className="grid__title">Cosmin Capitanu</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img5} alt="011" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img6} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
            
              <img className="grid__img layer" src={img7} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img8} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img9} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img10} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img11} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img1} alt="01" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img2} alt="021" />
              <span className="grid__title">Julien Lavallee</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img3} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
             
              <img className="grid__img layer" src={img4} alt="042" />
              <span className="grid__title">Cosmin Capitanu</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img5} alt="011" />
              <span className="grid__title">Forefathers</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img6} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
            
              <img className="grid__img layer" src={img7} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
          <li className="grid__item">
            <a className="grid__link" href="https://www.instagram.com/_al.che.mist/reels/">
              
              <img className="grid__img layer" src={img8} alt="03" />
              <span className="grid__title">Mike | Creative Mints</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
    {/* Related demos */}
    <section className="content content--related">
      <p>If you enjoyed this demo you might also like:</p>
      <a
        className="media-item"
        href="https://github.com/SudeepAcharjee"
      >
        <img
          className="media-item__img"
          src={img1}
        />
        <h3 className="media-item__title">Effect Ideas for Image Grids</h3>
      </a>
      <a
        className="media-item"
        href="/https://github.com/SudeepAcharjee"
      >
        <img
          className="media-item__img"
          src={img1}
        />
        <h3 className="media-item__title">Grid Item Animation Layout</h3>
      </a>
    </section>
  </main>
</>

  )
}

export default index2