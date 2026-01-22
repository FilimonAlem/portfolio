const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL is not defined. Make sure it exists in your .env file and the dev server has been restarted.");
}

export async function sendMessage(data: { name: string; email: string; message: string }) {
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // Try to parse JSON if possible, fallback to text
    let responseData;
    try {
      responseData = await res.json();
    } catch {
      responseData = await res.text();
    }

    if (!res.ok) {
      throw new Error(
        typeof responseData === "string"
          ? responseData
          : responseData?.error || "Failed to send message"
      );
    }

    return responseData;
  } catch (err: any) {
    console.error("Error sending message:", err);
    throw new Error(err.message || "Something went wrong while sending the message.");
  }
}
