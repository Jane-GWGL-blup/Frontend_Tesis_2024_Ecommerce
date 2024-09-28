// api.js no vale
export const fakeApiCallToSendResetEmail = (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Email sent to ${email}`);
        resolve();
      }, 1000);
    });
  };
  
  export const fakeApiCallToResetPassword = (password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Password reset to ${password}`);
        resolve();
      }, 1000);
    });
  };
  