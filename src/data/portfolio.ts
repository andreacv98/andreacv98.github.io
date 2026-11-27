export type Locale = 'en' | 'it';

export interface ExperienceItem {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  overview: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  url: string;
  secondaryUrl?: { label: string; url: string };
  tags: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; primary?: boolean }[];
}

export interface EducationItem {
  degree: string;
  specialization?: string;
  institution: string;
  institutionUrl: string;
  period: string;
  grade?: string;
  details: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  url: string;
  detail: string;
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
    localeLabel: string;
    switchLocaleLabel: string;
    switchLocaleHref: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    resumeBtn: string;
  };
  hero: {
    statusBadge: string;
    greeting: string;
    name: string;
    role: string;
    company: string;
    companyUrl: string;
    tagline: string;
    bio: string[];
    location: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
  };
  sections: {
    experience: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    projects: {
      eyebrow: string;
      title: string;
      subtitle: string;
      viewRepo: string;
    };
    skills: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    education: {
      eyebrow: string;
      title: string;
      certificationsTitle: string;
    };
    footer: {
      builtWith: string;
      rights: string;
    };
  };
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const socialLinks = {
  github: 'https://github.com/andreacv98',
  linkedin: 'https://www.linkedin.com/in/andreacolliv/',
  stackoverflow: 'https://stackoverflow.com/users/5784348/andrea-colli-vignarelli',
  resumePdf: '/files/resume.pdf',
};

