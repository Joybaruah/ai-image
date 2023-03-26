import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
    organization: process.env.ORG,
    apiKey: process.env.KEY
})

const openAi = new OpenAIApi(config)

export default openAi;