export const getInitials = (name: string | undefined | null): string => {
  if(!name || !name.trim()) return "?"
    
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 0) return "?";

  const firstInitial = parts[0][0];
  const lastInitial = parts.length > 1 ? parts[parts.length - 1][0] : "";

  return (firstInitial + lastInitial).toUpperCase();
};