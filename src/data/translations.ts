export type Language = "en" | "te";

type TranslationFile = {
  nav: {
    home: string;
    services: string;
    remedies: string;
    about: string;
    contact: string;
  };
  buttons: {
    bookConsultation: string;
    consultWhatsApp: string;
    exploreServices: string;
    inquireAvailability: string;
    bookThisService: string;
    sendWhatsApp: string;
    sendEmail: string;
    watchVideos: string;
    readMore: string;
    viewAllServices: string;
    learnMore: string;
    bookSession: string;
    getGuidance: string;
  };
  footer: {
    heading: string;
    address: string;
    officeHours: string;
    quickLinks: string;
    contact: string;
    youtube: string;
    copyright: string;
  };
  common: {
    trustedGuidance: string;
    specialisation: string;
    nriCare: string;
    remedies: string;
    globalConsultations: string;
    authenticPersonal: string;
    coreServices: string;
    clientVoices: string;
    viewAllServices: string;
  };
  home: {
    eyebrow: string;
    title: string;
    headline: string;
    subtitle: string;
    legacy: string;
    trustBadges: Array<{ value: string; label: string }>;
    featuredServices: Array<{ title: string; description: string }>;
    testimonials: Array<{ name: string; quote: string }>;
    sectionTitle: string;
    sectionIntro: string;
    testimonialTitle: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    services: Array<{
      title: string;
      description: string;
      duration: string;
      mode: string;
      includes: string[];
    }>;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  remedies: {
    eyebrow: string;
    heading: string;
    intro: string;
    categories: string[];
    items: Array<{
      name: string;
      category: string;
      description: string;
    }>;
    cta: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    intro: string;
    bioOne: string;
    bioTwo: string;
    legacyTitle: string;
    legacyList: string[];
    bookSession: string;
    videoSectionLabel: string;
    videoSectionTitle: string;
    videos: Array<{ title: string; description: string }>;
  };
  contact: {
    heading: string;
    intro: string;
    bookingGuideTitle: string;
    bookingSteps: string[];
    learningTitle: string;
    form: {
      fullName: string;
      phone: string;
      type: string;
      mode: string;
      birthDetails: string;
      dob: string;
      tob: string;
      pob: string;
      message: string;
      messagePreview: string;
    };
    formOptions: string[];
    modeOptions: string[];
    placeholders: {
      fullName: string;
      phone: string;
      pob: string;
      message: string;
    };
    validation: {
      nameRequired: string;
      phoneRequired: string;
      dobRequired: string;
      tobRequired: string;
      pobRequired: string;
      messageRequired: string;
    };
    sendWhatsApp: string;
    sendEmail: string;
    success: string;
    error: string;
    emailConfigError: string;
    faqs: Array<{ question: string; answer: string }>;
    faqTitle: string;
  };
};

export const translations: Record<Language, TranslationFile> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      remedies: "Vastu & Remedies",
      about: "About & Videos",
      contact: "Contact",
    },
    buttons: {
      bookConsultation: "Book Consultation",
      consultWhatsApp: "Consult on WhatsApp",
      exploreServices: "Explore Services",
      inquireAvailability: "Inquire Availability",
      bookThisService: "Book This Service",
      sendWhatsApp: "Send Directly via WhatsApp",
      sendEmail: "Send via Email Backup",
      watchVideos: "Watch Videos",
      readMore: "Read More",
      viewAllServices: "View all services",
      learnMore: "Learn more",
      bookSession: "Book a Session",
      getGuidance: "Get Guidance",
    },
    footer: {
      heading: "Sri Sudarshan Vastu Jyothishalayam",
      address: "Bapatla (Dt), Cherukupalli (Md), Rajavolu (Village), AP 522259",
      officeHours: "Mon - Sat: 9:00 AM to 8:00 PM",
      quickLinks: "Quick Links",
      contact: "Contact",
      youtube: "YouTube Channel",
      copyright: "© 2026 Sri Sudarshan Vastu Jyothishalayam. All rights reserved.",
    },
    common: {
      trustedGuidance: "Trusted Guidance",
      specialisation: "Specialisation",
      nriCare: "NRI Care",
      remedies: "Remedies",
      globalConsultations: "Global Consultations",
      authenticPersonal: "Authentic & Personal",
      coreServices: "Core Services",
      clientVoices: "Client Voices",
      viewAllServices: "View all services",
    },
    home: {
      eyebrow: "Traditional Vedic Guidance",
      title: "Divine guidance for life, prosperity, and harmony.",
      headline: "Sri Vinjamuri Rajendra Prasad garu",
      subtitle:
        "A trusted spiritual guide for Vedic Astrology, Vastu Shastra, Palmistry, and remedial practices. Every consultation is designed to help families, businesses, and seekers understand their path with clarity, peace, and practical wisdom.",
      legacy:
        "Serving devotees, families, and NRI clients with time-tested wisdom, compassionate listening, and guidance that respects both tradition and daily life realities.",
      trustBadges: [
        { value: "28+", label: "Years of Experience" },
        { value: "15k+", label: "Global NRI & Indian Consultations" },
        { value: "100%", label: "Traditional Vedic Remedies" },
      ],
      featuredServices: [
        {
          title: "Vedic Astrology",
          description:
            "Detailed horoscope reading, planetary insight, and dosha guidance to understand career, marriage, health, finances, and life direction with clarity.",
        },
        {
          title: "Vastu Shastra",
          description:
            "Practical guidance for homes, offices, shops, and plots to harmonise energy flow, remove negative influences, and invite peace, balance, and growth.",
        },
        {
          title: "Palmistry",
          description:
            "A deeper look into qualities, life patterns, strengths, and challenges through hand and face analysis, helping you understand your natural tendencies.",
        },
        {
          title: "Remedies",
          description:
            "Personalised recommendations through gemstones, rudraksha, yantras, and sacred rituals for protection, prosperity, and spiritual well-being.",
        },
      ],
      testimonials: [
        {
          name: "K. Suresh",
          quote:
            "The guidance was deeply personal and grounded in tradition. We received clarity for our home and family decisions.",
        },
        {
          name: "N. Devika",
          quote:
            "Beautifully explained, practical, and spiritually uplifting. The Vastu recommendations were easy to apply and highly effective.",
        },
        {
          name: "P. Kumar",
          quote:
            "A calm and thoughtful consultation that answered every concern with confidence and clarity.",
        },
      ],
      sectionTitle: "Divine support for every chapter of life",
      sectionIntro: "Core Services",
      testimonialTitle: "What families and clients say",
    },
    services: {
      eyebrow: "Sri Sudarshan",
      heading: "Consultation Services",
      intro: "Personalised remedies and spiritual guidance rooted in Vedic tradition.",
      services: [
        {
          title: "Horoscope & Kundli Analysis",
          description:
            "Detailed birth chart evaluation, planetary analysis, dosa assessment, and guidance grounded in classical Vedic principles.",
          duration: "45-60 mins",
          mode: "Online Video/Phone",
          includes: [
            "Birth chart interpretation",
            "Planetary dosha review",
            "Life guidance and remedial suggestions",
          ],
        },
        {
          title: "Residential & Commercial Vastu",
          description:
            "Comprehensive analysis of homes, offices, and commercial spaces with practical remedies for improved energy flow.",
          duration: "60 mins",
          mode: "In-Person / Online",
          includes: [
            "Property energy review",
            "Room/entrance analysis",
            "Corrective Vastu guidance",
          ],
        },
        {
          title: "Palmistry & Face Reading",
          description:
            "Hand and facial analysis through traditional methods to understand personality, resilience, and life patterns.",
          duration: "30-45 mins",
          mode: "Online Video/Phone",
          includes: [
            "Palm feature analysis",
            "Life pattern reading",
            "Practical recommendations",
          ],
        },
        {
          title: "Muhurtham & Marriage Matching",
          description:
            "Auspicious timing guidance, compatibility review, and family-centred decision support for important life events.",
          duration: "45 mins",
          mode: "Online / In-Person",
          includes: [
            "Muhurtham guidance",
            "Compatibility review",
            "Family-centric advice",
          ],
        },
        {
          title: "Vedic Homams & Yantras",
          description:
            "Custom remedial rituals, energized yantras, and homam guidance for peace, prosperity, and spiritual upliftment.",
          duration: "60-90 mins",
          mode: "In-Person / Online",
          includes: [
            "Spiritual remedy guidance",
            "Yantra recommendation",
            "Homam and ritual advice",
          ],
        },
      ],
      ctaTitle: "Need a tailored spiritual solution?",
      ctaText:
        "Share your concern and receive a personalised recommendation for rituals, remedies, or Vastu guidance.",
      ctaButton: "Book a Consultation",
    },
    remedies: {
      eyebrow: "Sacred Remedies",
      heading: "Vastu & Remedies",
      intro:
        "Authentic gemstones, Nepalese Rudraksha, energized Yantras, and Vedic homams for balance, protection, and spiritual harmony.",
      categories: ["All", "Gemstones", "Rudrakshas", "Yantras"],
      items: [
        {
          name: "Certified Navaratna Gemstones",
          category: "Gemstones",
          description:
            "Blessed and astrologically guided gemstones for planetary balance, harmony, and prosperity.",
        },
        {
          name: "Nepalese Rudraksha Malas",
          category: "Rudrakshas",
          description:
            "Sacred bead malas chosen for concentration, emotional steadiness, and positive spiritual energy.",
        },
        {
          name: "Energized Vastu Yantras",
          category: "Yantras",
          description:
            "Sacred geometric instruments designed to balance energetic flow in homes, shops, and workplaces.",
        },
        {
          name: "Dosha Nivarana Homams",
          category: "Gemstones",
          description:
            "Traditional fire rituals to support emotional balance, peace, and spiritual restoration.",
        },
        {
          name: "Gomed / Yellow Sapphire",
          category: "Gemstones",
          description:
            "Planetary stones recommended after careful chart study and consultation.",
        },
        {
          name: "Five Mukhi Rudraksha",
          category: "Rudrakshas",
          description:
            "A timeless Rudraksha for focus, courage, faith, and inner clarity.",
        },
        {
          name: "Sri Yantra & Kubera Yantra",
          category: "Yantras",
          description:
            "Powerful yantras for prosperity, harmony, and supportive energy flow in daily life.",
        },
      ],
      cta: "Inquire Availability",
    },
    about: {
      eyebrow: "Spiritual Heritage",
      heading: "About the Guru",
      intro: "A lineage of faith, discipline, and sacred wisdom.",
      bioOne:
        "Sri Vinjamuri Rajendra Prasad garu is a respected Vedic astrologer and Vastu advisor known for combining traditional wisdom with compassionate guidance. His consultations help families, business owners, and spiritual seekers align with cosmic rhythm through astrology, remedies, and practical Vastu balancing.",
      bioTwo:
        "Rooted in a disciplined spiritual lineage and years of practical experience, he brings a calm, honest, and deeply thoughtful approach to every consultation—whether for life guidance, property harmonisation, marriage decisions, or remedial rituals.",
      legacyTitle: "Legacy & Specialisation",
      legacyList: [
        "Vedic Astrology and Horoscope Consultation",
        "Vastu Shastra for homes, offices, and commercial spaces",
        "Palmistry and face analysis for life insight",
        "Gemstone, Yantra, and Rudraksha recommendations",
        "Muhurtham, marriage matching, and dosha guidance",
      ],
      bookSession: "Book a Session",
      videoSectionLabel: "Guidance Library",
      videoSectionTitle: "Astrology & Vastu Videos",
      videos: [
        {
          title: "Vastu Tips for New Homes",
          description: "Simple and effective guidance for shaping a balanced and supportive home environment.",
        },
        {
          title: "Astrology Guidance for Career Growth",
          description: "Career planning with awareness of planetary timing, discipline, and opportunity.",
        },
        {
          title: "Remedial Rituals & Daily Spiritual Practices",
          description: "Practical spiritual routines to encourage calmness, clarity, and positive energy.",
        },
        {
          title: "Marriage Matching and Muhurtham Guidance",
          description: "A respectful look at compatibility, timing, and family harmony for important milestones.",
        },
      ],
    },
    contact: {
      heading: "Consultation Request",
      intro: "Share your details and we will respond with the right guidance.",
      bookingGuideTitle: "How to book your consultation",
      bookingSteps: [
        "Share your concern and the required details in the form below.",
        "Choose the consultation type and mode that matches your need.",
        "Submit via WhatsApp or email backup and receive a response with spiritual guidance.",
      ],
      learningTitle: "Helpful Questions",
      form: {
        fullName: "Full Name",
        phone: "Phone / WhatsApp Number",
        type: "Consultation Type",
        mode: "Consultation Mode",
        birthDetails: "Birth Details",
        dob: "Date of Birth",
        tob: "Time of Birth",
        pob: "Place of Birth",
        message: "Specific Question / Message",
        messagePreview: "Live Message Preview",
      },
      formOptions: [
        "Astrology",
        "Vastu",
        "Palmistry",
        "Gemstone/Yantra",
        "Homam",
        "Marriage Matching",
      ],
      modeOptions: ["Online Phone/Video", "In-Person"],
      placeholders: {
        fullName: "Sri Vinjamuri Rajendra Prasad",
        phone: "+91 97045 27404",
        pob: "Rajavolu, Cherukupalli, Bapatla, Andhra Pradesh",
        message:
          "Please share your concern, goals, or any details related to your consultation.",
      },
      validation: {
        nameRequired: "Full name is required.",
        phoneRequired: "Phone or WhatsApp number is required.",
        dobRequired: "Date of birth is required.",
        tobRequired: "Time of birth is required.",
        pobRequired: "Place of birth is required.",
        messageRequired: "Please share your specific question or message.",
      },
      sendWhatsApp: "Send Directly via WhatsApp",
      sendEmail: "Send via Email Backup",
      success: "Your request has been sent successfully.",
      error: "Please complete the required fields before submitting.",
      emailConfigError:
        "Email backup is not configured. Please use WhatsApp for direct consultation.",
      faqs: [
        {
          question: "Do I need my birth details for every consultation?",
          answer:
            "Birth details are particularly important for astrology and marriage-related guidance. For Vastu, gemstone, and ritual queries, they may be requested only when relevant.",
        },
        {
          question: "Can I book a consultation online from another city or country?",
          answer:
            "Yes. Online consultations are available for most services, including astrology, palmistry, and detailed guidance by phone or video call.",
        },
        {
          question: "How do I know which remedy or ritual is suitable for me?",
          answer:
            "A personal consultation determines the appropriate remedy based on your chart, home conditions, and life circumstances. This ensures guidance remains respectful and individualised.",
        },
      ],
      faqTitle: "Frequently asked questions",
    },
  },
  te: {
    nav: {
      home: "ప్రధాన పేజీ",
      services: "సేవలు",
      remedies: "వాస్తు & ఉపాయం",
      about: "గురువు గురించి",
      contact: "సంప్రదించండి",
    },
    buttons: {
      bookConsultation: "కన్సల్టేషన్ బుక్ చేయండి",
      consultWhatsApp: "వాట్సాప్‌లో సంప్రదించండి",
      exploreServices: "సేవలను చూడండి",
      inquireAvailability: "లభ్యతను అడగండి",
      bookThisService: "ఈ సేవను బుక్ చేయండి",
      sendWhatsApp: "వాట్సాప్ ద్వారా పంపండి",
      sendEmail: "ఇమెయిల్ ద్వారా పంపండి",
      watchVideos: "వీడియోలు చూడండి",
      readMore: "మరింత చదవండి",
      viewAllServices: "సేవలను చూడండి",
      learnMore: "మరింత తెలుసుకోండి",
      bookSession: "సెషన్ బుక్ చేయండి",
      getGuidance: "మార్గదర్శకత్వం పొందండి",
    },
    footer: {
      heading: "శ్రీ సుదర్శన వాస్తు జ్యోతిషాలయం",
      address: "బాపట్ల (జిల్లా), చేర్కుపల్లి (మండలం), రాజవోలు (గ్రామం), AP 522259",
      officeHours: "సోమవారం - శనివారం: ఉదయం 9:00 నుండి సాయంత్రం 8:00 వరకు",
      quickLinks: "త్వరిత లింకులు",
      contact: "సంప్రదించండి",
      youtube: "యూట్యూబ్ ఛానెల్",
      copyright: "© 2026 శ్రీ సుదర్శన వాస్తు జ్యోతిషాలయం. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
    },
    common: {
      trustedGuidance: "విశ్వాసపూర్వక మార్గదర్శకత్వం",
      specialisation: "నిపుణత",
      nriCare: "NRI సహాయం",
      remedies: "ఉపాయాలు",
      globalConsultations: "గ్లోబల్ కన్సల్టేషన్స్",
      authenticPersonal: "అసలు & వ్యక్తిగత",
      coreServices: "ప్రధాన సేవలు",
      clientVoices: "క్లయింట్ వ్యాఖ్యలు",
      viewAllServices: "సేవలను చూడండి",
    },
    home: {
      eyebrow: "సాంప్రదాయక వేద మార్గదర్శకత్వం",
      title: "జీవితం, సంపద మరియు శాంతికి దైవిక మార్గదర్శకత్వం.",
      headline: "శ్రీ వివి. రాజేంద్ర ప్రసాద్ గారు",
      subtitle:
        "వేద జ్యోతిష్యం, వాస్తు శాస్త్రం, హస్తసాముద్రికం, మరియు ఉపాయాలపై విశ్వాసపూర్వకమైన మార్గదర్శకత్వం అందిస్తున్నాము. ప్రతి కన్సల్టేషన్ మీ బతుకులో స్పష్టత, ప్రశాంతత మరియు కార్యచరణాత్మక జ్ఞానాన్ని ఇవ్వడానికి రూపొందించబడింది.",
      legacy:
        "భక్తులు, కుటుంబాలు, మరియు NRI సందర్శకులకు సంప్రదాయ జ్ఞానం, సహానుభూతి, మరియు వ్యక్తిగత హృదయపూర్వక సూచనలు అందిస్తున్నాము.",
      trustBadges: [
        { value: "28+", label: "సంవత్సరాల అనుభవం" },
        { value: "15k+", label: "ప్రపంచవ్యాప్తంగా NRI & ఇండియన్ కన్సల్టేషన్స్" },
        { value: "100%", label: "సాంప్రదాయక వేద ఉపాయాలు" },
      ],
      featuredServices: [
        {
          title: "వేద జ్యోతిష్యం",
          description: "జన్మచార్ట్, గ్రహస్థితి మరియు దోష విశ్లేషణల ఆధారంగా జీవితం, ప్రేమ, వృత్తి, ధనం మరియు ఆరోగ్యంపై స్పష్టమైన దిశను అందించడం.",
        },
        {
          title: "వాస్తు శాస్త్రం",
          description: "ఇంటి, కార్యాలయం, వ్యాపార స్థలం మరియు స్థలాల శక్తి సమతుల్యతను చక్కదిద్దే పద్ధతులు, సర్దుబాటు సూచనలు మరియు శాంతి కేంద్రిత మార్గదర్శకత్వం.",
        },
        {
          title: "హస్తసాముద్రికం",
          description: "చేతుల ఆకారాలు, లక్షణాలు మరియు ముఖ వివరాల ద్వారా వ్యక్తిత్వం, బలాలు, బలహీనతలు మరియు జీవిత గమనం గురించి అర్థం చేసుకోవడం.",
        },
        {
          title: "ఉపాయాలు",
          description: "నవరత్నాలు, రుద్రాక్షలు, యంత్రాలు మరియు పవిత్ర ఆచారాల ద్వారా రక్షణ, సంపద, ప్రశాంతత మరియు ఆధ్యాత్మిక స్థిరత్వం అందించడం.",
        },
      ],
      testimonials: [
        {
          name: "కె. సురేష్",
          quote:
            "మా ఇంటి మరియు కుటుంబ నిర్ణయాలకు మార్గదర్శకత్వం చాలాా స్పష్టంగా, సాంప్రదాయబద్ధంగా మరియు విశ్వాసపూర్వకంగా అందింది.",
        },
        {
          name: "ఎన్. దేవిక",
          quote:
            "వాస్తు సలహాలు చాలా రీతి మరియు సాధ uncomplicatedగా ఉండి, ఇంటి శక్తి సమతుల్యతను సులభంగా అందించగలిగింది.",
        },
        {
          name: "పి. కుమార్",
          quote:
            "శాంతి, గంభీరత మరియు స్పష్టతతో సమాధానం ఇచ్చిన కన్సల్టేషన్ ఎంతో సంతోషకరంగా ఉంది.",
        },
      ],
      sectionTitle: "జీవిత ప్రతి అధ్యాయానికి ప్రశాంత దిశ",
      sectionIntro: "ప్రధాన సేవలు",
      testimonialTitle: "కుటుంబాలు మరియు క్లయింట్లు చెప్పిన మాటలు",
    },
    services: {
      eyebrow: "శ్రీ సుదర్శన",
      heading: "సేవల వివరాలు",
      intro: "వేద సంప్రదాయానికి ప్రతిస్పందించే వ్యక్తిగత మరియు సహజమైన మార్గదర్శకత్వం.",
      services: [
        {
          title: "జాతక పరిశీలన & కుండలి విశ్లేషణ",
          description:
            "జన్మచార్ట్, గ్రహస్థితి, దోష విశ్లేషణ మరియు జీవిత దిశను శాస్త్రీయ వేద నిబంధనల ఆధారంగా వివరంగా తెలియజేయడం.",
          duration: "45-60 నిమిషాలు",
          mode: "ఆన్‌లైన్ వీడియో/ఫోన్",
          includes: [
            "జన్మచార్ట్ అర్థం",
            "గ్రహ దోష పరిశీలన",
            "జీవిత మార్గదర్శకత్వం",
          ],
        },
        {
          title: "గృహ మరియు వ్యాపార వాస్తు",
          description:
            "ఇంటి, కార్యాలయం, వ్యాపార స్థలం వంటి చోట్ల శక్తి సమతుల్యత, దోష నివారణ మరియు సాధన మార్గదర్శకత్వం.",
          duration: "60 నిమిషాలు",
          mode: "మార్క్‌డ్ లో / ఆన్లైన్",
          includes: [
            "స్థలం శక్తి పరిశీలన",
            "ద్వారం మరియు గది విశ్లేషణ",
            "వాస్తు సర్దుబాటు సూచనలు",
          ],
        },
        {
          title: "హస్తసాముద్రికం & ముఖరీత్య విశ్లేషణ",
          description:
            "చేతుల చిహ్నాలు మరియు ముఖ లక్షణాలను సంప్రదాయపరంగా విశ్లేషించి వ్యక్తిత్వం, సమయం మరియు జీవిత నమూనాలను అర్థం చేసుకోవడం.",
          duration: "30-45 నిమిషాలు",
          mode: "ఆన్‌లైన్ వీడియో/ఫోన్",
          includes: [
            "చేతుల లక్షణ విశ్లేషణ",
            "జీవిత నమూనా అర్థం",
            "సాధన సూచనలు",
          ],
        },
        {
          title: "ముహుర్తం & వివాహ పొంతన",
          description:
            "సరైన సమయం, సరిపోలిక, మరియు కుటుంబ నిశ్చయాలకు అనుకూలమైన మార్గదర్శకత్వం.",
          duration: "45 నిమిషాలు",
          mode: "ఆన్‌లైన్ / వ్యక్తిగతంగా",
          includes: [
            "ముహుర్త నిర్ణయం",
            "పొంతన పరిశీలన",
            "కుటుంబ-కేంద్రిత సలహా",
          ],
        },
        {
          title: "వేద హోమాలు & యంత్రాలు",
          description:
            "స్వచ్ఛమైన మరియు విశ్వాసపూర్వక ఆధ్యాత్మిక విధానాలతో శాంతి, సంపద మరియు జీవితశ్రేయస్సుకు సహాయపడే హోమాలు మరియు యంత్రాలు.",
          duration: "60-90 నిమిషాలు",
          mode: "వ్యక్తిగతంగా / ఆన్లైన్",
          includes: [
            "ఆధ్యాత్మిక ఉపాయం",
            "యంత్ర సిఫార్సు",
            "హోమ మరియు ఆచార మార్గదర్శకత్వం",
          ],
        },
      ],
      ctaTitle: "మీ కోసం ప్రత్యేకమైన దైవిక సూచన కావాలా?",
      ctaText:
        "మీ సమస్యను వివరించండి, మరియు مناسبة గాను ఉపాయం, వాస్తు లేదా ఆచార సలహా అందుబాటులో ఉంటుంది.",
      ctaButton: "కన్సల్టేషన్ బుక్ చేయండి",
    },
    remedies: {
      eyebrow: "పవిత్ర ఉపాయాలు",
      heading: "వాస్తు & ఉపాయాలు",
      intro:
        "స్వచ్ఛమైన నవరత్నాలు, నేపాల్ రుద్రాక్షలు, energised యంత్రాలు మరియు వేద హోమాలతో శాంతి, శ్రేయస్సు మరియు ఆధ్యాత్మిక సమతుల్యతను పొందండి.",
      categories: ["అన్నీ", "నవరత్నాలు", "రుద్రాక్షలు", "యంత్రాలు"],
      items: [
        {
          name: "సర్టిఫైడ్ నవరత్నాలు",
          category: "నవరత్నాలు",
          description:
            "గ్రహ సమతుల్యత, శాంతి మరియు సంపదను పెంపొందించే ఆచారబద్ధమైన రత్నాలు.",
        },
        {
          name: "నేపాల్ రుద్రాక్ష మాల",
          category: "రుద్రాక్షలు",
          description:
            "దృష్టి, మర్యాద, ఆధ్యాత్మిక స్థిరత్వం మరియు ధ్యానాత్మక శక్తిని పెంచే పవిత్ర మాలలు.",
        },
        {
          name: "ఎనర్జైజ్డ్ వాస్తు యంత్రాలు",
          category: "యంత్రాలు",
          description:
            "ఇంటి, కార్యాలయం, వ్యాపార స్థలాల్లో శక్తి సమతుల్యతను పెంపొందించే పవిత్ర జ్యామితీయ మూలకాలు.",
        },
        {
          name: "దోష నివారణ హోమాలు",
          category: "నవరత్నాలు",
          description:
            "ఆధ్యాత్మిక, మానసిక మరియు శక్తి స్థితిని మెరుగుపరచడానికి చేయబడే సంప్రదాయ అగ్నిహోమాలు.",
        },
        {
          name: "గోమెద / పసుపు safira",
          category: "నవరత్నాలు",
          description:
            "స meticulous జాతక విశ్లేషణ తర్వాత సిఫార్సు చేయబడే గ్రహరత్నాలు.",
        },
        {
          name: "పంచముఖ రుద్రాక్ష",
          category: "రుద్రాక్షలు",
          description:
            "ధైర్యం, దృష్టి, నమ్మకం మరియు అంతర్గత స్పష్టతను పెంచే పవిత్ర రుద్రాక్ష.",
        },
        {
          name: "శ్రీ యంత్రం & కుబేర యంత్రం",
          category: "యంత్రాలు",
          description:
            "సంపద, శాంతి మరియు అభివృద్ధికి మద్దతు చేసే శక్తివంతమైన యంత్రాలు.",
        },
      ],
      cta: "లభ్యతను అడగండి",
    },
    about: {
      eyebrow: "ఆధ్యాత్మిక వారసత్వం",
      heading: "గురువుగూర్చి",
      intro: "నమ్మకం, శ్రద్ధ మరియు పవిత్ర జ్ఞానానికి చెందిన వారసత్వం.",
      bioOne:
        "శ్రీ విన్యామురి రాజేంద్ర ప్రసాద్ గారు వేద జ్యోతిష్యం మరియు వాస్తు సలహాలకు ప్రసిద్ధులైన ప్రముఖ మార్గదర్శకులు. సంప్రదాయ జ్ఞానం, మానవీయ శ్రద్ధ మరియు సహనంతో వారి సలహాలు కుటుంబాలు, వ్యాపారస్థులు, మరియు ఆధ్యాత్మిక వ్యక్తులను సహాయపరుస్తాయి.",
      bioTwo:
        "శ్రద్ధ, అంకిత భావం మరియు సహజ అనుభవంతో కూడిన ఆయన మార్గదర్శకత్వం ప్రతి వ్యక్తి మరియు కుటుంబం కోసం శాంతి, సమతుల్యత మరియు స్ఫూర్తిని అందిస్తుంది. జీవితం, గృహం, వివాహం మరియు ఉపాయాల గురించి మార్గనిర్దేశం చేస్తున్నప్పుడు ఆయన సున్నితమైన మరియు అందమైన విధానాన్ని పాటిస్తారు.",
      legacyTitle: "వారసత్వం & నిపుణత",
      legacyList: [
        "వేద జ్యోతిష్యం మరియు కుండలి కన్సల్టేషన్",
        "ఇంటి, కార్యాలయం, వ్యాపార స్థలాల వాస్తు శాస్త్రం",
        "హస్తసాముద్రికం మరియు ముఖ లక్షణ విశ్లేషణ",
        "నవరత్నాలు, యంత్రాలు మరియు రుద్రాక్ష సిఫార్సులు",
        "ముహూర్తం, వివాహ పొంతన మరియు దోష మార్గదర్శకత్వం",
      ],
      bookSession: "సెషన్ బుక్ చేయండి",
      videoSectionLabel: "మార్గదర్శక 라이బ్రరీ",
      videoSectionTitle: "జ్యోతిష్య & వాస్తు వీడియోలు",
      videos: [
        {
          title: "కొత్త ఇంటికి వాస్తు చిట్కాలు",
          description: "సమతుల్యమైన, సంతోషకరమైన మరియు శక్తివంతమైన ఇంటి వాతావరణం కోసం సులభమైన మార్గదర్శకత్వం.",
        },
        {
          title: "వృత్తి సాఫల్యానికి జ్యోతిష్య సలహాలు",
          description: "గ్రహకాలం, క్రమశిక్షణ మరియు అవకాశాలను పరిగణనలో ఉంచిన వృత్తి ప్రణాళిక.",
        },
        {
          title: "ఉపాయం విధానాలు & దైనందిన ఆధ్యాత్మిక పద్ధతులు",
          description: "శాంతి, స్పష్టత మరియు శక్తిసమతుల్యత కోసం ఆచరణాత్మక ఆధ్యాత్మిక విధానాలు.",
        },
        {
          title: "వివాహ పొంతన & ముహూర్తం సలహా",
          description: "పెద్ద నిర్ణయాలకు సరిపోయే సమయం, అనుకూలత మరియు కుటుంబ శాంతిని వివరించే వీడియోలు.",
        },
      ],
    },
    contact: {
      heading: "కన్సల్టేషన్ అభ్యర్థన",
      intro: "మీ వివరాలను తెలియజేస్తే తగిన మార్గదర్శకత్వం అందించగలము.",
      bookingGuideTitle: "కన్సల్టేషన్ బుక్ చేసే విధానం",
      bookingSteps: [
        "క్రిందున్న ఫారమ్‌లో మీ సమస్య మరియు అవసరమైన వివరాలను తెలియజేయండి.",
        "మీకు తగ్గట్టుగా కన్సల్టేషన్ రకం మరియు మోడ్‌ను ఎంచుకోండి.",
        "వాట్సాప్ లేదా ఇమెయిల్ బాకప్ ద్వారా పంపండి; తరువాత మార్గదర్శకత్వం అందుతుంది.",
      ],
      learningTitle: "సహాయక ప్రశ్నలు",
      form: {
        fullName: "పూర్తి పేరు",
        phone: "ఫోన్ / వాట్సాప్ నంబర్",
        type: "కన్సల్టేషన్ రకం",
        mode: "కన్సల్టేషన్ మోడ్",
        birthDetails: "జన్మ వివరాలు",
        dob: "పుట్టిన తేది",
        tob: "పుట్టిన సమయం",
        pob: "పుట్టిన స్థలం",
        message: "నిర్దిష్ట ప్రశ్న / సందేశం",
        messagePreview: "లైవ్ సందేశం పరిదృశ్యం",
      },
      formOptions: [
        "జ్యోతిష్యం",
        "వాస్తు",
        "హస్తసాముద్రికం",
        "రత్నం/యంత్రం",
        "హోమం",
        "వివాహ పొంతన",
      ],
      modeOptions: ["ఆన్‌లైన్ ఫోన్/వీడియో", "వ్యక్తిగతంగా"],
      placeholders: {
        fullName: "శ్రీ విన్యామురి రాజేంద్ర ప్రసాద్",
        phone: "+91 97045 27404",
        pob: "రాజవోలు, చేర్కుపల్లి, బాపట్ల, ఆంధ్రప్రదేశ్",
        message:
          "మీ సమస్య, ఆశలు లేదా కన్సల్టేషన్‌కు సంబంధించిన వివరాలను తెలియజేయండి.",
      },
      validation: {
        nameRequired: "పూర్తి పేరు తప్పనిసరిగా ఇవ్వాలి.",
        phoneRequired: "ఫోన్ లేదా వాట్సాప్ నంబర్ తప్పనిసరిగా ఇవ్వాలి.",
        dobRequired: "పుట్టిన తేది తప్పనిసరిగా ఇవ్వాలి.",
        tobRequired: "పుట్టిన సమయం తప్పనిసరిగా ఇవ్వాలి.",
        pobRequired: "పుట్టిన స్థలం తప్పనిసరిగా ఇవ్వాలి.",
        messageRequired: "మీ ప్రశ్న లేదా సందేశాన్ని పేర్కొనండి.",
      },
      sendWhatsApp: "వాట్సాప్ ద్వారా పంపండి",
      sendEmail: "ఇమెయిల్ ద్వారా పంపండి",
      success: "మీ అభ్యర్థన విజయవంతంగా పంపబడింది.",
      error: "సమర్పించే ముందు కావాల్సిన వివరాలను పూరించండి.",
      emailConfigError:
        "ఇమెయిల్ బాకప్ presently అందుబాటులో లేదు. దయచేసి వాట్సాప్ ద్వారా నేరుగా సంప్రదించండి.",
      faqs: [
        {
          question: "ప్రతి కన్సల్టేషన్‌లో జన్మ వివరాలు అవసరమా?",
          answer:
            "జ్యోతిష్యం మరియు వివాహ-సంబంధిత సలహాల కోసం జన్మ వివరాలు ముఖ్యమైనవి. వాస్తు, రత్నం మరియు ఆచారాల కోసం వాటి అవసరం నిర్దిష్ట పరిస్థితుల్లో మాత్రమే ఉంటుంది.",
        },
        {
          question: "ఇతర నగరం లేదా దేశం నుండి కూడా ఆన్లైన్ కన్సల్టేషన్ చేయొచ్చా?",
          answer:
            "అవును. జ్యోతిష్యం, హస్తసాముద్రికం మరియు వివిధ సలహాల కోసం ఆన్లైన్ ఫోన్/వీడియో కన్సల్టేషన్ అందుబాటులో ఉంది.",
        },
        {
          question: "ఎలాంటి ఉపాయం లేదా హోమం నాకు సరిపోతుంది?",
          answer:
            "మీ జాతకం, ఇంటి పరిస్థితులు మరియు జీవిత సందర్భాల ఆధారంగా మాత్రమే సరైన ఉపాయం నిర్ణయించబడుతుంది. అందువల్ల మార్గదర్శకత్వం వ్యక్తిగత, సురక్షిత మరియు సాంప్రదాయబద్ధంగా ఉంటుంది.",
        },
      ],
      faqTitle: "అడిగే ప్రశ్నలు",
    },
  },
};

export const getLanguageLabel = (language: Language) =>
  language === "en" ? "English" : "తెలుగు";
