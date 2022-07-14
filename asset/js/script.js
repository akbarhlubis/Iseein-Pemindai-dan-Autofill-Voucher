function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    let ASCIICode = evt.which ? evt.which : evt.keyCode;
    return !(ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57));
  }
  
  function inputOutput() {
    let x;
    let tri;
    x = document.getElementById("inputKode").value;
    tri = "*111*" + x + "#";
    document.getElementById("outputKode").value = tri;
  }
  
  function myFunction() {
    /* Get the text field */
    let copyText = document.getElementById("outputKode");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
  