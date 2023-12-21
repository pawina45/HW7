

// โจทย์ : ให้สร้างฟังก์ชั่นเพื่อ validate(ตรวจสอบ) ค่าที่ submit จาก form
// 1. ทุก input ต้องไม่เป็นค่าว่างหรือ ใส่ space มาล้วนๆ
// 2. username ความยาวต้องมากกว่า 3 ตัวอักษร
//      - ตัด space หน้า-หลัง
//      (option) - และไม่มี space คั่นกลาง
//      - ห้ามนำหน้าด้วยตัวเลข
// 3. password ความยาวต้องมากกว่า 4 ตัวอักษร
//      (option) - ต้องมีทั้งตัวเลขและตัวอักษร
// ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
// ถ้า validate ผ่านให้ไปที่ https://www.example.com
// หรือ
// ถ้า validate ผ่านให้ไปทำการ login โดยตรวจสอบ username, password
// กับ array แบบที่เคยทำตอนโจทย์ javascript แล้วแจ้ง login successful


const loginForm = document.querySelector(".login-form");

const validateInput = (inputObj) => {
  resetErrorStyles();

  const username = inputObj.username.trim();
  if (username.length <= 3 || /^\d/.test(username) || /\s/.test(username)) {
    markInputAsInvalid("username", "Invalid username");
    return;
  }

  const password = inputObj.password.trim();
  if (password.length <= 4 || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
    markInputAsInvalid("password", "Invalid password");
    return;
  }
  window.location.href = "https://www.example.com";
};

const markInputAsInvalid = (inputId, errorMessage) => {
  const inputElement = document.getElementById(inputId);
  inputElement.classList.add("error");

  const errorElement = document.getElementById(`${inputId}Error`);
  errorElement.textContent = errorMessage;
};

const resetErrorStyles = () => {
  const inputElements = loginForm.querySelectorAll("input, select");
  inputElements.forEach((el) => {
    el.classList.remove("error");
  });

  const errorElements = loginForm.querySelectorAll(".error-message");
  errorElements.forEach((el) => {
    el.textContent = "";
  });
};

const handleLogin = (e) => {
  e.preventDefault();
  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener("submit", handleLogin);
