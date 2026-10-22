const fetchdata = async () => {
    const getdata = await fetch("https://dummyjson.com/users");

    const change = await getdata.json();

    const datas = change.users;

    const showdata = document.getElementById("showdata");

    let getshow = "";

    datas.forEach((e) => {
        getshow += `<tr>
            <td>${e.id}</td>
            <td>${e.firstName}</td>
            <td>${e.age}</td>
        </tr>`;
    });

    showdata.innerHTML = getshow;
};

fetchdata();