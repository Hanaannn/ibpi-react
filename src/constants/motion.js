// Kept as the single source of truth for how long the entrance loader
// stays on screen. usePageLoader defaults to this, and Hero's entrance
// choreography (including the headline decode effect) is delayed by the
// same amount — otherwise it would animate to completion while still
// hidden behind the loader and never actually be seen.
export const PAGE_LOADER_DURATION = 3500;
