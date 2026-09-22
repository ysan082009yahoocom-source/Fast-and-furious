const EMERGENCIES = [
  {
    id: "severe-bleeding",
    title: "Severe Bleeding",
    icon: "🩸",
    keywords: ["bleeding", "blood", "wound", "cut", "hemorrhage", "gash", "laceration"],
    summary: "Control heavy blood loss from a wound using pressure and dressings.",
    callEmergency: [
      "Blood is spurting or flowing steadily from the wound",
      "Bleeding does not stop after 10 minutes of firm pressure",
      "The wound is large, deep, or caused by a major injury",
      "The person shows signs of shock (pale, clammy, confused, weak)"
    ],
    symptoms: [
      "Steady or spurting flow of blood",
      "Blood soaking through clothing or bandages",
      "Pale, cool, clammy skin",
      "Dizziness, weakness, or confusion",
      "Rapid heart rate or shallow breathing"
    ],
    steps: [
      "Put on disposable gloves if available and expose the wound.",
      "Apply firm, direct pressure with a sterile gauze pad or clean cloth.",
      "If blood soaks through, add more gauze on top — do not remove the first layer.",
      "If the wound is on an arm or leg and no fracture is suspected, raise it above heart level.",
      "Secure the dressing firmly with a bandage once bleeding is controlled.",
      "Keep the person warm, still, and calm, and monitor for signs of shock.",
      "Continue firm pressure until emergency help arrives if bleeding is severe."
    ],
    medKit: ["Disposable gloves", "Sterile gauze pads", "Roller bandage", "Adhesive tape", "Trauma dressing", "Antiseptic wipes", "Emergency blanket"],
    precautions: [
      "Do not remove an embedded object — pack around it and apply pressure beside it.",
      "Do not remove the first blood-soaked dressing; add layers on top.",
      "Do not use a tourniquet unless you are trained and bleeding is life-threatening."
    ]
  },
  {
    id: "burns",
    title: "Burns & Scalds",
    icon: "🔥",
    keywords: ["burn", "scald", "fire", "heat", "blister", "hot water", "steam"],
    summary: "Cool the burn, protect the skin, and prevent infection.",
    callEmergency: [
      "The burn is large, deep, or affects the face, hands, feet, joints, or genitals",
      "The burn is chemical or electrical",
      "The person has difficulty breathing or inhaled smoke",
      "The burn is on a child, infant, or older adult",
      "Signs of shock are present"
    ],
    symptoms: [
      "Red, painful skin (superficial burn)",
      "Blisters or wet, shiny skin (partial-thickness burn)",
      "White, charred, or numb skin (deep burn)",
      "Swelling around the burned area",
      "Difficulty breathing if smoke was inhaled"
    ],
    steps: [
      "Move the person away from the source of the burn.",
      "Cool the burn under cool (not cold) running water for 10–20 minutes.",
      "Remove rings, watches, or tight clothing near the burn before swelling starts.",
      "Cover the burn loosely with a sterile non-stick dressing or clean cling film.",
      "Protect the person from cold and monitor for shock.",
      "Do not break blisters — leave them intact to reduce infection risk."
    ],
    medKit: ["Burn gel / hydrogel dressing", "Sterile non-stick dressings", "Cling film", "Cool running water", "Disposable gloves", "Emergency blanket"],
    precautions: [
      "Do not apply ice, butter, toothpaste, or creams to a burn.",
      "Do not break blisters or remove clothing stuck to the burn.",
      "Do not use adhesive dressings directly on burned skin."
    ]
  },
  {
    id: "choking-adult",
    title: "Choking (Adult & Child)",
    icon: "🫁",
    keywords: ["choking", "airway", "blocked", "heimlich", "abdominal thrust", "cannot breathe"],
    summary: "Clear a blocked airway with back blows and abdominal thrusts.",
    callEmergency: [
      "The person becomes unresponsive",
      "You cannot clear the blockage after several attempts",
      "The person stops breathing"
    ],
    symptoms: [
      "Clutching the throat with one or both hands",
      "Inability to speak, cough, or breathe",
      "Noisy or silent breathing attempts",
      "Face turning red, then pale or blue",
      "Panic or loss of consciousness"
    ],
    steps: [
      "Ask: “Are you choking?” If they can cough or speak, encourage coughing.",
      "If they cannot cough or breathe, lean them forward and give up to 5 sharp back blows between the shoulder blades.",
      "If unsuccessful, stand behind them and give up to 5 abdominal thrusts (Heimlich maneuver).",
      "Alternate 5 back blows and 5 abdominal thrusts until the object is expelled.",
      "If the person becomes unresponsive, start CPR and call emergency services.",
      "After the object is expelled, keep the person still and seek medical evaluation."
    ],
    medKit: ["CPR face shield", "Gloves", "Phone to call emergency services"],
    precautions: [
      "Do not perform abdominal thrusts on a pregnant person — use chest thrusts.",
      "Do not put your fingers in the mouth to blindly sweep for an object.",
      "Do not ignore a partial blockage — monitor closely and seek help if it worsens."
    ]
  },

  {
    id: "cpr",
    title: "CPR / Cardiac Arrest",
    icon: "❤️",
    keywords: ["cpr", "cardiac", "heart", "arrest", "unresponsive", "not breathing", "chest compressions"],
    summary: "Keep blood flowing with chest compressions and rescue breaths.",
    callEmergency: [
      "The person is unresponsive and not breathing normally — call immediately before starting CPR"
    ],
    symptoms: [
      "Sudden collapse",
      "Unresponsiveness to voice or touch",
      "No breathing or only gasping (agonal breathing)",
      "No pulse or signs of circulation"
    ],
    steps: [
      "Check the scene for safety, then tap and shout to check responsiveness.",
      "Call emergency services and get an AED if available.",
      "Place the heel of one hand on the center of the chest; place the other hand on top and interlock fingers.",
      "Push hard and fast — at least 5 cm (2 inches) deep at 100–120 compressions per minute.",
      "Allow the chest to fully recoil between compressions.",
      "If trained, give 2 rescue breaths after every 30 compressions; otherwise continue hands-only CPR.",
      "Use an AED as soon as it arrives and follow its voice prompts.",
      "Continue until emergency help arrives or the person starts breathing normally."
    ],
    medKit: ["CPR face shield", "Pocket mask", "AED (if available)", "Gloves"],
    precautions: [
      "Do not stop compressions except to use an AED or if the person clearly recovers.",
      "Do not delay compressions to check for a pulse for more than 10 seconds.",
      "Do not perform rescue breaths if untrained or unwilling — hands-only CPR still saves lives."
    ]
  },
  {
  "id": "Stomach Ache",
  "title": "Stomach Ache/Pain",
  "icon": "🤢",
  "keywords": ["stomach ache", "belly pain", "abdominal cramps", "indigestion", "cramping", "heartburn", "bloating"],
  "summary": "Rest comfortably, stay hydrated, and monitor for severe symptoms that require emergency medical care.",
  "callEmergency": [
    "The pain is sudden, severe, and unbearable.",
    "The abdomen is rigid, hard, or highly sensitive to the touch.",
    "Accompanied by persistent vomiting, vomiting blood, or bloody/black stools.",
    "Accompanied by high fever, dizziness, fainting, or difficulty breathing."
  ],
  "symptoms": [
    "Dull ache, sharp pain, or burning sensation in the abdomen",
    "Abdominal cramping or bloating",
    "Nausea, vomiting, or loss of appetite",
    "Gas, indigestion, or changes in bowel movements"
  ],
  "steps": [
    "Have the person rest in a comfortable position, such as lying down with knees bent or slightly elevated.",
    "Loosen tight clothing around the waist and abdomen.",
    "Apply a warm compress or heating pad to the abdomen for 15-20 minutes to soothe cramps.",
    "Encourage slow sips of water, clear broths, or herbal teas like peppermint or ginger.",
    "Avoid giving solid foods, caffeine, alcohol, carbonated drinks, or dairy until the pain subsides.",
    "Monitor for any worsening signs or red flag symptoms that may indicate a surgical emergency like appendicitis."
  ],
  "medKit": ["Heating pad or warm compress", "Antacids (for indigestion)", "Electrolyte solutions", "Ginger or peppermint tea bags"],
  "precautions": [
    "Do not give aspirin, ibuprofen, or other NSAIDs without a doctor's advice, as they can irritate the stomach lining.",
    "Do not give any laxatives or enemas, especially if appendicitis is suspected.",
    "Do not force the person to eat if they are experiencing nausea or active pain.",
    "Do not ignore localized pain that migrates to the lower right side of the abdomen."
  ]
},
  {
    id: "fractures",
    title: "Fractures & Sprains",
    icon: "🦴",
    keywords: ["fracture", "broken bone", "sprain", "strain", "dislocation", "injury", "swelling"],
    summary: "Immobilize the injured area and reduce pain and swelling.",
    callEmergency: [
      "The bone is visible or piercing through the skin",
      "The limb is deformed, numb, cold, or turning blue",
      "The injury involves the head, neck, spine, or pelvis",
      "The person cannot move or bear weight on the limb"
    ],
    symptoms: [
      "Pain that worsens with movement",
      "Swelling, bruising, or deformity",
      "A snap or grinding sound at the time of injury",
      "Inability to move or bear weight",
      "Numbness or tingling below the injury"
    ],
    steps: [
      "Keep the person still and support the injured area in the position found.",
      "Apply a cold pack wrapped in cloth for up to 20 minutes to reduce swelling.",
      "For a suspected fracture, immobilize the joint above and below the injury with a splint or sling.",
      "For a sprain or strain, remember RICE: Rest, Ice, Compression, Elevation.",
      "Check circulation below the injury — warmth, color, and sensation.",
      "Treat for shock and seek medical help."
    ],
    medKit: ["Cold pack", "Triangular bandage", "Elastic bandage", "Splint / rigid support", "Adhesive tape", "Pain relief (if appropriate)"],
    precautions: [
      "Do not try to straighten a deformed limb or push a bone back in.",
      "Do not move a person with a suspected spine injury unless they are in danger.",
      "Do not apply ice directly to bare skin."
    ]
  },
  {
    id: "anaphylaxis",
    title: "Allergic Reaction (Anaphylaxis)",
    icon: "🐝",
    keywords: ["allergy", "anaphylaxis", "epinephrine", "epipen", "bee sting", "swelling", "hives"],
    summary: "Recognize a severe allergic reaction and use an epinephrine auto-injector.",
    callEmergency: [
      "Any signs of anaphylaxis are present — call immediately even if an auto-injector is used"
    ],
    symptoms: [
      "Swelling of the face, lips, tongue, or throat",
      "Difficulty breathing, wheezing, or tight chest",
      "Hives, redness, or widespread itching",
      "Dizziness, weak pulse, or fainting",
      "Nausea, vomiting, or stomach cramps",
      "Feeling of impending doom"
    ],
    steps: [
      "Call emergency services immediately.",
      "Ask if the person carries an epinephrine auto-injector (e.g., EpiPen).",
      "Help them use it: remove the safety cap and inject firmly into the outer mid-thigh.",
      "Have the person lie flat with legs raised — or sit up if breathing is difficult.",
      "If symptoms persist after 5 minutes and a second auto-injector is available, use it.",
      "Monitor breathing and start CPR if the person becomes unresponsive.",
      "Keep them lying down until emergency help arrives, even if they feel better."
    ],
    medKit: ["Epinephrine auto-injector (if prescribed)", "Antihistamine (mild reactions only)", "CPR face shield", "Gloves"],
    precautions: [
      "Do not wait to see if symptoms improve — anaphylaxis can worsen rapidly.",
      "Do not let the person stand or walk around after an injection.",
      "Do not use another person's auto-injector unless trained and authorized."
    ]
  },
  {
    id: "seizures",
    title: "Seizures",
    icon: "⚡",
    keywords: ["seizure", "convulsion", "fits", "epilepsy", "shaking", "unconscious"],
    summary: "Protect the person from injury while the seizure runs its course.",
    callEmergency: [
      "The seizure lasts longer than 5 minutes",
      "A second seizure follows immediately",
      "The person is injured, pregnant, or has diabetes",
      "It is the person's first seizure",
      "The person does not wake or breathe normally afterward"
    ],
    symptoms: [
      "Sudden collapse or loss of awareness",
      "Jerking or stiffening of the body",
      "Eyes rolling upward",
      "Foaming at the mouth or tongue biting",
      "Confusion or sleepiness after the seizure"
    ],
    steps: [
      "Note the time the seizure starts.",
      "Protect the head with something soft and clear away nearby objects.",
      "Loosen tight clothing around the neck.",
      "Gently roll the person onto their side when jerking stops to keep the airway clear.",
      "Stay with them until they are fully alert.",
      "Reassure them and check for injuries when the seizure ends."
    ],
    medKit: ["Soft padding", "Emergency blanket", "Gloves", "Phone to call emergency services"],
    precautions: [
      "Do not hold the person down or try to stop their movements.",
      "Do not put anything in their mouth.",
      "Do not offer food or drink until they are fully alert."
    ]
  },
  {
    id: "heat-stroke",
    title: "Heat Exhaustion & Heat Stroke",
    icon: "☀️",
    keywords: ["heat", "heat stroke", "heat exhaustion", "overheating", "dehydration", "hot weather"],
    summary: "Cool the person quickly and replace fluids if conscious.",
    callEmergency: [
      "The person is confused, agitated, or unconscious",
      "Body temperature is very high",
      "They stop sweating and the skin feels hot and dry",
      "Vomiting prevents fluid intake",
      "Symptoms do not improve within 30 minutes"
    ],
    symptoms: [
      "Heavy sweating, weakness, or dizziness",
      "Headache, nausea, or muscle cramps",
      "Hot, red, dry, or damp skin",
      "Rapid, strong pulse",
      "Confusion, slurred speech, or loss of consciousness"
    ],
    steps: [
      "Move the person to a cool, shaded place.",
      "Remove excess clothing.",
      "Cool rapidly: spray or sponge with cool water and fan them.",
      "Apply cold packs to the neck, armpits, and groin.",
      "If alert and not vomiting, give small sips of water or a sports drink.",
      "Monitor closely — if confusion or unconsciousness occurs, call emergency services."
    ],
    medKit: ["Cold pack", "Water / oral rehydration salts", "Cool cloth or spray bottle", "Emergency blanket (for shade)", "Thermometer"],
    precautions: [
      "Do not give fluids to someone who is confused or unconscious.",
      "Do not use ice-cold water immersion unless trained — cool gradually.",
      "Do not leave the person alone."
    ]
  },
  {
    id: "hypothermia",
    title: "Hypothermia",
    icon: "❄️",
    keywords: ["cold", "hypothermia", "freezing", "shivering", "low temperature", "frostbite"],
    summary: "Warm the person gradually and prevent further heat loss.",
    callEmergency: [
      "Shivering stops but the person remains cold",
      "The person is confused, drowsy, or unconscious",
      "Breathing is slow or shallow",
      "Body temperature is below 35°C (95°F)"
    ],
    symptoms: [
      "Shivering (which may stop in severe cases)",
      "Cold, pale, or blue-gray skin",
      "Slurred speech or confusion",
      "Drowsiness or exhaustion",
      "Slow, shallow breathing"
    ],
    steps: [
      "Move the person out of the cold and remove wet clothing.",
      "Wrap them in blankets, focusing on the head and torso first.",
      "Give warm, sweet, non-alcoholic drinks if they are alert and can swallow.",
      "Apply warm (not hot) packs to the chest, neck, and groin.",
      "Handle the person gently to avoid triggering heart rhythm problems.",
      "Monitor breathing and start CPR if they become unresponsive and are not breathing normally."
    ],
    medKit: ["Emergency blanket", "Warm blankets / sleeping bag", "Warm packs", "Warm non-alcoholic drink", "Dry clothing", "Thermometer"],
    precautions: [
      "Do not rub or massage cold limbs — this can cause further injury.",
      "Do not give alcohol or caffeine.",
      "Do not warm too quickly with hot water or direct heat.",
      "Do not assume a person with no signs of life cannot be saved — “not dead until warm and dead.”"
    ]
  },
  {
    id: "poisoning",
    title: "Poisoning",
    icon: "☠️",
    keywords: ["poison", "overdose", "chemical", "toxic", "ingested", "swallowed", "fumes"],
    summary: "Identify the poison and get expert help immediately.",
    callEmergency: [
      "The person is unconscious, having seizures, or having trouble breathing",
      "A large or unknown amount of poison was taken",
      "The poison is corrosive, chemical, or a suspected overdose"
    ],
    symptoms: [
      "Nausea, vomiting, or abdominal pain",
      "Burns or stains around the mouth",
      "Drowsiness, confusion, or seizures",
      "Difficulty breathing",
      "Empty pill bottles or chemical containers nearby"
    ],
    steps: [
      "Call emergency services or poison control immediately.",
      "Move the person to fresh air if poison was inhaled.",
      "If poison touched skin or eyes, rinse with running water for 15–20 minutes.",
      "Keep the person still and monitor breathing and responsiveness.",
      "Save the container, label, or sample of the poison for responders.",
      "Start CPR if the person becomes unresponsive and is not breathing normally."
    ],
    medKit: ["Gloves", "Phone to call poison control", "Water for rinsing", "CPR face shield"],
    precautions: [
      "Do not induce vomiting unless specifically told to by poison control.",
      "Do not give food or drink unless advised by a professional.",
      "Do not try to neutralize the poison with vinegar, lemon, or other home remedies."
    ]
  },
  {
    id: "stroke",
    title: "Stroke (FAST)",
    icon: "🧠",
    keywords: ["stroke", "face drooping", "arm weakness", "speech", "fast", "brain attack"],
    summary: "Spot a stroke with FAST and call for help immediately.",
    callEmergency: [
      "Any single FAST sign is present — call immediately, even if symptoms improve"
    ],
    symptoms: [
      "Face drooping on one side",
      "Arm weakness or numbness on one side",
      "Speech difficulty — slurred or unable to speak",
      "Sudden confusion or trouble understanding",
      "Sudden severe headache, dizziness, or vision problems"
    ],
    steps: [
      "Use FAST: Face — ask them to smile. Arm — ask them to raise both arms. Speech — ask them to repeat a simple sentence. Time — note when symptoms started.",
      "Call emergency services immediately if any sign is present.",
      "Note the time symptoms first appeared and share it with responders.",
      "Keep the person still with the head and shoulders slightly raised.",
      "Loosen tight clothing and keep them calm.",
      "Monitor breathing; start CPR if they become unresponsive and stop breathing normally.",
      "Do not give food, drink, or medication."
    ],
    medKit: ["Phone to call emergency services", "Emergency blanket", "Gloves", "CPR face shield"],
    precautions: [
      "Do not give aspirin or any medication unless instructed by a medical professional.",
      "Do not offer food or drink — swallowing may be impaired.",
      "Do not wait to see if symptoms improve. Time lost is brain lost."
    ]
  },
  {
    id: "shock",
    title: "Shock",
    icon: "🚨",
    keywords: ["shock", "circulation", "pale", "clammy", "low blood pressure", "collapse"],
    summary: "Support circulation by lying the person down and keeping them warm.",
    callEmergency: [
      "Shock is suspected after any serious injury, blood loss, infection, or allergic reaction"
    ],
    symptoms: [
      "Pale, cool, clammy skin",
      "Rapid, weak pulse",
      "Fast, shallow breathing",
      "Dizziness, weakness, or fainting",
      "Confusion, anxiety, or unresponsiveness"
    ],
    steps: [
      "Call emergency services.",
      "Lay the person flat on their back.",
      "Raise their legs about 30 cm (12 inches) if no head, neck, spine, or leg injury is suspected.",
      "Keep them warm with a blanket or emergency blanket.",
      "Loosen tight clothing around the neck, chest, and waist.",
      "Monitor breathing and responsiveness; start CPR if they stop breathing normally.",
      "Do not give food or drink."
    ],
    medKit: ["Emergency blanket", "Gloves", "CPR face shield", "Phone to call emergency services"],
    precautions: [
      "Do not raise the legs if there is a suspected head, neck, spine, or leg injury.",
      "Do not give fluids by mouth.",
      "Do not leave the person alone."
    ]
  },
  {
    id: "nausea",
    title: "Nausea",
    icon: "🤢",
    keywords: ["nausea", "vomiting", "queasy", "stomach", "dizziness", "sick", "motion sickness"],
    summary: "Ease queasiness with rest, fresh air, small sips of fluid, and bland foods.",
    callEmergency: [
      "Nausea is accompanied by severe chest pain or trouble breathing",
      "The person cannot keep any fluids down and shows signs of dehydration",
      "Vomiting is severe, bloody, or persistent",
      "The person is confused, unresponsive, or has a stiff neck and fever"
    ],
    symptoms: [
      "Queasy stomach or urge to vomit",
      "Inability to stand steady",
      "Head pain",
      "Dizziness, weakness, or confusion",
      "Pale, cool, clammy skin"
    ],
    steps: [
      "Rest and position: Have the person sit upright or slightly recline in a cool, quiet, well-ventilated area with fresh air. Avoid sudden movements.",
      "Provide fresh air: Open a window or use a fan to cool them down. Apply a cool, damp cloth to the back of their neck.",
      "Encourage slow hydration: Offer tiny, frequent sips of clear water, electrolyte solutions, or diluted juices once the initial wave passes. Do not let them gulp large amounts.",
      "Try natural remedies: Offer ginger or peppermint tea if available, or try wrist acupressure (pressing the P6 point on the inner wrist).",
      "Introduce bland foods slowly: If they can tolerate liquids and feel hungry, offer small amounts of plain, bland foods like the BRAT diet (bananas, rice, applesauce, toast) or plain crackers.",
      "Avoid fatty, spicy, or strong-smelling foods."
    ],
    medKit: ["Water or oral rehydration solution", "Crackers / bland snacks", "Ginger or peppermint tea", "Cool cloth", "Vomit bag or bowl"],
    precautions: [
      "Do not let them gulp large amounts of water at once.",
      "Do not offer heavy, fatty, spicy, or strong-smelling foods.",
      "Do not ignore repeated forceful vomiting, blood in vomit, or signs of dehydration — seek medical care."
    ]
  }
];
