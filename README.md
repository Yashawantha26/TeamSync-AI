# 🚀 TeamSync AI

### One Workspace. One Team. Smarter Collaboration.

<p align="center">
  <img src="https://img.shields.io/badge/AI-Powered-blueviolet?style=for-the-badge" alt="AI Powered">
  <img src="https://img.shields.io/badge/Next.js-Framework-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-Language-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Status-Under_Development-orange?style=for-the-badge" alt="Project Status">
</p>

<p align="center">
  <b>Transform conversations into meaningful actions with AI-powered teamwork.</b>
</p>

---

## 💡 About the Project

**TeamSync AI** is an AI-powered workspace collaboration platform designed to help teams communicate, organize ideas, and manage tasks more efficiently.

In today's fast-paced world, important decisions, meeting discussions, and action items often get lost in long conversations. TeamSync AI aims to solve this problem by turning meeting transcripts and team discussions into structured summaries, suggested action items, and organized tasks.

Our goal is simple: **less time managing conversations, more time building solutions.**

Developed as an innovative solution for **CODOTHON 2026**, organized under Technovate by the Department of Computer Science and Engineering at Rajeev Institute of Technology, Hassan.

## 🎯 Problem Statement

Teams often face challenges such as:

* 🗣️ Long conversations that are difficult to review.
* 📝 Important decisions getting lost in discussions.
* ⏳ Time-consuming manual meeting summaries.
* 📌 Difficulty identifying tasks and responsibilities.
* 🤝 Inefficient collaboration between team members.

Traditional collaboration tools help teams communicate, but extracting actionable information from discussions can still require significant manual effort.

## ✨ Our Solution

**TeamSync AI brings conversations, insights, and tasks together in one intelligent workspace.**

The platform is designed to help teams:

* 🤖 **AI-Powered Summaries:** Convert meeting transcripts into concise, structured summaries.
* ✅ **Smart Action Items:** Identify and suggest tasks from meeting discussions.
* 👥 **Team Collaboration:** Organize workspaces and collaborate with team members.
* 🔐 **Role-Based Access:** Support different permissions for users, workspace administrators, and platform administrators.
* ✔️ **Human Approval Workflow:** Allow users to review and approve AI-generated action items before they become tasks.
* 📊 **Organized Task Management:** Keep decisions and follow-up activities structured and accessible.

*Note: Features are planned according to the project implementation; AI processing and integrations may require additional configuration.*

## 🔄 How It Works

```mermaid
flowchart TD
    A["👥 Team Members"] --> B["💬 Meeting Discussion"]
    B --> C["📄 Meeting Transcript"]
    C --> D["🤖 AI Processing"]
    D --> E["📝 Meeting Summary"]
    D --> F["🎯 Suggested Action Items"]
    E --> G["👤 Human Review"]
    F --> G
    G --> H{"Approved?"}
    H -->|Yes| I["✅ Create Tasks"]
    H -->|No| J["✏️ Edit or Reject"]
    J --> G
    I --> K["🚀 Team Execution"]
```

### Workflow Explained

1. **Collaborate:** Team members discuss ideas and project updates.
2. **Capture:** Meeting discussions are provided as text or transcripts.
3. **Analyze:** AI processes the available transcript.
4. **Summarize:** Key points and decisions are organized into a readable summary.
5. **Suggest:** Potential action items are extracted for review.
6. **Approve:** Team members review, edit, approve, or reject the suggestions.
7. **Execute:** Approved tasks help the team move forward with clarity.

## 🛠️ Technology Stack

| Technology     | Purpose                                          |
| -------------- | ------------------------------------------------ |
| Next.js        | Frontend and application framework               |
| TypeScript     | Type-safe JavaScript development                 |
| Tailwind CSS   | Responsive user interface styling                |
| PostgreSQL     | Relational database                              |
| Prisma ORM     | Database access and schema management            |
| Zod            | Data validation                                  |
| AI Integration | Meeting summarization and action-item generation |
| Git & GitHub   | Version control and collaboration                |
| Vercel         | Deployment platform                              |

*The stack represents the project's intended architecture; individual technologies and integrations should be verified against the current implementation.*

## 🏗️ Core Modules

### 1. 👤 User Management

* User accounts and workspace membership.
* Role-based permissions.
* Secure access to workspace resources.

### 2. 🏢 Workspace Management

* Create and organize team workspaces.
* Manage team collaboration.
* Keep project information organized.

