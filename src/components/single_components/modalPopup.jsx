

const ModalPop = ({closeModal}) =>{

    const closeButton = () =>{
        closeModal(false)
    }
    return(
        <div>
            <div className="modal_gene">
                <section className="modal_div">
                    <i class="uil uil-multiply" onClick={closeButton}></i>
                    <p>Click <strong>" continue "</strong> to view Booked Space in dashboard</p>
                    <div className="modal_button_flex">
                        <button onClick={closeButton}>Close Modal</button>
                        <button>Continue</button>
                    </div>
                </section>
            </div>
        </div>
        
    )
}

export default ModalPop