# HireNest

HireNest is a polished, frontend-only job board portal built for the Zelvora Technologies Web Development Week 2 challenge. It helps candidates discover roles, view complete job information, and submit applications while giving employers a Local Storage-backed demonstration dashboard for job CRUD and application review.

## Features

- Responsive home page with hero search, statistics, featured roles, categories, and CTA.
- Real-time multi-filter job listings (search, category, location, type, experience, salary, sorting).
- Job detail pages connected by URL query parameters.
- Validated application flow with duplicate prevention and persistent applications.
- Demo admin dashboard with add, edit, delete, search, listing metrics, and application management.
- Shared responsive navigation, footer, empty states, and error handling.

## Technology and structure

Only HTML5, CSS3, vanilla ES6+ JavaScript, and browser Local Storage are used:

```text
index.html       jobs.html          job-details.html
apply.html       admin.html         css/style.css
js/data.js       js/main.js         js/jobs.js
js/job-details.js  js/apply.js      js/admin.js
```

## Run locally

Open the folder in VS Code and use the Live Server extension on `index.html`. The app also works from a static web server; no Node.js, backend, database, build step, or API key is required.

## Data persistence

The first load seeds 12 sample roles into `hirenest_jobs`. Jobs and candidate submissions in `hirenest_applications` are then read and written in the browser. Clearing site data resets the demo. Local Storage is not secure authentication, so the Admin Dashboard is intentionally a demonstration interface rather than a production access-control system.

## Testing checklist

Tested implementation paths include page navigation, seeded job rendering, search and combined filters, clear filters, detail and apply query parameters, invalid form feedback, successful and duplicate submissions, admin CRUD, application visibility, refresh persistence, and responsive layouts.

## Future improvements

A production version would add authenticated roles, a server-side database, file upload storage, transactional email, moderation workflows, analytics, and automated end-to-end tests.
