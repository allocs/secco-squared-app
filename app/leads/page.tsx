import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";


function decodeHowdyaHear(howdyaHear: any) {
    var outputString = "";
    switch (howdyaHear) {
        case 1:
            outputString = "Google";
            break;
        case 2:
            outputString = "Referral";
            break;
        case 3:
            outputString = "Social";
            break;
        case 4:
            outputString = "Other";
            break;
        default:
            outputString = "---";
    }
    return outputString;
}
async function LeadsData() {
    const supabase = await createClient();
    const { data: leads } = await supabase.from("leads").select();
    return <table>
        <thead>
            <tr>
                <th>
                    Full Name
                </th>
                <th>
                    Email
                </th>
                <th>
                    Company
                </th>
                <th>
                    Where From
                </th>
                <th>
                    Message
                </th>
                <th>
                    When
                </th>
            </tr>
        </thead>
        <tbody>
            {
                leads != null ? (
                    leads.map((lead) => (
                        <tr key={lead.email}>
                            <td>
                                {lead.name}
                            </td>
                            <td>
                                {lead.email}
                            </td>
                            <td>
                                {lead.company}
                            </td>
                            <td>
                                {decodeHowdyaHear(lead.howdyaHear)}
                            </td>
                            <td>
                                {lead.message}
                            </td>
                            <td>
                                {lead.submitted_time}
                            </td>
                        </tr>
                    )
                    )

                ) : (
                    <tr>
                        Nothing to show
                    </tr>
                )
            }
        </tbody>
    </table>;
}

export default function Leads() {
    return (
        <Suspense fallback={<div>Loading Leads...</div>}>
            <LeadsData />
        </Suspense>
    );
}