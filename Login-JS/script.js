function test() {
    let x = document.getElementById("name").value
    let y = document.getElementById("pas").value
    let login = x=="admin" && y=="2021" ? "Daxil Oldunuz" : "istifadeci adi ve parol yanlisdir";
    alert(login);
  }
