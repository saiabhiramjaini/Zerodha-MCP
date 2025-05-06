import { KiteConnect } from "kiteconnect";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.KITE_API_KEY!;
let accessToken = process.env.KITE_ACCESS_TOKEN!;

const kc = new KiteConnect({ api_key: apiKey });

export async function placeOrder(
  tradingsymbol: string,
  transaction_type: "BUY" | "SELL",
  quantity: number
) {
  try {
    kc.setAccessToken(accessToken);
    const orderResponse = await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol: tradingsymbol,
      transaction_type: transaction_type,
      quantity: quantity,
      order_type: "MARKET",
      product: "CNC",
    });
    
    return orderResponse; 
  } catch (err) {
    throw err; 
  }
}

export async function getPositions() {
  try {
    kc.setAccessToken(accessToken);
    const positions = await kc.getPositions();
    
    return positions;
  } catch (err) {
    return []; 
  }
}