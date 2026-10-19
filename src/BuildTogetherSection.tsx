import { useEffect, useRef } from 'react';

const CAPABILITIES = [
  {
    title: 'SEO & discovery',
    outcome: 'Help people find your business and understand what you offer.',
    features: 'Service pages · Local search foundations · Search previews · Fast mobile pages',
    example: 'A local service website with a page for each service, clear location information, and a quote request form.',
  },
  {
    title: 'Payments & online stores',
    outcome: 'Turn interest into an order, a deposit, or a recurring subscription.',
    features: 'Hosted checkout · Product bundles · Receipts · Order tracking',
    example: 'A shop where customers mix a bundle, pay online, and check their order status—or a service business that collects booking deposits.',
    reference: 'Explore Lanyart',
    href: 'https://lanyart-iv44.vercel.app',
  },
  {
    title: 'Bookings & scheduling',
    outcome: 'Give customers a clear way to reserve their time with you.',
    features: 'Availability · Appointment requests · Pickup windows · Reminders',
    example: 'A barber, tutor, or photographer’s site with service selection, available time slots, and appointment confirmations.',
  },
  {
    title: 'Dashboards & business tools',
    outcome: 'Keep the daily work in one place as your business grows.',
    features: 'Order management · Menu editing · Pricing controls · Reports & exports',
    example: 'A meal business where customers order for the week and staff manage the menu, pickup schedule, and prep totals.',
    reference: 'Explore Crusader Kitchen',
    href: 'https://crusaderkitchen.sebrium.com',
  },
  {
    title: 'Accounts & customer portals',
    outcome: 'Give each customer, member, or team a place to return to.',
    features: 'Sign-in · Profiles · Member access · Customer history',
    example: 'A client portal where customers check project progress, access shared files, and send requests to your team.',
  },
  {
    title: 'Forms & follow-ups',
    outcome: 'Make it easier to turn a new inquiry into the next step.',
    features: 'Quote forms · Lead tracking · Email confirmations · Workflow connections',
    example: 'A contractor’s quote form that collects job details, organizes new leads, and sends the customer a confirmation.',
  },
  {
    title: 'Interactive apps & tools',
    outcome: 'Build something people use, save, and come back to.',
    features: 'Calculators · Quizzes · Custom builders · Progress tracking',
    example: 'A daily learning game with new clues, saved progress, and shareable results—or a calculator that helps customers choose a service.',
    reference: 'Explore Dental',
    href: 'https://dentle.sebrium.com',
  },
  {
    title: 'Analytics & improvement',
    outcome: 'Understand how visitors use your site and where they get stuck.',
    features: 'Traffic insights · Form submissions · Checkout events · Conversion tracking',
    example: 'A campaign landing page that tracks visits, quote requests, and completed purchases so you can improve the customer journey.',
  },
];

export default function BuildTogetherSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.location.hash === '#build-together') {
      sectionRef.current?.scrollIntoView();
    }
  }, []);

  return (
    <section ref={sectionRef} id="build-together" aria-labelledby="build-together-heading" className="relative z-10 bg-black px-6 py-24 text-white md:px-12">
      <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/60">From a first idea to a working product</p>
      <div className="grid gap-7 lg:grid-cols-2 lg:items-end">
        <h2 id="build-together-heading" className="font-accent max-w-2xl text-4xl font-semibold leading-tight tracking-[0.02em] md:text-6xl">What could we build together?</h2>
        <p className="max-w-xl text-lg leading-relaxed text-white/80">A website can do more than introduce your business. Help customers find you, take payments, book appointments, and make everyday work easier. Start with what you need; we’ll shape the right build together.</p>
      </div>

      <div className="mt-12 grid gap-px border border-white/25 bg-white/25 md:grid-cols-2">
        {CAPABILITIES.map((capability, index) => (
          <article key={capability.title} className="flex flex-col bg-black p-6 sm:p-8">
            <p aria-hidden="true" className="mb-5 text-xs tracking-[0.2em] text-white/50">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{capability.title}</h3>
            <p className="mt-3 max-w-xl leading-relaxed text-white/80">{capability.outcome}</p>
            <p className="mt-5 text-sm leading-relaxed text-white/60">{capability.features}</p>
            <div className="mt-6 border-t border-white/20 pt-5">
              <p className="mb-2 text-xs uppercase tracking-[0.15em] text-white/50">Example build</p>
              <p className="leading-relaxed">{capability.example}</p>
            </div>
            {capability.href ? <a href={capability.href} className="mt-5 self-start border-b border-white/50 pb-1 text-sm transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{capability.reference} <span aria-hidden="true">↗</span></a> : null}
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/25 pt-8">
        <div>
          <h3 className="text-2xl font-medium">Start small. Build on it.</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/70">Tell us who it’s for, what you want it to do, and what takes up too much of your time. We’ll work out the features, integrations, and launch plan around your goals.</p>
        </div>
        <a href="mailto:hello@sebrium.com?subject=Let%E2%80%99s%20build%20together&body=My%20business%20or%20idea%3A%0A%0AWho%20it%20is%20for%3A%0A%0AWhat%20I%20want%20it%20to%20do%3A%0A%0ABudget%20and%20ideal%20launch%20date%3A" className="font-accent inline-block border border-white bg-white px-6 py-4 text-center text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Tell us your idea <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
