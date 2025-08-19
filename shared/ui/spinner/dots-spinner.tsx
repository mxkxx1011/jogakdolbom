export function DotsSpinner({ label = '로딩 중' }: { label?: string }) {
  return (
    <span aria-live='polite' aria-label={label} className='inline-flex gap-2'>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className='size-4 rounded-full bg-main-green-700 animate-bounce'
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}
