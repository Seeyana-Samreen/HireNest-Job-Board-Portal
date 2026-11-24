const jobSearchState = { search: "", category: "", location: "", type: "", experience: "", salary: "", sort: "newest" };
const initJobs = () => {
  const jobs = getJobs();
  const params = new URLSearchParams(location.search);
  jobSearchState.search = params.get("search") || "";
  jobSearchState.location = params.get("location") || "";
  jobSearchState.category = params.get("category") || "";
  const search = document.querySelector("#job-search"); search.value = jobSearchState.search;
  const categories = [...new Set(jobs.map(job => job.category))].sort();
  const locations = [...new Set(jobs.map(job => job.location))].sort();
  document.querySelector("#category-filter").innerHTML += categories.map(value => `<option value="${escapeText(value)}">${escapeText(value)}</option>`).join("");
  document.querySelector("#location-filter").innerHTML += locations.map(value => `<option value="${escapeText(value)}">${escapeText(value)}</option>`).join("");
  document.querySelector("#category-filter").value=jobSearchState.category; document.querySelector("#location-filter").value=jobSearchState.location;
  const render = () => { const query=jobSearchState.search.toLowerCase(); let filtered=getJobs().filter(job => (!query || [job.title,job.company,job.category,job.skills,job.description].join(" ").toLowerCase().includes(query)) && (!jobSearchState.category || job.category===jobSearchState.category) && (!jobSearchState.location || job.location.toLowerCase().includes(jobSearchState.location.toLowerCase())) && (!jobSearchState.type || job.type===jobSearchState.type) && (!jobSearchState.experience || job.experienceLevel===jobSearchState.experience) && (!jobSearchState.salary || job.salaryMin>=Number(jobSearchState.salary))); filtered.sort((a,b)=>jobSearchState.sort==="salary"?b.salaryMin-a.salaryMin:jobSearchState.sort==="title"?a.title.localeCompare(b.title):new Date(b.posted)-new Date(a.posted)); document.querySelector("#results-count").textContent=`${filtered.length} job${filtered.length===1?"":"s"}`; document.querySelector("#job-list").innerHTML=filtered.length?filtered.map(jobCard).join(""):`<div class="empty-state"><strong>No jobs found</strong><span>Try widening your search or clearing one of your filters.</span></div>`; };
  [["#job-search","search"],["#category-filter","category"],["#location-filter","location"],["#type-filter","type"],["#experience-filter","experience"],["#salary-filter","salary"],["#sort-filter","sort"]].forEach(([selector,key])=>document.querySelector(selector).addEventListener("input",event=>{jobSearchState[key]=event.target.value;render();}));
  document.querySelector("#clear-filters").addEventListener("click",()=>{Object.keys(jobSearchState).forEach(key=>jobSearchState[key]=key==="sort"?"newest":""); document.querySelector("#job-search").value="";["category-filter","location-filter","type-filter","experience-filter","salary-filter","sort-filter"].forEach(id=>document.querySelector(`#${id}`).value=id==="sort-filter"?"newest":"");render();});
  render();
};
initJobs();
