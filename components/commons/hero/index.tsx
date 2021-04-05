type Props = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: Props) {
  return (
    <section>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
        {title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-16">{description}</p>
    </section>
  );
}
