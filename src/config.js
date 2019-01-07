const dev = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-1tcgkvjh8zv5z"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://9mjd4roqe0.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_4k3yJaVE6",
        APP_CLIENT_ID: "2c74pq0ds0ps7o4he3jalttgd5",
        IDENTITY_POOL_ID: "us-east-1:4aa7dd88-0d8b-4e10-b9d3-756361a8fde9"
    },
    STRIPE_KEY: "pk_test_RTk307ZF4K6ofM1na7x6IWMY",
};

const prod = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-u4uzp5n7n5s8"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://vaien8ovz7.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_qwaESmRhf",
        APP_CLIENT_ID: "uiid08eu06jo9kbi7rb7jp3n3",
        IDENTITY_POOL_ID: "us-east-1:221137ae-bf8e-4e9e-8cde-0b1d0b1b0124"
    },
    STRIPE_KEY: "pk_test_RTk307ZF4K6ofM1na7x6IWMY",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};