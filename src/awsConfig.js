import { Auth } from "aws-amplify";

// Configure AWS Amplify
Auth.configure({
  region: "ap-south-1", // e.g., "us-east-1"
  userPoolId: "ap-south-1_IKwL6GBRT", // Replace with your User Pool ID
  userPoolWebClientId: "9lo105al4kku0b5ee8cta75he", // Replace with your App Client ID
  oauth: {
    domain: "https://ap-south-1ikwl6gbrt.auth.ap-south-1.amazoncognito.com", // Replace with your Cognito domain
    redirectSignIn: "https://7r70hx8lof.execute-api.ap-south-1.amazonaws.com/prod", // Replace with your website's callback URL
   // redirectSignOut: "https://<your-signout-url>", // Replace with your website's sign-out URL
    responseType: "code", // Use "code" for Authorization Code Grant flow
  },
});
