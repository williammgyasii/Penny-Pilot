const firebaseErrorMessages: Record<string, string> = {
  "auth/invalid-credential": "Invalid credentials",
  "auth/admin-restricted-operation":
    "This operation is restricted to administrators only.",
  "auth/argument-error": "Invalid argument provided.",
  "auth/app-not-authorized":
    "The app is not authorized to access Firebase Authentication with the provided credentials.",
  "auth/app-not-installed": "The app is not installed on the device.",
  "auth/captcha-check-failed": "The CAPTCHA verification failed.",
  "auth/code-expired": "The verification code has expired.",
  "auth/cordova-not-ready": "Cordova framework is not ready.",
  "auth/cors-unsupported": "This browser is not supported for CORS requests.",
  "auth/credential-already-in-use":
    "This credential is already associated with another user account.",
  "auth/custom-token-mismatch":
    "The custom token does not match the expected audience.",
  "auth/requires-recent-login": "This operation requires a recent login.",
  "auth/dependent-sdk-initialized-before-auth":
    "A dependent SDK was initialized before Firebase Auth.",
  "auth/dynamic-link-not-activated": "Dynamic links are not enabled.",
  "auth/email-already-in-use": "This email is already registered.",
  "auth/expired-action-code": "The action code has expired.",
  "auth/cancelled-popup-request": "A popup request was canceled by the user.",
  "auth/internal-error": "An internal error has occurred. Please try again.",
  "auth/invalid-api-key": "Your API key is invalid.",
  "auth/invalid-user-token":
    "The user's credential is no longer valid. The user must sign in again.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/invalid-password": "The password is invalid.",
  "auth/missing-email": "The email address is missing.",
  "auth/network-request-failed":
    "A network error has occurred. Please check your connection.",
  "auth/no-such-provider": "No provider found for this identifier.",
  "auth/operation-not-allowed": "This operation is not allowed.",
  "auth/timeout": "The operation has timed out. Please try again later.",
  "auth/user-not-found": "No user found for the provided credentials.",
  "auth/weak-password": "Please choose a stronger password.",
  "auth/wrong-password": "The password is incorrect.",
  "auth/account-exists-with-different-credential":
    "An account already exists with a different credential.",
  "auth/too-many-requests": "Too many attempts. Please try again later.",
};

export default firebaseErrorMessages;
