window.onload = () => {
    let birthdate = document.querySelector(".birthDate");
    let luckynumber = document.querySelector(".luckyNumber");
    let checkbtn = document.querySelector(".checkBtn");
    let output = document.querySelector(".output");
  
    let birthSum = (birth, luck) => {
      let sum = 0;
      birth = birth.replaceAll("-", "");
      for (var number of birth) {
        sum = sum + Number(number);
        if (sum % luck === 0) {
          output.innerHTML = "ya!your birthdte is really a lucky no. for you";
        } else {
          output.innerHTML = "oops!your birtdate is not a  lucky no. for you";
        }
      }
    };
  
    checkbtn.addEventListener("click", () => {
      var birthval = birthdate.value;
      var luckyval = luckynumber.value;
      if (birthval && luckyval) {
        birthSum(birthval, luckyval);
      } else {
        alert("please give full information");
      }
    });
  };
  