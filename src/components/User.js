const character = ({ character, handleClick, selectedcharacter }) => {
  return (
    <div
      className={`cursor-pointer rounded-full flex gap-4 items-center my-3 border-2 border-solid border-green-200 `}
      onClick={() => {
        handleClick(character);
      }}
    >
      <span>
        {character.name} {character.height} {character.mass}
      </span>
    </div>
  );
};

export default character;
