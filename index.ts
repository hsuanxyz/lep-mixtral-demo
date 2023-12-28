import { OpenAI } from 'langchain/llms/openai'

const LEPTON_API_TOKEN = process.env.LEPTON_API_TOKEN;

const llm = new OpenAI({
  temperature: 0,
  openAIApiKey: LEPTON_API_TOKEN,
  configuration: {
    baseURL: 'https://mixtral-8x7b.lepton.run/api/v1/',
  },
}).bind({
  stop: ['\nObservation'],
})

const messages =  "<s>What would be a good company name for a company that makes colorful socks?".repeat(500)

llm.invoke(messages).then((res) => {
  console.log(res)
})
