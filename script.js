//your JS code here. If required.
let btn=document.getElementById("btn")
let age=document.getElementById("age")
let name=document.getElementById("name")

btn.addEventListener("click",()=>{
	let ageVal=age.value
	let nameVal=name.value
	 if (nameVal === "" && ageVal === "") {
        alert("Please enter valid details");
    } else{
		 agePromise(ageVal,nameVal)
	}


	function agePromise(ageVal, nameVal) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageVal >= 18) {
                resolve(`Welcome, ${nameVal}. You can vote.`);
            } else {
                reject(`Oh sorry ${nameVal}. You aren't old enough.`);
            }
        }, 4000); // Delay of 4 seconds
    })
    .then((message) => {
        alert(message); // Shows alert if promise is resolved
    })
    .catch((message) => {
        alert(message); // Shows alert if promise is rejected
    });
}
})



