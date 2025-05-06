import { placeOrder } from "./trade";
import {
  McpServer,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

// For buy-stock tool
server.tool(
  "buy-stock", 
  "Buys the stock from zerodha trading account for the given tradingsymbol and quantity to the user. It executes a real order.", 
  {
    tradingsymbol: z.string(),
    quantity: z.number(),
  },
  async ({ tradingsymbol, quantity }) => {
    try {
      const orderResponse = await placeOrder(tradingsymbol, "BUY", quantity);
      
      // Format the response as clean text
      const responseText = `Successfully placed BUY order for ${quantity} shares of ${tradingsymbol}. Order ID: ${orderResponse?.order_id || 'N/A'}`;
      
      return {
        content: [{ type: "text", text: responseText }],
      };
    } catch (error: any) {
      // Return a structured error response
      return {
        content: [{ 
          type: "text", 
          text: `Error placing buy order: ${error.message || 'Unknown error'}` 
        }],
      };
    }
  }
);

// For sell-stock tool
server.tool(
  "sell-stock",
  "Sells the stock from zerodha trading account for the given tradingsymbol and quantity to the user. It executes a real order.",
  {
    tradingsymbol: z.string(),
    quantity: z.number(),
  },
  async ({ tradingsymbol, quantity }) => {
    try {
      const orderResponse = await placeOrder(tradingsymbol, "SELL", quantity);
      
      // Format the response as clean text
      const responseText = `Successfully placed SELL order for ${quantity} shares of ${tradingsymbol}. Order ID: ${orderResponse?.order_id || 'N/A'}`;
      
      return {
        content: [{ type: "text", text: responseText }],
      };
    } catch (error: any) {
      // Return a structured error response
      return {
        content: [{ 
          type: "text", 
          text: `Error placing sell order: ${error.message || 'Unknown error'}` 
        }],
      };
    }
  }
);

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);