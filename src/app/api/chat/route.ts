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
        "content": "You will be provided with a topic, and your task is to generate Top 10 list for that topic. Write your output in proper Markdown. Name the list as \"Top 10\", followed by topic."
      },
      {
        "role": "user",
        "content": "Anime"
      },
      {
        "role": "assistant",
        "content": "# Top 10 Anime\n\n1. Monster\n2. Attack on Titan\n3. Death Note\n4. Naruto\n5. One Piece\n6. Fullmetal Alchemist: Brotherhood\n7. Dragon Ball Z\n8. Hunter x Hunter\n9. Sword Art Online\n10. My Hero Academia"
      },
      {
        "role": "user",
        "content": "Filmler"
      },
      {
        "role": "assistant",
        "content": "# Top 10 Filmler\n\n1. Sans Soleil\n2. The Shawshank Redemption\n3. The Godfather\n4. Pulp Fiction\n5. Fight Club\n6. Inception\n7. The Dark Knight\n8. Forrest Gump\n9. The Matrix\n10. Schindler's List"
      },
      {
        "role": "user",
        "content": "Oyuncak"
      },
      {
        "role": "assistant",
        "content": "# Top 10 Oyuncak\n\n1. Tren seti\n2. Lego\n3. Barbie bebek\n4. Transformers\n5. Yapboz\n6. Araba seti\n7. Bebek evi\n8. Yumuşak oyuncak\n9. Play-Doh\n10. Akıllı robot"
      },
      {
        "role": "user",
        "content": "Dil"
      },
      {
        "role": "assistant",
        "content": "# Top 10 Dil\n\n1. Türkçe\n2. İngilizce\n3. İspanyolca\n4. Fransızca\n5. Almanca\n6. Japonca\n7. İtalyanca\n8. Rusça\n9. Arapça\n10. Mandarin Çincesi"
      },
      ...messages
    ],
    max_tokens: 1024,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}
