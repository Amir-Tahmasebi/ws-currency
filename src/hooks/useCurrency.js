import { useState } from "react";

export function useCurrency() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const ws = new WebSocket("wss://ws.kraken.com");
  const apiCall = {
    event: "subscribe",
    pair: ["XBT/USD", "XBT/EUR", "ADA/USD"],
    subscription: { name: "ticker" },
  };

  ws.onopen = () => {
    ws.send(JSON.stringify(apiCall));
  };

  ws.onmessage = (event) => {
    const res = JSON.parse(event.data);
    try {
      if ((res.event = "data")) {
        const payload = res.slice(0, 5);
        setData((prev) => ({ ...prev, [payload[3]]: payload }));
        setLoading(false);
        console.log(payload);
      }
    } catch (error) {}
  };
  return { data, loading };
}
