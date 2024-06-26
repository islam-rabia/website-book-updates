let formTwo = document.querySelector(".formTwo") as HTMLFormElement;

let UserFirstInput = document.querySelector(".first input") as HTMLInputElement;
let UserLastInput = document.querySelector(".last input") as HTMLInputElement;
let UserPhoneInput = document.querySelector(".Phone input") as HTMLInputElement;
let EmailInput = document.querySelector(
  ".formTwo .Email input"
) as HTMLInputElement;
let password = document.querySelector(
  ".formTwo .password input"
) as HTMLInputElement;
let Crossword = document.querySelector(
  ".formTwo .Crossword input"
) as HTMLInputElement;

let paragraphFirst = document.querySelector(".first p") as HTMLElement;
let paragraphLast = document.querySelector(".last p") as HTMLElement;
let paragraphPhone = document.querySelector(".Phone p") as HTMLElement;
let paragraphEmail = document.querySelector(".formTwo .Email p") as HTMLElement;
let paragraphPassword = document.querySelector(
  ".formTwo .password p"
) as HTMLElement;
let paragraphCrossword = document.querySelector(
  ".formTwo .Crossword p"
) as HTMLElement;

let textFirst = document.querySelector(".first .text") as HTMLElement;
let iconErrorFirst = document.querySelector(
  ".first .text .error"
) as HTMLElement;
let iconTrueFirst = document.querySelector(".first .text .true") as HTMLElement;

let textLast = document.querySelector(".last .text") as HTMLElement;
let iconErrorLast = document.querySelector(".last .text .error") as HTMLElement;
let iconTrueLast = document.querySelector(".last .text .true") as HTMLElement;

let textPhone = document.querySelector(".Phone .text") as HTMLElement;
let iconErrorPhone = document.querySelector(
  ".Phone .text .error"
) as HTMLElement;
let iconTruePhone = document.querySelector(".Phone .text .true") as HTMLElement;

let textEmail = document.querySelector(".formTwo .Email .text") as HTMLElement;
let iconErrorEmail = document.querySelector(
  ".formTwo .Email .text .error"
) as HTMLElement;
let iconTrueEmail = document.querySelector(
  ".formTwo .Email .text .true"
) as HTMLElement;

let textPass = document.querySelector(
  ".formTwo .password .text"
) as HTMLElement;
let iconErrorPass = document.querySelector(
  ".formTwo .password .text .error"
) as HTMLElement;
let iconTruePass = document.querySelector(
  ".formTwo .password .text .true"
) as HTMLElement;

let textCrossword = document.querySelector(
  ".formTwo .Crossword .text"
) as HTMLElement;
let iconErrorCrossword = document.querySelector(
  ".formTwo .Crossword .text .error"
) as HTMLElement;
let iconTrueCrossword = document.querySelector(
  ".formTwo .Crossword .text .true"
) as HTMLElement;

let iconUserFirst = document.querySelector(".first .icon-first") as HTMLElement;
let iconUserLast = document.querySelector(".last .icon-last") as HTMLElement;
let iconUserPhone = document.querySelector(".Phone .icon-phone") as HTMLElement;
let iconUserEmail = document.querySelector(
  ".Insert .Email .icon-email"
) as HTMLElement;
let iconUserPassword = document.querySelector(".formTwo .icons") as HTMLElement;
let iconUserCrossword = document.querySelector(
  ".Crossword .icons"
) as HTMLElement;

