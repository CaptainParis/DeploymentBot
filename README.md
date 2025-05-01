# Deployment Bot
Deployment Bot simplifies the process of creating, managing, and executing deployments in the 101st, handling everything from automated group formation to voice channel management. Designed to maximize efficiency and adaptability, Deployment Bot can sort and manage 500+ people at once for battalion-sized operations.
# Deployment Bot

A Discord bot designed to manage and organize deployments, queues, and voice channels for gaming communities. This bot helps coordinate players, schedule events, and manage team compositions.

# For a Detailed Codebase Summary Please See [Codebase Summary](Codebase%20Summary/index.md)

## Features

### Deployment Management
- Create and manage deployments with detailed information
- Schedule deployments with specific start and end times
- Assign roles to participants (Offense, Mechanized infantry, Support, Defense, Scout)
- Support for primary and backup players
- Automatic notifications for upcoming deployments

### Queue System
- Join queues as a player or host
- Battalion Strike Mode for randomized queue assignments
- Clear queue functionality for administrators
- Real-time queue status updates

### Voice Channel Management
- Automatic creation of voice channels for deployments
- Dynamic voice channel management based on activity
- Automatic cleanup of unused voice channels

### User Commands
- View your upcoming deployments
- Search for deployments within specific time ranges
- Submit bug reports through an integrated form
- Join or leave deployments with simple button interactions

### Administrative Tools
- Remove users from deployments
- Toggle Battalion Strike Mode
- Set deployment time intervals
- Clear queues
- Send deployment and queue panels

## Setup Instructions

### Prerequisites
- Node.js (v16.x or higher)
- MySQL database
- Discord Bot Token

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/CaptainParis/DeploymentBot.git
   cd DeploymentBot
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the bot:
    - Fill in your Discord bot token, database credentials, and other required settings

4. Set up the database:
    - Create a MySQL database
    - Update the database configuration in `config.ts`
    - The tables will be automatically created when the bot starts with `resetDatabase: true`

5. Build the TypeScript code:
   ```
   npm run build
   ```

6. Start the bot:
   ```
   npm start
   ```

## Configuration

Edit the `config.ts` file to customize the bot's behavior:

```typescript
export default {
    token: "YOUR_DISCORD_BOT_TOKEN",
    prefix: "-",
    debugMode: true,
    resetCommands: false,
    synchronizeCommands: true,
    resetDatabase: true, // Set to true only for first run
    synchronizeDatabase: false,
    database: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "username",
        password: "password",
        database: "deployment_bot"
    },
    // Other configuration options...
}
```

### Important Configuration Options

- `token`: Your Discord bot token from the Discord Developer Portal
- `prefix`: Command prefix for text commands
- `resetDatabase`: Set to `true` for first run only, then set to `false`
- `verifiedRoleId`: ID of the role required for most user commands
- `guildId`: ID of your Discord server
- `departureChannel`: ID of the channel where deployment notifications are sent
- `bugReportChannelId`: ID of the channel where bug reports are sent
- `vcCategory`: ID of the category where voice channels will be created
- `hostRole`: ID of the role assigned to deployment hosts
- `blacklistedRoles`: Array of role IDs that cannot use certain commands

## Commands

### User Commands

| Command | Description |
|---------|-------------|
| `/deployments` | Lists your upcoming deployments |
| `/deploymentsearch` | Search for deployments within a specific time range |
| `/bugreport` | Submit a bug report |

### Administrative Commands

| Command | Description |
|---------|-------------|
| `/panel` | Send the deployment panel |
| `/queue-panel` | Send the queue panel |
| `/remove` | Remove a user from a deployment |
| `/togglestrikemode` | Toggle Battalion Strike Mode |
| `/set-deployment-time` | Set the deployment time interval |
| `/clear-queue` | Clear the queue |

## Button Interactions

The bot uses button interactions for many functions:
- Join/Leave deployments
- Join queue as player/host
- Create new deployments

## Database Structure

The bot uses several database tables to store information:

- `Deployment`: Stores deployment details
- `Signups`: Tracks primary player signups
- `Backups`: Tracks backup player signups
- `Queue`: Manages the queue system
- `VoiceChannel`: Tracks created voice channels
- `QueueStatusMsg`: Tracks queue status messages
- `LatestInput`: Stores the latest input from users
- `StrikeCategory`: Manages Battalion Strike categories

## Troubleshooting

### Common Issues

1. **Bot doesn't start**
    - Check if your token is correct
    - Ensure your database credentials are correct
    - Check console for error messages

2. **Commands not registering**
    - Set `resetCommands` and `synchronizeCommands` to `true` in config
    - Restart the bot

3. **Database errors**
    - Ensure your MySQL server is running
    - Check database credentials
    - Set `resetDatabase` to `true` for first run only

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


# License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).
