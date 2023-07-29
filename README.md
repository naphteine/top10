# Top Ten App

This is a web app developed using Next.js, Tailwind and OpenAI, that generates a top ten list using OpenAI, on the topic user provided.

# Getting Started

You can try the demo [here]("https://top10-gg.vercel.app").

To run the code yourself;

1. Clone the repo: `git clone https://github.com/naphteine/top10.git`
2. Navigate to directory: `cd top10`
3. Install modules: `yarn install`
4. Get OpenAI API key and write it in the `.env` file, like `PRIVATE_OPENAI_KEY=12345678987654321`
5. Run the development server: `yarn run dev`

# Features

- Dark mode

# Technologies Used

- Next.js 13 (App Router)
- React
- React-Markdown
- Tailwind and Typography
- OpenAI API
- Vercel AI SDK

# Problems

- Sometimes OpenAI doesn't respond with proper Markdown, which leads to items using the same line.

# Resources Used

- https://sdk.vercel.ai/docs/api-reference/use-chat
- https://platform.openai.com/

# License

This project is under [MIT License](./LICENSE).
