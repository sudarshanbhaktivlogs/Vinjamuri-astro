export type Language = "en" | "te";

type TranslationFile = {
  nav: {
    home: string;
    services: string;
    remedies: string;
    about: string;
    contact: string;
    brandLineOne: string;
    brandLineTwo: string;
  };
  buttons: {
    bookConsultation: string;
    consultWhatsApp: string;
    callNow: string;
    whatsappNow: string;
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
    heroNote: string;
    promiseTitle: string;
    promiseCards: Array<{ title: string; description: string }>;
    callFlowTitle: string;
    callFlowSteps: Array<{ title: string; description: string }>;
    trustBadges: Array<{ value: string; label: string }>;
    featuredServices: Array<{ title: string; description: string }>;
    testimonials: Array<{
      name: string;
      problem: string;
      quote: string;
      fullStory: string;
    }>;
    sectionTitle: string;
    sectionIntro: string;
    testimonialTitle: string;
    testimonialProblemLabel: string;
    testimonialSolutionLabel: string;
    testimonialReadMore: string;
    testimonialShowLess: string;
    testimonialShowAll: string;
    testimonialShowFewer: string;
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
    youtubeChannelLabel: string;
    youtubeChannelTitle: string;
    youtubeChannelDescription: string;
    youtubeSubscribe: string;
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
      brandLineOne: "Sri Sudarshan",
      brandLineTwo: "Vastu Jyothishalayam",
    },
    buttons: {
      bookConsultation: "Book Consultation",
      consultWhatsApp: "Consult on WhatsApp",
      callNow: "Call Now to Discuss Your Problem",
      whatsappNow: "WhatsApp Now",
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
      title: "Honest Vedic Guidance & Vastu Solutions — Pay Only After You Are Satisfied",
      headline: "Sri Vinjamuri Rajendra Prasad garu",
      subtitle:
        "Speak directly with Sri Vinjamuri Rajendra Prasad garu. We listen to your problem first, offer clear guidance with zero upfront fees, and never push unnecessary pujas or yantras.",
      legacy:
        "Available Mon–Sat, 9:00 AM–8:00 PM IST. Keep your Date, Time & Place of Birth (or floor plan) ready for faster guidance.",
      heroNote:
        "Available Mon–Sat, 9:00 AM – 8:00 PM IST. Keep your Date, Time & Place of Birth (or floor plan) ready for faster guidance.",
      promiseTitle: "Our Promise to You",
      promiseCards: [
        {
          title: "Zero Upfront Fee",
          description:
            "Share your problem first. You offer Dakshina only if you are genuinely satisfied with our guidance.",
        },
        {
          title: "No Fear-Based Selling",
          description:
            "We never pressure you into buying expensive gemstones, yantras, or rituals during your problem call.",
        },
        {
          title: "Practical Solutions First",
          description:
            "Our priority is solving your root issue with honest Vedic advice and simple, traditional remedies.",
        },
      ],
      callFlowTitle: "How Your Call Works",
      callFlowSteps: [
        {
          title: "Call or WhatsApp Directly",
          description:
            "Reach out at +91 97045 27404 during working hours to share your concern.",
        },
        {
          title: "Honest Problem Analysis",
          description:
            "Guruji listens patiently to your situation and provides clear Vedic or Vastu guidance without rushing.",
        },
        {
          title: "Pay Only If Satisfied",
          description:
            "Offer Dakshina voluntarily only after your doubts are cleared. Separate costs apply only if you personally request a specific Puja or Yantra later.",
        },
      ],
      trustBadges: [
        { value: "28+", label: "Years of Experience" },
        { value: "3k", label: "Global NRI & Indian Consultations" },
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
          problem: "బలవంతపు ఉపాయాలు లేకుండా నిజాయితీగా మార్గదర్శకత్వం",
          quote:
            "మా ఇంటి మరియు కుటుంబ నిర్ణయాలకు మార్గదర్శకత్వం ఎంతో స్పష్టంగా, సాంప్రదాయబద్ధంగా మరియు విశ్వాసపూర్వకంగా అందింది.",
          fullStory:
            "నేను నా కుటుంబం మరియు ఇంటి గురించి కొన్ని కొనసాగుతున్న సమస్యల కోసం శ్రీ వింజమూరి రాజేంద్ర ప్రసాద్ గారిని సంప్రదించాను. కన్సల్టేషన్ చాలా స్పష్టంగా మరియు సాంప్రదాయానికి అనుగుణంగా మార్గదర్శకత్వం అందించింది. ఈ ఉపాయాలను అమలు చేయడం మా కుటుంబ సంబంధాలలో సానుకూల మార్పులను తీసుకువచ్చింది, మరియు నాకు అందించిన స్పష్టత మరియు దిశకు నేను చాలా కృతజ్ఞతతో ఉన్నాను.",
        },
        {
          name: "N. Devika",
          problem: "మా ఇంటికి ఆచరణాత్మక వాస్తు స్పష్టత",
          quote:
            "వాస్తు సలహాలు ఎంతో వివరంగా, ఆచరణాత్మకంగా మరియు ఆధ్యాత్మికంగా వివరించబడ్డాయి; అమలు చేయడం సులభంగా ఉంది.",
          fullStory:
            "వాస్తు శాస్త్రానికి నేను కొత్తగా ఉండటంతో ఈ కన్సల్టేషన్ చాలా ఉపయోగకరంగా అనిపించింది. సలహాలు సులభంగా అర్థమయ్యేలా, వెంటనే అమలు చేయగలిగేలా వివరించారు. సూచించిన మార్పులు చేసిన తర్వాత నా ఇంటి శక్తి మరియు కుటుంబ శ్రేయస్సులో గణనీయమైన మార్పును గమనించాము.",
        },
        {
          name: "P. Kumar",
          problem: "ప్రశాంతత & పారదర్శకంగా కన్సల్టేషన్",
          quote:
            "ప్రశాంతంగా, ఆలోచనాత్మకంగా జరిగిన ఈ కన్సల్టేషన్ ప్రతి సందేహానికి నమ్మకంగా, స్పష్టంగా సమాధానం ఇచ్చింది.",
          fullStory:
            "ఈ కన్సల్టేషన్ నా ఆలోచనలను పూర్తిగా మార్పు చేసింది. నా సందేహాలన్నింటికి సమాధానాలు ఇస్తూ ముందుకు వెళ్లే స్పష్టమైన మార్గం చూపించారు. సంప్రదాయ వేద జ్ఞానం మరియు ఆచరణాత్మక సలహాల కలయిక నాకు చాలా సహాయకరంగా ఉంది. కన్సల్టేషన్ తర్వాత నా నిర్ణయాలపై నమ్మకం పెరిగింది మరియు మనసులో ప్రశాంతత కలిగింది.",
        },
        {
          name: "R. Lakshmi",
          problem: "Delay in marriage and family disagreement",
          quote:
            "The horoscope guidance helped our family understand the delay calmly and choose an auspicious time with confidence.",
          fullStory:
            "Our family had delayed Lakshmi's marriage for a long time and we were also concerned about compatibility differences. After a detailed horoscope and marriage matching consultation, Sri Sudarshan explained the relevant planetary periods, dosha considerations and practical expectations clearly. We received muhurtham guidance and simple follow-up remedies. The family was able to discuss the proposal with greater clarity and proceed at the right time.",
        },
        {
          name: "S. Rahul",
          problem: "Repeated job setbacks and unclear career direction",
          quote:
            "The consultation gave me a practical career plan and helped me recognise the right period to apply and interview.",
          fullStory:
            "Rahul had attended several interviews but could not convert opportunities into an offer. A career-focused astrology consultation identified his stronger professional periods and areas that needed more preparation. Along with chart guidance, he was advised to strengthen discipline, improve interview skills and avoid impulsive decisions. Within the recommended period, he received a suitable offer and gained confidence in his career plan.",
        },
        {
          name: "M. Ananya",
          problem: "Recurring stress and difficulty maintaining family harmony",
          quote:
            "Practical Vastu changes and daily routines helped bring calm and order to our home.",
          fullStory:
            "Ananya's family experienced repeated stress because of a demanding schedule and heavy use of the sleeping area. The Vastu consultation reviewed bedroom placement, room usage, entrance flow and everyday habits. Small, practical adjustments were suggested instead of major reconstruction. Regular routines and selected remedial practices brought a more peaceful environment and helped the family communicate more calmly.",
        },
      ],
      sectionTitle: "Divine support for every chapter of life",
      sectionIntro: "Core Services",
      testimonialTitle: "What families and clients say",
      testimonialProblemLabel: "Problem",
      testimonialSolutionLabel: "Solution",
      testimonialReadMore: "Read Full Story",
      testimonialShowLess: "Show Less",
      testimonialShowAll: "View More Stories",
      testimonialShowFewer: "Show Fewer Stories",
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
          name: "గోమెద / పసుపు పచ్చ",
          category: "నవరత్నాలు",
          description:
            "శ్రద్ధగా జాతక విశ్లేషణ చేసిన తర్వాత సిఫారసు చేయబడే గ్రహరత్నాలు.",
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
      youtubeChannelLabel: "Sudarshan Bhakti Vlogs",
      youtubeChannelTitle: "Spiritual Wisdom for Everyday Life",
      youtubeChannelDescription:
        "Welcome to Sudarshan Bhakti Vlogs—our Telugu YouTube channel for devotional wisdom, Hindu Dharma, astrology based on birth details, Vastu guidance, uplifting speeches, devotional slokas, and thoughtful spiritual vlogs inspired by revered spiritual teachers.",
      youtubeSubscribe: "Visit & Subscribe on YouTube",
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
        "ఇమెయిల్ బదలింపు ప్రస్తుతం అందుబాటులో లేదు. దయచేసి వాట్సాప్ ద్వారా నేరుగా సంప్రదించండి.",
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
      brandLineOne: "శ్రీ సుదర్శన్",
      brandLineTwo: "వాస్తు జ్యోతిశాలయం",
    },
    buttons: {
      bookConsultation: "కన్సల్టేషన్ బుక్ చేయండి",
      consultWhatsApp: "వాట్సాప్‌లో సంప్రదించండి",
      callNow: "మీ సమస్యను చర్చించడానికి ఇప్పుడే కాల్ చేయండి",
      whatsappNow: "ఇప్పుడే వాట్సాప్ చేయండి",
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
      title: "నిజాయితీగల వేద మార్గదర్శకత్వం & వాస్తు పరిష్కారాలు — మీకు సంతృప్తి కలిగితేనే చెల్లింపు",
      headline: "శ్రీ వింజమూరి రాజేంద్ర ప్రసాద్ గారు",
      subtitle:
        "శ్రీ వింజమూరి రాజేంద్ర ప్రసాద్ గారితో నేరుగా మాట్లాడండి. ముందుగా మీ సమస్యను విని, ముందస్తు ఫీజు లేకుండా స్పష్టమైన మార్గదర్శకత్వం ఇస్తాము. అనవసరమైన పూజలు లేదా యంత్రాలు కొనమని ఎప్పుడూ ఒత్తిడి చేయము.",
      legacy:
        "సోమవారం నుండి శనివారం వరకు ఉదయం 9:00 నుండి సాయంత్రం 8:00 వరకు అందుబాటులో ఉంటాము. త్వరిత మార్గదర్శకత్వం కోసం పుట్టిన తేది, సమయం, స్థలం (లేదా ఫ్లోర్ ప్లాన్) సిద్ధంగా ఉంచుకోండి.",
      heroNote:
        "సోమవారం నుండి శనివారం వరకు ఉదయం 9:00 నుండి సాయంత్రం 8:00 IST వరకు అందుబాటులో ఉంటాము. త్వరిత మార్గదర్శకత్వం కోసం పుట్టిన తేది, సమయం, స్థలం లేదా ఫ్లోర్ ప్లాన్ సిద్ధంగా ఉంచుకోండి.",
      promiseTitle: "మీకు మా హామీ",
      promiseCards: [
        {
          title: "ముందస్తు ఫీజు లేదు",
          description:
            "ముందుగా మీ సమస్యను చెప్పండి. మార్గదర్శకత్వంతో నిజంగా సంతృప్తి చెందిన తర్వాత మాత్రమే మీకు నచ్చిన దక్షిణ ఇవ్వండి.",
        },
        {
          title: "భయపెట్టే విక్రయం లేదు",
          description:
            "సమస్యను చర్చించే సమయంలో ఖరీదైన రత్నాలు, యంత్రాలు లేదా క్రతువులు కొనమని మేము ఎప్పుడూ ఒత్తిడి చేయము.",
        },
        {
          title: "మొదటికి ఆచరణాత్మక పరిష్కారం",
          description:
            "సరళమైన సాంప్రదాయ ఉపాయాలతో నిజాయితీగల వేద సలహాల ద్వారా మీ సమస్యకు మూల కారణ పరిష్కారం ఇవ్వడమే మా ప్రధాన లక్ష్యం.",
        },
      ],
      callFlowTitle: "మీ కాల్ ఎలా జరుగుతుంది",
      callFlowSteps: [
        {
          title: "నేరుగా కాల్ లేదా వాట్సాప్ చేయండి",
          description:
            "పనిచేసే సమయంలో +91 97045 27404కు చేరుకుని మీ ఆందోళనను వివరించండి.",
        },
        {
          title: "నిజాయితీగా సమస్య విశ్లేషణ",
          description:
            "గురువుగారు మీ పరిస్థితిని ఓపికగా విని, ఎలాంటి తొందరపాటు లేకుండా స్పష్టమైన వేద లేదా వాస్తు మార్గదర్శకత్వం అందిస్తారు.",
        },
        {
          title: "సంతృప్తి చెందితేనే చెల్లింపు",
          description:
            "మీ సందేహాలు తొలగిన తర్వాతనే స్వచ్ఛందంగా దక్షిణ అందించండి. మీరు వ్యక్తిగతంగా నిర్దిష్ట పూజ లేదా యంత్రం కోరితే మాత్రమే దాని ప్రత్యేక ఖర్చులు వర్తిస్తాయి.",
        },
      ],
      trustBadges: [
        { value: "28+", label: "సంవత్సరాల అనుభవం" },
        { value: "3k+", label: "ప్రపంచవ్యాప్తంగా NRI & ఇండియన్ కన్సల్టేషన్స్" },
        { value: "100%", label: "సాంప్రదాయ వేద ఉపాయాలు" },
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
          problem: "బలవంతపు ఉపాయాలు లేకుండా నిజాయితీగా మార్గదర్శకత్వం",
          quote:
            "మా ఇంటి మరియు కుటుంబ నిర్ణయాలకు మార్గదర్శకత్వం ఎంతో స్పష్టంగా, సాంప్రదాయబద్ధంగా మరియు విశ్వాసపూర్వకంగా అందింది.",
          fullStory:
            "నేను నా కుటుంబం మరియు ఇంటి గురించి కొన్ని కొనసాగుతున్న సమస్యల కోసం శ్రీ వింజమూరి రాజేంద్ర ప్రసాద్ గారిని సంప్రదించాను. కన్సల్టేషన్ చాలా స్పష్టంగా మరియు సాంప్రదాయానికి అనుగుణంగా మార్గదర్శకత్వం అందించింది. ఈ ఉపాయాలను అమలు చేయడం మా కుటుంబ సంబంధాలలో సానుకూల మార్పులను తీసుకువచ్చింది, మరియు నాకు అందించిన స్పష్టత మరియు దిశకు నేను చాలా కృతజ్ఞతతో ఉన్నాను.",
        },
        {
          name: "ఎన్. దేవిక",
          problem: "మా ఇంటికి ఆచరణాత్మక వాస్తు స్పష్టత",
          quote:
            "వాస్తు సలహాలు ఎంతో వివరంగా, ఆచరణాత్మకంగా మరియు ఆధ్యాత్మికంగా వివరించబడ్డాయి; అమలు చేయడం సులభంగా ఉంది.",
          fullStory:
            "వాస్తు శాస్త్రానికి నేను కొత్తగా ఉండటంతో ఈ కన్సల్టేషన్ చాలా ఉపయోగకరంగా అనిపించింది. సలహాలు సులభంగా అర్థమయ్యేలా, వెంటనే అమలు చేయగలిగేలా వివరించారు. సూచించిన మార్పులు చేసిన తర్వాత నా ఇంటి శక్తి మరియు కుటుంబ శ్రేయస్సులో గణనీయమైన మార్పును గమనించాము.",
        },
        {
          name: "పి. కుమార్",
          problem: "ప్రశాంతత & పారదర్శకంగా కన్సల్టేషన్",
          quote:
            "ప్రశాంతంగా, ఆలోచనాత్మకంగా జరిగిన ఈ కన్సల్టేషన్ ప్రతి సందేహానికి నమ్మకంగా, స్పష్టంగా సమాధానం ఇచ్చింది.",
          fullStory:
            "ఈ కన్సల్టేషన్ నా ఆలోచనలను పూర్తిగా మార్పు చేసింది. నా సందేహాలన్నింటికి సమాధానాలు ఇస్తూ ముందుకు వెళ్లే స్పష్టమైన మార్గం చూపించారు. సంప్రదాయ వేద జ్ఞానం మరియు ఆచరణాత్మక సలహాల కలయిక నాకు చాలా సహాయకరంగా ఉంది. కన్సల్టేషన్ తర్వాత నా నిర్ణయాలపై నమ్మకం పెరిగింది మరియు మనసులో ప్రశాంతత కలిగింది.",
        },
        {
          name: "ఆర్. లక్ష్మీ",
          problem: "వివాహం ఆలస్యం మరియు కుటుంబంలో అభిప్రాయ భేదాలు",
          quote:
            "జాతక మార్గదర్శకత్వం ఆలస్యానికి సంబంధించిన విషయాలను కుటుంబం ప్రశాంతంగా అర్థం చేసుకోవడానికి మరియు మంచి ముహూర్తాన్ని నమ్మకంగా ఎంచుకోవడానికి సహాయపడింది.",
          fullStory:
            "లక్ష్మి వివాహానికి చాలా కాలం ఆలస్యం అయ్యింది, పొంతన విషయంలో కుటుంబ సభ్యులకు అనేక సందేహాలు ఉండేవి. వివరణాత్మక జాతక మరియు వివాహ పొంతన కన్సల్టేషన్ తరువాత, సంబంధిత గ్రహకాలం, దోష అంశాలు మరియు ఆచరణాత్మక విషయాలు స్పష్టంగా వివరించబడ్డాయి. సరైన ముహూర్త మార్గదర్శకత్వం మరియు సులభమైన ఉపాయాలు అందించబడ్డాయి. కుటుంబం ఈ విషయాలను ధైర్యంగా పరిశీలించి, సరైన సమయంలో ముందుకు సాగగలిగింది.",
        },
        {
          name: "ఎస్. రాహుల్",
          problem: "పునరావృతమైన ఉద్యోగ ప్రతికూలతలు మరియు స్పష్టత లేకపోవడం",
          quote:
            "కన్సల్టేషన్ నాకు ఆచరణాత్మక వృత్తి ప్రణాళికను ఇచ్చింది; దరఖాస్తులు మరియు ఇంటర్వ్యూలకు సరైన కాలాన్ని గుర్తించడంలో సహాయపడింది.",
          fullStory:
            "రాహుల్ చాలా ఇంటర్వ్యూలకు హాజరైనప్పటికీ అనుకూలమైన ఉద్యోగం దక్కలేదు. వృత్తి సంబంధిత జాతక విశ్లేషణలో అతని బలమైన ప్రాఫెషనల్ కాలాలు మరియు మరింత సన్నద్ధత అవసరమైన ప్రాంతాలు వివరించబడ్డాయి. జాతక మార్గదర్శకంతో పాటు క్రమశిక్షణ, ఇంటర్వ్యూ నైపుణ్యాలు మరియు ఆలోచించి నిర్ణయాలు తీసుకోవాలని సూచించబడింది. సూచించిన కాలంలో సరైన ఉద్యోగ ఆఫర్ వచ్చిన తరువాత అతనికి తన వృత్తి మార్గం మీద మరింత నమ్మకం కలిగింది.",
        },
        {
          name: "ఎమ్. అనన్య",
          problem: "పునరావృతమైన ఒత్తిడి మరియు కుటుంబ శాంతి లేకపోవడం",
          quote:
            "సులభమైన వాస్తు మార్పులు మరియు దైనందిన పద్ధతులు ఇంటికి ప్రశాంతత మరియు సక్రమతను తెచ్చాయి.",
          fullStory:
            "అనన్య కుటుంబం వ్యస్తమైన దినచర్య మరియు నిద్రగది వినియోగం వల్ల ఒత్తిడిని ఎదుర్కొంది. వాస్తు కన్సల్టేషన్‌లో నిద్రగది, గదుల వినియోగం, ద్వారం మరియు దైనందిన అలవాట్లు పరిశీలించబడ్డాయి. పెద్ద నిర్మాణం లేకుండా అమలు చేయగల చిన్న మార్పులు సూచించబడ్డాయి. సాధారణ దినచర్య, శాంతి కలిగించే అలవాట్లు మరియు అవసరమైన ఉపాయాలు అనుసరించడంతో కుటుంబ వాతావరణం ప్రశాంతంగా మారింది.",
        },
      ],
      sectionTitle: "జీవిత ప్రతి అధ్యాయానికి ప్రశాంత దిశ",
      sectionIntro: "ప్రధాన సేవలు",
      testimonialTitle: "కుటుంబాలు మరియు క్లయింట్లు చెప్పిన మాటలు",
      testimonialProblemLabel: "సమస్య",
      testimonialSolutionLabel: "పరిష్కారం",
      testimonialReadMore: "మొత్తం కథను చదవండి",
      testimonialShowLess: "తక్కువ చూపించు",
      testimonialShowAll: "మరిన్ని కథలను చూడండి",
      testimonialShowFewer: "తక్కువ కథలను చూపించు",
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
          mode: "వ్యక్తిగతంగా / ఆన్లైన్",
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
        "స్వచ్ఛమైన నవరత్నాలు, నేపాల్ రుద్రాక్షలు, యంత్రాలు మరియు వేద హోమాలతో శాంతి, శ్రేయస్సు మరియు ఆధ్యాత్మిక సమతుల్యతను పొందండి.",
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
          name: "గోమెద / పసుపు పచ్చ",
          category: "నవరత్నాలు",
          description:
            "శ్రద్ధగా జాతక విశ్లేషణ చేసిన తర్వాత సిఫారసు చేయబడే గ్రహరత్నాలు.",
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
        "శ్రీ వింజమూరి రాజేంద్ర ప్రసాద్ గారు వేద జ్యోతిష్యం మరియు వాస్తు సలహాలకు ప్రసిద్ధులైన ప్రముఖ మార్గదర్శకులు. సంప్రదాయ జ్ఞానం, మానవీయ శ్రద్ధ మరియు సహనంతో వారి సలహాలు కుటుంబాలు, వ్యాపారస్థులు, మరియు ఆధ్యాత్మిక వ్యక్తులను సహాయపరుస్తాయి.",
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
      videoSectionLabel: "మార్గదర్శక గ్రంథాలయం",
      videoSectionTitle: "జ్యోతిష్యం & వాస్తు వీడియోలు",
      youtubeChannelLabel: "సుదర్శన్ భక్తి వ్లాగ్స్",
      youtubeChannelTitle: "దైనందిన జీవితానికి ఆధ్యాత్మిక మార్గదర్శకత్వం",
      youtubeChannelDescription:
        "సుదర్శన్ భక్తి వ్లాగ్స్‌కు స్వాగతం. జీవితం కోసం ఆధ్యాత్మిక జ్ఞానం కోరుకునే వారికి భక్తి, హిందూ ధర్మం, వేద ప్రవచనాలు, దేవోత్సాహక భక్తి శ్లోకాలు, పుట్టిన తేదీ ఆధారిత జ్యోతిష్యం, వాస్తు మార్గదర్శకత్వం మరియు జీవిత సత్యాన్ని తెలుసుకునే ఆలోచనాత్మక తెలుగు వీడియోలను ఇక్కడ అందిస్తాము.",
      youtubeSubscribe: "యూట్యూబ్‌లో చూడండి & సభ్యత్వం పొందండి",
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
        fullName: "శ్రీ వింజమూరి రాజేంద్ర ప్రసాద్",
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
        "ఇమెయిల్ బదలింపు ప్రస్తుతం అందుబాటులో లేదు. దయచేసి వాట్సాప్ ద్వారా నేరుగా సంప్రదించండి.",
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
