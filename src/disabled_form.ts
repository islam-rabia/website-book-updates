let EmailDisabled = document.querySelector(
  ".formOne .Email input"
) as HTMLInputElement;
let passwordDisabled = document.querySelector(
  ".formOne .password input"
) as HTMLInputElement;

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

let submit = document.querySelector(".formOne .submit") as HTMLInputElement;
let sub = document.querySelector(".formTwo .sub") as HTMLInputElement;

let OpenFormOne = document.querySelector(
  ".formOne .btn-form div"
) as HTMLElement;
let OpenFormTwo = document.querySelector(
  ".formTwo .btn-form div"
) as HTMLElement;

let massageForm = document.querySelector(".massageForm") as HTMLElement;
let divPass = document.querySelector(".divPass ion-icon") as HTMLElement;
let iconOpen = document.querySelector(".Email .icon-email") as HTMLElement;
let iconOpenTwo = document.querySelector(
  ".password .icon-password"
) as HTMLElement;

let iconUserFirst = document.querySelector(".first .icon-first") as HTMLElement;
let iconUserLast = document.querySelector(".last .icon-last") as HTMLElement;
let iconUserPhone = document.querySelector(".Phone .icon-phone") as HTMLElement;
let iconUserEmail = document.querySelector(
  ".Insert .Email .icon-email"
) as HTMLElement;
let iconUserPassword = document.querySelector(
  ".formTwo .icon-password"
) as HTMLElement;
let iconUserCrossword = document.querySelector(
  ".formTwo .icon-crossword"
) as HTMLElement;

let disabledForm = function () {
  OpenFormOne.addEventListener("click", function () {
    EmailDisabled.removeAttribute("disabled");
    passwordDisabled.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    divPass.removeAttribute("disabled");
    massageForm.classList.add("active");

    submit.style.cssText =
      " \
    background-color: #4960d4; \
    cursor: pointer; \
    ";

    submit.classList.add("sub");
    setTimeout(function () {
      massageForm.classList.remove("active");
    }, 1000);

    OpenFormOne.style.display = "none";

    iconOpen.classList.add("active");
    iconOpen.setAttribute("name", "lock-open-outline");

    iconOpenTwo.classList.add("active");
    iconOpenTwo.setAttribute("name", "lock-open-outline");
  });

  OpenFormTwo.addEventListener("click", function () {
    UserFirstInput.removeAttribute("disabled");
    UserLastInput.removeAttribute("disabled");
    UserPhoneInput.removeAttribute("disabled");
    EmailInput.removeAttribute("disabled");
    password.removeAttribute("disabled");
    Crossword.removeAttribute("disabled");

    massageForm.classList.add("active");
    setTimeout(function () {
      massageForm.classList.remove("active");
    }, 1000);

    sub.style.cssText =
      " \
    background-color: #4960d4; \
    cursor: pointer; \
    ";

    sub.classList.add("submit");
    sub.removeAttribute("disabled");
    OpenFormTwo.style.display = "none";

    iconUserFirst.classList.add("active");
    iconUserLast.classList.add("active");
    iconUserPhone.classList.add("active");
    iconUserEmail.classList.add("active");
    iconUserPassword.classList.add("active");
    iconUserCrossword.classList.add("active");

    iconUserFirst.setAttribute("name", "lock-open-outline");
    iconUserLast.setAttribute("name", "lock-open-outline");
    iconUserPhone.setAttribute("name", "lock-open-outline");
    iconUserEmail.setAttribute("name", "lock-open-outline");
    iconUserPassword.setAttribute("name", "lock-open-outline");
    iconUserCrossword.setAttribute("name", "lock-open-outline");
  });
};

export { disabledForm };