let KeyUpFunc = function () {
  UserFirstInput.addEventListener("keyup", UserFirst);
  UserLastInput.addEventListener("keyup", UserLast);

  UserPhoneInput.addEventListener("keyup", Phone);
  EmailInput.addEventListener("keyup", EmailFuncInt);
  password.addEventListener("keyup", function () {
    iconUserPassword.style.top = "33%";
    PasswordFuncInt();
  });
  Crossword.addEventListener("keyup", function () {
    iconUserCrossword.style.top = "33%";
    CrosswordFuncInt();
    validation();
  });

  UserFirstInput.addEventListener("keyup", function () {
    if (UserFirstInput.value == "") {
      UserFirstInput.classList.remove("false");
      UserFirstInput.classList.remove("true");
      textFirst.classList.remove("active");

      iconUserFirst.style.top = "50%";
    }
  });

  UserLastInput.addEventListener("keyup", function () {
    if (UserLastInput.value == "") {
      UserLastInput.classList.remove("false");
      UserLastInput.classList.remove("true");
      textLast.classList.remove("active");

      iconUserLast.style.top = "50%";
    }
  });

  UserPhoneInput.addEventListener("keyup", function () {
    if (UserPhoneInput.value == "") {
      UserPhoneInput.classList.remove("false");
      UserPhoneInput.classList.remove("true");
      textPhone.classList.remove("active");

      iconUserPhone.style.top = "50%";
    }
  });

  EmailInput.addEventListener("keyup", function () {
    if (EmailInput.value == "") {
      EmailInput.classList.remove("false");
      EmailInput.classList.remove("true");
      textEmail.classList.remove("active");

      iconUserEmail.style.top = "50%";
    }
  });

  password.addEventListener("keyup", function () {
    if (password.value == "") {
      password.classList.remove("false");
      password.classList.remove("true");
      textPass.classList.remove("active");
      iconUserPassword.style.top = "50%";
    }
  });

  Crossword.addEventListener("keyup", function () {
    if (Crossword.value == "") {
      Crossword.classList.remove("false");
      Crossword.classList.remove("true");
      textCrossword.classList.remove("active");
      iconUserCrossword.style.top = "50%";
    }
  });
};

let UserFirst = function () {
  let UserFirstValid = /[a-zA-Z]{5,}/gi;

  if (!UserFirstInput.value.match(UserFirstValid)) {
    UserFirstInput.classList.add("false");
    UserFirstInput.classList.remove("true");
    textFirst.classList.add("active");

    paragraphFirst.innerHTML = "name cant blank";
    paragraphFirst.style.color = "red";
    iconErrorFirst.style.color = "red";
    iconTrueFirst.style.display = "none";
    iconErrorFirst.style.display = "block";

    iconUserFirst.style.top = "33%";
  } else {
    UserFirstInput.classList.remove("false");
    UserFirstInput.classList.add("true");
    textFirst.classList.add("active");

    paragraphFirst.innerHTML = "Name validation";
    paragraphFirst.style.color = "#38ad3c";
    iconTrueFirst.style.color = "#38ad3c";
    iconTrueFirst.style.display = "block";
    iconErrorFirst.style.display = "none";

    iconUserFirst.style.top = "33%";
  }
};

let UserLast = function () {
  let UserLastValid = /[a-zA-Z]{5,}/gi;

  if (!UserLastInput.value.match(UserLastValid)) {
    UserLastInput.classList.add("false");
    UserLastInput.classList.remove("true");
    textLast.classList.add("active");

    paragraphLast.innerHTML = "name cant blank";
    paragraphLast.style.color = "red";
    iconErrorLast.style.color = "red";
    iconTrueLast.style.display = "none";
    iconErrorLast.style.display = "block";

    iconUserLast.style.top = "33%";
  } else {
    UserLastInput.classList.remove("false");
    UserLastInput.classList.add("true");
    textLast.classList.add("active");

    paragraphLast.innerHTML = "Name validation";
    paragraphLast.style.color = "#38ad3c";
    iconTrueLast.style.color = "#38ad3c";
    iconTrueLast.style.display = "block";
    iconErrorLast.style.display = "none";

    iconUserLast.style.top = "33%";
  }
};

let Phone = function () {
  let PhoneValid = /[^a-zA-Z]\d{2,3}\s\d{3}-\d{3}\s\d{2}/gi;

  if (!UserPhoneInput.value.match(PhoneValid)) {
    UserPhoneInput.classList.add("false");
    UserPhoneInput.classList.remove("true");
    textPhone.classList.add("active");

    paragraphPhone.innerHTML = "Phone cant blank";
    paragraphPhone.style.color = "red";
    iconErrorPhone.style.color = "red";
    iconTruePhone.style.display = "none";
    iconErrorPhone.style.display = "block";

    iconUserPhone.style.top = "33%";
  } else {
    UserPhoneInput.classList.remove("false");
    UserPhoneInput.classList.add("true");
    textPhone.classList.add("active");

    paragraphPhone.innerHTML = "Phone validation";
    paragraphPhone.style.color = "#38ad3c";
    iconTruePhone.style.color = "#38ad3c";
    iconTruePhone.style.display = "block";
    iconErrorPhone.style.display = "none";

    iconUserPhone.style.top = "33%";
  }
};

