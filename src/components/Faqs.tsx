import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is Scubaspot?',
      answer:
        'Scubaspot is a dive log app with a social feed. Log your dives, share photos and videos, and connect with other divers around the world.',
    },
    {
      question: 'Can I keep my dives private?',
      answer:
        'Yes. You control what you share. You can keep dives for your personal log or post them to your feed when you want others to see them.',
    },
    {
      question: 'What can I store in a dive log entry?',
      answer:
        'You can record key details like location, depth, duration, notes, conditions, and more — so every dive is easy to remember and revisit later.',
    },
  ],
  [
    {
      question: 'Can I post photos and videos?',
      answer:
        'Yes. Add engaging media to your posts so your dive stories feel real — from epic reef shots to memorable moments with your buddy.',
    },
    {
      question: 'How does the social feed work?',
      answer:
        "Share dives as posts, follow other divers, and interact through likes and comments. It's built to help you discover people and places you'll want to dive with.",
    },
    {
      question: 'Is Scubaspot free to use?',
      answer:
        'Yes. Scubaspot is free to use, and there are no limits on the number of dives you can log. Log unlimited dives, keep your history, and share whenever you like.',
    },
  ],
  [
    {
      question: 'Can I track my dive gear?',
      answer:
        'Yes. Track the gear you use so you can remember what worked best and build a clear picture of your setup over time.',
    },
    {
      question: 'Can I track my dive certifications?',
      answer:
        'Yes. Keep your certifications in one place so you can easily reference your training and share your progress with the community.',
    },
    {
      question: 'How do I delete my account?',
      answer:
        'You can delete your account from the "More > Your Account" screen. We value your privacy — your account and data are deleted instantly, with no grace period.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a href="/contact" className="text-gray-900 underline">
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
