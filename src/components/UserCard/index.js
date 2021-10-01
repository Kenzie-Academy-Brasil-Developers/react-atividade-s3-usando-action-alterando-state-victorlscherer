import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/action";

const UserCard = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    const handleClick = () => {
        dispatch(changeName(name));
    }

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={handleClick} >Change</button>
            <hr />
            <h1>{name}</h1>
        </div>
    )
}

export default UserCard;