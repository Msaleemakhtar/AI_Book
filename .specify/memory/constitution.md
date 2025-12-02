<!--
SYNC IMPACT REPORT
==================
Version Change: 2.0.0 → 2.0.1
Amendment Type: PATCH (conceptual corrections - feature sequence and task sizing)

Modified Sections:
  - Core Principle V: Comprehensive Implementation → Removed Subagents/Skills from feature sequence, added clarification that they're development tools used throughout
  - Scope Constraints: Should-have priority → Removed Subagents/Skills, added clarifying note
  - Governance: Sequential development → Updated to match corrected feature sequence
  - SDD Quality Principles: Task Breakdown → Changed task sizing from "1-4 hours" to "15-30 minutes" with clear boundaries (<10 min = consolidate, >45 min = break down)

Rationale:
  - Conceptual Clarity: Subagents/Skills are Claude Code development workflow tools (HOW you build), not product features (WHAT users interact with)
  - Separation of Concerns: Product features (Core, Auth, Personalization, Translation) now clearly distinguished from development tools
  - Consistency: Core Principle II correctly describes Subagents/Skills as development companion tools - feature sequence now aligns with this
  - Task Sizing: 15-30 minute tasks provide meaningful progress with reviewable scope, avoiding micro-task overhead (too small) and scope creep (too large)

Impact on Workflow:
  - Product feature sequence now correct: Core → Auth → Personalization → Translation
  - Subagents/Skills understood as tools used throughout ALL feature development
  - Scope reduction strategy now only includes product features
  - Task sizing updated to 15-30 minutes for better granularity and reviewability

Previous Version: 2.0.0 (2025-12-02) - SDD quality principles + comprehensive work type standards
-->

# Physical AI & Humanoid Robotics Textbook Constitution

## Core Principles

### I. Learning-First Mindset

**Quality over speed**: This is a learning-focused project. Prioritize working, tested features over rushed implementations.

**Measurable Criteria**:
- Each feature must pass >70% test coverage before moving to next
- All linting checks must pass (zero warnings)
- Performance targets met (RAG <2s p95, page load <3s)
- Self-review checklist completed for each feature (checklist defined in templates)

**Rationale**: Learning requires time for understanding, experimentation, and iteration. Quality standards (testability, performance, accessibility) ensure genuine learning outcomes while building production-grade skills. Rushing sacrifices educational value and creates technical debt.

