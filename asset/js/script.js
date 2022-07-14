function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

function inputOutput() {
  var x;
  var y;
  var provider;
  x = document.getElementById("inputKode").value;
  provider = document.getElementById("mySelect").value;
  if (provider == "tri") {
    tri = "*111*" + x + "#";
    document.getElementById("outputKode").value = tri;
  } else if (provider == "telkomsel") {
    telkomsel = "*133*" + x + "#";
    document.getElementById("outputKode").value = telkomsel;
  } else if (provider == "xl") {
    xl = "*817*" + x + "#";
    document.getElementById("outputKode").value = xl;
  }
  else if (provider == "axis") {
    axis = "*838*" + x + "#";
    document.getElementById("outputKode").value = axis;
  }
  else if (provider == "indom3") {
    indom3 = "*556*" + x + "#";
    document.getElementById("outputKode").value = indom3;
  }
  else if (provider == "smartfren") {
    smartfren = "*999*" + x + "#";
    document.getElementById("outputKode").value = smartfren;
  }
}

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("outputKode");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
