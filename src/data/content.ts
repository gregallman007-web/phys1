import { Service, Condition, Clinician, Testimonial, FAQ, BlogArticle } from "../types";

export const SERVICES_DATA: Service[] = [
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    shortDescription: "Assessment, diagnosis, treatment, and rehabilitation tailored to the root cause of the problem.",
    overview: "Physiotherapy helps patients recover from injury, reduce pain, and improve how the body moves and performs. The clinic carries out a thorough assessment to understand the root cause and create a tailored treatment plan around the patient's goals.",
    whatToExpect: "Structured and progressive treatment combining targeted exercise, hands-on therapy, and expert advice.",
    reasonsToBook: [
      "Pain relief and symptom management",
      "Restoring daily movement and mobility",
      "Recovering from specific muscle or joint injuries",
      "Rebuilding long-term strength and joint confidence"
    ],
    treatmentMethods: [
      "Guided movement and progressive therapeutic exercise",
      "Manual therapy, tissue mobilization, and joint techniques",
      "Expert posture instruction and lifestyle modification advice",
      "Actionable self-management programs"
    ]
  },
  {
    id: "initial-assessment",
    name: "Initial Assessment",
    shortDescription: "The first appointment for understanding your pain, goals, and the best route into treatment.",
    overview: "The first appointment explores symptoms, lifestyle, goals, and movement patterns in detail so treatment can be shaped properly. We prioritize taking the time to understand the wider picture of your current state before rushing into solutions.",
    whatToExpect: "A symptom history review, physical movement assessment, clear explanation of likely causes, and an outline of the most appropriate next steps for you.",
    reasonsToBook: [
      "Unexplained aches or chronic muscle stiffness",
      "A new injury that hasn't started to resolve",
      "Uncertainty about what exercise is safe for you",
      "Desire for a realistic, structured plan to recover"
    ],
    treatmentMethods: [
      "Comprehensive client interview regarding pain and goals",
      "Active and passive movement analysis & diagnostic tests",
      "Initial hands-on symptom-modifying trial treatment",
      "Creation of your custom recovery map"
    ]
  },
  {
    id: "follow-up",
    name: "Follow Up",
    shortDescription: "Ongoing treatment and rehabilitation sessions designed to build progress over time.",
    overview: "Follow-up appointments continue the treatment plan, review progress, and adapt rehabilitation over time. This keeps your care fully aligned with your body's changing capacity.",
    whatToExpect: "Targeted treatment that stays relevant to your current progress and goals, avoiding static sheets of unmonitored exercises.",
    reasonsToBook: [
      "Progressive rehabilitation that scales with your recovery",
      "Technique adjustments for home exercises",
      "Hands-on therapy for persistent joint tightness",
      "Continuous performance coaching and physical testing"
    ],
    treatmentMethods: [
      "Exercise load adjustment and progression support",
      "Manual therapy techniques to aid joint mobility and ease pain",
      "Continuous objective reassessment of strength and range",
      "Goal setting refinement for sport, gym, or daily life"
    ]
  },
  {
    id: "acupuncture",
    name: "Acupuncture",
    shortDescription: "A treatment option that can help reduce pain, relax tight muscles, and support healing.",
    overview: "Fine, sterile needles may be used as part of a physiotherapy plan to reduce local pain, ease deep muscle tension, and trigger restorative circulation.",
    whatToExpect: "Used after a full clinical assessment and usually integrated alongside exercise therapy, hands-on treatment, and lifestyle advice.",
    reasonsToBook: [
      "Local pain relief for chronic low back or neck tension",
      "Reducing acute muscle spasm and trigger point pain",
      "Aiding relaxation and sleep quality affected by discomfort",
      "Alternative sensory stimulation for hypersensitive nerves"
    ],
    treatmentMethods: [
      "Dry needling of localized myofascial trigger points",
      "Classical acupuncture insertion along clinical paths",
      "Gentle electrical stimulation (where indicated)",
      "Integration into an active kinetic rehabilitation program"
    ]
  },
  {
    id: "sports-massage",
    name: "Sports Massage",
    shortDescription: "Hands-on treatment to ease muscle tension, improve mobility, and support recovery.",
    overview: "Hands-on treatment designed to relieve deep muscle tightness, improve regional blood flow, and support systemic recovery from sport, demanding training, or daily occupational stressors.",
    whatToExpect: "Deep tissue techniques, focal trigger point work, and passive muscle stretching tailored to your tolerance.",
    reasonsToBook: [
      "Promoting physical and mental recovery post-event",
      "Easing desk-bound postural muscle fatigue",
      "Improving flexibility and range before heavy training phases",
      "Relieving persistent muscular knots and soreness"
    ],
    treatmentMethods: [
      "Deep tissue stroking, kneading, and compression",
      "Active and passive soft tissue release techniques",
      "Myofascial stretching on the treatment table",
      "Targeted trigger point pressure therapy"
    ]
  },
  {
    id: "home-visits",
    name: "Home Visits",
    shortDescription: "Physiotherapy delivered in your own environment to improve movement, confidence, and independence.",
    overview: "Expert, assessment-led physiotherapy care brought directly into your home or living space to improve mobility, strength, safety, and functional independence.",
    whatToExpect: "Thorough assessment-led home treatment sessions combining practical situational strategies, targeted exercise, and family support guidance.",
    reasonsToBook: [
      "Post-operative weakness when traveling is uncomfortable",
      "Mobility limitations that make clinic visits difficult",
      "Desire to assess home safety and transfers (chairs, stairs)",
      "Customizing rehabilitation directly to your personal home environment"
    ],
    treatmentMethods: [
      "Environmental safe-movement and transfer evaluations",
      "Function-specific strength and balance retraining",
      "Adaptation of personal daily tasks to prevent fatigue",
      "Home-friendly exercise prescription without clinic machinery"
    ]
  }
];

