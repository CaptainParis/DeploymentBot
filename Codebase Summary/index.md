# Tutorial: Deployment-bot

This project is a **Discord bot** designed to help manage game sessions for a community.
It allows users to schedule and sign up for planned events called *Deployments*.
It also features a *Queue System* for organizing players wanting to join spontaneous "Hot Drop" or "Strike" games, automatically forming groups and creating voice channels when ready.
Users interact with the bot primarily through **slash commands** and **buttons**.


**Source Repository:** [https://github.com/CaptainParis/Deployment-bot](https://github.com/CaptainParis/DeploymentBot)

```mermaid
flowchart TD
    A0["Interaction Abstraction Classes"]
    A1["Handlers (Loading & Routing)"]
    A2["Event Handling System"]
    A3["Deployment Management"]
    A4["Queue Management"]
    A5["Database Entities (TypeORM)"]
    A6["Client (CustomClient)"]
    A7["Embed Builders"]
    A8["Configuration (`config.ts`)"]
    A1 -- "Loads Definitions" --> A0
    A1 -- "Loads Definitions" --> A2
    A1 -- "Populates Collections" --> A6
    A2 -- "Routes Events To" --> A0
    A2 -- "Manages Lifecycle" --> A3
    A2 -- "Manages Lifecycle/VCs" --> A4
    A0 -- "Manages Data" --> A3
    A0 -- "Manages Data" --> A4
    A0 -- "Modifies Data Via" --> A5
    A0 -- "Uses For Responses" --> A7
    A0 -- "Uses Settings From" --> A8
    A3 -- "Uses For Storage" --> A5
    A4 -- "Uses For Storage" --> A5
    A3 -- "Uses For Display" --> A7
    A4 -- "Uses For Display" --> A7
    A7 -- "Uses Presets From" --> A8
    A6 -- "Emits Events To" --> A2
    A6 -- "Provides State" --> A4
    A6 -- "Uses Settings From" --> A8
```

## Chapters

1. [Client (CustomClient)](01_client__customclient_.md)
2. [Event Handling System](02_event_handling_system.md)
3. [Handlers (Loading & Routing)](03_handlers__loading___routing_.md)
4. [Interaction Abstraction Classes](04_interaction_abstraction_classes.md)
5. [Deployment Management](05_deployment_management.md)
6. [Queue Management](06_queue_management.md)
7. [Database Entities (TypeORM)](07_database_entities__typeorm_.md)
8. [Embed Builders](08_embed_builders.md)
9. [Configuration (`config.ts`)](09_configuration___config_ts__.md)


---

