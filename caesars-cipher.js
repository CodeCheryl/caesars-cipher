function rot13(str) {
    str = document.getElementById("str").value.toUpperCase();
    let code = [];
    for (let i = 0; i < str.length; i++) {
      code.push(str.charCodeAt(i));
    }
  
    let code13 = code.map((ele) => {
      if (ele < 65) {
        return ele;
      } else if (ele >= 65 && ele < 78) {
        return ele + 13;
      } else {
        return ele - 13;
      }
    });
  
    let message = String.fromCharCode(...code13);
    let log = document.createElement("p");
    let textNode = document.createTextNode(message);
    log.appendChild(textNode);
    document.getElementById("decipher").appendChild(log);
  
    return message;
  }
  