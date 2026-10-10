export default function SectionHeading({ title, description, align = 'center', light = false, id }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <h2 id={id} className={`text-3xl font-extrabold leading-tight sm:text-4xl ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/75' : 'text-navy-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
