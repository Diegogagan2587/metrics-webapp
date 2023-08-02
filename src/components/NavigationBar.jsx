import '../styling/NavigationBar.css';
import { AiTwotoneSetting, AiOutlineLeft } from 'react-icons/ai';
import { BiSolidMicrophone } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <button className='go-back'><NavLink to="./home"> <AiOutlineLeft /> </NavLink></button> <span>2015</span>
        </li>
        <li>most views</li>
        <li className='icons-right'>
        <BiSolidMicrophone />
          <button>
            <AiTwotoneSetting />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
