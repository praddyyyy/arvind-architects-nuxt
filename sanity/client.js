import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "n7v220lp",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-03-25"
});