import '../styling/NavigationBar.css';
import { AiTwotoneSetting } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <button><NavLink to="./home">{'<'}</NavLink></button> <span>2015</span>
        </li>
        <li>most views</li>
        <li>
          <button>
            <AiTwotoneSetting />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
