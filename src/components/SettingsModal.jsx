import '../styling/SettingsModal.css';
import { useDispatch } from 'react-redux';
import { closeModal, updateNumberOfCities } from '../redux/navigation/navigationSlice';

const SettingsModal = () => {
  const dispatch = useDispatch();
  const setCloseModal = () => {
    dispatch(closeModal());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const numberFromUser = event.target.querySelector('.modal-input').value;
    dispatch(updateNumberOfCities(numberFromUser));
    dispatch(closeModal());
  };
  return (
    <div className="modal-background hide">
      <div className="modal">
        <button type="button" className="close-mod" onClick={() => setCloseModal()}>X</button>
        <form onSubmit={(event) => handleSubmit(event)}>
          <p>How many cities do you want to display?</p>
          <input type="text" name="modal-input" id="modal-input" className="modal-input" />
          <button type="submit">Change</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsModal;
