// app/api/chat/route.ts

import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

const apiConfig = new Configuration({
  apiKey: process.env.PRIVATE_OPENAI_KEY!,
})

const openai = new OpenAIApi(apiConfig)

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        "role": "system",
        "content": "You will be provided with text topic, and your task is to generate Top 10 best list of given topic in HTML. Do your best to keep it short, without explanations. Always include \"Your Mom\" on top of the list, number one."
      },
      {
        "role": "user",
        "content": "Anime"
      },
      {
        "role": "assistant",
        "content": "Your Mom's Top 10 Favorite Anime\n\n1. Attack on Titan\n2. Death Note\n3. Fullmetal Alchemist: Brotherhood\n4. One Piece\n5. Naruto\n6. My Hero Academia\n7. Demon Slayer: Kimetsu no Yaiba\n8. Code Geass\n9. Hunter x Hunter\n10. Steins;Gate"
      }, ...messages
    ],
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}
