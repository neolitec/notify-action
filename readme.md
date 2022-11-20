# Notify Action for GitHub

This action sends a custom Discord message during a workflow.

## Inputs

### `discord_webhook_url`

**Required** Url of Discord webhook

### `title`

**Required** The title of the message

### `message`

**Required** The message

## Example usage

```yaml
uses: neolitec/notify-action@v0.0.1
with:
  - discord_webhook_url: https://discord.com/api/webhooks/[id]/[token]
  - title: Your workflow succeeds!
  - message: The workflow successfully succeeds.
```

### TODO

  - [ ] Slack hooks