export const CONDITIONS_DATA: Condition[] = [
  {
    id: "back-pain",
    name: "Back Pain",
    category: "Spine & Nerve",
    summary: "Support for stiffness, flare-ups, ongoing discomfort, and getting back to work, sleep, and daily movement with more confidence.",
    symptoms: [
      "Dull ache in the lower back or pelvic dynamic joints",
      "Stiffness on waking or after prolonged periods of sitting",
      "Localized spasms or shooting pain with specific movements",
      "Mild referred strain into the glutes or hips"
    ],
    whenToSeekHelp: "If your back pain persists beyond 2-3 weeks, flares up frequently under minor loads, or is significantly disrupting your sleep pattern, work tasks, or daily confidence.",
    treatmentApproach: "We begin with an assessment to find the primary driver of pain (movement intolerance, muscle fatigue) and build a progressive loading program that gradually exposes your spine to healthy movement and builds active, lasting support."
  },
  {
    id: "neck-pain",
    name: "Neck Pain",
    category: "Spine & Nerve",
    summary: "Assessment and treatment for neck pain, stiffness, headaches, and restricted movement that affect daily life or work.",
    symptoms: [
      "Dull ache or sharp catch when turning head sideways",
      "Stiff upper shoulder muscles and tightness at base of skull",
      "Tension headaches spreading forward to the forehead",
      "Discomfort when staring at computers or driving"
    ],
    whenToSeekHelp: "When neck tightness limits your ability to drive safely, creates frequent cervicogenic headaches, or doesn't improve with short-term relaxation or heat.",
    treatmentApproach: "Treatment focuses on joint mobility, targeted release of overworked neck and posture stabilizers, and progressive upper body strengthening to build physical tolerance for long sitting or active postural tasks."
  },
  {
    id: "sciatica",
    name: "Sciatica",
    category: "Spine & Nerve",
    summary: "Help with leg pain, nerve-related symptoms, and a staged plan for improving movement, confidence, and day-to-day function.",
    symptoms: [
      "Sharp, shooting, or hot pain traveling down the leg",
      "Tingling, pins and needles, or sensory changes in foot/calf",
      "Pain made worse by sitting, coughing, or bending forward",
      "A nagging, heavy hamstring-like discomfort"
    ],
    whenToSeekHelp: "If you have radiating leg discomfort that doesn't settle, or increases when attempting normal walking or resting positions. (Always seek urgent care for bowel/bladder changes or progressive leg weakness.)",
    treatmentApproach: "We use specific nerve-gliding work, local mechanical decompression movements, and low-load spinal core bracing to calms hyper-reactive nerve tissue and restore standard limb mechanics."
  },
  {
    id: "running-injuries",
    name: "Running Injuries",
    category: "Sport & Activity",
    summary: "Rehabilitation for overload, training-related pain, and return-to-running plans built around strength, control, and progression.",
    symptoms: [
      "Aching around the knee cap (Runner's Knee)",
      "Focal heel pain on the first morning steps (Plantar Fasciopathy)",
      "Shin splints or localized Achilles tendon soreness",
      "Tightness in outer hip or thigh during longer runs"
    ],
    whenToSeekHelp: "If running pain alters your natural running stride, lingers for hours after your session, or stops you from progressing your mileage program safely.",
    treatmentApproach: "We evaluate your current training loads, joint stability, and muscle capacity. We don't just tell you to 'stop running'—we design an active training modification plan, high-load localized strength training, and a progressive return-to-run structure."
  },
  {
    id: "post-operative-rehab",
    name: "Post-Operative Rehab",
    category: "Joint & Movement",
    summary: "Guided rehabilitation after surgery to rebuild strength, restore movement, and improve confidence at the right pace.",
    symptoms: [
      "Persistent muscular inhibition and local joint swelling",
      "Restricted range of motion in the artificial or reconstructed joint",
      "Fear of fully loading the operated limb",
      "Loss of natural balanced gait or posture rhythms"
    ],
    whenToSeekHelp: "Immediately post-discharge from the hospital or as advised by your orthopedic consultant. This ensures healing tissues are structured correctly and mobilization begins at the perfect time.",
    treatmentApproach: "We coordinate with surgical protocols to provide gentle swelling management, early joint mobilization, customized gait re-training, and gradual resistance training to systematically return you to full function."
  },
  {
    id: "persistent-pain",
    name: "Persistent Pain",
    category: "Lifestyle & Long-term",
    summary: "A calmer, more structured approach to longer-term pain with education, pacing, movement, and realistic recovery support.",
    symptoms: [
      "Extended pain lasting over 3-6 months (beyond normal wood healing time)",
      "Hypersensitivity to normal pressure, touch, or active movement",
      "Fluctuating fatigue levels and secondary sleep disruption",
      "Feeling trapped in a cycle of over-activity followed by massive flare-ups"
    ],
    whenToSeekHelp: "If your discomfort has become a steady background shadow in your life, causing you to withdraw from activities you love or feel anxious about movement in general.",
    treatmentApproach: "We shift focus from searching for a fragile quick-fix to systemic nervous system calm. By using careful pacing models, gentle progressive movement, sleep coaching, and pain neuro-education, we build safety pathways to desensitize tissues."
  }
];

