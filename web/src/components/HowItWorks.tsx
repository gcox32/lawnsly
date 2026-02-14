export default function HowItWorks() {
    return (
      <section className="bg-white py-16 text-center" id="how-it-works">
        <div className="mx-auto px-4 max-w-4xl">
          <h2 className="mb-6 font-heading text-brand-primary text-3xl">How It Works</h2>
          <div className="gap-8 grid md:grid-cols-3 text-left">
            <div>
              <div className="mb-2 font-bold text-brand-accent text-4xl">1</div>
              <h3 className="mb-2 font-semibold text-brand-secondary text-xl">Snap a Photo</h3>
              <p className="text-neutral-text-secondary">
                Capture your lawn weekly — no filters, just real results.
              </p>
            </div>
            <div>
              <div className="mb-2 font-bold text-brand-accent text-4xl">2</div>
              <h3 className="mb-2 font-semibold text-brand-secondary text-xl">Follow the Plan</h3>
              <p className="text-neutral-text-secondary">
                Get guidance on watering, feeding, and mowing based on your lawn's needs.
              </p>
            </div>
            <div>
              <div className="mb-2 font-bold text-brand-accent text-4xl">3</div>
              <h3 className="mb-2 font-semibold text-brand-secondary text-xl">Watch it Thrive</h3>
              <p className="text-neutral-text-secondary">
                Track growth over time and celebrate improvements with LawnScore™ badges.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  