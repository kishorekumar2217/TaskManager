import React from 'react'
import './slide.css';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css";
import 'tippy.js/themes/light.css';
import MoreT from './MoreT';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const NavBAr = () => {
    return (
        <div className="Navhead">
            <div className='TopOffer'>
                {/*     <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" /> */}

                <span> <Link className="link">  TopOffer</Link> </span>

            </div>

            <div className='Grocery'>

                {/* <img src=" https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" /> */}

                <span> <Link className="link"> Grocery</Link> </span>

            </div>
            <div className='Mobiles'>
                {/* <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" /> */}

                <span> <Link className="link"> Mobiles</Link> </span>

            </div>
            <div className='Fashion'>
                {/* <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" /> */}
                <Tippy
                    content={<MoreT/>}
                    interactive={true}
                    theme='light'
                >
                    <span>  Fashion </span>

                </Tippy>
                <ExpandMoreOutlinedIcon/>

            </div>
            <div className='Electronics'>
                {/* <img src="" /> */}

                <span> <Link className="link"> Electronics</Link> </span>
                {/* */}
            </div>
            <div className='Home'>
                {/* <img src="https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100" /> */}

                <span> <Link className="link"> Home</Link> </span>

            </div>
            <div className='Appliancess'>
                {/* <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" /> */}

                <span> <Link className="link">Appliancess</Link> </span>

            </div>
            <div className='Electronics'>
                {/* <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" /> */}

                <span> <Link className="link">Electronics</Link> </span>

            </div>




        </div>
    )
}

export default NavBAr