export const CLINICIANS_DATA: Clinician[] = [
  {
    id: "cam",
    name: "Cam",
    role: "Lead Physiotherapist",
    teaser: "Musculoskeletal physiotherapist with extensive NHS and sports recovery experience.",
    summary: "Cam uses an active, person-centered approach grounded in biomechanics and clear, compassionate communication. He helps patients deeply understand their physical symptoms so they can construct a clear path back to work, sport, and daily life without unnecessary restriction.",
    qualifications: [
      "BSc (Hons) Physiotherapy",
      "MSc Musculoskeletal Advanced Practice (In-progress)",
      "HCPC Registered (PH112...",
      "CSP Member (Chartered Society of Physiotherapy)"
    ],
    expertise: [
      "Lower limb biomechanics & running gait analysis",
      "Advanced exercise rehabilitation & high-load sports conditioning",
      "Chronic lower back pain management & core conditioning",
      "Joint manipulation and mobilizations"
    ],
    personality: "Enthusiastic and practical. Cam believes in giving you absolute visual clarity about your recovery timeline so you never feel left in the dark."
  },
  {
    id: "stef",
    name: "Stef",
    role: "Physiotherapist",
    teaser: "MSK physiotherapist with a rich background across private, NHS, and competitive sporting arenas.",
    summary: "Stef believes that effective physiotherapy should be centered around thoughtful listening and progressive, realistic rehabilitation. She excels at breaking down complex mechanical diagnoses into practical everyday concepts so that she can support and inform patients from day one.",
    qualifications: [
      "BSc (Hons) Physiotherapy",
      "Certified APPI Pilates Instructor",
      "HCPC Registered",
      "CSP Member"
    ],
    expertise: [
      "Post-operative knee and hip joint rehabilitation",
      "Clinical Pilates & core mobility instruction",
      "Hand and upper extremity complex injuries",
      "Soft tissue mobilization & trigger-point dry needling"
    ],
    personality: "Calm, reassuring, and highly detail-oriented. Stef is dedicated to creating a supportive, pacing-focused atmosphere where you can rebuild movement confidence slowly and steadily."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "Clear explanation, a well-structured plan, and the confidence to return to normal activity after months of back pain.",
    patientName: "David M.",
    condition: "Back Pain Patient",
    rating: 5,
    initial: "D"
  },
  {
    quote: "A thorough assessment, reassuring communication, and a rehab plan that felt genuinely tailored to my running goals.",
    patientName: "Sarah K.",
    condition: "Running Injury Patient",
    rating: 5,
    initial: "S"
  },
  {
    quote: "Friendly, knowledgeable care with treatment that felt practical, focused, and instantly effective on my stiff neck.",
    patientName: "James L.",
    condition: "Neck Pain & Headaches",
    rating: 5,
    initial: "J"
  }
];

