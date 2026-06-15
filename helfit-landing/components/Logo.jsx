export default function Logo({ size = 32, showText = true }) {
  return (
    <a href="/" className="flex items-center gap-2.5 select-none">
      <img
        src="/uygulama_simgesi.png"
        alt="Helfit"
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: 'contain', borderRadius: 8, flexShrink: 0 }}
      />
      {showText && (
        <span
          className="font-black tracking-tight"
          style={{ fontSize: size * 0.6, lineHeight: 1 }}
        >
          <span className="text-brand">Helfit</span>
        </span>
      )}
    </a>
  )
}
