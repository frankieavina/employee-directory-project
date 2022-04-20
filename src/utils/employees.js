
const getEmployees = async () => {
    const employees = await fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
    return employees; 
}

export {getEmployees}; 