export const FAQS_DATA: FAQ[] = [
  {
    question: "Do I need a GP referral before booking?",
    answer: "No. You do not need a GP referral to be seen at Blackwater Physiotherapy. You can book an Initial Assessment directly online or over the phone as a self-paying patient."
  },
  {
    question: "What happens at my first appointment?",
    answer: "Your initial appointment is an assessment. We spend time discussing your physical symptoms, medical history, and personal movement goals. We will perform a physical movement assessment to examine your strength, mobility, and symptom triggers, explain what is occurring, and start a treatment trial plus a clear next-step rehabilitation plan."
  },
  {
    question: "What should I wear to my appointment?",
    answer: "Wear comfortable, loose-fitting clothing that allows you to move easily. For a lower limb assessment (knees, hips, gait), wearing shorts is highly recommended. For neck or upper back assessments, a vest top is helpful so we can visually evaluate postural bone and muscle patterns."
  },
  {
    question: "How many sessions will I need?",
    answer: "This varies significantly depending on your condition, history, and goals. Following your Initial Assessment, we will map out a realistic estimation. Some acute strains are managed in 2-4 sessions, while complex post-operative rehab or long-term back recovery can take 6-10 sessions scheduled over weeks."
  },
  {
    question: "Is car parking available at the clinic?",
    answer: "Yes, free off-street customer parking is available directly outside the clinic at the Old Iron Works Gym in Essex."
  },
  {
    question: "Do you accept insurance patients?",
    answer: "Yes. Blackwater Physiotherapy is recognized by major health insurance providers (including AXA, Bupa, and others). Please check with your provider first, obtain a pre-authorization code, and let us know prior to booking your appointment so we can set up secure invoicing."
  }
];

