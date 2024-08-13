export const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'username':
        const usernameRegex = /^[a-zA-Z ]{3,30}$/;
        if (!usernameRegex.test(value)) {
          return { errorMsg: "Please enter a valid username (3-30 characters)", valid: false };
        }
        break;
  
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return { errorMsg: "Please enter a valid email address", valid: false };
        }
        break;
  
      case 'password':
        if (value.length < 8) {
          return { errorMsg: "Password must be at least 8 characters long", valid: false };
        }
        break;
  
      case 'confirmPassword':
        // logic to compare passwords
        break;
  
      case 'phoneNumber':
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) {
          return { errorMsg: "Please enter a valid 10-digit phone number", valid: false };
        }
        break;
  
      default:
        return { valid: true };
    }
    return { valid: true };
  };