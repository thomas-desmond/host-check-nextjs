# Next.js Every Feature App

This app was built to test features of Next.js on different hosting providers. The app uses the Pages based architecture of Next.js

The following features of Next.js are tested:
- getStaticProps()
- getServerSideProps()
- Image Optimization
- Incremental Static Regeneration (ISR)
- On Demand ISR
- API Routes 
- Middleware Redirects
- Edge Runtime
- Dynamic Routes
- next.config.js Redirects
- Sub-Path Internationalization
- Sitecore JSS Image Optimization

### Tested Platforms

- Vercel
    - [Video](https://youtu.be/ZlF_2Xhn5fM)
- Azure Static Web Apps
    - [Video](https://youtu.be/XS0Ihz267_I)
    - [Article](https://www.thetombomb.com/posts/azure-swa-nextjs-pages)
- AWS Amplify
    - [Video](https://youtu.be/jQBvdLeKqSE)
    - [Article](https://www.thetombomb.com/posts/aws-amplify-nextjs-pages)
    


### Automated Testing with Cypress

The application has a series of Cypress E2E tests that are used to automatically test all the features listed above. To run the tests peform the following steps.
1. Change the `url` variable in the `cypress.config.ts` file to point at the URL you want to test
2. Run `npm run cypress:open` to open the cypress test console
3. Select "E2E Tests"
4. Choose Browser - I choose Chrome
5. Run all the specs and see what passes or fails