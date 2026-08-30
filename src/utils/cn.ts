type ClassValue = string | number | false | null | undefined;

/** Joins truthy class fragments. No conflict resolution — components keep utility usage non-conflicting by design. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
