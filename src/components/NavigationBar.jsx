import '../styling/NavigationBar.css';
import { useSelector,useDispatch } from 'react-redux';
import { AiTwotoneSetting, AiOutlineLeft } from 'react-icons/ai';
import { BiSolidMicrophone } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import SettingsModal from './SettingsModal';
import { openModal } from '../redux/navigation/navigationSlice';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state)=>state.navigaton[0].isModalOpen);
  const setOpenModal = ()=> {
    dispatch(openModal());
  }
  return (
    <nav>
      <ul>
        <li>
          <button className='go-back'><NavLink to="./home"> <AiOutlineLeft /> </NavLink></button> <span>Now</span>
        </li>
        <li>most views</li>
        <li className='icons-right'>
        <BiSolidMicrophone />
          <button onClick={()=>setOpenModal()}>
            <AiTwotoneSetting />
          </button>
        </li>
      </ul>
      {isModalOpen && <SettingsModal />}
    </nav>
  );
};

export default NavigationBar;
