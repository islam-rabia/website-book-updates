let EmailDisabled = document.querySelector(".formOne .Email input");
let passwordDisabled = document.querySelector(".formOne .password input");
let UserFirstInput = document.querySelector(".first input");
let UserLastInput = document.querySelector(".last input");
let UserPhoneInput = document.querySelector(".Phone input");
let EmailInput = document.querySelector(".formTwo .Email input");
let password = document.querySelector(".formTwo .password input");
let Crossword = document.querySelector(".formTwo .Crossword input");
let submit = document.querySelector(".formOne .submit");
let sub = document.querySelector(".formTwo .sub");
let OpenFormOne = document.querySelector(".formOne .btn-form div");
let OpenFormTwo = document.querySelector(".formTwo .btn-form div");
let massageForm = document.querySelector(".massageForm");
let divPass = document.querySelector(".divPass ion-icon");
let iconOpen = document.querySelector(".Email .icon-email");
let iconOpenTwo = document.querySelector(".password .icon-password");
let iconUserFirst = document.querySelector(".first .icon-first");
let iconUserLast = document.querySelector(".last .icon-last");
let iconUserPhone = document.querySelector(".Phone .icon-phone");
let iconUserEmail = document.querySelector(".Insert .Email .icon-email");
let iconUserPassword = document.querySelector(".formTwo .icon-password");
let iconUserCrossword = document.querySelector(".formTwo .icon-crossword");
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
