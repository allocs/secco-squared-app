'use server'

import { createClient } from "@/lib/supabase/server";

export async function submitLead(formData: FormData) {
    // https://nextjs.org/docs/app/guides/forms
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        howdyaHear: formData.get('howdyaHear'),
        message: formData.get('message')
    }
    try {
        const supabase = await createClient();
        const { error } = await supabase.from('leads')
            .insert({
                name: formData.get('name'),
                email: formData.get('email'),
                company: formData.get('company'),
                howdyaHear: formData.get('howdyaHear'),
                message: formData.get('message')

            })
        console.log(error)
    } catch (error) {
        alert('Error saving your info, try again later!')
        console.log(error)
        return
    }
    console.log(rawFormData)

}