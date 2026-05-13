import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function LeadsData() {
    const supabase = await createClient();
    const { data: leads } = await supabase.from("leads").select();

    return <pre>{JSON.stringify(leads, null, 2)}</pre>;
}

export default function Leads() {
    return (
        <Suspense fallback={<div>Loading Leads...</div>}>
            <LeadsData />
        </Suspense>
    );
}