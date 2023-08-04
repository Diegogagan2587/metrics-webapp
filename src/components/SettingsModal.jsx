import '../styling/SettingsModal.css'
import {useSelector, useDispatch } from 'react-redux';
import { closeModal, updateNumberOfCities } from '../redux/navigation/navigationSlice';
const SettingsModal = () => {
    const dispatch = useDispatch();
    const isModalOPen = useSelector((state)=>state.navigaton[0].isModalOpen);
    const setCloseModal = ()=>{
        dispatch(closeModal())
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        const numberFromUser = event.target.querySelector('.modal-input').value;
        console.log(numberFromUser);
        dispatch(updateNumberOfCities(numberFromUser))
    }
    return (
        <div className="modal-background hide">
            <div className='modal'>
            <button className="close-mod" onClick={()=>setCloseModal()}>X</button>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <p>How many states do you want to display?</p>
                <input type="text" name="modal-input" id="modal-input" className='modal-input'/>
                <button type="submit">Change</button>
            </form>
            </div>
        </div>
    )
}

export default SettingsModal;