### 3. 🧠 AI Meeting Intelligence

* Process meeting transcripts.
* Generate concise summaries.
* Identify potential decisions and action items.

### 4. ✅ Action Item Management

* Review AI-generated suggestions.
* Approve, edit, or reject proposed actions.
* Convert approved suggestions into actionable tasks.

### 5. 🔐 Role-Based Authorization

The planned application supports three roles:

| Role            | Responsibility                                    |
| --------------- | ------------------------------------------------- |
| USER            | Access permitted workspace features and tasks     |
| WORKSPACE_ADMIN | Manage workspace members and workspace activities |
| PLATFORM_ADMIN  | Manage platform-level operations                  |

Actual permissions depend on the implemented authorization rules.

## 🎨 Design Philosophy

TeamSync AI aims to deliver a modern, intuitive collaboration experience with:

* ✨ Modern glassmorphism-inspired UI.
* 📱 Responsive layouts for different screen sizes.
* 🎯 Clear navigation and organized workspaces.
* ⚡ Fast, user-friendly interactions.
* 🧩 Reusable interface components.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following tools:

* [Node.js](https://nodejs.org/)
* [Git](https://git-scm.com/)
* [PostgreSQL](https://www.postgresql.org/)

A package manager such as npm is also required.

### Step 1: Clone the Repository

```bash
git clone https://github.com/Yashawantha26/TeamSync-AI.git
```

### Step 2: Navigate to the Project

```bash
cd TeamSync-AI
```

If the Next.js application is inside the `teamsync-ai` subfolder, run:

```bash
cd teamsync-ai
```

Run `dir` on Windows to confirm that you are in the directory containing `package.json`.

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Configure Environment Variables

Create a `.env` file in the application root directory.

Example configuration:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/teamsync_ai"
```

Replace the example database credentials with your own local PostgreSQL configuration.

If the project uses an AI provider, add its API key using the environment variable name expected by your implementation.

**Security:** Never commit `.env` files, database passwords, or private API keys to GitHub.

### Step 5: Set Up the Database

If Prisma is configured in the project, run the commands appropriate to the installed Prisma version and project schema.

For a project using Prisma migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

### Step 6: Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

**Important:** These commands are a general setup guide. Follow the project's actual folder structure, scripts, database configuration, and Prisma version if they differ.

## 🔮 Future Enhancements

Our vision for TeamSync AI includes:

* 🎙️ Real-time meeting transcription.
* 🌐 Multilingual meeting summaries.
* 📅 Calendar and meeting-platform integrations.
* 🔔 Automated task reminders and notifications.
* 📈 Team productivity analytics.
* 🔗 Integration with external project management tools.
* 🤖 Context-aware AI assistance across workspaces.

These are future possibilities, not claims that all features are currently available.

## 🌍 Impact

TeamSync AI aims to make collaboration more productive by helping teams:

* Reduce the effort required to summarize meetings.
* Keep important decisions accessible.
* Improve task clarity and accountability.
* Reduce the risk of missing follow-up actions.
* Spend more time executing ideas and less time organizing discussions.

## 👨‍💻 Team

**Team Name: TECH TITANS**

Developed for **CODOTHON 2026** at Rajeev Institute of Technology, Hassan.

| Team Member         | Role        |
| ------------------- | ----------- |
| Yashawantha H M     | Team Member |
| Yashwanth Gowda S N | Team Member |

## 🏆 Event Details

* **Event:** CODOTHON – Coding Challenge 2026
* **Institution:** Rajeev Institute of Technology, Hassan
* **Department:** Computer Science and Engineering
* **Organized Under:** Technovate
* **Project:** TeamSync AI
* **Team:** TECH TITANS

## 🔗 Project Links

* **GitHub Repository:** [TeamSync AI](https://github.com/Yashawantha26/TeamSync-AI)
* **Developer GitHub:** [Yashawantha26](https://github.com/Yashawantha26)

## 🤝 Contributing

Contributions, ideas, and feedback are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test your implementation.
5. Submit a pull request.

Please ensure that changes are tested and documented.

## 📜 License

A license has not yet been specified. Add a `LICENSE` file before describing the project as open source under a particular license.

---

<p align="center">
  <b>🚀 TeamSync AI — One Workspace. One Team. Smarter Collaboration.</b>
  <br>
  <i>Turning conversations into actions. Turning teamwork into impact.</i>
</p>

<p align="center">
  Made with ❤️ by <b>TECH TITANS</b>
</p>