export const portfolioData: Record<Locale, PortfolioContent> = {
  en: {
    meta: {
      title: 'Andrea Colli-Vignarelli — Software Engineer | Kubernetes & OpenShift Control Plane',
      description:
        'Portfolio of Andrea Colli-Vignarelli, Software Engineer at Red Hat working on the OpenShift Control Plane and Cloud-Native Kubernetes Operators in Go.',
      localeLabel: 'EN',
      switchLocaleLabel: 'IT',
      switchLocaleHref: '/it/',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Open Source & Projects',
      skills: 'Skills',
      education: 'Education',
      resumeBtn: 'Resume PDF',
    },
    hero: {
      statusBadge: 'OpenShift Control Plane @ Red Hat',
      greeting: 'Hi, I’m',
      name: 'Andrea Colli\u2011Vignarelli',
      role: 'Software Engineer',
      company: 'Red Hat',
      companyUrl: 'https://www.redhat.com/',
      tagline: 'Building resilient Kubernetes Control Planes, Operators & Cloud-Native Infrastructure in Go.',
      bio: [
        'I am a Software Engineer specialized in Cloud Computing, Kubernetes Control Plane architecture, and distributed systems. Currently at Red Hat, I work on the open-source operators and core components of the OpenShift Container Platform Control Plane.',
        'Across European cloud-continuum research (FLUIDOS), telco R&D at Rakuten Mobile, and enterprise platform engineering at Red Hat, my work centers on designing Kubernetes Operators in Go, evaluating system performance and architectural trade-offs through empirical testing, and evolving reliable cluster infrastructure.',
      ],
      location: 'Cuneo / Turin, Italy',
      primaryCta: 'Explore Open Source Work',
      secondaryCta: 'Download Resume (PDF)',
      stats: [
        { value: 'Go & K8s', label: 'Primary Engineering Stack' },
        { value: 'OpenShift', label: 'Control Plane Engineering' },
        { value: 'Open Source', label: 'Development Model' },
      ],
    },
    sections: {
      experience: {
        eyebrow: 'Career Timeline',
        title: 'Professional Experience',
        subtitle:
          'A continuous progression across Kubernetes Operators, multi-cluster orchestration, and enterprise Control Plane engineering.',
      },
      projects: {
        eyebrow: 'Open Source & Engineering',
        title: 'Featured Projects & Open Source Work',
        subtitle:
          'Open-source operators, distributed protocols, and software engineering projects across the OpenShift and Kubernetes ecosystems.',
        viewRepo: 'View on GitHub',
      },
      skills: {
        eyebrow: 'Technical Stack',
        title: 'Skills & Technologies',
        subtitle:
          'Core technologies, testing practices, and engineering methodologies I use to design, validate, and operate distributed systems.',
      },
      education: {
        eyebrow: 'Academic Background',
        title: 'Education',
        certificationsTitle: 'Awards & Certifications',
      },
      footer: {
        builtWith: 'Designed & built with Astro. Deployed on GitHub Pages.',
        rights: '© 2026 Andrea Colli-Vignarelli. All rights reserved.',
      },
    },
    experiences: [
      {
        company: 'Red Hat',
        companyUrl: 'https://www.redhat.com/',
        role: 'Software Engineer — OpenShift Control Plane',
        period: 'Dec 2025 – Present',
        location: 'Italy (Remote)',
        badge: 'Open Source',
        overview:
          'Core engineering on the Red Hat OpenShift Container Platform Control Plane, designing, developing, and maintaining open-source operators and critical platform components.',
        highlights: [
          'Developing and evolving open-source Kubernetes Operators and controllers in Go that manage the lifecycle, reliability, security, and automation of core OpenShift Control Plane components (including etcd and control plane networking).',
          'Conducting empirical performance evaluations, architectural trade-off analyses, and automated testing (Unit & E2E) to validate system behavior, scalability, and new platform features.',
          'Collaborating within a distributed engineering team across Agile planning cycles using Jira, technical design reviews, and open-source workflows.',
        ],
        tags: ['Go', 'OpenShift Control Plane', 'Kubernetes Operators', 'etcd', 'Performance & Testing', 'Jira'],
      },
      {
        company: 'Rakuten Mobile Inc.',
        companyUrl: 'https://corp.mobile.rakuten.co.jp/english/',
        role: 'Software Engineer — NGAR (Next Generation Advanced Research)',
        period: 'Feb 2025 – Dec 2025',
        location: 'Remote (Tokyo, Japan & Australia Team)',
        overview:
          'Applied research and production-oriented engineering on Cloud-Native telco infrastructure within an international distributed R&D organization.',
        highlights: [
          'Designed and developed Kubernetes Operators in Go using the Kubebuilder framework and Custom Resource Definitions (CRDs) to manage distributed cluster monitoring systems.',
          'Built declarative control-plane orchestration to dynamically configure and distribute traffic filtering rules to node-level eBPF monitoring agents.',
          'Explored Kubernetes cluster optimization strategies and infrastructure patterns for AI-oriented workloads.',
        ],
        tags: ['Go', 'Kubernetes', 'Kubebuilder', 'CRDs', 'Cloud-Native', 'eBPF Integration'],
      },
      {
        company: 'Netgroup @ DAUIN — Politecnico di Torino',
        companyUrl: 'https://www.polito.it/',
        role: 'Research Fellow',
        period: 'Oct 2023 – Jan 2025',
        location: 'Turin, Italy',
        badge: 'Open Source',
        overview:
          'Open-source research and development in the Computer Networks Group (NetGroup), focusing on multi-cluster Kubernetes orchestration and the edge-to-cloud computing continuum.',
        highlights: [
          'Drove core open-source architecture and development of the FLUIDOS Node within the European Horizon FLUIDOS project for seamless multi-cluster resource sharing.',
          'Engineered Kubernetes Custom Resources (CRDs) and Operators in Go via Kubebuilder, and co-developed the REAR (Resource Advertisement and Reservation) protocol for inter-cluster resource discovery and federation.',
          'Automated bare-metal and virtualized Kubernetes cluster testbeds using Liqo, GitOps workflows, Ansible, and Proxmox.',
        ],
        tags: ['Go', 'Kubernetes', 'Kubebuilder', 'FLUIDOS Node', 'REAR Protocol', 'Liqo', 'GitOps'],
      },
      {
        company: 'TOP-IX Consortium',
        companyUrl: 'https://www.top-ix.org/',
        role: 'Master’s Thesis Researcher',
        period: 'Oct 2022 – Jul 2023',
        location: 'Turin, Italy',
        badge: 'Open Source',
        overview:
          'Open-source Master’s thesis research at the Turin Piedmont Internet Exchange Consortium within the European GAIA-X federated cloud initiative.',
        highlights: [
          'Authored the thesis "Enabling multi-provider service composition among different Kubernetes clusters" in a federated multi-cluster environment.',
          'Designed and implemented a federation model and service marketplace integrating third-party services into consumer Kubernetes clusters using Go, Liqo, Open Service Broker API, OpenID Connect (Keycloak), and React.',
        ],
        tags: ['Go', 'Kubernetes', 'Liqo', 'Open Service Broker API', 'Keycloak (OIDC)', 'React'],
      },
      {
        company: 'LINKS Foundation',
        companyUrl: 'https://linksfoundation.com/',
        role: 'Software Engineering Intern',
        period: 'Mar 2020 – Jul 2020',
        location: 'Turin, Italy',
        overview:
          'Bachelor’s internship at LINKS Foundation focusing on applied IoT platforms and smart-home digital transformation.',
        highlights: [
          'Developed custom interactive map widgets on ThingsBoard and integrated them asynchronously with an underlying smart-home platform built on iPOPO (Python OSGi).',
        ],
        tags: ['Python', 'JavaScript', 'ThingsBoard', 'iPOPO (OSGi)', 'IoT'],
      },
    ],
    projects: [
      {
        title: 'OpenShift Control Plane Operators',
        subtitle: 'Red Hat OpenShift Container Platform',
        badge: 'Open Source · OpenShift',
        description:
          'Development, performance evaluation, and maintenance across open-source operators and components powering the OpenShift Control Plane—spanning etcd lifecycle management, control plane security, and automated platform orchestration.',
        url: 'https://github.com/openshift/cluster-etcd-operator',
        secondaryUrl: { label: 'OpenShift GitHub', url: 'https://github.com/openshift' },
        tags: ['Go', 'OpenShift', 'Kubernetes Operators', 'Control Plane', 'etcd'],
      },
      {
        title: 'FLUIDOS Node',
        subtitle: 'EU Horizon FLUIDOS Project',
        badge: 'Open Source · Core Contributor',
        description:
          'Set of Kubernetes operators and controllers enabling independent Kubernetes clusters and heterogeneous edge/cloud devices to discover, reserve, and share computing resources seamlessly.',
        url: 'https://github.com/fluidos-project/node',
        secondaryUrl: { label: 'Project Website', url: 'https://www.fluidos.eu/' },
        tags: ['Go', 'Kubebuilder', 'Kubernetes CRDs', 'Multi-Cluster', 'GitOps'],
      },
      {
        title: 'REAR Protocol',
        subtitle: 'REsource Advertisement & Reservation',
        badge: 'Open Source · Protocol & Data Models',
        description:
          'Specification, workflow, and data structures (REAR v0.2) allowing cloud providers and consumers to advertise, reserve, and consume virtualized resources, Kubernetes slices, and managed services across clusters.',
        url: 'https://github.com/andreacv98/Rear',
        secondaryUrl: { label: 'Data Models', url: 'https://github.com/andreacv98/fluidos-REAR-data-models' },
        tags: ['Distributed Systems', 'Kubernetes', 'Protocol Design', 'Go', 'JSON Schema'],
      },
      {
        title: 'Multi-Cluster K8s Service Marketplace',
        subtitle: 'Master’s Thesis · GAIA-X Ecosystem',
        badge: 'Open Source · Full-Stack K8s',
        description:
          'Service broker in Go implementing the Open Service Broker API across Liqo-federated Kubernetes clusters, paired with a React marketplace dashboard for discovering and provisioning cross-cluster services.',
        url: 'https://github.com/andreacv98/service-broker-k8s',
        secondaryUrl: {
          label: 'React Dashboard',
          url: 'https://github.com/andreacv98/dashboard-services-marketplace',
        },
        tags: ['Go', 'Liqo', 'Open Service Broker API', 'React', 'Keycloak OIDC'],
      },
      {
        title: 'Aruba Challenge@PoliTo — "D.I.Y. Digital Identity"',
        subtitle: 'Challenge Winner · Collaboration with Aruba S.p.A.',
        badge: '1st Place Winner',
        description:
          'Winning project designing a unified institutional authentication architecture integrating Italy’s Electronic Identity Card ("Enter with CIE") with a customized OpenID Connect flow and React portal.',
        url: 'https://github.com/andreacv98/digital-platform',
        secondaryUrl: {
          label: 'OpenBadge Credential',
          url: 'https://openbadges.bestr.it/public/assertions/xP-YwXABRFq6jsQAe70eIw',
        },
        tags: ['OpenID Connect', 'CIE Auth', 'React', 'Digital Identity', 'Security'],
      },
      {
        title: 'Cross-Platform C++ Screen Recorder',
        subtitle: 'Multithreaded Systems Programming',
        badge: 'Open Source · C++ & FFmpeg',
        description:
          'Cross-platform desktop screen and audio capture application engineered in modern C++ using multithreaded encoding pipelines and the low-level FFmpeg C/C++ libraries.',
        url: 'https://github.com/andreacv98/screencapture-cpp',
        tags: ['C++', 'Multithreading', 'FFmpeg', 'Systems Programming'],
      },
    ],
    skillCategories: [
      {
        title: 'Kubernetes & Cloud-Native Control Plane',
        description: 'Core daily focus: designing operators, custom controllers, and resilient control planes.',
        skills: [
          { name: 'Kubernetes', primary: true },
          { name: 'Red Hat OpenShift', primary: true },
          { name: 'Kubebuilder / Operator SDK', primary: true },
          { name: 'etcd', primary: true },
          { name: 'Custom Resource Definitions (CRDs)', primary: true },
          { name: 'Liqo (Multi-Cluster)' },
          { name: 'Helm & Kustomize' },
          { name: 'Docker & Containers' },
          { name: 'Network Policies' },
        ],
      },
      {
        title: 'Software Engineering, Testing & Methodology',
        description: 'Empirical validation, performance analysis, automated test suites, and Agile team workflows.',
        skills: [
          { name: 'Software Testing (Unit & E2E)', primary: true },
          { name: 'Performance Evaluation & Trade-off Analysis', primary: true },
          { name: 'Jira & Agile / Scrum Workflows', primary: true },
          { name: 'Open-Source Collaboration & Code Review' },
          { name: 'Technical Design & Feature Prototyping' },
        ],
      },
      {
        title: 'Programming Languages & Web',
        description: 'Production cloud-native systems engineering in Go, backed by strong polyglot foundations.',
        skills: [
          { name: 'Go (Golang)', primary: true },
          { name: 'C / C++' },
          { name: 'Python' },
          { name: 'JavaScript / React.js' },
          { name: 'Java' },
          { name: 'Bash / Shell' },
        ],
      },
      {
        title: 'Infrastructure, Observability & DevOps',
        description: 'Cluster provisioning, metrics telemetry, CI/CD automation, and identity/network protocols.',
        skills: [
          { name: 'Linux', primary: true },
          { name: 'Prometheus & Grafana', primary: true },
          { name: 'Git & GitHub Actions', primary: true },
          { name: 'GitOps' },
          { name: 'Ansible & Kubespray' },
          { name: 'Proxmox VE' },
          { name: 'Wireshark' },
          { name: 'OpenID Connect (OIDC) & Keycloak' },
        ],
      },
    ],
    education: [
      {
        degree: 'Master’s Degree in Computer Engineering',
        specialization: 'Cloud Computing and Computer Networks',
        institution: 'Politecnico di Torino',
        institutionUrl: 'https://www.polito.it/',
        period: '2020 – 2023',
        grade: '107 / 110',
        details: [
          'Thesis: "Enabling Multi-Provider Service Composition Among Different Kubernetes Clusters"',
          'Supervisor: Prof. Fulvio Risso',
          'Focus: Cloud computing, distributed systems, software networking, virtualization, software engineering',
        ],
      },
      {
        degree: 'Bachelor’s Degree in Computer Engineering',
        institution: 'Politecnico di Torino',
        institutionUrl: 'https://www.polito.it/',
        period: '2017 – 2020',
        grade: '93 / 110',
        details: [
          'Focus: Computer networks, operating systems, databases, object-oriented programming, automatic controls',
        ],
      },
      {
        degree: 'High School Scientific Diploma',
        institution: 'Liceo Classico e Scientifico Statale Pellico-Peano (Cuneo)',
        institutionUrl: 'https://liceocuneo.it/',
        period: '2012 – 2017',
        details: [],
      },
    ],
    certifications: [
      {
        name: 'Challenge@PoliTo Winner — "D.I.Y. Digital Identity for Yourself"',
        issuer: 'Politecnico di Torino & Aruba S.p.A.',
        url: 'https://openbadges.bestr.it/public/assertions/xP-YwXABRFq6jsQAe70eIw',
        detail: 'Verified Bestr OpenBadge for winning the multidisciplinary innovation challenge on CIE & OpenID Connect.',
      },
      {
        name: 'Cambridge English: First (FCE) — Level B2',
        issuer: 'Cambridge Assessment English',
        url: 'https://www.cambridgeenglish.org/exams-and-tests/first/',
        detail: 'Certified professional working proficiency in English (daily collaboration with international teams).',
      },
    ],
  },
  it: {
    meta: {
      title: 'Andrea Colli-Vignarelli — Software Engineer | Kubernetes & OpenShift Control Plane',
      description:
        'Portfolio di Andrea Colli-Vignarelli, Software Engineer in Red Hat specializzato in OpenShift Control Plane e sviluppo di Kubernetes Operators in Go.',
      localeLabel: 'IT',
      switchLocaleLabel: 'EN',
      switchLocaleHref: '/',
    },
    nav: {
      about: 'Chi Sono',
      experience: 'Esperienze',
      projects: 'Open Source & Progetti',
      skills: 'Competenze',
      education: 'Formazione',
      resumeBtn: 'CV PDF',
    },
    hero: {
      statusBadge: 'OpenShift Control Plane @ Red Hat',
      greeting: 'Ciao, sono',
      name: 'Andrea Colli\u2011Vignarelli',
      role: 'Software Engineer',
      company: 'Red Hat',
      companyUrl: 'https://www.redhat.com/',
      tagline: 'Sviluppo componenti di Control Plane Kubernetes, Operators e infrastrutture Cloud-Native in Go.',
      bio: [
        'Sono un Software Engineer specializzato in Cloud Computing, architetture Kubernetes Control Plane e sistemi distribuiti. Attualmente in Red Hat, lavoro sugli operatori e sui componenti core open-source del Control Plane di OpenShift Container Platform.',
        'Passando dalla ricerca europea sul cloud continuum (FLUIDOS), alla R&D telco in Rakuten Mobile, fino all’ingegneria di piattaforma enterprise in Red Hat, il mio lavoro si concentra sullo sviluppo di Kubernetes Operators in Go, sulla valutazione empirica delle performance e dei trade-off architetturali tramite testing approfondito, e sull’evoluzione di infrastrutture cluster critiche.',
      ],
      location: 'Cuneo / Torino, Italia',
      primaryCta: 'Scopri i Progetti Open Source',
      secondaryCta: 'Scarica CV (PDF)',
      stats: [
        { value: 'Go & K8s', label: 'Stack Principale' },
        { value: 'OpenShift', label: 'Control Plane Engineering' },
        { value: 'Open Source', label: 'Modello di Sviluppo' },
      ],
    },
    sections: {
      experience: {
        eyebrow: 'Percorso Professionale',
        title: 'Esperienze Lavorative',
        subtitle:
          'Un percorso coerente focalizzato su Kubernetes Operators, orchestrazione multi-cluster e ingegneria del Control Plane.',
      },
      projects: {
        eyebrow: 'Open Source & Ingegneria',
        title: 'Progetti Principali & Lavoro Open Source',
        subtitle:
          'Operatori open-source, protocolli distribuiti e progetti ingegneristici nell’ecosistema OpenShift e Kubernetes.',
        viewRepo: 'Vedi su GitHub',
      },
      skills: {
        eyebrow: 'Stack Tecnologico',
        title: 'Competenze & Metodologie',
        subtitle:
          'Le tecnologie, le pratiche di testing e le metodologie di lavoro con cui progetto, valido e gestisco sistemi distribuiti.',
      },
      education: {
        eyebrow: 'Percorso Accademico',
        title: 'Formazione',
        certificationsTitle: 'Riconoscimenti & Certificazioni',
      },
      footer: {
        builtWith: 'Progettato e sviluppato con Astro. Pubblicato su GitHub Pages.',
        rights: '© 2026 Andrea Colli-Vignarelli. Tutti i diritti riservati.',
      },
    },
    experiences: [
      {
        company: 'Red Hat',
        companyUrl: 'https://www.redhat.com/',
        role: 'Software Engineer — OpenShift Control Plane',
        period: 'Dic 2025 – Presente',
        location: 'Italia (Full Remote)',
        badge: 'Open Source',
        overview:
          'Sviluppo core sul Control Plane di Red Hat OpenShift Container Platform, progettando, sviluppando e mantenendo operatori open-source e componenti critici di piattaforma.',
        highlights: [
          'Sviluppo ed evoluzione in Go di Kubernetes Operators e controller open-source che gestiscono ciclo di vita, affidabilità, sicurezza e automazione dei componenti del Control Plane di OpenShift (tra cui etcd e networking del piano di controllo).',
          'Valutazione empirica delle performance, analisi dei trade-off architetturali e testing automatizzato (Unit & E2E) per validare il comportamento del sistema, la scalabilità e le nuove feature di piattaforma.',
          'Collaborazione all’interno di un team ingegneristico distribuito su cicli di pianificazione Agile tramite Jira, revisioni tecniche e workflow open-source.',
        ],
        tags: ['Go', 'OpenShift Control Plane', 'Kubernetes Operators', 'etcd', 'Performance & Testing', 'Jira'],
      },
      {
        company: 'Rakuten Mobile Inc.',
        companyUrl: 'https://corp.mobile.rakuten.co.jp/english/',
        role: 'Software Engineer — NGAR (Next Generation Advanced Research)',
        period: 'Feb 2025 – Dic 2025',
        location: 'Full Remote (Team Tokyo, Giappone & Australia)',
        overview:
          'Ricerca applicata e sviluppo orientato alla produzione su infrastrutture telco Cloud-Native all’interno di un team R&D internazionale.',
        highlights: [
          'Progettazione e sviluppo di Kubernetes Operators in Go tramite il framework Kubebuilder e Custom Resource Definitions (CRD) per la gestione di soluzioni di monitoraggio cluster.',
          'Sviluppo dell’orchestrazione control-plane per la configurazione dichiarativa e la distribuzione dinamica di regole di filtraggio verso agent di monitoraggio di rete a livello nodo basati su eBPF.',
          'Studio e valutazione di ottimizzazioni a livello di cluster Kubernetes per workload orientati all’AI.',
        ],
        tags: ['Go', 'Kubernetes', 'Kubebuilder', 'CRD', 'Cloud-Native', 'Integrazione eBPF'],
      },
      {
        company: 'Netgroup @ DAUIN — Politecnico di Torino',
        companyUrl: 'https://www.polito.it/',
        role: 'Assegnista di Ricerca (Research Fellow)',
        period: 'Ott 2023 – Gen 2025',
        location: 'Torino, Italia',
        badge: 'Open Source',
        overview:
          'Ricerca e sviluppo open-source nel gruppo NetGroup focalizzati sull’orchestrazione Kubernetes multi-cluster e sul continuum computazionale edge-to-cloud.',
        highlights: [
          'Guida nello sviluppo open-source dei componenti core del FLUIDOS Node all’interno del progetto europeo Horizon FLUIDOS per la condivisione dinamica di risorse multi-cluster.',
          'Progettazione e sviluppo di Custom Resources (CRD) e Kubernetes Operators in Go con Kubebuilder, e co-sviluppo del protocollo REAR (Resource Advertisement and Reservation) per la federazione tra cluster.',
          'Automazione di ambienti di test Kubernetes bare-metal e virtualizzati tramite Liqo, metodologie GitOps, Ansible e Proxmox.',
        ],
        tags: ['Go', 'Kubernetes', 'Kubebuilder', 'FLUIDOS Node', 'REAR Protocol', 'Liqo', 'GitOps'],
      },
      {
        company: 'Consorzio TOP-IX',
        companyUrl: 'https://www.top-ix.org/it/home/',
        role: 'Tesista Magistrale',
        period: 'Ott 2022 – Lug 2023',
        location: 'Torino, Italia',
        badge: 'Open Source',
        overview:
          'Lavoro di tesi magistrale open-source presso il Consorzio TOP-IX (Torino Piemonte Internet Exchange) nell’ambito dell’iniziativa europea GAIA-X per il cloud federato.',
        highlights: [
          'Sviluppo della tesi "Enabling multi-provider service composition among different Kubernetes clusters" in contesti di federazione multi-cluster.',
          'Progettazione di un modello architetturale e di un marketplace per integrare servizi di terze parti nel proprio cluster Kubernetes utilizzando Go, Liqo, Open Service Broker API, OpenID Connect (Keycloak) e React.',
        ],
        tags: ['Go', 'Kubernetes', 'Liqo', 'Open Service Broker API', 'Keycloak (OIDC)', 'React'],
      },
      {
        company: 'Fondazione LINKS',
        companyUrl: 'https://linksfoundation.com/',
        role: 'Tirocinante Software Engineer',
        period: 'Mar 2020 – Lug 2020',
        location: 'Torino, Italia',
        overview:
          'Tirocinio curricolare triennale presso Fondazione LINKS dedicato a piattaforme IoT e smart home.',
        highlights: [
          'Sviluppo di widget cartografici interattivi su ThingsBoard e integrazione asincrona con una piattaforma smart-home sottostante basata su iPOPO (Python OSGi).',
        ],
        tags: ['Python', 'JavaScript', 'ThingsBoard', 'iPOPO (OSGi)', 'IoT'],
      },
    ],
    projects: [
      {
        title: 'OpenShift Control Plane Operators',
        subtitle: 'Red Hat OpenShift Container Platform',
        badge: 'Open Source · OpenShift',
        description:
          'Sviluppo, valutazione prestazionale e manutenzione sugli operatori e componenti open-source che costituiscono il Control Plane di OpenShift—dalla gestione del ciclo di vita di etcd alla sicurezza e all’orchestrazione automatizzata di piattaforma.',
        url: 'https://github.com/openshift/cluster-etcd-operator',
        secondaryUrl: { label: 'OpenShift GitHub', url: 'https://github.com/openshift' },
        tags: ['Go', 'OpenShift', 'Kubernetes Operators', 'Control Plane', 'etcd'],
      },
      {
        title: 'FLUIDOS Node',
        subtitle: 'Progetto Europeo Horizon FLUIDOS',
        badge: 'Open Source · Core Contributor',
        description:
          'Insieme di operatori e controller Kubernetes che permettono a cluster indipendenti e dispositivi eterogenei edge/cloud di scoprire, prenotare e condividere risorse computazionali in modo trasparente.',
        url: 'https://github.com/fluidos-project/node',
        secondaryUrl: { label: 'Sito del Progetto', url: 'https://www.fluidos.eu/' },
        tags: ['Go', 'Kubebuilder', 'Kubernetes CRD', 'Multi-Cluster', 'GitOps'],
      },
      {
        title: 'Protocollo REAR',
        subtitle: 'REsource Advertisement & Reservation',
        badge: 'Open Source · Protocollo & Modelli Dati',
        description:
          'Specifica, workflow e strutture dati (REAR v0.2) che abilitano provider e consumatori cloud a pubblicizzare, prenotare e consumare risorse virtualizzate, porzioni di cluster Kubernetes e servizi gestiti.',
        url: 'https://github.com/andreacv98/Rear',
        secondaryUrl: { label: 'Modelli Dati', url: 'https://github.com/andreacv98/fluidos-REAR-data-models' },
        tags: ['Sistemi Distribuiti', 'Kubernetes', 'Protocol Design', 'Go', 'JSON Schema'],
      },
      {
        title: 'Marketplace Multi-Cluster di Servizi K8s',
        subtitle: 'Tesi Magistrale · Ecosistema GAIA-X',
        badge: 'Open Source · Full-Stack K8s',
        description:
          'Service broker in Go basato su Open Service Broker API su cluster Kubernetes federati con Liqo, accompagnato da una dashboard React per la scoperta e l’attivazione di servizi cross-cluster.',
        url: 'https://github.com/andreacv98/service-broker-k8s',
        secondaryUrl: {
          label: 'Dashboard React',
          url: 'https://github.com/andreacv98/dashboard-services-marketplace',
        },
        tags: ['Go', 'Liqo', 'Open Service Broker API', 'React', 'Keycloak OIDC'],
      },
      {
        title: 'Aruba Challenge@PoliTo — "D.I.Y. Digital Identity"',
        subtitle: 'Vincitore Challenge · In collaborazione con Aruba S.p.A.',
        badge: '1° Classificato',
        description:
          'Progetto vincitore della challenge per un modello di autenticazione istituzionale unificata che integra "Entra con CIE" con un flusso OpenID Connect personalizzato e un portale React per i servizi di ateneo.',
        url: 'https://github.com/andreacv98/digital-platform',
        secondaryUrl: {
          label: 'Certificato OpenBadge',
          url: 'https://openbadges.bestr.it/public/assertions/xP-YwXABRFq6jsQAe70eIw',
        },
        tags: ['OpenID Connect', 'Autenticazione CIE', 'React', 'Identità Digitale', 'Security'],
      },
      {
        title: 'Screen Recorder Multi-Piattaforma in C++',
        subtitle: 'Programmazione di Sistema Multithread',
        badge: 'Open Source · C++ & FFmpeg',
        description:
          'Applicazione desktop multi-piattaforma in C++ per la registrazione audio/video dello schermo, basata su programmazione multithread e sulle librerie native C/C++ di FFmpeg.',
        url: 'https://github.com/andreacv98/screencapture-cpp',
        tags: ['C++', 'Multithreading', 'FFmpeg', 'Programmazione di Sistema'],
      },
    ],
    skillCategories: [
      {
        title: 'Kubernetes & Cloud-Native Control Plane',
        description: 'Focus quotidiano: progettazione di operatori, controller custom e piani di controllo resilienti.',
        skills: [
          { name: 'Kubernetes', primary: true },
          { name: 'Red Hat OpenShift', primary: true },
          { name: 'Kubebuilder / Operator SDK', primary: true },
          { name: 'etcd', primary: true },
          { name: 'Custom Resource Definitions (CRD)', primary: true },
          { name: 'Liqo (Multi-Cluster)' },
          { name: 'Helm & Kustomize' },
          { name: 'Docker & Container' },
          { name: 'Network Policies' },
        ],
      },
      {
        title: 'Software Engineering, Testing & Metodologie',
        description: 'Validazione empirica, analisi delle performance, suite di test automatizzati e workflow Agile.',
        skills: [
          { name: 'Software Testing (Unit & E2E)', primary: true },
          { name: 'Valutazione Performance & Analisi Trade-off', primary: true },
          { name: 'Jira & Workflow Agile / Scrum', primary: true },
          { name: 'Collaborazione Open-Source & Code Review' },
          { name: 'Technical Design & Prototipazione Feature' },
        ],
      },
      {
        title: 'Linguaggi di Programmazione & Web',
        description: 'Sviluppo professionale di sistemi Cloud-Native in Go, supportato da solide basi poliglotte.',
        skills: [
          { name: 'Go (Golang)', primary: true },
          { name: 'C / C++' },
          { name: 'Python' },
          { name: 'JavaScript / React.js' },
          { name: 'Java' },
          { name: 'Bash / Shell' },
        ],
      },
      {
        title: 'Infrastruttura, Observability & DevOps',
        description: 'Provisioning di cluster, telemetria, automazione CI/CD e protocolli di rete e identità.',
        skills: [
          { name: 'Linux', primary: true },
          { name: 'Prometheus & Grafana', primary: true },
          { name: 'Git & GitHub Actions', primary: true },
          { name: 'GitOps' },
          { name: 'Ansible & Kubespray' },
          { name: 'Proxmox VE' },
          { name: 'Wireshark' },
          { name: 'OpenID Connect (OIDC) & Keycloak' },
        ],
      },
    ],
    education: [
      {
        degree: 'Laurea Magistrale in Ingegneria Informatica (Computer Engineering)',
        specialization: 'Cloud Computing and Computer Networks',
        institution: 'Politecnico di Torino',
        institutionUrl: 'https://www.polito.it/',
        period: '2020 – 2023',
        grade: '107 / 110',
        details: [
          'Tesi: "Enabling Multi-Provider Service Composition Among Different Kubernetes Clusters"',
          'Relatore: Prof. Fulvio Risso',
          'Focus: Cloud computing, sistemi distribuiti, software networking, virtualizzazione, ingegneria del software',
        ],
      },
      {
        degree: 'Laurea Triennale in Ingegneria Informatica',
        institution: 'Politecnico di Torino',
        institutionUrl: 'https://www.polito.it/',
        period: '2017 – 2020',
        grade: '93 / 110',
        details: [
          'Focus: Reti di calcolatori, sistemi operativi, basi di dati, programmazione a oggetti, controlli automatici',
        ],
      },
      {
        degree: 'Diploma di Maturità Scientifica',
        institution: 'Liceo Classico e Scientifico Statale Pellico-Peano (Cuneo)',
        institutionUrl: 'https://liceocuneo.it/',
        period: '2012 – 2017',
        details: [],
      },
    ],
    certifications: [
      {
        name: 'Vincitore Challenge@PoliTo — "D.I.Y. Digital Identity for Yourself"',
        issuer: 'Politecnico di Torino & Aruba S.p.A.',
        url: 'https://openbadges.bestr.it/public/assertions/xP-YwXABRFq6jsQAe70eIw',
        detail: 'OpenBadge Bestr verificato per la vittoria nella challenge di innovazione su CIE e OpenID Connect.',
      },
      {
        name: 'Cambridge English: First (FCE) — Livello B2',
        issuer: 'Cambridge Assessment English',
        url: 'https://www.cambridgeenglish.org/it/exams-and-tests/first/',
        detail: 'Certificazione di conoscenza della lingua inglese utilizzata quotidianamente in team internazionali.',
      },
    ],
  },
};