export const BLOG_DATA: BlogArticle[] = [
  {
    slug: "how-physiotherapy-helps-back-pain",
    title: "How physiotherapy can help with back pain",
    category: "Back Pain",
    readTime: "5 min read",
    date: "May 12, 2026",
    excerpt: "Back pain is common and often responds well to early, active guidance. Discover how an assessment-led plan gets you moving faster.",
    answerFirstSummary: "Physiotherapy helps back pain by first identifying the likely physical and postural drivers of your discomfort, desensitizing reactive muscles with focused manual therapy, and teaching you a tailored progressive movement program. It is about restoring your movement confidence, not just resting.",
    keyTakeaways: [
      "Early guidance helps prevent back pain from becoming long-term or recurring.",
      "Thorough clinical assessment rules out serious conditions and isolates pain triggers.",
      "Treatment combines hands-on support, clear core movement, and gradual loading.",
      "Complete rest is rarely effective; guided active movement is the gold standard."
    ],
    sections: [
      {
        title: "What does treatment for back pain involve?",
        content: "Initially, our main goal is finding movement positions that calm down muscle spasms. This can involve comfortable posture variations, low-impact trunk movements, and light manual therapy or acupuncture. As your sensitivity reduces, we transition you to active strength training—helping you lift objects, bend comfortably, and support your spine with muscular resilience."
      },
      {
        title: "How long does back recovery take?",
        content: "For acute episodes or mild muscle strain, mobility often improves dramatically within 2 to 4 weeks. For more complex disc-related or joint issues, a complete rebuilding phase takes 6 to 12 weeks of steady progress. The important thing is maintaining consistency with your specified exercise map."
      },
      {
        title: "When should you book an assessment?",
        content: "If your back discomfort has been lingering for more than 2 weeks, is waking you up from sleep, or starts shooting discomfort down into your thigh or calf, obtaining a professional clinical assessment is the most constructive choice. (Seek immediate emergency medical care if you experience leg weakness, a sudden loss of bowel/bladder control, or saddle numbness.)"
      }
    ]
  },
  {
    slug: "what-happens-at-an-initial-assessment",
    title: "What happens at an initial assessment?",
    category: "Appointments",
    readTime: "4 min read",
    date: "April 28, 2026",
    excerpt: "Unsure what to expect on your first visit? Learn how we conduct our evaluation to ensure your treatment is safe and highly targeted.",
    answerFirstSummary: "Your first appointment is entirely about understanding the wider physical picture. It's an unhurried session designed to explore your medical history, current movement tolerances, and specific life goals, culminating in a clear, written next-step recovery plan.",
    keyTakeaways: [
      "No rushed assessments—you get dedicated face-to-face clinical attention.",
      "A movement diagnostic evaluates joint stability, muscle strength, and gait patterns.",
      "You will receive a clear, plain-language description of your physical problem.",
      "A tailored exercise load is trial-tested on the first day to verify comfort."
    ],
    sections: [
      {
        title: "Will I receive treatment on the first visit?",
        content: "Yes. Once the physical history and movement testing are completed and we have safely diagnosed the problem, we will carry out an initial symptom-modifying trial. This can be hands-on stretching, joint mobilizations, soft-tissue massage, or safe initial active exercises. This helps us see how your nerves and muscles respond that very day."
      },
      {
        title: "What should you bring to make things easy?",
        content: "Bring details of any medications you are taking, plus any discharge notes or scan results (MRI/X-ray) from previous advisors. Ensure you wear comfortable attire like sports clothing so we can safely examine the joint structures."
      },
      {
        title: "How does the follow-up plan work?",
        content: "Before you leave, we'll outline a written next-step plan showing how many sessions we recommend, the direct goals for each stage, and a clear self-care routine you can do at home. That way, you leave with complete confidence in what happens next."
      }
    ]
  },
  {
    slug: "sports-massage-vs-physiotherapy",
    title: "Sports massage vs physiotherapy: which is right for you?",
    category: "Treatment Options",
    readTime: "6 min read",
    date: "March 15, 2026",
    excerpt: "Confused about whether you need relaxation massage or clinical physiotherapy? Let's break down the goals and use-cases for each.",
    answerFirstSummary: "Sports massage is a specialized manual therapy to reduce muscle stiffness, improve local blood flow, and aid recovery. Clinical physiotherapy, however, is an entire system of assessment, diagnosis, nerve and joint treatment, and progressive exercise prescription to resolve underlying injury and pain.",
    keyTakeaways: [
      "Sports massage is great for occupational stiffness, physical recovery, and pre-event warmup.",
      "Physiotherapy is necessary if you are managing a structural injury, radiating nerve pain, or severe weakness.",
      "Both can overlap—massages can reduce tension while physiotherapy corrects the movement faults.",
      "If you are experiencing active, sharp, or persistent pain, always start with a Physiotherapy Assessment."
    ],
    sections: [
      {
        title: "When is Sports Massage the best route?",
        content: "If you have tight, tired shoulder muscles from working at a laptop, have high soreness following heavy gym sessions or running regimes, or want to gain immediate muscular relaxation. It is a relaxing, tactile-focused therapy designed to stimulate recovery and circulation in healthy structures."
      },
      {
        title: "When is Physiotherapy absolutely necessary?",
        content: "Physiotherapy is required when tissue integrity is affected. This includes healing from a muscle tear, ligament sprain, recovering from shoulder/knee surgery, managing arthritis stiffness, or when pain is shooting down limbs. It requires clinical reasoning, progress metrics, and loading modification."
      },
      {
        title: "How they integrate at Blackwater",
        content: "At our clinic, we use both therapies side-by-side. Our physiotherapists can use deep massage during recovery phases to ease localized protective splinting, and we can advise tight sports massage clients when a clinical exercise plan is needed to build a joint's tolerance to avoid recurring strain."
      }
    ]
  }
];

export const COMPARISON_DATA = [
  {
    metric: "Our Clinical Focus",
    blackwater: "A holistic, person-centered approach",
    traditional: "Treating the isolated symptom, not the complete person"
  },
  {
    metric: "Core Strategy",
    blackwater: "Goal-focused, tailored active rehabilitation maps",
    traditional: "A generic, 'one-size-fits-all' static photocopied exercise sheet"
  },
  {
    metric: "Your Experience",
    blackwater: "Ample focus, space, and clinical time to feel heard",
    traditional: "Rushed, high-turnover 'in-and-out' consultations"
  },
  {
    metric: "Rehab Journey",
    blackwater: "Continuous remote advisory support between appointments",
    traditional: "No contact or monitoring once the session ends"
  },
  {
    metric: "Aim and Outcome",
    blackwater: "Designed for stable, lasting, sustainable movement confidence",
    traditional: "Reliance on repetitive, short-term pain-masking fixes"
  },
  {
    metric: "Progress Monitoring",
    blackwater: "Rigorous objective tracking of strength and joint ranges",
    traditional: "No clear diagnostic progress tracking or final outcome metrics"
  }
];
