import core from '@actions/core'
import { WebhookClient } from 'discord.js'

async function main() {
  const discordClient = new WebhookClient({
    url: core.getInput('discord_webhook_url')
  })

  await discordClient.send('Hello world!')
}

main().then(() => {
  core.setOutput('result', 'success')
}).catch((err) => {
  core.setFailed(err.message)
  core.setOutput('result', `error: ${err.message}`)
})
