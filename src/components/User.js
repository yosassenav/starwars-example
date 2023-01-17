const User = ({user, handleClick, selectedUser}) => {
    return(
        <div className={`cursor-pointer rounded-full flex gap-4 items-center my-3 border-2 border-solid border-green-200 ${selectedUser?.phone === user.phone ? 'bg-green-200' : ''}`} onClick={()=>{handleClick(user)}}>
            <img alt={user.name.first} className="rounded-full" src={user.picture.medium}/>
            <span>{user.name.title}. {user.name.first} {user.name.last}</span>
        </div>
    )
}

export default User;