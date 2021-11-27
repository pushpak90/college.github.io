var  nameV , emailV , subjectV ,  messageV;

function readFom() {
    nameV = document.getElementById("name").value;
    emailV = document.getElementById("email").value;
    subjectV = document.getElementById("subject").value;
    messageV = document.getElementById("message").value;
    console.log(nameV,emailV,subjectV,messageV);
}

document.getElementById("insert").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("student/" + nameV)
      .set({
        name: nameV,
        email: emailV,
        subject: subjectV,
        message : messageV,
      });
    alert("Data Inserted");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  };