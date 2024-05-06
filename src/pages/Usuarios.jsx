import { useEffect, useState } from "react";
import { getUsersWithCountry } from "../api/userService";

export const Usuarios = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true);





    const showUsers = () => {
        return users.map(user => (
            <div key={user.userId} style={{ background: "lightgray", borderRadius: "15px", padding: "15px", margin: "15px" }}>
                <p>{user.firstName + " " + user.lastName}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.countryName} </p>
                <p>edad:{user.age}</p>


            </div>
        ))
    }

    useEffect(() => {
        getUsersWithCountry().then(
            (res) => setUsers(res.data),
            setIsLoading(false)
        )
    }, [])


    const handleSortByAge = () => {
        const sortedUsers = [...users].sort((a, b) => a.age - b.age)
        setUsers(sortedUsers)
    }

    const filterUsersByCountry = (value = "Argentina") =>{
            const filteredUsers = [...users].filter(user => user.countryName === value)
            setUsers(filteredUsers);
            
    }

    return (
        <div>
            <button onClick={() => handleSortByAge()}>filtrar por edad</button>
            <button onClick={()=> filterUsersByCountry()}>solo de argentina</button>
            {
                isLoading
                    ?
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    :
                    <div>
                        {showUsers()}
                    </div>
            }
        </div>
    )
}
