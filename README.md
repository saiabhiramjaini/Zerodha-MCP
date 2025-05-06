
# Zerodha MCP

Zerodha MCP (Model Context Protocol) integrates with the Zerodha Kite API to provide programmatic trading capabilities via conversational tools. This project demonstrates how to build an MCP-compatible agent with tools to **buy** and **sell** stocks in real-time using the Zerodha trading platform.

## Features

* MCP server integration using `@modelcontextprotocol/sdk`
* Tool to **buy stocks** via Zerodha
* Tool to **sell stocks** via Zerodha
* Secure access token generation
* Modular code structure using TypeScript and Bun runtime

## Project Structure

```
zerodha-mcp/
├── README.md
├── getAccessToken.ts       // Used to generate and test the access token
├── index.ts                // Initializes the MCP server and tools
├── package.json
├── trade.ts                // Contains buy/sell order functions
└── tsconfig.json
```

## Getting Started

### Prerequisites

* Node.js alternative: [Bun](https://bun.sh) (v1.2.10 or higher)
* A Zerodha developer account with API key and secret
* A valid request token (refer to the video link below for guidance)

### Installation

Clone the repository:

```bash
git clone https://github.com/saiabhiramjaini/Zerodha-MCP.git
cd Zerodha-MCP
```

Install dependencies using Bun:

```bash
bun install
```

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
KITE_API_KEY=your_kite_api_key
KITE_API_SECRET=your_kite_api_secret
KITE_REQUEST_TOKEN=your_generated_request_token
KITE_ACCESS_TOKEN=your_generated_access_token
```

> To learn how to get your **access token**, refer to this [video guide](https://youtu.be/va_UHmxJgEE)

### Run the MCP Server

```bash
bun run index.ts
```

This will start the MCP server and expose two tools:

* `buy-stock`
* `sell-stock`

## Tools

### 1. buy-stock

Executes a real BUY order on Zerodha.

**Inputs:**

* `tradingsymbol`: string (e.g., "INFY")
* `quantity`: number (e.g., 10)

**Returns:** Confirmation with order ID or an error message.

### 2. sell-stock

Executes a real SELL order on Zerodha.

**Inputs:**

* `tradingsymbol`: string
* `quantity`: number

**Returns:** Confirmation with order ID or an error message.

## Videos

* **How to Get Zerodha Access Token:** [Watch here](https://youtu.be/va_UHmxJgEE)
* **Project Demo:** [Watch here](https://youtu.be/vM4YNmw0oMw)

## Tech Stack

* [Bun](https://bun.sh) - Fast JavaScript runtime
* [TypeScript](https://www.typescriptlang.org/)
* [Zerodha KiteConnect](https://kite.trade/)
* [Model Context Protocol (MCP)](https://modelcontextprotocol.org)
