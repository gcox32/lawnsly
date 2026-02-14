export default function Features() {
    return (
      <section className="bg-neutral-background py-16 text-center" id="features">
        <div className="mx-auto px-4 max-w-4xl">
          <h2 className="mb-6 font-heading text-brand-primary text-3xl">Features</h2>
          <div className="gap-8 grid md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold text-brand-secondary text-xl">Photo Journal</h3>
              <p className="text-neutral-text-secondary">
                Track lawn progress over time with side-by-side image comparisons.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-brand-secondary text-xl">Gamified Challenges</h3>
              <p className="text-neutral-text-secondary">
                Level up your lawn care routine with seasonal challenges and achievements.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-brand-secondary text-xl">Lawn Care Calendar</h3>
              <p className="text-neutral-text-secondary">
                Receive timely reminders tailored to your region and grass type.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  