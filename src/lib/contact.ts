export const CONTACT_LIMITS = {
  name: 80,
  email: 254,
  message: 2000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: {
  name: string;
  email: string;
  message: string;
}): string | null {
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (!name || !email || !message) return "All fields are required.";
  if (name.length > CONTACT_LIMITS.name) return "Name is too long.";
  if (email.length > CONTACT_LIMITS.email || !EMAIL_RE.test(email)) {
    return "Enter a valid email address.";
  }
  if (message.length > CONTACT_LIMITS.message) return "Message is too long.";
  return null;
}
