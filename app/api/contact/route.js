// Contact box -> email via Resend REST API (no SDK; plain fetch).
// Env (.env.local): RESEND_API_KEY, CONTACT_TO_EMAIL, optional CONTACT_FROM.
// RULES.md §3: this is the site's only contact channel. No phone field exists.

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const FIELDS = [
  ["name", "Name", 120],
  ["email", "Email", 200],
  ["company", "Company", 140],
  ["service", "Service", 140],
  ["message", "Message", 4000],
];

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export async function POST(req) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM || "Crown Peak Global <onboarding@resend.dev>";
  if (!apiKey || !to) {
    return Response.json({ success: false, message: "Email is not configured on the server." }, { status: 500 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  // Validate + clamp at the trust boundary; ignore anything not in FIELDS.
  const clean = {};
  for (const [key, , max] of FIELDS) {
    clean[key] = String(body?.[key] ?? "").trim().slice(0, max);
  }
  if (!clean.name || !clean.message || !isEmail(clean.email)) {
    return Response.json(
      { success: false, message: "Please add your name, a valid email and a message." },
      { status: 400 }
    );
  }

  const rows = FIELDS.filter(([k]) => clean[k]).map(
    ([k, label]) =>
      `<tr><td style="padding:6px 14px 6px 0;font-weight:700;vertical-align:top">${label}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(
        clean[k]
      )}</td></tr>`
  );

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: clean.email,
      subject: `New enquiry from ${clean.name} — Crown Peak Global`,
      html: `<h2 style="font-family:Arial,sans-serif">New website enquiry</h2><table style="font-family:Arial,sans-serif;font-size:14px">${rows.join(
        ""
      )}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return Response.json({ success: false, message: "Could not send right now. Please try again." }, { status: 502 });
  }
  return Response.json({ success: true });
}
