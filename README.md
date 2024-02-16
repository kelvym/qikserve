# QikServe challenge - Kelvym Miranda

Thanks for the opportunity. Sorry, I couldn't complete everything on Figma, and I left some technical gaps. I had other interview tests this week, so I tried to make the best possible hitting the project's main features.

About the project, I chose the following tools:

- `Next.js` - Excellent to run React with a good performance. Server components are great for improving SEO and time to see the first content of the website;
- `Jest`/`Prettier`/`Eslint` - Test runner, Formatter, and linter;
- `Typescript`/`Zod` - Type check to runtime and build time. I chose to keep the code more safe;
- `React-query` - Async state management. Controlling request API data is easier with this library, and some features fit well with the project:
  - Cache - The request API to bring the company data can have an extended period cache because it doesn't update often;
  - Update data automatically - Products' data can often change while users use the application. With React-query, we can update the data without the user needing to refresh all the pages or create a complex refresh logic inside the code.
- `Zustand` - State managment. It is a great solution to keep the state management easy to create and maintain and is much more performative and smaller than Redux or context API;
- `next-intl` - i18n. Easy to implement, use, and test.
- `Tailwindcss` - CSS framework. Tailwindcss is excellent for speeding up the style building and bringing a design system to the project;
- `Shadn-ui` - Ready-made components. I created components from the "shadn-ui" to save time building UI components. Even if the project has a design system or not, this reduces the development time.
- `Husky` - Run scripts automatically with git commands. I installed this to help the devs to be aware of problems in their script before uploading to the remote repository;
- `GitHub Actions` - CI/CD. Validation in Pull Request is crucial to keep the project working well.

## More about the project

### i18n

The texts are being translated with next-intl using the folder "messages". Each language has a specific list of texts.
The next.js config is built to automatically handle the user's location, redirecting to the locale path based on the user browser:(qikserve.com/en | qikserve.com/pt-br).

### Code Healthy

To keep everything always tested and well formatted, create a new git commit that will fire tests that will block this creation if something is wrong.
The developer can bypass this process, or this can fail somehow, so the CI/CD is there to protect the repository. GitHub Actions will trigger a test process in each Pull Request targeted to the main branch.

### Performance

![Performance](/public/readme-perfomance.png)

## Things to improve

- git commits with better description;
- Some components could be smaller;
- Keep more parts in server components to improve performance;
- More linter/formatter's rules;
- Handles to errors.

## Getting Started

Install dependencies:

```bash
npm ci # install dependencies
npm run dev # run the project in development mode
```

## CLI commands

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm run build
npm run start
```

Linter/formatter/Test:

```bash
npm run lint
npm run format
npm run test
```
