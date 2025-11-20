const API_URL = import.meta.env.VITE_API_URL;

export async function sendMessage(data: { name: string; email: string; message: string }) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
}
