import '../styling/SettingsModal.css'
const SettingsModal = () => {
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(event.target)
    }
    return (
        <div className="modal-background hide">
            <div className='modal'>
            <button className="close-mod">X</button>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <p>How many states do you want to display?</p>
                <input type="text" name="modal-input" id="modal-input" />
                <button type="submit">Change</button>
            </form>
            </div>
        </div>
    )
}

export default SettingsModal;