let EmailFuncInt = function () {
  let EmailRegularInput =
    /(\w+\d+@\w+.(com|net|org)|\w+@\d+\w+.(com|net|org))/gi;

  if (!EmailInput.value.match(EmailRegularInput)) {
    EmailInput.classList.add("false");
    EmailInput.classList.remove("true");
    textEmail.classList.add("active");

    paragraphEmail.innerHTML = "Email cant blank";
    paragraphEmail.style.color = "red";
    iconErrorEmail.style.color = "red";
    iconTrueEmail.style.display = "none";
    iconErrorEmail.style.display = "block";

    iconUserEmail.style.top = "33%";
  } else {
    EmailInput.classList.remove("false");
    EmailInput.classList.add("true");
    textEmail.classList.add("active");

    paragraphEmail.innerHTML = "Email validation";
    paragraphEmail.style.color = "#38ad3c";
    iconTrueEmail.style.color = "#38ad3c";
    iconTrueEmail.style.display = "block";
    iconErrorEmail.style.display = "none";

    iconUserEmail.style.top = "33%";
  }
};

let PasswordFuncInt = function () {
  let passwordRegular = /^\d{6,}[^a-zA-Z]/gi;

  if (!password.value.match(passwordRegular)) {
    password.classList.add("false");
    password.classList.remove("true");
    paragraphPassword.innerHTML = "Password address cant be blank";
    paragraphPassword.style.color = "red";
    textPass.classList.add("active");

    iconErrorPass.style.color = "red";
    iconTruePass.style.display = "none";
    iconErrorPass.style.display = "block";

    iconUserPassword.style.top = "33%";
  } else {
    password.classList.remove("false");
    password.classList.add("true");
    paragraphPassword.innerHTML = "Password success validation";
    paragraphPassword.style.color = "#38ad3c";
    textPass.classList.add("active");

    iconTruePass.style.color = "#38ad3c";
    iconTruePass.style.display = "block";
    iconErrorPass.style.display = "none";

    iconUserPassword.style.top = "33%";
  }
};

let CrosswordFuncInt = function () {
  let CrosswordRegular = /^\d{6,}[^a-zA-Z]/gi;

  if (!Crossword.value.match(CrosswordRegular)) {
    Crossword.classList.add("false");
    Crossword.classList.remove("true");
    paragraphCrossword.innerHTML = "Password address cant be blank";
    paragraphCrossword.style.color = "red";
    textCrossword.classList.add("active");

    iconErrorCrossword.style.color = "red";
    iconTrueCrossword.style.display = "none";
    iconErrorCrossword.style.display = "block";

    iconUserCrossword.style.top = "33%";
  } else {
    Crossword.classList.remove("false");
    Crossword.classList.add("true");
    paragraphCrossword.innerHTML = "Password success validation";
    paragraphCrossword.style.color = "#38ad3c";
    textCrossword.classList.add("active");

    iconTrueCrossword.style.color = "#38ad3c";
    iconTrueCrossword.style.display = "block";
    iconErrorCrossword.style.display = "none";

    iconUserCrossword.style.top = "33%";
  }
};

let validation = function () {
  if (
    Crossword.value !== "" &&
    password.value !== "" &&
    Crossword.value == password.value
  ) {
    Crossword.classList.remove("false");
    Crossword.classList.add("true");
    paragraphCrossword.innerHTML = "Password success validation";
    paragraphCrossword.style.color = "#38ad3c";
    textCrossword.classList.add("active");

    iconTrueCrossword.style.color = "#38ad3c";
    iconTrueCrossword.style.display = "block";
    iconErrorCrossword.style.display = "none";
  } else {
    Crossword.classList.add("false");
    Crossword.classList.remove("true");
    paragraphCrossword.innerHTML = "Password address cant be blank";
    paragraphCrossword.style.color = "red";
    textCrossword.classList.add("active");

    iconErrorCrossword.style.color = "red";
    iconTrueCrossword.style.display = "none";
    iconErrorCrossword.style.display = "block";
  }
};

