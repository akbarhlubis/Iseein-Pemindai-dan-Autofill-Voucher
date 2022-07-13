// const kode_voucher = "1111111111"; // Try edit me
// const tri = "*111*" + kode_voucher + "#";
// const telkomsel = "*133*" + kode_voucher + "#";
// const xl = "*123*" + kode_voucher + "#";



// // // Update header text
// document.getElementById("#output").innerHTML = x;
// // document.querySelector("#output").innerHTML = xl;
// // document.write(xl);

// // Log to console
// console.log(xl);

function InputOutput() {
    var x;
    var y;

    x = document.getElementById("input").value;
    y = document.getElementById("output").innerHTML;
    document.querySelector("#output").innerHTML = x;
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("output");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  } 