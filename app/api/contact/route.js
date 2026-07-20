// Contact form -> email via Resend REST API (no SDK; plain fetch).
// Env (.env.local): RESEND_API_KEY, CONTACT_TO_EMAIL, optional CONTACT_FROM.
// ponytail: one route handles both forms; fields are emailed generically.

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const LABELS = {
  fname: "Name", em: "Email", pn: "Phone", represent: "Represents",
  hlp: "Help with", financial: "Type", startproject: "Start date",
  hearaboutus: "Heard via", interest: "Interest", help: "Message",
};

export async function POST(req) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM || "Crown Peak Global <onboarding@resend.dev>";
  if (!apiKey || !to) {
    return Response.json({ success: false, message: "Email not configured on server." }, { status: 500 });
  }

  let form;
  try {
    form = await req.formData();
  } catch {
    return Response.json({ success: false, message: "Invalid form data." }, { status: 400 });
  }

  const rows = [];
  let name = "", email = "";
  for (const [k, v] of form.entries()) {
    if (k === "submit" || !String(v).trim()) continue;
    if (k === "fname") name = String(v);
    if (k === "em") email = String(v);
    rows.push(`<tr><td style="padding:4px 12px 4px 0;font-weight:700">${esc(LABELS[k] || k)}</td><td style="padding:4px 0">${esc(v)}</td></tr>`);
  }
  if (!rows.length) {
    return Response.json({ success: false, message: "Empty submission." }, { status: 400 });
  }

  const html = `<h2>New website enquiry</h2><table style="font-family:Arial,sans-serif;font-size:14px">${rows.join("")}</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email || undefined,
      subject: `New enquiry${name ? ` from ${name}` : ""} — Crown Peak Global`,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error", res.status, detail);
    return Response.json({ success: false, message: "Could not send. Try again later." }, { status: 502 });
  }
  return Response.json({ success: true });
}
