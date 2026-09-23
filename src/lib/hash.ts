import { MODULES_DEF } from "@/lib/modules";

const MODULE_IDS = new Set(MODULES_DEF.map((m) => m.id));

export function parseModuleHash(hash: string): string | null {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id || !MODULE_IDS.has(id)) return null;
  return id;
}

export function moduleUrl(id: string | null): string {
  const path = `${window.location.pathname}${window.location.search}`;
  return id ? `${path}#${id}` : path;
}
