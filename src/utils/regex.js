export function isValidName(name) {
    const nameRegex = /^[a-zA-ZəöğüıİƏÖĞÜÇŞçş]{2,50}$/u;
    return nameRegex.test(name);
  }
  
  export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  export function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  
    return passwordRegex.test(password);
  }