//import { MdClose } from "react-icons/md";
const Modal = ({ character, toggleModal }) => {
  return (
    <div className="fixed inset-0 w-full max-h-screen overflow-hidden modal-wrapper">
      <div
        className="bg-gray-500 opacity-50 w-full h-full"
        onClick={toggleModal}
      ></div>
      <div className="modal top-1/2 left-1/2 bg-white text-black absolute t-50 l-50">
        <button className="ml-auto block m-4" onClick={toggleModal}>
          {/* <MdClose /> */}X
        </button>
        <article className="flex gap-2 justify-center flex-col p-10 text-center">
          <span className="font-bold text-lg">Name: {character.name}</span>
          <br />
          <span>Height: {character.height}</span>
          <br />
          <span>Mass: {character.mass}</span>
        </article>
      </div>
    </div>
  );
};

export default Modal;
