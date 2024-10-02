# top10tinator

This is a web app will generate top 10 lists based on the topic user provided. It's a little OpenAI API test application. Freely use the source code as a reference (although it won't be much helpful).

## Getting Started

~~You can try the demo [here](https://toptentinator.vercel.app/).~~ Update: I'm moving out of OpenAI so demo won't be functioning. I'm keeping it online so you can check what it looks like.

To run the code yourself;

1. Clone the repo: `git clone https://github.com/naphteine/top10.git`
2. Navigate to directory: `cd top10`
3. Install modules: `pnpm i`
4. Get OpenAI API key and write it in the `.env` file, like `PRIVATE_OPENAI_KEY=12345678987654321`
5. Run the development server: `pnpm dev`
6. You can also update dependencies using: `pnpm up -Li`

## Features

- Dark mode

## Technologies Used

- Next.js 14.2.14 (anything 13+ should work)
- React (obviously)
- React-Markdown
- Tailwind and Typography
- OpenAI API
- Vercel AI SDK

## Problems

- Sometimes OpenAI doesn't respond with proper Markdown, which leads to items using the same line.

## Resources Used

- https://sdk.vercel.ai/docs/api-reference/use-chat
- https://platform.openai.com/

## License

This project is under [MIT License](./LICENSE).
