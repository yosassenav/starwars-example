
import { MdClose } from "react-icons/md";
const Modal = ({user, toggleModal}) => {
    return(
        <div className="fixed inset-0 w-full max-h-screen overflow-hidden modal-wrapper">
            <div className="bg-gray-500 opacity-50 w-full h-full" onClick={toggleModal}></div>
            <div className="modal top-1/2 left-1/2 bg-white text-black absolute t-50 l-50">
                <button className="ml-auto block m-4" onClick={toggleModal}><MdClose/></button>
                <article className="flex gap-2 justify-center flex-col p-10 text-center">
                    <img className="rounded-full pb-10 px-10" alt="modal" src={user.picture.large} />
                    <span className="font-bold text-lg">{user.name.title}. {user.name.first} {user.name.last}</span>
                    <span>{user.gender}</span>
                    <span>{user.phone}</span>
                    <span>{user.email}</span>
                </article>
            </div>
        </div>
        
    )
}

export default Modal;