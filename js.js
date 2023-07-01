function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Bạn chưa nhập cái gì sao tôi tìm kiếm được??");
      return false;
    }
  }