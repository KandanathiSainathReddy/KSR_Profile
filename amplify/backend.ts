// Minimal Amplify Gen 2 backend — hosting is the product.
// Same composition root shape as agent-maker-checker; no Lambdas yet.
// Add auth / APIs here later without moving the frontend.

import { defineBackend } from "@aws-amplify/backend";

const backend = defineBackend({});

backend.addOutput({
  custom: {
    site: "KSR_Profile",
    owner: "Kandanathi Sainath Reddy",
  },
});
