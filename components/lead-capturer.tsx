"use client"
import { useFormStatus } from 'react-dom'
import Form from 'next/form'
import { submitLead } from '@/app/actions'

export function SubmitButton() {
    const status = useFormStatus()
    return (
        <button type="submit">{status.pending ? 'Submitting...' : 'Submit'}</button>
    )
}

export function LeadCapturer() {

    return (
        <Form
            action={submitLead}
            className="grid"
        >
            <input name="name" placeholder="Full Name" />
            <input name="email" placeholder="Email" />
            <input name="company" placeholder="Company" />
            <input name="howdyaHear" placeholder="How Did You Hear About Us?" />
            <textarea name="message" placeholder="Anything else you want to share?" />
            <button type="submit">Submit</button>
        </Form>
    )
}