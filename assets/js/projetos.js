const listaProjetos = [
  {
    id: "oradorpro",
    title: "OradorPro",
    category: "backend",
    badge: "⭐ Destaque .NET & IA",
    type: "Web Application • Clean Architecture",
    description:
      "Aplicação corporativa em ASP.NET Core MVC para gestão centralizada de oradores, congregações e discursos. Possui automação de mensageria via WhatsApp Cloud API e governança estrita de desenvolvimento por AI Agent Harness multiagente.",
    tags: [".NET 8", "C#", "ASP.NET Core MVC", "Clean Arch", "WhatsApp API", "AI Agent Harness", "EF Core"],
    github: "https://github.com/victoroliveira59/OradorPro",
    demo: "",
    isPrivate: false,
    image: null,
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
    architecture: {
      headline: "Governança Multiagente DoR/DoD & Automação Inteligente",
      highlights: [
        "<strong>AI Agent Harness:</strong> Desenvolvimento orquestrado por pipeline de agentes especializados (Maestro, Analista, Engenheiro, Tester, Revisor) com DoR e DoD rigorosos.",
        "<strong>Clean Architecture:</strong> Separação estrita em camadas (Domain, Application, Infrastructure e Web) mantendo o domínio agnóstico a banco ou serviços externos.",
        "<strong>WhatsApp Cloud API:</strong> Webhook bidirecional para envio automatizado de convites, lembretes de discurso e confirmações ativas com templates aprovados.",
        "<strong>Persistência & Migrations:</strong> EF Core com Fluent API, mapeamento de entidades relacionais e auditoria de alterações."
      ]
    }
  },
  {
    id: "crm-multitenant",
    title: "CRM Multi-Tenant Enterprise",
    category: "backend",
    badge: "🏢 Enterprise SaaS",
    type: "Enterprise Multi-Tenant • DDD",
    description:
      "Solução corporativa de CRM com isolamento rigoroso por Tenant Context. Desenvolvida em Clean Architecture e Domain-Driven Design (DDD), DTOs para tráfego seguro, documentação Swagger/OpenAPI, EF Core Migrations, conteinerização Docker e frontend moderno em TypeScript.",
    tags: ["C#", ".NET 8/9", "Clean Arch", "DDD", "Docker", "PostgreSQL", "TypeScript", "Multi-Tenant"],
    github: "https://github.com/victoroliveira59",
    demo: "",
    isPrivate: true,
    image: null,
    gradient: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #059669 100%)",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
    architecture: {
      headline: "Isolamento de Inquilinos & Arquitetura Orientada a Domínio",
      highlights: [
        "<strong>Tenant Context Middleware:</strong> Resolução dinâmica de inquilino via headers HTTP (`X-Tenant-ID`) ou subdomínio, injetando o contexto de forma transparente nas requisições.",
        "<strong>Domain-Driven Design (DDD):</strong> Modelagem rica com entidades, agregados, objetos de valor e domain events, garantindo invariantes e regras de negócio robustas.",
        "<strong>Segregação de Dados:</strong> Suporte a Global Query Filters no EF Core e schemas/bancos dedicados no PostgreSQL / SQL Server para máxima conformidade de segurança.",
        "<strong>Frontend TypeScript & Docker:</strong> Consumo tipado via contratos OpenAPI e ambiente 100% orquestrado com Docker Compose para desenvolvimento e deploy contínuo."
      ]
    }
  },
  {
    id: "sistema-mensageria",
    title: "Sistema de Mensageria Distribuída",
    category: "backend",
    badge: "📨 Event-Driven & Filas",
    type: "Distributed Messaging • RabbitMQ & Kafka",
    description:
      "Arquitetura distribuída e orientada a eventos para processamento desacoplado de alta confiabilidade em .NET. Implementa topologias de mensageria com RabbitMQ (exchanges Direct/Topic/Fanout, Dead Letter Exchange), streaming massivo com Apache Kafka e resiliência com Polly.",
    tags: ["C#", ".NET 8", "RabbitMQ", "Apache Kafka", "Docker", "Event-Driven", "Polly"],
    github: "https://github.com/victoroliveira59/Sistema_Mensageria_RabbitMQ",
    demo: "",
    isPrivate: false,
    image: null,
    gradient: "linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="3"/><circle cx="19" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M7.8 7.2l6.4 8M16.2 7.2l-6.4 8M8 6h8"/></svg>`,
    architecture: {
      headline: "Comunicação Assíncrona, Resiliência e Streaming Contínuo",
      highlights: [
        "<strong>Topologia RabbitMQ:</strong> Configuração de filas duráveis, Dead Letter Exchanges (DLX) para mensagens venenosas e controle de QoS com auto-acknowledgement controlado.",
        "<strong>Streaming Apache Kafka:</strong> Ingestão massiva particionada para eventos de telemetria e auditoria analítica sem perda de pacotes.",
        "<strong>Políticas de Resiliência:</strong> Retry com backoff exponencial, Circuit Breaker e fallback utilizando a biblioteca Polly em C#.",
        "<strong>Background Worker Services:</strong> Processamento em lote em segundo plano gerenciado por HostedServices com graceful shutdown seguro."
      ]
    }
  },
  {
    id: "floworder",
    title: "FlowOrder & FlowOrder Admin",
    category: "fullstack",
    badge: "📦 Workflow & Automação",
    type: "Order Management & Tracking",
    description:
      "Plataforma integrada para gestão e rastreamento contínuo de fluxo de pedidos corporativos. Possui painel administrativo com métricas em tempo real, automação de tarefas e integração de microsserviços em .NET com interfaces modernas em TypeScript.",
    tags: ["C#", ".NET", "TypeScript", "JavaScript Automation", "REST API", "SQL Server", "Full Stack"],
    github: "https://github.com/victoroliveira59",
    demo: "",
    isPrivate: true,
    image: null,
    gradient: "linear-gradient(135deg, #701a75 0%, #86198f 50%, #a21caf 100%)",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16h6"/><path d="M19 13v6"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>`,
    architecture: {
      headline: "Máquina de Estados de Pedidos & Automação Operacional",
      highlights: [
        "<strong>Workflow State Machine:</strong> Transições estritas de estado de pedidos (Criado, Em Separação, Faturado, Despachado, Entregue) prevenindo inconsistências.",
        "<strong>Painel Administrativo Reativo:</strong> Dashboard em TypeScript com visualização consolidada de KPIs, tempos médios de ciclo e alertas de atraso.",
        "<strong>Automação de Tarefas:</strong> Rotinas assíncronas para processamento de despachos e sincronização com bases legadas.",
        "<strong>Validação & Segurança:</strong> FluentValidation em todas as requisições DTO e autenticação baseada em roles para controle hierárquico de acesso."
      ]
    }
  },
  {
    id: "processadorleituras",
    title: "Processador de Leituras",
    category: "tools",
    badge: "⚡ High Performance",
    type: "CLI • Stream Processing",
    description:
      "Ferramenta console em .NET 8 para processamento em streaming de alta performance de arquivos massivos de telemetria e hidrômetros. Implementa desduplicação em memória, validação JSON sem alocações excessivas e exportação de relatórios em CSV.",
    tags: [".NET 8", "C#", "High-Performance", "Stream Processing", "JSON Parsing", "CLI", "Zero Allocation"],
    github: "https://github.com/victoroliveira59/ProcessadorLeituras",
    demo: "",
    isPrivate: false,
    image: null,
    gradient: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`,
    architecture: {
      headline: "Processamento em Streaming de Baixa Alocação de Memória",
      highlights: [
        "<strong>Pipelines de Streaming:</strong> Ingestão chunked através de `StreamReader` e `ReadOnlySpan<char>`, evitando carregar dezenas de megabytes diretamente na Heap.",
        "<strong>Parsing JSON Eficiente:</strong> Validação com `System.Text.Json` usando `Utf8JsonReader` com overhead mínimo de Garbage Collection.",
        "<strong>Desduplicação em Memória:</strong> HashSets e chaves compostas para remoção ultrarrápida de telemetrias duplicadas em nanossegundos.",
        "<strong>Geração Otimizada de CSV:</strong> Buffers de saída assíncronos gerando dados consolidados prontos para auditoria de cobrança."
      ]
    }
  },
  {
    id: "apicatalogo",
    title: "API Catálogo de Produtos",
    category: "backend",
    badge: "🔌 RESTful API",
    type: "ASP.NET Core Web API",
    description:
      "API RESTful em ASP.NET Core (.NET 8 / .NET 9) com Repository Pattern e Unit of Work. Implementa Entity Framework Core, paginação, ordenação, filtros dinâmicos, autenticação JWT, documentação interativa Swagger e persistência em MySQL.",
    tags: [".NET 9", "C#", "ASP.NET Core", "EF Core", "MySQL", "Repository Pattern", "Swagger"],
    github: "https://github.com/victoroliveira59/APICatalogo",
    demo: "",
    isPrivate: false,
    image: null,
    gradient: "linear-gradient(135deg, #172554 0%, #1e40af 50%, #2563eb 100%)",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    architecture: {
      headline: "Arquitetura RESTful Completa com Repository e Unit of Work",
      highlights: [
        "<strong>Repository Pattern & Unit of Work:</strong> Abstração da camada de persistência com transações seguras e testeabilidade unitária garantida.",
        "<strong>Paginação Dinâmica & Headers:</strong> Respostas com metadados de paginação via cabeçalhos HTTP (`X-Pagination`) e paginação no banco com `Skip/Take` otimizados.",
        "<strong>Segurança JWT:</strong> Emissão de tokens Bearer com refresh tokens, claims de autorização e controle de expiração.",
        "<strong>Documentação Swagger:</strong> OpenAPI 3.0 com esquemas tipados, códigos de resposta HTTP semânticos e sandbox de testes."
      ]
    }
  },
  {
    id: "alvesrefrigeracao",
    title: "Alves Refrigeração",
    category: "fullstack",
    badge: "🌐 Cliente Comercial",
    type: "Single Page Application (SPA)",
    description:
      "Plataforma institucional e catálogo de serviços desenvolvida em Angular para empresa de climatização e refrigeração comercial. Foco em experiência do usuário (UI/UX), mobile-first, performance e integração de contato direto.",
    tags: ["Angular", "TypeScript", "HTML5/CSS3", "Mobile First", "UI/UX", "Produção"],
    github: "https://github.com/victoroliveira59/cli_ar_homepage",
    demo: "https://alvesrefrigeracao.vercel.app",
    isPrivate: false,
    image: "assets/images/projects/desafios/AlvesRefrigeracao.gif",
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0284c7 100%)",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>`,
    architecture: {
      headline: "SPA em Produção com Alto Desempenho e Foco em Conversão",
      highlights: [
        "<strong>Aplicação no Ar:</strong> Sistema ativo atendendo clientes reais e recebendo orçamentos diretamente pelo canal digital.",
        "<strong>Componentização Angular:</strong> Separação modular de componentes de catálogo, depoimentos, formulários reativos e cabeçalho responsivo.",
        "<strong>Mobile First & Otimização:</strong> Carregamento rápido com imagens lazy-loaded e pontuações elevadas no Lighthouse.",
        "<strong>Deploy Automatizado:</strong> Pipeline de continuous deployment integrado com a Vercel a cada commit no repositório."
      ]
    }
  },
  {
    id: "portifolio",
    title: "Portfólio Victor Oliveira",
    category: "fullstack",
    badge: "💻 Dev Showcase",
    type: "Design System & Web Portfolio",
    description:
      "Site pessoal desenvolvido para apresentar projetos corporativos, competências técnicas e trajetória em engenharia de software. Possui alternador de modo escuro/claro com detecção do SO, filtragem dinâmica de projetos, modal de arquitetura e design responsivo.",
    tags: ["JavaScript ES6+", "HTML5", "CSS3 Moderno", "Clean Code", "Responsivo", "Acessibilidade"],
    github: "https://github.com/victoroliveira59/Portifolio-VictorOliveira",
    demo: "https://portifolio-victor-oliveira.vercel.app",
    isPrivate: false,
    image: "assets/images/projects/desafios/Portifolio.gif",
    gradient: "linear-gradient(135deg, #172554 0%, #1e40af 50%, #3b82f6 100%)",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    architecture: {
      headline: "Design System Leve, Sem Dependências Pesadas e 100% Responsivo",
      highlights: [
        "<strong>Vanilla JS Modular:</strong> Arquitetura limpa em ES Modules, zero dependências lentas de frameworks, performance instantânea.",
        "<strong>Gerenciamento Robusto de Temas:</strong> Suporte ao `prefers-color-scheme` nativo do SO com persistência elegante em `localStorage`.",
        "<strong>Modal de Arquitetura & Acessibilidade:</strong> Detalhamento técnico com suporte a navegação por teclado (tecla Escape e traps de foco).",
        "<strong>Design System /boost:</strong> Paleta Obsidian/Indigo com efeitos de profundidade, tipografia técnica (`Fira Code`) e responsividade completa."
      ]
    }
  }
];

