/**
 * Share command metadata from a common spot to be used for both runtime
 * and registration.
 *
 * @see https://discord.com/developers/docs/interactions/application-commands#registering-a-command
 */

const PING_COMMAND = {
  name: "ping",
  description: "Ping pong! I'll respond with pong.",
} as const

const INVITE_COMMAND = {
  name: "invite",
  description: "Get an invite link to add this bot to your server",
} as const


export const commands = {
  ping: PING_COMMAND,
  invite: INVITE_COMMAND,
} as const
