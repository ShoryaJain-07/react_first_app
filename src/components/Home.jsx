import React from 'react';
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,
AiFillAmazonCircle,
AiFillYoutube,
AiFillInstagram,} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id="home">
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problems
                you face 
                everyday. We are leading tech company whose aim is to 
                increase the 
                problem solving ability in children.
            </p>
        </div>
    </div>
    

    <div className="home3" id="about">
        <div>
            <h1>who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, cum. Vitae dolores consectetur quod? Vitae officia facere veritatis ducimus eos rerum consequatur tempore sit sequi laboriosam deleniti consequuntur eum omnis neque quaerat eius labore dolores, libero recusandae. Quos nihil incidunt explicabo reiciendis quam iure ut voluptate enim beatae accusantium atque quod, tempore fugit minima illo reprehenderit totam debitis, suscipit laboriosam! Ab omnis minus provident. Officiis, id. Animi blanditiis debitis reprehenderit. Placeat rerum, impedit, libero temporibus ab enim dolores obcaecati debitis incidunt quam praesentium fugit sequi ipsum nostrum eveniet, error provident! Architecto cupiditate laborum inventore unde ea temporibus adipisci aspernatur optio?</p>
        </div>
    </div>
    
    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>

            <article>

                <div style={{animationDelay: "0.3s",}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style={{animationDelay: "0.5s", }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style={{animationDelay: "0.7s", }}>
                    <AiFillYoutube />
                    <p>YouTube</p>
                </div>

                <div style={{animationDelay: "1s", }}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    
    </>
  )
};

export default Home