**Non-negotiable rules**:
- No copy-paste without understanding the code (verification: can explain in PHR the function's purpose, inputs, outputs, edge cases, and why this approach was chosen)
- Research using Context7 MCP before implementing any new technology
- Document learnings through PHRs (Prompt History Records)
- Review and refactor code after completing each feature
- Reflection checkpoints after each major milestone (document in PHR: what worked, what didn't, what was learned, what would be done differently)

### II. Claude Code as Development Companion

**Collaborative AI development**: Treat Claude Code as a development partner, not just a code generator. Create specialized Subagents for recurring tasks, build reusable Agent Skills, and leverage AI capabilities for planning, implementation, and review.

**Rationale**: Claude Code + Spec-Kit Plus enables spec-driven development with AI assistance. Properly configured subagents and skills amplify productivity while maintaining quality.

**Non-negotiable rules**:
- Use Claude Code Subagents for specialized recurring tasks
- Build Agent Skills to enhance development workflow
- Document subagent configurations and skill definitions
- Trust Claude Code's capabilities but verify understanding (verification: review generated code, test it, explain key decisions in PHR)
- Iteratively improve agents and skills based on what works

### III. Human-Agent-Robot Partnership Philosophy

**Core educational theme**: This textbook embodies the future of work where humans, AI agents, and robots collaborate. Content must make this partnership accessible and inspiring to students learning to control humanoid robots.

**Rationale**: Physical AI represents the convergence of digital intelligence and physical embodiment. Students need both technical skills and conceptual understanding of this emerging paradigm.

**Non-negotiable rules**:
- All content emphasizes human-agent-robot collaboration
- Practical examples with hands-on simulations required
- Explain concepts for diverse backgrounds (software/hardware experience)
- Real-world applications and use cases must be included
- Include real-world use cases and career pathways for each major concept (minimum 1 application per module, with industry examples)

### IV. Technical Authority and Educational Excellence

**Accuracy is sacred**: ROS 2, Gazebo, NVIDIA Isaac, and VLA content must be technically correct and current. Use Context7 MCP to fetch latest documentation. Pedagogical clarity is essential for students with varying backgrounds.

**Rationale**: Educational content with technical errors damages credibility and student learning. Outdated information in rapidly evolving fields like robotics and AI is worse than no information.

**Non-negotiable rules**:
- Use Context7 MCP to fetch current ROS 2, Gazebo, NVIDIA Isaac, VLA documentation
- Verify all code examples work with latest versions
- Explain concepts at appropriate depth for diverse student backgrounds
- Include hands-on code examples, simulation exercises, and guided capstone project
- Follow 13-week structure across 4 modules (ROS 2, Gazebo/Unity, Isaac, VLA)

### V. Comprehensive and Complete Implementation

**All features to production quality**: Implement Core (Docusaurus + RAG), Auth, Personalization, and Translation. Each feature must be fully working before moving to the next. No half-measures.

**Rationale**: Partial implementations create technical debt and diminish user experience. Sequential development ensures stability and allows thorough testing. Subagents/Skills are development tools used throughout (see Core Principle II), not sequential product features.

**Non-negotiable rules**:
- Feature sequence: Core → Auth → Personalization → Translation
- Each feature fully working (with tests) before moving to next
- Production-quality criteria: passes all tests (>70% coverage), meets performance targets, linting clean (zero warnings), documented with docstrings
- Scope reduction strategy if time-constrained: Translation → Personalization (Auth is non-negotiable)
- Must-have features (Docusaurus + RAG + Auth) are non-negotiable
- Subagents/Skills: Used throughout development as workflow tools (not a sequential feature)

### VI. Spec-Driven Development (SDD) Discipline

**Every feature follows the SDD workflow**: spec → plan → tasks → implement → test → review. Document every significant interaction with Claude Code via PHRs. Capture all architectural decisions in ADRs.

**Rationale**: Spec-Driven Development prevents scope creep, ensures thorough planning, and creates documentation trail. PHRs and ADRs enable learning review and future maintenance.

**Non-negotiable rules**:
- Use `/sp.specify`, `/sp.plan`, `/sp.tasks`, `/sp.implement` commands for all features
- Create PHR after every significant Claude Code interaction
- Document architectural decisions with ADRs (with justification)
- Clear git commit messages, logical feature branches, clean history
- No implementation without spec, no deployment without tests

#### Specification Quality Principles

**All specifications must meet these quality gates before proceeding to planning**:

- **Independently Testable**: Each user story is a viable MVP slice that delivers value alone (not dependent on other stories)
- **Measurable Requirements**: No vague terms like "fast" or "good UX" - use metrics: "<2s", "WCAG 2.1 AA", ">70% coverage"
- **Technology-Agnostic Success Criteria**: Focus on outcomes, not implementation (e.g., "User can authenticate" not "Use JWT tokens")
- **No Unresolved Clarifications**: All NEEDS CLARIFICATION items must be resolved before proceeding to planning phase
- **Testability Gate**: Can you build a passing test without seeing the implementation? If no, spec is incomplete.

#### Planning Quality Principles

**All plans must meet these quality gates before proceeding to task breakdown**:

- **Justified Decisions**: All architectural decisions must document why this approach vs alternatives considered
- **Complexity Justification**: If plan violates constitution gates (e.g., >50 lines/function), explain why simpler alternative insufficient
- **Quantified Performance Goals**: No "fast" - use numbers: "1000 req/s", "<200ms p95", "<2s RAG latency"
- **No Placeholders**: All {{VARIABLES}}, [TBD], or NEEDS CLARIFICATION must be resolved before implementation
- **Completeness Gate**: Can you break down into concrete tasks without more research? If no, plan is incomplete.
- **ADR Requirement**: All architecturally significant decisions require ADR (not just mention, but documented with tradeoffs)

#### Task Breakdown Quality Principles

**All task lists must meet these quality gates before implementation**:

- **Independently Testable**: Task completion = tests pass, not subjective "looks done"
- **Right-Sized**: Each task is 15-30 minutes; if <10 minutes, consolidate; if >45 minutes, break down further
- **File-Specific**: Reference exact paths (e.g., "src/models/user.py"), not vague "backend code"
- **No Duplication**: If doing same thing twice, extract to reusable component first
- **Completeness Gate**: Can you start implementation without clarifying questions? If no, tasks incomplete.
- **No Vague Tasks**: Avoid "Set up backend", "Fix bugs"; prefer "Create User table schema in src/models/user.py", "Fix null pointer in UserService.authenticate() line 42"

### VII. AI-Native User Experience

**Seamless AI integration**: RAG chatbot integrated on every page, text-based queries, personalized content based on user background, Urdu translation at chapter level. Performance must be excellent (<2s for RAG).

**Rationale**: AI-native features differentiate this textbook and demonstrate modern AI capabilities. Poor performance undermines the educational mission and user experience.

**Non-negotiable rules**:
- RAG chatbot answers questions about book content on every page
- Text selection enables specific queries about selected content
- Content personalization based on user's software/hardware background (from signup)
- Urdu translation available at chapter level with technical accuracy preserved
- RAG response time <2 seconds (p95), smooth UX, reliable features

### VIII. Security, Privacy, and Trust

**Secure by design**: Implement secure better-auth.com authentication, encrypt user data in Neon Postgres, manage API secrets properly, validate all inputs, configure CORS and API security correctly.

**Rationale**: Security breaches damage trust and violate user privacy. Educational platforms must demonstrate security best practices.

**Non-negotiable rules**:
- Token-based auth via better-auth.com, HTTPS only
- User background/preferences encrypted at rest in Neon Postgres
- All API keys in `.env`, never committed to Git
- Sanitize all user inputs (RAG queries, translations, personalization data)
- Properly configured FastAPI backend with secure endpoints and CORS

## Quality Standards

### Code Quality Standards

- **Readability**:
  - Functions: <50 lines, single responsibility principle
  - Variable names: Descriptive (no single letters except i, j in loops)
  - Linting: Pass Ruff/Black (Python), ESLint (TypeScript) with zero warnings
- **Maintainability**:
  - No code duplication >5 lines (extract to function)
  - Maximum cyclomatic complexity: 10 per function
  - DRY principle (Don't Repeat Yourself)
- **Type Safety**: Python type hints for all FastAPI code, TypeScript for React components
- **Comments**:
  - Required: Complex algorithms, non-obvious business logic, AI model choices
  - Forbidden: Commenting obvious code (e.g., "increment i")
- **Error Handling**:
  - All API endpoints return structured errors with error_code, message, details
  - Client-facing errors must include actionable guidance
  - All exceptions logged with context (user_id, request_id, timestamp)
- **Code Review**: Self-review all code after implementation, refactor when improvements identified

### Testing Standards

- **Backend Testing (pytest)**:
  - Unit tests for core functions (RAG query processing, embedding generation, translation)
  - Integration tests for API endpoints (auth, personalization, chatbot query)
  - Test coverage target: >70% for backend code
  - Realistic test scenarios and edge cases
- **Frontend Testing**: Manual testing of UI components and user flows
- **End-to-End Testing**: Test complete user journeys (signup → personalize → ask question → translate)
- **CI/CD**: Run tests before deployment (GitHub Actions recommended)

### Documentation Standards

- **Code Documentation**: Docstrings for all functions and classes
- **API Documentation**: FastAPI auto-generated docs (Swagger/OpenAPI)
- **User Documentation**: Clear README with setup instructions and architecture overview
- **PHR Documentation**: Prompt History Records after every significant Claude Code session
- **ADR Documentation**: Architecture Decision Records for major technical choices

### Performance Standards

- **RAG Response Time**: <2 seconds for chatbot queries (p95 latency)
- **Page Load Time**: <3 seconds for Docusaurus pages (first contentful paint)
- **Embedding Generation**: Batch process book content efficiently
- **Database Queries**: Optimize Postgres queries, use indexes where appropriate
- **API Rate Limiting**: Implement rate limits to prevent abuse

### Security Standards

- **Authentication**: Secure token-based auth (better-auth.com), HTTPS only
- **Data Encryption**: User data encrypted at rest in Neon Postgres
- **Input Sanitization**: Validate and sanitize all user inputs (SQL injection, XSS prevention)
- **API Security**: CORS properly configured, secure API keys management
- **Secret Management**: All secrets in `.env`, never commit to Git

### Accessibility Standards

- **WCAG Compliance**: Meet WCAG 2.1 Level AA for all public pages
- **Keyboard Navigation**: All interactive elements accessible via keyboard (Tab, Enter, Escape)
- **Screen Reader Support**: ARIA labels on all form inputs, buttons, navigation elements
- **Contrast Ratios**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Testing**: Validate with axe DevTools, manual keyboard testing before deployment

### Logging and Observability Standards

- **Structured Logging**: All logs in JSON format with timestamp, level, service, request_id
- **Log Levels**: ERROR (failures requiring action), WARN (degraded state), INFO (key events), DEBUG (development only)
- **Required Context**: All logs include user_id (when authenticated), endpoint, duration_ms
- **Monitoring**: Track error rates, response times (p50, p95, p99), active users
- **Alerting**: Set up alerts for error rate >5%, RAG latency >3s, auth failures >10/min

### Version Control Standards

- **Branch Naming**: `feature/<feature-name>`, `fix/<bug-description>`, `docs/<topic>`
- **Commit Messages**: Format: `<type>(<scope>): <description>` (e.g., `feat(rag): add semantic search`)
- **Pull Requests**: Required for main branch, must pass tests, include description and test plan
- **Protected Main**: No direct commits to main, require passing CI checks

### Dependency Management Standards

- **Version Pinning**: Pin all production dependencies to specific versions
- **Security Scanning**: Run `npm audit` / `pip-audit` weekly, fix critical/high vulnerabilities within 7 days
- **Update Policy**: Review dependencies monthly, update if security fix or significant feature
- **License Compliance**: All dependencies MIT, Apache 2.0, BSD, or compatible licenses

### Frontend Code Standards

**Component Structure**:
- All React components functional with hooks (no class components unless justified in ADR)
- Components <200 lines; extract to smaller components if larger
- Props validated with TypeScript interfaces
- One component per file (except tightly coupled helper components)

**Naming Conventions**:
- Components: PascalCase (UserProfile.tsx)
- Hooks: camelCase with "use" prefix (useAuth.ts)
- Utilities: camelCase (formatDate.ts)

**State Management**:
- Local state (useState) for component-specific data
- Context API for app-wide state (user, auth, theme)
- No external state libraries (Redux, Zustand) unless justified in ADR

**Performance**:
- Use React.memo for expensive components
- Use useMemo/useCallback for expensive computations
- Lazy load routes and heavy components

**Validation**:
- All components pass ESLint with zero warnings
- All interactive components keyboard-accessible
- All components tested (manual testing minimum, unit tests recommended)

### API Design Standards

**Endpoint Conventions**:
- REST format: `/api/v1/{resource}/{id}`
- Plural nouns for collections: `/users`, `/chapters`, `/chat-queries`
- Versioning in URL path (`/api/v1/`)
- Actions via HTTP methods: GET (read), POST (create), PUT (replace), PATCH (update), DELETE (remove)

**Request/Response Format**:
- All requests: JSON body (POST, PUT, PATCH)
- All responses: JSON with consistent structure
- Success: `{data: {...}}` or `{data: [...]}`
- Error: `{error_code: "...", message: "...", details: {...}}`

**Pagination**:
- All list endpoints support `?limit=20&offset=0`
- Response includes metadata: `{data: [...], total: 150, limit: 20, offset: 0}`

**Status Codes**:
- 200: Success (GET, PUT, PATCH)
- 201: Created (POST)
- 204: No Content (DELETE)
- 400: Bad Request (validation errors)
- 401: Unauthorized (auth required)
- 403: Forbidden (auth insufficient)
- 404: Not Found
- 500: Internal Server Error

**Validation**:
- All endpoints documented in FastAPI auto-generated Swagger docs
- All endpoints have request/response examples
- All endpoints tested (integration tests)

### Database Schema Standards

**Naming Conventions**:
- Tables: snake_case, plural (users, chat_queries, vector_embeddings)
- Columns: snake_case (user_id, created_at, embedding_vector)
- Primary keys: `id` (UUID for public-facing tables, SERIAL for internal)
- Foreign keys: `{table_singular}_id` (e.g., user_id, chapter_id)

**Data Types**:
- Timestamps: TIMESTAMPTZ (with timezone)
- IDs: UUID (public-facing) or SERIAL/BIGSERIAL (internal)
- Text: VARCHAR(N) with explicit length or TEXT for unlimited
- Booleans: BOOLEAN (not TINYINT or CHAR)

**Constraints**:
- All foreign keys: ON DELETE CASCADE or ON DELETE SET NULL (explicit, never default)
- All timestamps: NOT NULL with DEFAULT NOW()
- All unique constraints: Explicitly defined

**Indexes**:
- Primary keys: Automatic index
- Foreign keys: Add index if used in WHERE/JOIN frequently
- Unique constraints: Automatic unique index
- Search columns: GIN index for full-text search, BTREE for exact matches

**Migrations**:
- All schema changes via migration scripts (Alembic or raw SQL)
- All migrations reversible (up + down SQL)
- All migrations tested in dev before production
- Migration naming: `YYYYMMDD_HHMM_description.sql`

**Validation**:
- Schema reviewed before implementation
- Migrations tested with sample data
- Foreign key relationships documented

### Translation Quality Standards

**Translation Method**:
- Primary: GPT-4 translation with technical term preservation
- Review: Bilingual engineer spot-check (minimum 10% of content)
- Fallback: If translation fails, display English with "Translation unavailable" notice

**Technical Term Handling**:
- All technical terms remain in English with Urdu definition:
  - ROS 2 → "ROS 2 (روبوٹ آپریٹنگ سسٹم 2)"
  - URDF → "URDF (یونیفائیڈ روبوٹ ڈسکرپشن فارمیٹ)"
  - VSLAM → "VSLAM (ویژول سلیم)"
- Code examples: Remain in English (comments translated)
- Commands: Remain in English (explanations translated)

**Quality Criteria**:
- Translation preserves technical accuracy
- Sentence structure natural in Urdu (not word-for-word)
- Formatting preserved (headers, lists, code blocks)
- Glossary terms linked in both languages

**Caching**:
- Translations cached per chapter
- Cache invalidated when English content updated
- Re-translation triggered automatically

**Validation**:
- Sample translation reviewed by bilingual engineer
- Technical terms verified against glossary
- Code examples remain runnable (no translation in code)

### Personalization Implementation Standards

**Background Types**:
- Software-focused: Experienced with coding, prefers code-first explanations
- Hardware-focused: Experienced with electronics/mechanics, prefers physical intuition first

**Personalization Scope**:
- Examples: Swap code-first vs physics-first order
- Vocabulary: Adjust depth (software: assume Python knowledge; hardware: explain programming concepts)
- Prerequisites: Show/hide based on background (software: skip "What is Python?"; hardware: include it)

**What DOES NOT Change**:
- Core content structure (chapters, sections, order)
- Code examples (same code, different explanations)
- Assessments (same projects for all users)

**Implementation**:
- Personalization applied client-side (React component logic)
- Content variants stored in metadata: `{software_variant: "...", hardware_variant: "..."}`
- User background stored in database (from signup questionnaire)
- Personalization cached per user (invalidate on background update)

**Performance**:
- Personalized content cached client-side (localStorage)
- Cache invalidated on logout or background change
- Page load <3s even with personalization

**Validation**:
- Both variants (software, hardware) reviewed for accuracy
- Personalization tested with sample users from each background

### Deployment Standards

**Pre-Deployment Checklist**:
- [ ] All tests pass (backend >70% coverage, E2E tests green)
- [ ] All linting clean (Ruff/Black, ESLint - zero warnings)
- [ ] Accessibility audit passed (axe DevTools on all pages)
- [ ] Performance targets met (RAG <2s p95, page load <3s FCP)
- [ ] Security scan passed (no high/critical vulnerabilities in dependencies)
- [ ] Environment variables configured in production (all secrets in .env, verified)

**CI/CD Pipeline**:
- GitHub Actions (or equivalent) runs on every push to main
- Pipeline stages: Lint → Test → Build → Deploy
- Pipeline must pass before deployment allowed
- Failed pipeline blocks deployment (no manual override)

**Deployment Process**:
1. Push to main branch (triggers CI/CD)
2. Automated tests run (backend pytest, frontend E2E)
3. Build artifacts generated (Docusaurus static site, Docker image)
4. Deploy to staging (verify functionality)
5. Deploy to production (GitHub Pages, Vercel, or Railway)

**Rollback Strategy**:
- Previous deployment version URL saved for 7 days
- Rollback process documented (how to revert to previous version)
- Database migrations reversible (down scripts tested)

**Post-Deployment Verification**:
- [ ] Homepage loads (200 status)
- [ ] RAG chatbot responds (<2s)
- [ ] Authentication works (signup, login, logout)
- [ ] Monitoring alerts configured (error rate >5%, RAG latency >3s)

**Validation**:
- Deployment checklist completed before production deploy
- Rollback plan tested in staging
- Monitoring dashboards accessible

## Constraints

### Technology Constraints (Prescriptive Stack)

**Frontend**:
- Docusaurus 3.x (React-based, Markdown + MDX) - NO alternatives

**Backend**:
- FastAPI (Python 3.11+) - NO alternatives
- pytest for testing - mandatory

**Databases**:
- Neon Serverless Postgres - NO alternatives
- Qdrant Cloud Free Tier (vector DB) - NO alternatives

**AI/LLM**:
- OpenAI GPT-4 and Embeddings (text-embedding-3-small) - NO alternatives
- Context7 MCP for fetching latest documentation - mandatory

**Authentication**:
- better-auth.com - NO alternatives

**Development**:
- Claude Code + Spec-Kit Plus (SDD workflow) - mandatory

**Deployment**:
- Frontend: GitHub Pages or Vercel
- Backend: Railway, Render, or Vercel

### Infrastructure Requirements

**Development Environment**:
- **OS**: Ubuntu 22.04 LTS (mandatory for ROS 2 Humble/Iron compatibility)
  - *Alternative*: Windows with WSL2 (Ubuntu 22.04) - acceptable but not recommended for simulation
  - *macOS*: Not supported for Isaac Sim; use cloud instances or focus on non-simulation content

**Hardware for Simulation Content Creation**:
- **GPU**: NVIDIA RTX GPU required for Isaac Sim chapters
  - *Recommended*: RTX 4070 Ti (12GB VRAM) or higher
  - *Minimum*: RTX 3060 (12GB VRAM) - slower rendering
  - *Rationale*: Isaac Sim requires RTX for ray tracing; VLA models need high VRAM
- **CPU**: Intel Core i7 (13th Gen+) or AMD Ryzen 9 (for physics calculations)
- **RAM**: 64GB DDR5 (32GB minimum, may crash during complex scene rendering)
- **Storage**: 500GB SSD minimum (for Isaac Sim assets, Qdrant vectors, development environment)

**Cloud Alternative** (if local hardware insufficient):
- **Option**: AWS g5.2xlarge (A10G GPU, 24GB VRAM) or g6e.xlarge
- **Use Case**: Running Isaac Sim, training VLA models, generating simulation screenshots
- **Cost Estimate**: ~$1.50/hour
- **Limitation**: High latency for interactive simulation; best for batch rendering and training

**Fallback for Limited Hardware**:
- If RTX GPU unavailable, textbook author should:
  - Use cloud instances for simulation screenshots/videos (embed in textbook)
  - Focus on conceptual explanations and code walkthroughs for simulation chapters
  - Provide links to official NVIDIA Isaac Sim documentation and tutorials
  - Clearly note hardware requirements in chapter prerequisites

**Edge Deployment Examples** (optional for advanced chapters):
- **NVIDIA Jetson Orin Nano** (8GB) for demonstrating edge AI deployment
- **Intel RealSense D435i** camera for perception examples
- **Note**: Physical hardware NOT required for textbook; use simulation + conceptual explanations

### Scope Constraints

**Must-have (non-negotiable)**:
- Docusaurus book with 13-week Physical AI content
- RAG chatbot integrated on every page
- better-auth signup with background questionnaire

**Should-have (priority order)**:
1. Content personalization based on user background
2. Urdu translation at chapter level

**Graceful degradation**: If time-constrained, reduce scope in reverse priority order (Translation → Personalization). Core features (Docusaurus + RAG + Auth) are non-negotiable.

**Note**: Claude Code Subagents and Agent Skills are development workflow tools (see Core Principle II) used throughout all features, not optional product features in the priority list.

### Process Constraints

- **SDD Workflow**: Every feature MUST go through spec → plan → tasks → implement → test
- **PHR Required**: Create PHR after every significant Claude Code interaction
- **ADR Required**: Document all architectural decisions with justification
- **Testing Required**: pytest tests for all backend code before considering feature "done"
- **Git Discipline**: Clear commit messages, logical commits, no broken builds on main branch

## Book Content Requirements

### Course Structure

**4 Main Modules** (13 weeks total):

**Module 1: ROS 2 - The Robotic Nervous System (Weeks 1-5)**

*Weeks 1-2: Introduction to Physical AI and Embodied Intelligence*
- Topics: Physical AI foundations, digital AI vs embodied intelligence, humanoid robotics landscape
- Sensors: LIDAR, cameras (RGB + depth), IMUs, force/torque sensors
- Content: 4-6 chapters covering concepts, sensor principles, real-world applications
- Learning Outcome: Understand what Physical AI is and why embodied intelligence matters
- Assessment: Conceptual quiz or essay on Physical AI applications

*Weeks 3-5: ROS 2 Fundamentals*
- Topics: ROS 2 architecture, nodes, topics, services, actions, rclpy (Python client library)
- Hands-on: Building ROS 2 packages, launch files, parameter management
- Robot description: URDF (Unified Robot Description Format) for humanoids
- Content: 6-8 chapters with working ROS 2 code examples (tested and runnable)
- Learning Outcome: Build and run ROS 2 packages, understand publisher/subscriber pattern
- Assessment: **ROS 2 package development project** - create multi-node system with topics/services

**Module 2: Gazebo & Unity - The Digital Twin (Weeks 6-7)**

*Week 6: Gazebo Simulation*
- Topics: Gazebo environment setup, URDF and SDF robot description formats
- Physics: Simulating gravity, collisions, friction, rigid body dynamics
- Sensors: Simulating LIDAR, depth cameras, IMUs in Gazebo
- Content: 3-4 chapters with Gazebo world creation examples
- Learning Outcome: Create simulation environments, spawn robots, simulate sensors

*Week 7: Unity for Robot Visualization*
- Topics: High-fidelity rendering and human-robot interaction in Unity
- Comparison: Gazebo (physics-accurate) vs Unity (visual-realistic)
- Content: 2-3 chapters on Unity basics for robotics
- Learning Outcome: Understand when to use Gazebo vs Unity
- Assessment: **Gazebo simulation implementation** - create environment with robot and sensors

**Module 3: NVIDIA Isaac - The AI-Robot Brain (Weeks 8-10)**

*Week 8: Isaac Sim Foundations*
- Topics: NVIDIA Isaac SDK overview, Isaac Sim (Omniverse-based)
- Photorealistic simulation: USD (Universal Scene Description) assets
- Synthetic data generation for training perception models
- Content: 3-4 chapters on Isaac Sim setup, scene creation
- Prerequisites: RTX GPU or cloud instance required (specify in chapter intro)

*Week 9: Isaac ROS for Perception*
- Topics: Hardware-accelerated VSLAM (Visual SLAM), Isaac ROS packages
- Navigation: Nav2 stack for path planning, bipedal humanoid movement
- Content: 3-4 chapters on perception pipelines
- Learning Outcome: Implement VSLAM and navigation for humanoid robots

*Week 10: AI-Powered Manipulation*
- Topics: Reinforcement learning for robot control, sim-to-real transfer techniques
- Content: 2-3 chapters on training RL policies in Isaac Sim
- Assessment: **Isaac-based perception pipeline** - VSLAM + object detection

**Module 4: VLA - Vision-Language-Action (Weeks 11-13)**

*Weeks 11-12: Humanoid Robot Development*
- Topics: Humanoid kinematics and dynamics, bipedal locomotion and balance control
- Manipulation: Grasping with humanoid hands, natural human-robot interaction (HRI) design
- Content: 4-5 chapters on humanoid control
- Learning Outcome: Understand bipedal walking, balance, and manipulation challenges

*Week 13: Conversational Robotics & Capstone*
- Topics: Integrating GPT models for conversational AI in robots
- Voice-to-Action: OpenAI Whisper for voice command recognition
- Cognitive planning: Translating natural language ("Clean the room") into ROS 2 action sequences
- Multi-modal interaction: Speech + gesture + vision
- Content: 3-4 chapters on LLM integration, Whisper, VLA models
- Assessment: **Capstone Project - The Autonomous Humanoid**
  - Simulated robot receives voice command
  - Plans path using Nav2
  - Navigates obstacles (VSLAM)
  - Identifies object using computer vision
  - Manipulates object (grasping)

**Weekly Content Requirements**:
- Each week: 2-4 chapters (5000-8000 words total per week)
- Code examples: Minimum 2 working, runnable examples per major concept
- Hands-on exercises: 1 guided exercise per week (with solution)
- Prerequisites: Explicitly stated at start of each chapter
- Troubleshooting: Common errors and solutions included for each hands-on section

### Content Principles

- **Accuracy First**:
  - All code examples tested against latest library versions (verified via Context7 MCP)
  - Citations required for all technical claims
  - Version numbers specified for all tools and libraries referenced
- **Progressive Difficulty**:
  - Each module prerequisites explicitly listed
  - Bloom's taxonomy level specified per week (Remember → Understand → Apply → Analyze → Create)
  - Concepts build on previous weeks (clear dependency chain)
- **Practical Examples**:
  - Minimum 2 working code examples per major concept
  - All examples runnable without modification
  - Examples include expected output and common troubleshooting tips
- **Student-Centric**:
  - Jargon defined on first use with glossary references
  - Prerequisite knowledge stated explicitly at chapter start
  - Alternative explanations for software-focused vs hardware-focused students
- **Hands-On Focus**: Code examples, simulation exercises, guided capstone project

### Required Technologies Coverage

Each technology listed below MUST be covered with:
- Conceptual explanation (what it is, why it matters)
- Practical code example (working, tested, runnable)
- Real-world application or use case
- Common pitfalls and troubleshooting tips

**Module 1: ROS 2**
- ✅ ROS 2 architecture (nodes, topics, services, actions, parameters)
- ✅ rclpy (Python client library for ROS 2)
- ✅ Launch files and package management
- ✅ URDF (Unified Robot Description Format) for robot modeling
- ✅ tf2 (transformation library for coordinate frames)

**Module 2: Simulation**
- ✅ Gazebo (physics-based simulation)
- ✅ URDF and SDF (robot description formats)
- ✅ Gazebo plugins for sensors (LIDAR, cameras, IMUs)
- ✅ Unity basics for robot visualization (optional: comparison with Gazebo)

**Module 3: NVIDIA Isaac**
- ✅ Isaac Sim (Omniverse-based photorealistic simulation)
- ✅ USD (Universal Scene Description) for scene assets
- ✅ Isaac ROS (hardware-accelerated perception packages)
- ✅ VSLAM (Visual SLAM) for localization
- ✅ Nav2 (ROS 2 navigation stack for path planning)
- ✅ Synthetic data generation for training perception models
- ✅ Reinforcement learning basics (for robot control policies)
- ✅ Sim-to-real transfer techniques

**Module 4: VLA (Vision-Language-Action)**
- ✅ GPT integration for conversational robotics (OpenAI API)
- ✅ OpenAI Whisper (speech recognition for voice commands)
- ✅ Vision-Language-Action models (VLA) concept
- ✅ Multi-modal interaction (voice + gesture + vision)
- ✅ Natural language to action sequence translation

**Cross-Cutting Topics** (integrated throughout):
- ✅ Sensor systems: LIDAR, RGB cameras, depth cameras (RealSense), IMUs
- ✅ Computer vision basics (object detection, segmentation)
- ✅ Humanoid kinematics and dynamics
- ✅ Bipedal locomotion and balance control
- ✅ Grasping and manipulation
- ✅ Human-robot interaction (HRI) principles

**Documentation Sources** (verify with Context7 MCP):
- ROS 2 official documentation (docs.ros.org)
- NVIDIA Isaac Sim and Isaac ROS docs
- Gazebo documentation
- OpenAI API documentation (GPT, Whisper)

### Glossary Requirement

**Mandatory**: Create and maintain a comprehensive glossary for all technical terms.

**Glossary Structure**:
- Alphabetically organized
- Each entry includes:
  - **Term**: The technical jargon or acronym
  - **Definition**: Clear, concise explanation (2-3 sentences)
  - **Example**: Usage in context (optional but recommended)
  - **Related Terms**: Cross-references to related concepts

**Integration**:
- First use of glossary term in any chapter: include glossary link
- Docusaurus plugin: Configure glossary hover tooltips or inline definitions

**Minimum Glossary Entries** (examples - not exhaustive):
- Physical AI
- Embodied Intelligence
- ROS 2 (Robot Operating System 2)
- URDF (Unified Robot Description Format)
- SDF (Simulation Description Format)
- SLAM (Simultaneous Localization and Mapping)
- VSLAM (Visual SLAM)
- Nav2
- VLA (Vision-Language-Action)
- IMU (Inertial Measurement Unit)
- LIDAR (Light Detection and Ranging)
- Sim-to-Real Transfer
- Bipedal Locomotion
- HRI (Human-Robot Interaction)

**Validation**: Ensure all acronyms and technical terms are defined in glossary before deployment.

## Governance

### Authority

- This constitution supersedes all other development decisions
- Core Principles, Quality Standards, and Constraints are binding
- Amendments allowed but require documentation (PHR + justification)
- Amendment process: propose change → document rationale → update constitution → propagate to dependent templates

### Prioritization

- **Must-have first**: Docusaurus + RAG + Auth must work before bonus features
- **Sequential development**: Core → Auth → Personalization → Translation (Subagents/Skills used throughout as development tools)
- **Feature completion**: Each feature fully working (with tests) before moving to next
- **Scope reduction**: If constrained, reduce in reverse priority order

### Development Process

- **SDD Compliance**: Every feature follows spec → plan → tasks → implement → test → review
- **PHR Discipline**: Create PHR after every significant Claude Code session (stage-appropriate routing)
- **ADR Discipline**: Document all architectural decisions with clear justification
- **Testing Required**: pytest tests for backend code before considering feature "done"
- **Code Review**: Self-review code after implementation, refactor when improvements identified

### Solo Developer Autonomy

- Trust your judgment, make decisions confidently
- No external approval gates, but document reasoning (PHRs, ADRs)
- Use Claude Code as sounding board for complex decisions
- Reflect on choices, learn from outcomes
- Iterate based on what works

### Learning Commitment

- **Understand before implementing**: No blind copy-paste of code
- **Research first**: Use Context7 MCP before coding new technologies
- **Ask for explanations**: Use Claude Code to explain complex concepts
- **Review and refactor**: Improve code after completing features
- **Document learnings**: Capture insights and lessons in PHRs

---

**Constitution Version**: 2.0.1
**Last Updated**: 2025-12-02
**Amendment Type**: PATCH (Feature sequence and task sizing corrections)
