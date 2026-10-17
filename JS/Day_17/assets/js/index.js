const registerdata = (event) => {
    event.preventDefault();

    const username = document.getElementById("username");
    const useremail = document.getElementById("useremail");
    const userpassword = document.getElementById("userpassword");

    const name = username.value.trim();
    const email = useremail.value.trim();
    const password = userpassword.value;

    if (!name || !email || !password) {
        alert("Please fill in all fields");
        return;
    }

    const obj = {
        userid: Date.now(),
        username: name,
        useremail: email,
        userpassword: password
    };

    const datas = JSON.parse(localStorage.getItem("registers")) || [];

    datas.push(obj);

    localStorage.setItem("registers", JSON.stringify(datas));

    alert("Registration successful");

    username.value = "";
    useremail.value = "";
    userpassword.value = "";

    document.location.href = "login.html";
};


const logindata = (event) => {
    event.preventDefault();

    const useremail = document.getElementById("useremail");
    const userpassword = document.getElementById("userpassword");

    const email = useremail.value.trim();
    const password = userpassword.value.trim();

    const datas = JSON.parse(localStorage.getItem("registers")) || [];

    const finddata = datas.find(
        (data) => data.useremail === email && data.userpassword === password
    );

    console.log(finddata);

    if (finddata) {
        alert("Login successful");
        document.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password");
    }
};
