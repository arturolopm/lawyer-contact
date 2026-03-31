"use server";

import { randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { redirect } from "next/navigation";

function getText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function submitConsultation(formData: FormData) {
  const honeypot = getText(formData, "company");

  if (honeypot) {
    redirect("/?sent=1#agenda");
  }

  const submission = {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    fullName: getText(formData, "fullName"),
    phone: getText(formData, "phone"),
    email: getText(formData, "email"),
    city: getText(formData, "city"),
    service: getText(formData, "service"),
    preferredWindow: getText(formData, "preferredWindow"),
    contactPreference: getText(formData, "contactPreference"),
    summary: getText(formData, "summary"),
  };

  if (!submission.fullName || !submission.phone || !submission.service || !submission.summary) {
    redirect("/?sent=invalid#agenda");
  }

  const storageDirectory = path.join(process.cwd(), "storage");
  const storageFile = path.join(storageDirectory, "intake-requests.jsonl");

  await mkdir(storageDirectory, { recursive: true });
  await appendFile(storageFile, `${JSON.stringify(submission)}\n`, "utf8");

  redirect("/?sent=1#agenda");
}
