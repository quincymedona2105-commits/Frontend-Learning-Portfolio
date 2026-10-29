import React from 'react'

const Employee = () => {

    const employees = [
        { id: 1, name: "Arun", salary: 25000 },
        { id: 2, name: "Priya", salary: 30000 },
        { id: 3, name: "Rahul", salary: 35000 },
        { id: 4, name: "Divya", salary: 40000 }
    ]

return (<>
    <div className="bg-teal-400 p-10">
    <div className="bg-white p-8 rounded-xl w-100">

    <h1 className="text-2xl font-bold mb-5">Employee Details</h1>

        <table className=" border border-gray-400">
            <thead>
                <tr className="bg-teal-200">
                    <th className="border border-gray-400 p-3">ID</th>
                    <th className="border border-gray-400 p-3">Employee Name</th>
                    <th className="border border-gray-400 p-3">Salary</th>
                </tr>
            </thead>

            <tbody>{employees.map((employee) => (
                <tr key={employee.id}>
                    <td className="border border-gray-400 p-3">{employee.id}</td>
                    <td className="border border-gray-400 p-3">{employee.name}</td>
                    <td className="border border-gray-400 p-3">₹{employee.salary}</td>
                </tr>
            ))}
            </tbody>
            </table>

            </div>
        </div>
    </>)
}

export default Employee