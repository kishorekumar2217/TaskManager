import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './slide.css';
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css";
import 'tippy.js/themes/light.css';
import MoreT from './MoreT';
import LoginT from './LoginT';
import { Link } from 'react-router-dom';
import { Row, Container,Col} from 'react-bootstrap'

const NewHeader = () => {
    return (
        <div>
        <Row className='header'>

            <Col className='header_one'>
                <img
                    src="https://mobatia.com/wp-content/uploads/2020/07/re_logo_black.png" alt="company_logo"
                />
                <div className="header_one_two">
                    <span style={{
                        fontsizwwe: '9px',
                        color: 'white',
                        fontStyle: 'italic',
                        fontWeight: 'bold'
                    }}> Dreams Are</span>

                    <span style={{
                        fontsizwwe: '11px',
                        color: '#f9e107',
                        fontStyle: 'italic',
                        fontWeight: 'bold'
                    }}> Buy</span>

                </div>

            </Col>

            <Col className='header_two'>
                <input type="serach"
                    placeholder="Search for products" />
                <SearchOutlinedIcon />

            </Col>

            <Col className='header_three'>
                <Tippy
                    content={<LoginT />}
                    interactive={true}

                    theme='light'
                >
                    <button>Login</button>

                </Tippy>


            </Col>

            <Col className='header_four'>
                <Tippy
                    content={<MoreT />}
                    interactive={true}
                    theme='light'
                >

                    <span>More</span>
                </Tippy>
                <ExpandMoreOutlinedIcon/>


            </Col>

            <Col className='header_five'>
                <ShoppingCartOutlinedIcon />
                <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/cart">  <span>Cart</span></Link>

            </Col>







        </Row>
        </div>
    )
}
export default NewHeader;