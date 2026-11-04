import React, { useState, useEffect } from 'react'

const Fetchuser = () => {

const [userdata, setUserData] = useState([])

const fetchData = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/users")
const data = await response.json()
setUserData(data)

}

useEffect(() => {
    fetchData()
}, [])

return (<>
<div>
    <table border="1" cellPadding="10">
    <thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Username</th>
    </tr>
    </thead>

    <tbody>
    {userdata.map((user) => (
    <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.username}</td>
    </tr>
 ))}
</tbody>
</table>
</div>
    </>)
}

export default Fetchuser