let SignValid = function () {
  formTwo.onsubmit = function (ele) {
    ele.preventDefault();

    UserFirst();
    UserLast();
    Phone();
    EmailFuncInt();
    PasswordFuncInt();
    CrosswordFuncInt();
    validation();

    iconUserFirst.style.top = "33%";
    iconUserLast.style.top = "33%";
    iconUserPhone.style.top = "33%";
    iconUserEmail.style.top = "33%";
    iconUserPassword.style.top = "33%";
    iconUserCrossword.style.top = "33%";

    let UserFirstValid = /[a-zA-Z]{5,}/gi;
    let UserLastValid = /[a-zA-Z]{5,}/gi;
    let PhoneValid = /[^a-zA-Z]\d{2,3}\s\d{3}-\d{3}\s\d{2}/gi;
    let EmailRegularInput =
      /(\w+\d+@\w+.(com|net|org)|\w+@\d+\w+.(com|net|org))/gi;
    let passwordRegular = /^\d{6,}[^a-zA-Z]/gi;
    let CrosswordRegular = /^\d{6,}[^a-zA-Z]/gi;

    if (
      UserFirstInput.value.match(UserFirstValid) &&
      UserLastInput.value.match(UserLastValid) &&
      UserPhoneInput.value.match(PhoneValid) &&
      EmailInput.value.match(EmailRegularInput) &&
      password.value.match(passwordRegular) &&
      Crossword.value.match(CrosswordRegular)
    ) {
      location.href = "indexThree.html";
      UserFirstInput.value = "";
      UserPhoneInput.value = "";
      EmailInput.value = "";
      password.value = "";
      Crossword.value = "";
      UserLastInput.value = "";

      iconUserFirst.style.top = "50%";
      iconUserLast.style.top = "50%";
      iconUserPhone.style.top = "50%";
      iconUserEmail.style.top = "50%";
      iconUserPassword.style.top = "50%";
      iconUserCrossword.style.top = "50%";

      UserFirstInput.classList.remove("false");
      UserFirstInput.classList.remove("true");
      textFirst.classList.remove("active");

      UserLastInput.classList.remove("false");
      UserLastInput.classList.remove("true");
      textLast.classList.remove("active");

      UserPhoneInput.classList.remove("false");
      UserPhoneInput.classList.remove("true");
      textPhone.classList.remove("active");

      EmailInput.classList.remove("false");
      EmailInput.classList.remove("true");
      textEmail.classList.remove("active");

      password.classList.remove("false");
      password.classList.remove("true");
      textPass.classList.remove("active");

      Crossword.classList.remove("false");
      Crossword.classList.remove("true");
      textCrossword.classList.remove("active");
    }
  };
};

let eyeIconOne = document.querySelectorAll(
  ".formTwo .eyeOff"
)[0] as HTMLElement;
let eyeIconTwo = document.querySelectorAll(
  ".formTwo .eyeOff"
)[1] as HTMLElement;

let iconFunction = function () {
  eyeIconOne.addEventListener("click", function () {
    if (eyeIconOne.getAttribute("name") === "eye-off-outline") {
      eyeIconOne.setAttribute("name", "eye-outline");
      password.type = "text";
    } else {
      eyeIconOne.setAttribute("name", "eye-off-outline");
      password.type = "Password";
    }
  });

  eyeIconTwo.addEventListener("click", function () {
    if (eyeIconTwo.getAttribute("name") === "eye-off-outline") {
      eyeIconTwo.setAttribute("name", "eye-outline");
      Crossword.type = "text";
    } else {
      eyeIconTwo.setAttribute("name", "eye-off-outline");
      Crossword.type = "Password";
    }
  });
};

export { SignValid, KeyUpFunc, iconFunction };
