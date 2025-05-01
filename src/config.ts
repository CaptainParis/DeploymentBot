export default {
    token: "na", // Bot token - you can access it from the Discord Developer Portal: https://discord.com/developers/applications
    prefix: "-",
    debugMode: true,
    resetCommands: false,
    synchronizeCommands: true,
    resetDatabase: true, // Clears out the database on every restart - only enable for the first time
    synchronizeDatabase: false,
    database: {
        type: "mysql",
        host: "na",
        port: 3306,
        username: "na",
        password: "na",
        database: "na"
    },
    satus: { text: "/bugreport"},
    verifiedRoleId: "DISCORD ROLE ID",
    guildId: "DISCORD GUILD ID",
    departureChannel: "DISCORD CHANNEL ID",
    bugReportChannelId: "DISCORD CHANNEL ID",
    vcCategory: "DISCORD CHANNEL ID",
    loggingChannels: ["DISCORD CHANNEL ID", "DISCORD CHANNEL ID"],
    backupEmoji: "<:Backup:1289325583905456251>",
    hostRole: "DISCORD ROLE ID",
    blacklistedRoles: ["DISCORD ROLE ID"],
    queueMaxes: {
        hosts: 50,
        players: 200,
    },
    editEmoji: "🔧",
    roles: [
        {
            name: "Offense",
            emoji: "EMOJI ID"
        },
        {
            name: "Mechanized infantry",
            emoji: "EMOJI ID"
        },
        {
            name: "Support",
            emoji: "EMOJI ID"
        },
        {
            name: "Defence",
            emoji: "EMOJI ID"
        },
        {
            name: "Scout",
            emoji: "EMOJI ID"
        }
    ],
    channels: [
        {
            name: "Battalion - For those who just want to serve anywhere, anytime.",
            emoji: "🏴‍☠️",
            channel: "DISCORD CHANNEL ID"
        },
        {
            name: "EU — Ready to fight across the European front!",
            emoji: "🇪🇺",
            channel: "DISCORD CHANNEL ID"
        },
        {
            name: "NA — North American chaos incoming!",
            emoji: "🇺🇸",
            channel: "DISCORD CHANNEL ID"
        }
    ],

    // dont change these *
    embeds: {
        presets: {
            success: {
                thumbnail: "https://img.icons8.com/bubbles/200/checkmark.png",
            },
            error: {
                title: "Error:",
                thumbnail: "https://img.icons8.com/bubbles/200/error.png",
            },
            loading: {
                thumbnail: "https://img.icons8.com/bubbles/200/loading-bar.png",
            },
            info: {
                thumbnail: "https://img.icons8.com/bubbles/200/info--v1.png",
            }, // end
            default: {
                title: null,
                description: null,
                color: "#00ffff",
                author: {
                    name: null,
                    iconURL: null
                },
                footer: {
                    text: null,
                    iconURL: null
                },
                thumbnail: null,
                image: null,
                timestamp: true
            }
        },
        cooldown: {
            title: "Cooldown",
            description: ":x: **You can use this command again {timestamp}**"
        },
        panel: {
            title: "Create a new deployment",
            description: "You’ve survived this long, so what’s one more chaotic deployment? If you feel bold enough to lead another team into almost-certain disaster, click the button below to open the 'Create Deployment' modal. Remember, there's no backing out and make sure you come back in one piece!",
            color: "#00ffff"
        },
        deploymentsCommand: {
            title: {
                default: "⚠️・Upcoming Deployments・⚠️",
                noDeployments: "⛔┃No Upcoming Deployments"
            },
            footer: {
                text: 'SERVER',
                image: "https://cdn.discordapp.com/attachments/1224638196902531082/1280659026610491485/MOSHED-2024-9-2-22-45-12.gif"
            }
        }
    },
    buttons: {
        newDeployment: {
            label: "New Deployment",
            style: "Primary",
            emoji: "🔔"
        },
        editDeployment: {
            label: "Edit",
            style: "Secondary"
        },
        deleteDeployment: {
            label: "Delete",
            style: "Danger"
        },
        host: {
            label: "Host",
            style: "Success"
        },
        join: {
            label: "Join",
            style: "Success"
        },
        leave: {
            label: "Leave",
            style: "Danger"
        }
    },
    buttonCooldown: 5
}