function renderCard(p) {
  const imageHeader = p.image
    ? `<div class="img-wrapper has-image">
        <img src="${p.image}" alt="Demonstração do projeto ${p.title}" loading="lazy" />
        <div class="card-overlay">
          <span class="card-badge ${p.isPrivate ? "badge-private" : ""}">${p.badge}</span>
        </div>
      </div>`
    : `<div class="img-wrapper banner-gradient" style="background: ${p.gradient};">
        <div class="banner-content">
          <div class="banner-icon">${p.icon}</div>
          <span class="banner-type">${p.type}</span>
        </div>
        <div class="card-overlay">
          <span class="card-badge ${p.isPrivate ? "badge-private" : ""}">${p.badge}</span>
        </div>
      </div>`;

  const tagsHtml = p.tags
    .map((tag) => `<span class="tech-tag">${tag}</span>`)
    .join("");

  const demoButton = p.demo
    ? `<a href="${p.demo}" class="btn-project-link" title="Acessar demonstração ao vivo" target="_blank" rel="noopener noreferrer">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
        <span>Demo</span>
      </a>`
    : "";

  // Botão de código ou aviso de repositório corporativo
  const codeButton = p.isPrivate
    ? `<button type="button" class="btn-project-link btn-details-trigger primary" data-project-id="${p.id}" title="Ver detalhes da arquitetura corporativa">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        <span>Ver Arquitetura</span>
      </button>`
    : `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-project-link primary" title="Ver código no GitHub">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        <span>Código</span>
      </a>`;

  // Botão de detalhes do modal (quando público, dá acesso aos detalhes completos)
  const detailsButton = !p.isPrivate
    ? `<button type="button" class="btn-project-link btn-details-trigger secondary" data-project-id="${p.id}" title="Ver arquitetura e detalhes técnicos">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <span>Detalhes</span>
      </button>`
    : "";

  return `
    <article class="card project-card" data-category="${p.category}" id="card-${p.id}">
      ${imageHeader}
      <div class="card-body">
        <header class="card-header">
          <h3 class="card-title">${p.title}</h3>
        </header>
        <p class="card-desc">${p.description}</p>
        <div class="card-tags">
          ${tagsHtml}
        </div>
        <div class="card-actions">
          ${codeButton}
          ${detailsButton}
          ${demoButton}
        </div>
      </div>
    </article>
  `;
}

