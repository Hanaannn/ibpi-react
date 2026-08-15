export default function MarqueeRow({ items, renderItem }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-16 motion-reduce:animate-none">
        {doubled.map((item, index) => (
          <div key={`${item.id}-${index}`} className="shrink-0">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
