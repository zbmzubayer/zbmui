// import "@/registry/default/ui/button/button.css";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center gap-2 py-8 text-center">
        <h1 className="text-balance text-4xl xl:text-5xl">Solid foundation for a design system</h1>
        <p>
          ZBMUI is a comprehensive component library and design system built with Base UI and
          Tailwind CSS focusing on accessibility, customization, DX and pixel perfection.
        </p>
        <p className="text-muted-foreground">Open Code for everyone.</p>
      </div>
    </main>
  );
}
