import { Accordion } from './Accordion';
import { Header } from './Header';
import { Footer } from './Footer';
import { productionAssets } from './productionAssets';
import './faq-srsp.css';

const cards = [
  { title: 'Ready To Retire?', body: 'Plan your next step toward retirement.', action: 'Start Planning', image: productionAssets.srspReadyRetire },
  { title: 'Already Retired?', body: 'Stay informed and supported in retirement.', action: 'View Retiree Resources', image: productionAssets.srspAlreadyRetired },
  { title: 'Not ready to Retire?', body: 'Prepare now for future retirement.', action: 'Plan Ahead', image: productionAssets.srspNotReady },
  { title: 'Grief Counseling', body: 'Find support during difficult times.', action: 'Get Support', image: productionAssets.srspGrief }
];

const questions = [
  'I have questions about my account. How do I get in touch with John Hancock?',
  'How much can I contribute to the SRSP?',
  'How can the SRSP help me save for retirement?',
  'Why should I contribute to the SRSP?',
  'I plan to retire in the next few years. Is it too late to start saving?',
  'When am I eligible to take a distribution from the SRSP?',
  'How do I apply for a distribution from the SRSP?',
  'How will my account be paid out when I request a distribution?',
  'Can I roll over my SRSP distribution into an IRA?',
  'Can I withdraw money or take a loan from the SRSP while I am still working in covered employment?',
  'Can I leave my account in the Plan after I leave covered employment?'
];

const contributionAnswer = 'Contribution limits depend on the plan year:\n• Check the current annual contribution limit.\n• Members age 50 or older may qualify for catch-up contributions.\n• Confirm any additional age-based catch-up limit with the plan administrator.\nThese amounts may be adjusted each year by the IRS. Replace this sample with approved plan information.';

export function FaqAccordionIndex({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="ds-faq-srsp" data-size={mobile ? 'mobile' : 'desktop'} data-fund="retirement" data-figma-node="740:6316">
      <Header fund="retirement" mobile={mobile} />
      <main className="ds-faq-srsp__main">
        <section className="ds-faq-srsp__hero" aria-labelledby="srsp-faq-hero-title">
          <img src={productionAssets.srspFaqHero} alt="" />
          <div className="ds-faq-srsp__hero-copy">
            <h1 id="srsp-faq-hero-title">Have questions about SRSP?</h1>
            <p>Find answers to common questions about your plan, including how it works, managing your account, and planning for retirement.</p>
          </div>
        </section>
        <div className="ds-faq-srsp__layout">
          <aside className="ds-faq-srsp__sidebar" aria-label="Retirement resources">
            {cards.map((card) => (
              <article className="ds-faq-srsp__card" key={card.title}>
                <img src={card.image} alt="" />
                <div className="ds-faq-srsp__card-copy">
                  <h2>{card.title}</h2>
                  <p>{card.body}</p>
                  <a href="#srsp-resources">{card.action}</a>
                </div>
              </article>
            ))}
            <div className="ds-faq-srsp__benefits" id="srsp-resources">
              <h2>What Are My Benefits?</h2>
              <p>Find your current benefits and resources in one place.</p>
              <a href="#srsp-resources">Learn More</a>
            </div>
          </aside>
          <section className="ds-faq-srsp__content" aria-labelledby="srsp-faq-title">
            <h2 id="srsp-faq-title">SRSP FAQs</h2>
            <div className="ds-faq-srsp__questions">
              {questions.map((question, index) => (
                <Accordion key={question} fund="retirement" question={question} answer={index === 1 ? contributionAnswer : 'Sample answer for the reference guide. Replace with approved plan content.'} defaultOpen={index === 1} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer fund="retirement" mobile={mobile} />
    </div>
  );
}
