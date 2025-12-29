import { type Metadata } from 'next'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the Scubaspot team. We would love to hear your questions, feedback, or suggestions.',
}

export default function Contact() {
  return <ContactForm />
}