function projetos(section) {
  const backendCount = listaProjetos.filter(p => p.category === "backend").length;
  const fullstackCount = listaProjetos.filter(p => p.category === "fullstack").length;
  const toolsCount = listaProjetos.filter(p => p.category === "tools").length;

  section.innerHTML = `
    <header class="section-header">
      <span class="section-subtitle">Portfólio em Ação</span>
      <h2>Projetos em Destaque</h2>
      <p>
        Aplicações corporativas e ferramentas com foco em Clean Architecture, alta performance, microsserviços, mensageria e automação inteligente.
      </p>

      <div class="project-filters" role="tablist" aria-label="Filtrar projetos por categoria">
        <button class="filter-btn active" data-filter="all" role="tab" aria-selected="true">
          Todos (${listaProjetos.length})
        </button>
        <button class="filter-btn" data-filter="backend" role="tab" aria-selected="false">
          Back-end .NET (${backendCount})
        </button>
        <button class="filter-btn" data-filter="fullstack" role="tab" aria-selected="false">
          Full Stack & Web (${fullstackCount})
        </button>
        <button class="filter-btn" data-filter="tools" role="tab" aria-selected="false">
          Ferramentas & CLI (${toolsCount})
        </button>
      </div>
    </header>

    <div class="content">
      <div class="cards projects-grid" id="projectsGrid">
        ${listaProjetos.map(renderCard).join("")}
      </div>

      <div class="projects-cta">
        <p>Quer conhecer mais soluções ou repositórios de estudos?</p>
        <a href="https://github.com/victoroliveira59?tab=repositories" target="_blank" rel="noopener noreferrer" class="button btn-github-more">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"/>
          </svg>
          <span>Ver Todos no GitHub</span>
        </a>
      </div>
    </div>
  `;

  setupFilters();
  setupModal();
}

function setupFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.filter;

      // Filtragem síncrona com classes CSS - elimina 100% dos race conditions de setTimeout
      cards.forEach((card) => {
        const isMatch = filter === "all" || card.dataset.category === filter;
        if (isMatch) {
          card.classList.remove("is-hidden");
          card.classList.remove("card-animate-in");
          // Força reflow para reiniciar animação suave
          void card.offsetWidth;
          card.classList.add("card-animate-in");
        } else {
          card.classList.add("is-hidden");
          card.classList.remove("card-animate-in");
        }
      });
    });
  });
}

function setupModal() {
  // Cria o elemento do modal se ainda não existir no DOM
  let modal = document.getElementById("projectModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "projectModal";
    modal.className = "project-modal-backdrop";
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML = `
      <div class="project-modal-container">
        <button class="modal-close-btn" aria-label="Fechar detalhes do projeto">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-content-slot"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeBtn = modal.querySelector(".modal-close-btn");
  const slot = modal.querySelector(".modal-content-slot");

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function openModal(projectId) {
    const p = listaProjetos.find((item) => item.id === projectId);
    if (!p) return;

    const highlightsHtml = p.architecture && p.architecture.highlights
      ? p.architecture.highlights
          .map((item) => `<li><span class="highlight-check">✓</span><div>${item}</div></li>`)
          .join("")
      : "";

    const tagsHtml = p.tags
      .map((tag) => `<span class="tech-tag">${tag}</span>`)
      .join("");

    const actionButtons = p.isPrivate
      ? `
        <div class="modal-private-note">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span>Código-fonte corporativo sob acordo de confidencialidade (NDA).</span>
        </div>
        <a href="https://wa.me/5531988410483?text=Olá%20Victor,%20gostaria%20de%20conversar%20sobre%20a%20arquitetura%20do%20projeto%20${encodeURIComponent(p.title)}" target="_blank" rel="noopener noreferrer" class="button whatsapp-btn">
          <span>Conversar sobre a Arquitetura</span>
        </a>
      `
      : `
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="button primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          <span>Ver Repositório no GitHub</span>
        </a>
        ${
          p.demo
            ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="button secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                <span>Acessar Demo Online</span>
              </a>`
            : ""
        }
      `;

    slot.innerHTML = `
      <header class="modal-header">
        <div class="modal-badge-row">
          <span class="card-badge ${p.isPrivate ? "badge-private" : ""}">${p.badge}</span>
          <span class="modal-type">${p.type}</span>
        </div>
        <h2 class="modal-title">${p.title}</h2>
        <p class="modal-desc">${p.description}</p>
      </header>

      <section class="modal-arch-section">
        <h3>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          ${p.architecture ? p.architecture.headline : "Destaques da Solução"}
        </h3>
        <ul class="modal-highlights-list">
          ${highlightsHtml}
        </ul>
      </section>

      <section class="modal-tags-section">
        <h4>Tecnologias & Padrões</h4>
        <div class="card-tags">
          ${tagsHtml}
        </div>
      </section>

      <footer class="modal-footer">
        ${actionButtons}
      </footer>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  // Event delegation para abrir o modal
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".btn-details-trigger");
    if (trigger) {
      e.preventDefault();
      const id = trigger.dataset.projectId;
      openModal(id);
    }
  });

  closeBtn.addEventListener("click", closeModal);

  // Fecha clicando no backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Fecha com a tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

export { listaProjetos, projetos };
