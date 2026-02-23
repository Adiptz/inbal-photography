export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container-custom section-spacing">
        <h1 className="font-script text-logo-desktop text-text-primary">
          ענבל
        </h1>
        <p className="font-sans text-body-small text-text-secondary tracking-logo">
          צ ל מ ת
        </p>
        <h2 className="font-serif text-h2 text-text-primary mt-8">
          צילומי הריון ומשפחה
        </h2>
        <p className="font-sans text-body text-text-secondary mt-4">
          ברוכים הבאים לאתר שלי
        </p>
        <button className="mt-8 bg-accent hover:bg-accent-hover text-white font-sans font-medium text-body-small px-7 py-3.5 rounded-pill shadow-button transition-colors duration-200">
          צרו קשר
        </button>
      </div>
    </main>
  );
}
