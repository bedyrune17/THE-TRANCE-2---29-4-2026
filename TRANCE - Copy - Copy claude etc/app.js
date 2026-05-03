
const KEYS={leads:"trance_leads",analytics:"trance_analytics",talentStatus:"trance_talent_status",admin:"trance_admin_session"};
const ADMIN_CODE="trance2026";
const WHATSAPP_NUMBER="919999999999";
const EVENT_LABELS={college_fest:"College Fest",corporate_event:"Corporate Event",guest_lecture:"Guest Lecture",brand_launch:"Brand Launch",private_concert:"Private Concert",institutional_event:"Institutional Event"};
const CATEGORY_LABELS={actors:"Actors",djs:"DJs",speakers:"Speakers",influencers:"Influencers",mixed:"Mixed lineup"};
const STATUS_ORDER=["Available","Hold","Touring"];
const SERVICES=[
  {slug:"celebrity-booking",page:"celebrity.html",title:"Celebrity Booking",short:"Headline talent sourcing, commercials, and show-day coordination in one lane.",kicker:"Lock the right face for the event without losing weeks to scattered approvals.",summary:"This service is built for teams that need recognizable talent to lift recall, sponsor value, or ticket appeal. We manage shortlist logic, backup options, rider planning, and the details that usually slow down a confirmed booking.",image:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200",formats:["College headliner nights","Brand launches","Corporate galas","Festival showcases"],checklist:["Audience, city, and budget band approved","Primary and backup talent shortlisted","Rider, travel, and hospitality aligned","Sponsor moments mapped before announcement"],deliverables:[["Shortlist logic","Talent recommendations based on audience pull, vibe, and budget reality."],["Commercials","Fee positioning and approval support so decision-makers move faster."],["Travel and rider","Movement, stay, hospitality, and technical asks documented early."],["Execution command","One lane for call times, stage entry, press windows, and changes."]]},
  {slug:"college-fest-management",page:"college-fest.html",title:"College Fest Management",short:"Programming, artist flow, approvals, and execution support for large campus formats.",kicker:"Run student-heavy events with more control over budget, schedule pressure, and crowd movement.",summary:"College events need sponsor integration, faculty alignment, permissions, security rhythm, and a lineup that keeps the room engaged without breaking the budget. This format pulls those moving parts into one operating system.",image:"https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",formats:["Annual cultural fests","Freshers and farewell nights","Department showcases","Campus celebrity activations"],checklist:["Campus approvals and owners identified","Stage schedule and sponsor beats documented","Security and backstage flow planned","Artist call-sheet locked before event day"],deliverables:[["Campus-ready show design","Planning that respects student energy, institutional approvals, and sponsor visibility."],["Talent sync","Performer selection, stage requirements, travel, and timeline control in one brief."],["Movement planning","Audience flow, holding spaces, and backstage routing coordinated early."],["Show-day command","One escalation path for delays, weather shifts, and on-ground decisions."]]},
  {slug:"corporate-events",page:"corporate-events.html",title:"Corporate Events",short:"High-touch planning for launches, annual meets, recognition nights, and executive audiences.",kicker:"Balance polish, timing, brand presence, and audience energy without making the room feel generic.",summary:"Corporate formats need tighter precision. Stakeholders are varied, the pace is sharper, and the room needs to feel premium without drifting into chaos. We bring structure to speakers, talent, production beats, and guest movement.",image:"https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1200",formats:["Annual meetings","Leadership summits","Award nights","Brand showcase events"],checklist:["Executive stakeholders and approval flow mapped","Brand moments and content windows defined","Venue timeline and rehearsals confirmed","VIP movement and contingency plan locked"],deliverables:[["Program architecture","Agenda shaping across keynote, entertainment, and sponsor visibility."],["Premium coordination","Travel, green rooms, rehearsals, and protocol-sensitive flows handled cleanly."],["Stakeholder reporting","Clear briefing and timeline snapshots for internal teams and leadership."],["Issue handling","Real-time support for run-order changes, AV issues, and talent movement."]]},
  {slug:"guest-lectures",page:"guest-lectures.html",title:"Guest Lectures",short:"Speaker discovery and event operations for educational and leadership-oriented formats.",kicker:"Make the session feel valuable, polished, and easy to approve even when the format is knowledge-led.",summary:"Talk formats often look simple from the outside, but speaker fit, schedule discipline, moderation flow, and audience relevance matter a lot. This service supports institutions and organizations that want a speaker-led event to land cleanly.",image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",formats:["University sessions","Leadership talks","Faculty programs","Professional development forums"],checklist:["Session objective and audience maturity defined","Speaker fit and topic guardrails aligned","Venue and Q&A run-through confirmed","Documentation or PR moments planned"],deliverables:[["Speaker fit","Relevant voices selected based on audience level and topic value."],["Session framing","Moderation notes, topic outline, and Q&A pacing shaped early."],["Operational readiness","Travel, presentation requirements, arrival, and hospitality covered."],["Audience experience","Registration, seating, timing, and room energy kept tight."]]},
  {slug:"artist-coordination",page:"artist-coordination.html",title:"Artist Coordination",short:"The logistics-heavy layer that keeps talent movement and execution under control.",kicker:"Ideal when the artist is already chosen but the execution still needs a tighter hand.",summary:"Sometimes the performer is confirmed but the coordination layer is still fragile. This service focuses on call sheets, route management, technical requirements, hospitality, stage timing, and communication between teams that usually operate in silos.",image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1200",formats:["Single-artist nights","Festival support","Tour-stop coordination","Guest appearances"],checklist:["Confirmed artist details verified against latest rider","Movement timeline shared with every owner","Backstage, security, and hospitality handoffs defined","Fallback cues locked before arrival"],deliverables:[["Call-sheet discipline","Arrival timing, green room prep, tech checks, stage order, and exit movement documented."],["Team communication","Venue, artist team, hospitality, transport, and production aligned through one thread."],["Backstage control","Restricted movement, sponsor access, photo moments, and security protocol managed."],["Issue response","Plan B routes, timing changes, and last-minute adjustments handled without chaos."]]}
];
const TALENT=[
  {id:"aarav-malhotra",name:"Aarav Malhotra",category:"actors",title:"Screen actor and host",vibe:"Camera-friendly lead presence for youth festivals, corporate showcases, and red-carpet moments.",fee:900000,status:"Available",city:"Mumbai",tags:["High recall","Stage hosting","Meet-and-greet ready"],formats:["College Fest","Brand Launch","Corporate Event"],image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=900"},
  {id:"meera-kapoor",name:"Meera Kapoor",category:"actors",title:"Film actor and public personality",vibe:"Strong for premium launches, moderated conversations, and executive-facing appearances.",fee:1250000,status:"Hold",city:"Mumbai",tags:["Premium fit","Press-friendly","Brand opener"],formats:["Corporate Event","Brand Launch","Institutional Event"],image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=900"},
  {id:"dj-nyra",name:"DJ Nyra",category:"djs",title:"Festival and campus DJ",vibe:"High-energy set design for crowd lift, sponsor reveals, and headline night momentum.",fee:450000,status:"Available",city:"Delhi",tags:["EDM leaning","Youth-heavy","Strong closer"],formats:["College Fest","Private Concert","Corporate Event"],image:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=900"},
  {id:"kian-vale",name:"Kian Vale",category:"djs",title:"Open-format DJ",vibe:"Great for corporate rooms that need energy without losing polish.",fee:600000,status:"Touring",city:"Bengaluru",tags:["Open format","Elegant crowd read","Sponsor moments"],formats:["Corporate Event","Brand Launch","Private Concert"],image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=900"},
  {id:"dr-rhea-sen",name:"Dr. Rhea Sen",category:"speakers",title:"Leadership speaker",vibe:"Best suited for executive sessions, institution talks, and insight-led forums.",fee:320000,status:"Available",city:"Kolkata",tags:["Thought leadership","Moderator chemistry","Boardroom-ready"],formats:["Guest Lecture","Corporate Event","Institutional Event"],image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900"},
  {id:"nikhil-arora",name:"Nikhil Arora",category:"speakers",title:"Entrepreneur and campus speaker",vibe:"Sharp for founder stories, student motivation, and innovation-heavy events.",fee:260000,status:"Available",city:"Pune",tags:["Founder story","Campus fit","Interactive Q&A"],formats:["Guest Lecture","College Fest","Institutional Event"],image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=900"},
  {id:"sana-qureshi",name:"Sana Qureshi",category:"influencers",title:"Lifestyle creator",vibe:"Useful for brand-facing moments, creator campaigns, and youth social traction.",fee:380000,status:"Hold",city:"Mumbai",tags:["Social amplification","Brand safe","Audience buzz"],formats:["Brand Launch","College Fest","Corporate Event"],image:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=900"},
  {id:"vihaan-khanna",name:"Vihaan Khanna",category:"influencers",title:"Tech and culture creator",vibe:"A strong add-on for creator activations, launch rooms, and student-facing brand experiences.",fee:300000,status:"Available",city:"Hyderabad",tags:["Creator economy","Launch content","Youth appeal"],formats:["Brand Launch","Institutional Event","College Fest"],image:"https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=900"}
];
const EVENTS=[
  {title:"North Axis College Fest",type:"College Fest",city:"Pune",audience:"8,500 attendees",talent:"Headline DJ plus campus host",summary:"Sponsor-backed annual night that needed strong crowd control, headline energy, and smooth backstage movement.",image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1200"},
  {title:"Asterion Leadership Summit",type:"Corporate Event",city:"Mumbai",audience:"1,200 delegates",talent:"Leadership speaker and live closer",summary:"Executive audience format with premium staging and a tightly choreographed run-of-show.",image:"https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200"},
  {title:"Aurora Product Reveal",type:"Brand Launch",city:"Bengaluru",audience:"650 invitees",talent:"Celebrity appearance and creator layer",summary:"Reveal event built around press coverage, influencer amplification, and sponsor visibility.",image:"https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1200"},
  {title:"FutureMinds Lecture Series",type:"Guest Lecture",city:"Delhi",audience:"900 students",talent:"Founder keynote and moderated Q&A",summary:"Institutional session designed for topic value, speaker relevance, and structured audience participation.",image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"},
  {title:"Harbor Private Concert",type:"Private Concert",city:"Goa",audience:"1,800 guests",talent:"Live crossover act plus DJ",summary:"A hospitality-driven event with tight arrival windows, VIP staging, and premium pacing.",image:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200"}
];
const ROADMAP=[["Live talent availability calendar","Block dates, travel holds, and option windows before they turn into spreadsheets."],["Lead scoring with CRM sync","Push qualified inquiries into a sales pipeline and track follow-ups automatically."],["Proposal builder","Create event decks with lineup, cost bands, schedule logic, and sponsor inserts from one brief."],["Client-facing approval room","Share shortlist options and commercial ranges without fragmented email threads."],["Post-event reporting","Attach engagement highlights, audience scale, and sponsor outcomes after execution."]];
const FAQ=[["How early should we start for a celebrity or large-format event?","Six to ten weeks is the comfortable window for shortlist logic, approvals, commercials, and production alignment."],["Can you work with a fixed budget instead of an open-ended brief?","Yes. The platform is built around budget-first curation, so the shortlist adjusts to commercial reality."],["Do you only support Mumbai events?","No. Mumbai is the operating base, but the format is designed for multi-city execution."],["What if we have already chosen the artist?","That is where artist coordination becomes useful. We can take over the logistics-heavy layer around a confirmed act."],["Is this connected to a real backend yet?","Not in this demo build. Booking data, analytics, and admin activity are stored in the browser."]];

document.addEventListener("DOMContentLoaded",()=>{
  initNavigation();
  initChat();
  initHero();
  renderServices();
  initServicePage();
  initPreviewTalent();
  initTalentPage();
  renderEvents();
  renderPortfolio();
  renderRoadmap();
  renderFaq();
  initEstimator();
  initBooking();
  initAdmin();
  trackPage();
});

function initNavigation(){
  const toggle=document.querySelector(".mobile-toggle");
  const panel=document.getElementById("navPanel");
  if(!toggle||!panel) return;
  toggle.addEventListener("click",()=>{
    const open=panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded",String(open));
  });
  panel.querySelectorAll("a,button").forEach((item)=>{
    item.addEventListener("click",()=>{
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded","false");
    });
  });
}

function initChat(){
  document.querySelectorAll("[data-chat-trigger]").forEach((trigger)=>{
    trigger.addEventListener("click",(event)=>{
      event.preventDefault();
      updateAnalytics((a)=>{a.chatClicks+=1;});
      window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent("Hi The Trance, I want to plan an event."),"_blank","noopener");
    });
  });
  document.querySelectorAll("[data-track='cta']").forEach((trigger)=>{
    trigger.addEventListener("click",()=>updateAnalytics((a)=>{a.ctaClicks+=1;}));
  });
}

function initHero(){
  const slides=[...document.querySelectorAll(".hero-slide")];
  if(slides.length<2) return;
  let i=0;
  window.setInterval(()=>{
    slides[i].classList.remove("is-active");
    i=(i+1)%slides.length;
    slides[i].classList.add("is-active");
  },4600);
}

function renderServices(){
  const grid=document.getElementById("serviceGrid");
  if(!grid) return;
  grid.innerHTML=SERVICES.map((service)=>`<article class="service-card"><div class="service-visual" style="background-image:url('${service.image}')"></div><div class="service-body"><span class="pill-label">Service</span><h3>${service.title}</h3><p>${service.short}</p><div class="chip-wrap">${service.formats.slice(0,3).map((item)=>`<span class="chip">${item}</span>`).join("")}</div><a class="mini-link" href="${service.page}">Open detail</a></div></article>`).join("");
}

function initServicePage(){
  const key=document.body.dataset.servicePage;
  if(!key) return;
  const service=SERVICES.find((item)=>item.slug===key);
  if(!service) return;
  const assign=(id,value)=>{const el=document.getElementById(id); if(el) el.textContent=value;};
  assign("serviceName",service.title);
  assign("serviceKicker",service.kicker);
  assign("serviceSummary",service.summary);
  const deliver=document.getElementById("serviceDeliverables");
  if(deliver) deliver.innerHTML=service.deliverables.map(([title,copy])=>`<article class="detail-card"><h3>${title}</h3><p>${copy}</p></article>`).join("");
  const formats=document.getElementById("serviceFormats");
  if(formats) formats.innerHTML=service.formats.map((item)=>`<span class="chip">${item}</span>`).join("");
  const check=document.getElementById("serviceChecklist");
  if(check) check.innerHTML=service.checklist.map((item)=>`<li>${item}</li>`).join("");
  const link=document.getElementById("serviceBookLink");
  if(link) link.href=bookingLink({serviceNeed:service.slug});
  document.title=service.title+" | The Trance";
  updateAnalytics((a)=>{a.serviceViews[service.slug]=(a.serviceViews[service.slug]||0)+1;});
}

function talentCard(talent){
  const status=getTalentStatus(talent.id,talent.status);
  return `<article class="talent-card"><img class="talent-image" src="${talent.image}" alt="${talent.name}"><div class="talent-body"><div class="split-head compact-head"><div><p class="card-eyebrow">${categoryLabel(talent.category)}</p><h3>${talent.name}</h3></div><span class="status-pill status-${slugify(status)}">${status}</span></div><p>${talent.vibe}</p><div class="chip-wrap"><span class="chip">${talent.city}</span>${talent.tags.map((tag)=>`<span class="chip">${tag}</span>`).join("")}</div><div class="talent-footer"><span>From Rs ${money(talent.fee)}</span><a class="mini-link" href="${bookingLink({preferredTalent:talent.name,talentCategory:talent.category})}">Shortlist talent</a></div></div></article>`;
}

function initPreviewTalent(){
  const grid=document.getElementById("talentPreviewGrid");
  if(!grid) return;
  let filter="all";
  const render=()=>{grid.innerHTML=TALENT.filter((item)=>filter==="all"||item.category===filter).slice(0,4).map(talentCard).join("");};
  document.querySelectorAll("[data-talent-filter]").forEach((button)=>{
    button.addEventListener("click",()=>{
      filter=button.dataset.talentFilter||"all";
      document.querySelectorAll("[data-talent-filter]").forEach((item)=>item.classList.remove("is-active"));
      button.classList.add("is-active");
      render();
    });
  });
  render();
}

function initTalentPage(){
  const grid=document.getElementById("fullTalentGrid");
  if(!grid) return;
  const search=document.getElementById("talentSearch");
  const sort=document.getElementById("talentSort");
  const count=document.getElementById("talentCount");
  let filter="all";
  let searchTracked=false;
  const render=()=>{
    const term=(search?.value||"").trim().toLowerCase();
    let list=TALENT.filter((talent)=>{
      const hay=[talent.name,talent.title,talent.vibe,talent.city,talent.category,talent.tags.join(" "),talent.formats.join(" ")].join(" ").toLowerCase();
      return (filter==="all"||talent.category===filter)&&(!term||hay.includes(term));
    });
    if(sort?.value==="budget-asc") list=list.slice().sort((a,b)=>a.fee-b.fee);
    else if(sort?.value==="budget-desc") list=list.slice().sort((a,b)=>b.fee-a.fee);
    else list=list.slice().sort((a,b)=>a.name.localeCompare(b.name));
    if(count) count.textContent=list.length+" talent options";
    grid.innerHTML=list.length?list.map(talentCard).join(""):`<div class="empty-state">No talent matches that combination yet.</div>`;
  };
  document.querySelectorAll("[data-roster-filter]").forEach((button)=>{
    button.addEventListener("click",()=>{
      filter=button.dataset.rosterFilter||"all";
      document.querySelectorAll("[data-roster-filter]").forEach((item)=>item.classList.remove("is-active"));
      button.classList.add("is-active");
      render();
    });
  });
  search?.addEventListener("input",()=>{
    const hasValue=Boolean(search.value.trim());
    if(hasValue&&!searchTracked) updateAnalytics((a)=>{a.rosterSearches+=1;});
    searchTracked=hasValue;
    render();
  });
  sort?.addEventListener("change",render);
  render();
}

function eventCard(item){
  return `<article class="event-card"><div class="event-image" style="background-image:url('${item.image}')"></div><div class="event-body"><div class="event-topline"><span class="pill-label">${item.type}</span><span>${item.city}</span></div><h3>${item.title}</h3><p>${item.summary}</p><div class="event-metrics"><span>${item.audience}</span><span>${item.talent}</span></div></div></article>`;
}

function renderEvents(){
  const grid=document.getElementById("eventPreviewGrid");
  if(grid) grid.innerHTML=EVENTS.slice(0,3).map(eventCard).join("");
}

function renderPortfolio(){
  const grid=document.getElementById("eventCaseGrid");
  if(grid) grid.innerHTML=EVENTS.map(eventCard).join("");
}

function renderRoadmap(){
  const grid=document.getElementById("featureRoadmap");
  if(grid) grid.innerHTML=ROADMAP.map(([title,copy])=>`<article class="feature-card"><span class="pill-label">Future idea</span><h3>${title}</h3><p>${copy}</p></article>`).join("");
}

function renderFaq(){
  const list=document.getElementById("faqList");
  if(list) list.innerHTML=FAQ.map(([question,answer])=>`<details class="faq-item"><summary>${question}</summary><p>${answer}</p></details>`).join("");
}

function initEstimator(){
  const form=document.getElementById("estimatorForm");
  const result=document.getElementById("estimatorResult");
  if(!form||!result) return;
  const render=(track)=>{
    const data=new FormData(form);
    const estimateData=buildEstimate({
      eventType:normalizeEventType(data.get("estimateEventType")),
      category:normalizeCategory(data.get("estimateTalentCategory")),
      budget:number(data.get("estimateBudget")),
      guests:number(data.get("estimateGuests"))
    });
    result.innerHTML=`<span class="pill-label">Estimate snapshot</span><h3>${estimateData.status}</h3><p>${estimateData.copy}</p><div class="estimate-metrics"><article><span>Suggested band</span><strong>Rs ${money(estimateData.low)} - Rs ${money(estimateData.high)}</strong></article><article><span>Base logic</span><strong>${eventLabel(estimateData.eventType)} x ${categoryLabel(estimateData.category)}</strong></article><article><span>Recommended service</span><strong>${estimateData.service}</strong></article></div><div class="chip-wrap">${estimateData.suggestions.map((name)=>`<span class="chip">${name}</span>`).join("")}</div>`;
    if(track) updateAnalytics((a)=>{a.estimatorRuns+=1;});
  };
  form.addEventListener("submit",(event)=>{event.preventDefault(); render(true);});
  render(false);
}

function buildEstimate(input){
  const base={college_fest:650000,corporate_event:900000,guest_lecture:280000,brand_launch:1200000,private_concert:1500000,institutional_event:450000};
  const multi={actors:1.18,djs:1.08,speakers:0.92,influencers:0.98,mixed:1.32};
  const raw=round((base[input.eventType]||500000)*(multi[input.category]||1)*(1+Math.min(input.guests,5000)/6500),50000);
  const low=round(raw*0.85,50000);
  const high=round(raw*1.25,50000);
  let status="Budget looks realistic";
  let copy="This range should support a clean execution shape without forcing weak compromises too early.";
  if(input.budget&&input.budget<low){status="Budget may feel tight";copy="The target budget is below the likely delivery band, so we would trim talent ambition, scale, or production expectations.";}
  else if(input.budget&&input.budget>high){status="Room for a premium layer";copy="The target budget sits above the working range, so there is room for stronger talent, richer production, or better guest experience layers.";}
  return {eventType:input.eventType,category:input.category,low,high,status,copy,service:serviceForEvent(input.eventType),suggestions:matchTalent(input.category,high,input.eventType).map((item)=>item.name)};
}

function initBooking(){
  const form=document.getElementById("bookingForm");
  const response=document.getElementById("bookingResponse");
  if(!form||!response) return;
  prefillBooking(form);
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const lead=normalizeLead({
      id:"lead-"+Date.now()+"-"+Math.floor(Math.random()*1000),
      name:new FormData(form).get("name"),
      email:new FormData(form).get("email"),
      phone:new FormData(form).get("phone"),
      organization:new FormData(form).get("organization"),
      eventType:new FormData(form).get("eventType"),
      serviceNeed:new FormData(form).get("serviceNeed"),
      eventCity:new FormData(form).get("eventCity"),
      eventDate:new FormData(form).get("eventDate"),
      guests:new FormData(form).get("guests"),
      budget:new FormData(form).get("budget"),
      talentCategory:new FormData(form).get("talentCategory"),
      preferredTalent:new FormData(form).get("preferredTalent"),
      notes:new FormData(form).get("notes"),
      submittedAt:new Date().toISOString()
    },0);
    const leads=readLeads();
    leads.unshift(lead);
    write(KEYS.leads,leads);
    updateAnalytics((a)=>{a.bookings+=1; a.ctaClicks+=1;});
    response.className="form-response is-success";
    response.innerHTML=`Inquiry stored locally. Hotness score: <strong>${lead.score}/100</strong>. ${lead.recommendedTalent.length?"Suggested shortlist: "+lead.recommendedTalent.join(", ")+".":""}`;
    form.reset();
    prefillBooking(form);
  });
}

function prefillBooking(form){
  const params=new URLSearchParams(window.location.search);
  [["serviceNeed",params.get("serviceNeed")],["preferredTalent",params.get("preferredTalent")],["talentCategory",params.get("talentCategory")],["eventType",params.get("eventType")]].forEach(([name,value])=>{
    const field=form.elements.namedItem(name);
    if(field&&value) field.value=value;
  });
}

function initAdmin(){
  const lock=document.getElementById("adminLock");
  const panel=document.getElementById("adminPanel");
  const form=document.getElementById("adminUnlockForm");
  const status=document.getElementById("adminStatus");
  window.tranceAdminExport=exportLeads;
  if(!lock||!panel||!form||!status) return;
  const showPanel=()=>{lock.hidden=true; panel.hidden=false; sessionStorage.setItem(KEYS.admin,"1"); renderAdmin();};
  const showLock=(message)=>{lock.hidden=false; panel.hidden=true; status.textContent=message;};
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const code=(document.getElementById("adminCode")?.value||"").trim();
    if(code===ADMIN_CODE) showPanel();
    else showLock("That code did not match. Demo access code for this local build: trance2026");
  });
  if(sessionStorage.getItem(KEYS.admin)==="1") showPanel();
  else showLock("Demo access code for this local build: trance2026");
  document.getElementById("seedDemoBtn")?.addEventListener("click",()=>{seedDemo(); renderAdmin();});
  document.getElementById("exportLeadsBtn")?.addEventListener("click",exportLeads);
  document.getElementById("exportInsightsBtn")?.addEventListener("click",exportDashboard);
  document.getElementById("clearLeadsBtn")?.addEventListener("click",()=>{if(window.confirm("Clear all locally stored leads?")){write(KEYS.leads,[]); renderAdmin();}});
  document.getElementById("resetMetricsBtn")?.addEventListener("click",()=>{if(window.confirm("Reset analytics and availability markers?")){write(KEYS.analytics,blankAnalytics()); write(KEYS.talentStatus,{}); renderAdmin();}});
}

function renderAdmin(){
  const leads=readLeads();
  const analytics=readAnalytics();
  const metrics={total:leads.length,pipeline:leads.reduce((sum,lead)=>sum+lead.budget,0),hot:leads.filter((lead)=>lead.temperature==="Hot").length,avg:leads.length?Math.round(leads.reduce((sum,lead)=>sum+lead.budget,0)/leads.length):0};
  const set=(id,value)=>{const el=document.getElementById(id); if(el) el.textContent=value;};
  set("metricLeads",String(metrics.total));
  set("metricPipeline","Rs "+money(metrics.pipeline));
  set("metricHotLeads",String(metrics.hot));
  set("metricAvgBudget","Rs "+money(metrics.avg));
  const table=document.getElementById("leadTable");
  if(table) table.innerHTML=renderLeadTable(leads);
  const analyticsList=document.getElementById("analyticsList");
  if(analyticsList) analyticsList.innerHTML=renderAnalytics(analytics);
  const board=document.getElementById("talentStatusBoard");
  if(board){
    board.innerHTML=TALENT.map((talent)=>`<article class="status-card"><div><h4>${talent.name}</h4><p>${talent.title}</p></div><label><span>Status</span><select data-status="${talent.id}">${STATUS_ORDER.map((option)=>`<option value="${option}"${option===getTalentStatus(talent.id,talent.status)?" selected":""}>${option}</option>`).join("")}</select></label></article>`).join("");
    board.querySelectorAll("[data-status]").forEach((select)=>select.addEventListener("change",()=>{setTalentStatus(select.dataset.status,select.value); renderAdmin();}));
  }
}

function renderLeadTable(leads){
  if(!leads.length) return `<div class="empty-state">No booking requests stored yet. Use the site form or the demo seed button to populate this board.</div>`;
  const rows=leads.slice().sort((a,b)=>new Date(b.submittedAt)-new Date(a.submittedAt)).map((lead)=>`<tr><td><strong>${safe(lead.name)}</strong><span>${safe(lead.organization||lead.email||"Direct inquiry")}</span></td><td>${safe(eventLabel(lead.eventType))}</td><td>${safe(serviceLabel(lead.serviceNeed))}</td><td>Rs ${money(lead.budget)}</td><td><span class="status-pill status-${slugify(lead.temperature)}">${safe(lead.temperature)}</span></td><td>${lead.score}/100</td><td>${safe(lead.recommendedTalent.length?lead.recommendedTalent.join(", "):"Open shortlist")}</td><td>${safe(dateLabel(lead.submittedAt))}</td></tr>`).join("");
  return `<div class="lead-table-wrap"><table class="lead-table"><thead><tr><th>Lead</th><th>Event</th><th>Service</th><th>Budget</th><th>Heat</th><th>Score</th><th>Suggested shortlist</th><th>Logged</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

function renderAnalytics(analytics){
  const pageViews=analytics.pageViews||{};
  const serviceViews=analytics.serviceViews||{};
  const topPage=topKey(pageViews);
  const topService=topKey(serviceViews);
  return [
    ["Total page views",String(sumValues(pageViews))],
    ["Bookings submitted",String(analytics.bookings)],
    ["Estimator runs",String(analytics.estimatorRuns)],
    ["WhatsApp clicks",String(analytics.chatClicks)],
    ["CTA clicks",String(analytics.ctaClicks)],
    ["Roster searches",String(analytics.rosterSearches)],
    ["Top page",topPage?topPage.replace(/-/g," ")+" ("+pageViews[topPage]+")":"No data"],
    ["Top service view",topService?serviceLabel(topService)+" ("+serviceViews[topService]+")":"No data"],
    ["Last metric update",analytics.lastUpdated?dateLabel(analytics.lastUpdated):"Not yet tracked"]
  ].map(([label,value])=>`<li><span>${label}</span><strong>${value}</strong></li>`).join("");
}

function seedDemo(){
  write(KEYS.leads,[
    {name:"Ritika Sharma",email:"ritika@northaxis.edu",phone:"+91-9999999991",organization:"North Axis College",eventType:"college_fest",serviceNeed:"college-fest-management",eventCity:"Pune",eventDate:"2026-08-14",guests:8500,budget:1800000,talentCategory:"djs",preferredTalent:"DJ Nyra",notes:"Need headline closer, sponsor reveal moment, backstage control, and crowd flow."},
    {name:"Aditi Menon",email:"aditi@asterion.com",phone:"+91-9999999992",organization:"Asterion Consulting",eventType:"corporate_event",serviceNeed:"corporate-events",eventCity:"Mumbai",eventDate:"2026-07-09",guests:1200,budget:2400000,talentCategory:"actors",preferredTalent:"Meera Kapoor",notes:"Premium annual leadership evening with awards and hosted entertainment segment."},
    {name:"Karthik Iyer",email:"karthik@futureminds.org",phone:"+91-9999999993",organization:"FutureMinds Institute",eventType:"guest_lecture",serviceNeed:"guest-lectures",eventCity:"Delhi",eventDate:"2026-06-18",guests:900,budget:450000,talentCategory:"speakers",preferredTalent:"Dr. Rhea Sen",notes:"Looking for a founder or leadership speaker with a moderated Q&A."},
    {name:"Shivam Rao",email:"shivam@harborlife.in",phone:"+91-9999999994",organization:"Harbor Life Hospitality",eventType:"private_concert",serviceNeed:"artist-coordination",eventCity:"Goa",eventDate:"2026-09-21",guests:1800,budget:2100000,talentCategory:"mixed",preferredTalent:"",notes:"Artist is nearly finalized. Need tight ops around travel, call-sheet, VIP movement, and stage timing."},
    {name:"Sana Patel",email:"sana@auroratech.com",phone:"+91-9999999995",organization:"Aurora Tech",eventType:"brand_launch",serviceNeed:"celebrity-booking",eventCity:"Bengaluru",eventDate:"2026-07-30",guests:650,budget:1600000,talentCategory:"influencers",preferredTalent:"Sana Qureshi",notes:"Creator amplification plus a recognizable face for the reveal."}
  ].map((lead,index)=>normalizeLead(lead,index)));
  write(KEYS.talentStatus,{"aarav-malhotra":"Available","meera-kapoor":"Hold","dj-nyra":"Available","kian-vale":"Touring","dr-rhea-sen":"Available","nikhil-arora":"Available","sana-qureshi":"Hold","vihaan-khanna":"Available"});
  write(KEYS.analytics,{pageViews:{trance:148,talent:63,events:41,admin:17,celebrity:29,"college-fest":24,"corporate-events":22},ctaClicks:37,bookings:5,estimatorRuns:26,chatClicks:19,rosterSearches:14,exports:{leads:0,dashboard:0},serviceViews:{"celebrity-booking":21,"college-fest-management":16,"corporate-events":14,"guest-lectures":11,"artist-coordination":8},lastUpdated:new Date().toISOString()});
}

function exportLeads(){updateAnalytics((a)=>{a.exports.leads+=1;}); download("trance-leads.json",readLeads());}
function exportDashboard(){
  const leads=readLeads();
  const metrics={totalLeads:leads.length,pipeline:leads.reduce((sum,lead)=>sum+lead.budget,0),hotLeads:leads.filter((lead)=>lead.temperature==="Hot").length,averageBudget:leads.length?Math.round(leads.reduce((sum,lead)=>sum+lead.budget,0)/leads.length):0};
  updateAnalytics((a)=>{a.exports.dashboard+=1;});
  download("trance-dashboard.json",{exportedAt:new Date().toISOString(),metrics,analytics:readAnalytics(),talentStatus:read(KEYS.talentStatus,{})});
}
function download(name,data){const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=name; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);}

function trackPage(){updateAnalytics((a)=>{const key=pageKey(); a.pageViews[key]=(a.pageViews[key]||0)+1;});}
function pageKey(){return (window.location.pathname.split("/").pop()||"trance.html").replace(/\.html$/,"")||"trance";}
function readLeads(){const leads=read(KEYS.leads,[]); return Array.isArray(leads)?leads.map((lead,index)=>normalizeLead(lead,index)):[];}
function normalizeLead(lead,index){const item={id:lead.id||"lead-"+index,name:String(lead.name||"Unnamed lead"),email:String(lead.email||""),phone:String(lead.phone||""),organization:String(lead.organization||""),eventType:normalizeEventType(lead.eventType),serviceNeed:normalizeService(lead.serviceNeed||lead.service),eventCity:String(lead.eventCity||lead.city||""),eventDate:String(lead.eventDate||lead.date||""),guests:number(lead.guests||lead.expectedGuests),budget:number(lead.budget),talentCategory:normalizeCategory(lead.talentCategory),preferredTalent:String(lead.preferredTalent||lead.preferred||""),notes:String(lead.notes||""),submittedAt:String(lead.submittedAt||lead.ts||new Date().toISOString())}; item.score=Number.isFinite(lead.score)?lead.score:leadScore(item); item.temperature=lead.temperature||temperature(item.score); item.recommendedTalent=Array.isArray(lead.recommendedTalent)?lead.recommendedTalent:matchTalent(item.talentCategory,item.budget,item.eventType).map((talent)=>talent.name); return item;}
function leadScore(lead){let score=20; if(lead.budget>=1500000) score+=30; else if(lead.budget>=700000) score+=22; else if(lead.budget>=300000) score+=14; if(lead.guests>=3000) score+=18; else if(lead.guests>=800) score+=12; if(lead.organization) score+=8; if(lead.preferredTalent) score+=10; if(lead.notes.length>60) score+=8; if(lead.eventDate) score+=6; return Math.max(10,Math.min(100,score));}
function temperature(score){if(score>=70) return "Hot"; if(score>=45) return "Warm"; return "Cold";}
function matchTalent(category,budget,eventType){const key=normalizeCategory(category); const wanted=eventLabel(eventType); return TALENT.filter((talent)=>{const same=key==="mixed"||talent.category===key; const near=!budget||talent.fee<=budget*1.1||talent.fee<=budget+200000; const format=talent.formats.includes(wanted); return same&&(near||format);}).sort((a,b)=>Math.abs(a.fee-budget)-Math.abs(b.fee-budget)).slice(0,3);}
function serviceForEvent(eventType){return {college_fest:"College Fest Management",corporate_event:"Corporate Events",guest_lecture:"Guest Lectures",brand_launch:"Celebrity Booking",private_concert:"Artist Coordination",institutional_event:"Guest Lectures"}[normalizeEventType(eventType)]||"Celebrity Booking";}
function bookingLink(prefill){const params=new URLSearchParams(); Object.entries(prefill).forEach(([key,value])=>{if(value) params.set(key,value);}); return "trance.html"+(params.toString()?"?"+params.toString():"")+"#book";}
function blankAnalytics(){return {pageViews:{},ctaClicks:0,bookings:0,estimatorRuns:0,chatClicks:0,rosterSearches:0,exports:{leads:0,dashboard:0},serviceViews:{},lastUpdated:""};}
function readAnalytics(){const analytics=read(KEYS.analytics,blankAnalytics()); return {...blankAnalytics(),...analytics,pageViews:{...(analytics.pageViews||{})},exports:{...blankAnalytics().exports,...(analytics.exports||{})},serviceViews:{...(analytics.serviceViews||{})}};}
function updateAnalytics(mutator){const analytics=readAnalytics(); mutator(analytics); analytics.lastUpdated=new Date().toISOString(); write(KEYS.analytics,analytics);}
function getTalentStatus(id,fallback){return read(KEYS.talentStatus,{})[id]||fallback||"Available";}
function setTalentStatus(id,status){const map=read(KEYS.talentStatus,{}); map[id]=status; write(KEYS.talentStatus,map);}
function read(key,fallback){try{const raw=localStorage.getItem(key); return raw?JSON.parse(raw):fallback;}catch(error){return fallback;}}
function write(key,value){localStorage.setItem(key,JSON.stringify(value));}
function normalizeEventType(value){const raw=String(value||"").trim().toLowerCase(); return {"college fest":"college_fest",college_fest:"college_fest",corporate:"corporate_event","corporate event":"corporate_event",corporate_event:"corporate_event","guest lecture":"guest_lecture",guest_lecture:"guest_lecture","brand launch":"brand_launch",brand_launch:"brand_launch","private concert":"private_concert",private_concert:"private_concert","institutional event":"institutional_event",institutional_event:"institutional_event"}[raw]||"college_fest";}
function normalizeCategory(value){const raw=String(value||"").trim().toLowerCase(); return {actor:"actors",actors:"actors",dj:"djs",djs:"djs",speaker:"speakers",speakers:"speakers",influencer:"influencers",influencers:"influencers",mixed:"mixed","mixed talent lineup":"mixed"}[raw]||"actors";}
function normalizeService(value){const raw=String(value||"").trim().toLowerCase(); return SERVICES.find((item)=>item.slug===raw)?.slug||"celebrity-booking";}
function eventLabel(value){return EVENT_LABELS[normalizeEventType(value)]||"College Fest";}
function categoryLabel(value){return CATEGORY_LABELS[normalizeCategory(value)]||"Actors";}
function serviceLabel(slug){return SERVICES.find((item)=>item.slug===slug)?.title||"Celebrity Booking";}
function number(value){const parsed=Number(value); return Number.isFinite(parsed)?parsed:0;}
function round(value,step){return Math.max(step,Math.round(value/step)*step);}
function money(value){return new Intl.NumberFormat("en-IN",{maximumFractionDigits:0}).format(Number(value)||0);}
function dateLabel(value){const date=new Date(value); if(Number.isNaN(date.getTime())) return "Unknown"; return new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"short",year:"numeric"}).format(date);}
function slugify(value){return String(value||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
function sumValues(object){return Object.values(object||{}).reduce((sum,value)=>sum+value,0);}
function topKey(object){return Object.keys(object||{}).sort((a,b)=>(object[b]||0)-(object[a]||0))[0];}
function safe(value){return String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}

function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    threshold: 0.12
  });

  elements.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initRevealAnimations();
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    if (href && !href.startsWith("#") && !href.startsWith("javascript")) {
      e.preventDefault();
      document.body.classList.add("is-navigating");

      setTimeout(() => {
        window.location.href = href;
      }, 200);
    }
  });
});