import { NextResponse } from "next/server";

type WaitlistBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  role?: string;
  industry?: string;
  agents?: string;
  notes?: string;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(request: Request) {
  let body: WaitlistBody;
  try {
    body = (await request.json()) as WaitlistBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const missing = (["firstName", "lastName", "email", "company", "role", "industry"] as const).filter(
    (key) => !body[key] || String(body[key]).trim().length === 0,
  );
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(String(body.email))) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  console.info("[waitlist] new submission", {
    email: body.email,
    company: body.company,
    role: body.role,
    industry: body.industry,
    agents: body.agents,
  });

  return NextResponse.json({ ok: true });
}
