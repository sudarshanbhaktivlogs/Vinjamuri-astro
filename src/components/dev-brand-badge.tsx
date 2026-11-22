export function DevBrandBadge() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
 <div
  role="img"
  aria-label="Vinjamuri Astrology development preview"
  className="fixed bottom-4 left-4 z- flex h-11 w-11 select-none items-center justify-center rounded-full border-2 border-amber-300 bg-amber-400 text-lg font-bold text-amber-950 shadow-[0_8px_25px_rgba(245,158,11,0.35)]"
>
  ॐ
</div>
  );
}
