import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import line from '../img/greenline_1.png';
import berries from '../img/berries.png';
import item_1 from '../img/item_1.svg';
import item_2 from '../img/item_2.svg';
import item_3 from '../img/item_3.svg';
import item_6 from '../img/item_6.svg';
import portret from '../img/portret.png';

export default function Home() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };


  return (
    <div className="home">
      <div className="home__top">
        <div className="home__background-left"></div>
        <div className="home__body">
          <div className="home__top-title">
            <img className="home__top-title-line" src={line} alt="line" />
            <h1>Lorem ipsum, dolor sit amet consectetur </h1>
          </div>
          <div className="home__berry">
            <div className="home__berry-circle item-1">
              <img src={item_1} alt="berries" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="home__berry-circle item-2">
              <img src={item_2} alt="berries" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="home__berry-circle item-3">
              <img src={item_3} alt="berries" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="home__berry-circle item-4">
              <img src={item_2} alt="berries" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="home__berry-circle item-5">
              <img src={item_1} alt="berries" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="home__berry-circle item-6">
              <img src={item_6} alt="berries" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <img className="home__berry-img" src={berries} alt="berries" />
          </div>
        </div>
        <div className="home__background-right"></div>
      </div>

      <div className="home__bottom">
        <div className="home__bottom-left">
          <img src={line} alt="line" />
          <h2 className="home__bottom-left-title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <div className="home__bottom-left-box">
            <div className="home__bottom-left-box-upper">
              <article>
                <img src={portret} alt="portret" />
                <section>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laboriosam quas, aut consectetur animi autem aliquid
                    consequuntur suscipit exercitationem laborum cupiditate
                    magnam eaque quae deleniti, iste nisi expedita, provident
                    excepturi officia! Porro ab rerum omnis magnam eligendi
                    error nobis dolore? Porro ab rerum omnis magnam eligendi
                    error nobis dolore? Porro ab rerum omnis magnam eligendi
                    error nobis dolore?
                  </p>
                  <Link> Jane Doe</Link>
                </section>
              </article>
            </div>
            <div className="home__bottom-left-box-lower">
              {' '}
              <article>
                <section>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laboriosam quas, aut consectetur animi autem aliquid
                  </p>
                  <Link> Jane Doe</Link>
                </section>

                <img src={portret} alt="portret" />
              </article>{' '}
              <article>
                <img src={portret} alt="portret" />
                <section>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laboriosam quas, aut consectetur animi autem aliquid
                  </p>
                  <Link> Jane Doe</Link>
                </section>
              </article>
            </div>
          </div>
        </div>
        <div className="home__bottom-right">
          <img src={line} alt="line" />
          <div className="home__bottom-right-upper">

          <h2 className="home__bottom-right-title">
            Lorem ipsum, dolor sit adipisicing elit.
          </h2>
          <p className="home__bottom-right-subtitle">
            Porro ab rerum omnis magnam eligendi error nobis dolore?
          </p>
          </div>
          <ul className="home__bottom-right-box">
          {Array(5).fill().map((_, index) => (
          <li
            key={index}
            className={`home__bottom-right-box-item ${activeItem === index ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <h3>Lorem ipsum, dolor sit amet adipisicing elit.</h3>
            <p>
              Laboriosam quas, aut consectetur animi autem aliquid
              consequuntur suscipit exercitationem laborum cupiditate magnam
              eaque quae delenit
            </p>
          </li>
        ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
