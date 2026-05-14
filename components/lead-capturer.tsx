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
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
            />
            <input name="email" type="email" placeholder="Email" required />
            <input name="company" placeholder="Company" />
            <select name="howdyaHear">
                <option value='0' >How did you hear about us?</option>
                <option value='1'>Google</option>
                <option value='2'>Referral</option>
                <option value='3'>Social</option>
                <option value='4'>Other</option>
            </select>
            <textarea name="message" placeholder="Anything else you want to share?" />
            <SubmitButton />
        </Form>
    )
}