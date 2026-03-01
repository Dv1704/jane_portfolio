// Reveal Animations on Scroll
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const projectData = {
    1: {
        title: "Project 1: AI-Optimized Knowledge Base Strategy",
        concept: "Structuring self-service content for maximum AI-deflection and user clarity.",
        content: `
            <div class="faq-list">
                <p style="font-size: 0.9rem; margin-bottom: 10px; color: var(--accent-gold);">Strategic Goal: Reduce 'Password Reset' and 'KYC' tickets by 40% through AI-ready documentation.</p>
                <div class="faq-item"><strong>1. AI-Deflection Strategy:</strong> Documentation formatted with structured headers (H1, H2) to allow AI Bots (Intercom Fin/Zendesk Answer Bot) to crawl and resolve queries instantly without human intervention.</div>
                <div class="faq-item"><strong>2. KYC Verification (Tier 1 Support):</strong> Step-by-step visual guide for international users, reducing 'ID Rejection' rates by providing clear lighting/clarity requirements.</div>
                <div class="faq-item"><strong>3. Security Hub:</strong> Dedicated section on 'MFA Setup' and 'Session Management' to proactively educate users on account safety.</div>
            </div>
        `
    },
    2: {
        title: "Project 2: The 'STAR' Case Study Library",
        concept: "Deep-dive problem resolution using the STAR method for international clients.",
        content: `
            <div class="faq-list">
                <div class="faq-item"><strong>Case Study: Technical Churn Prevention</strong><br>
                <strong>S:</strong> High-value customer threatened to churn due to recurring API errors.<br>
                <strong>T:</strong> Resolve the technical blocker while maintaining the relationship.<br>
                <strong>A:</strong> Coordinated with Dev teams, explained technical constraints in simple terms, and provided a custom workaround.<br>
                <strong>R:</strong> Customer retained; NPS score of 10/10; account upgraded.</div>
                <div class="faq-item"><strong>Scenario: Retention-Focused Response</strong><br>
                "Hello [Customer Name], I've personally prioritized [Order Number]. To show we value your loyalty, I've upgraded your account to 'Priority Status' for 3 months."</div>
                <div class="faq-item"><strong>Scenario: GDPR/EU Compliance</strong><br>
                "Dear [Customer Name], your data deletion request (Right to be Forgotten) is being processed. Per GDPR, we will confirm full erasure within 30 days."</div>
            </div>
        `
    },
    3: {
        title: "Project 3: Response Time & Satisfaction Tracker",
        concept: "Data-driven metrics and performance reporting.",
        content: `
            <div class="tracker-stats" style="display: flex; gap: 20px; margin-bottom: 20px;">
                <div class="glass" style="flex: 1; padding: 15px; text-align: center;">
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">Avg. Response Time</span>
                    <h2 style="color: var(--accent-gold); margin: 0;">12.4 mins</h2>
                </div>
                <div class="glass" style="flex: 1; padding: 15px; text-align: center;">
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">CSAT Score</span>
                    <h2 style="color: var(--accent-gold); margin: 0;">4.8/5</h2>
                </div>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
                <thead><tr style="border-bottom: 1px solid var(--accent-crimson);"><th>Ticket ID</th><th>Category</th><th>Response</th><th>Rating</th></tr></thead>
                <tbody>
                    <tr><td>#892</td><td>Billing</td><td>4m</td><td>⭐⭐⭐⭐⭐</td></tr>
                    <tr><td>#893</td><td>Technical</td><td>18m</td><td>⭐⭐⭐⭐</td></tr>
                    <tr><td>#894</td><td>Refund</td><td>9m</td><td>⭐⭐⭐⭐⭐</td></tr>
                    <tr><td>#895</td><td>General</td><td>12m</td><td>⭐⭐⭐⭐⭐</td></tr>
                </tbody>
            </table>
            <p style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 10px;">*Sample of 20 tracked tickets across 7 days.</p>
        `
    },
    4: {
        title: "Project 4: AI Support & Ethical Operations",
        concept: "Mastery of AI-Human collaboration and EU-standard ethical support.",
        content: `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="glass" style="padding: 15px;">
                    <h4 style="color: var(--accent-gold);">Human-in-the-Loop</h4>
                    <p style="font-size: 0.8rem;">Expertise in AU AI Act compliance: always offering human escalation for AI queries.</p>
                </div>
                <div class="glass" style="padding: 15px;">
                    <h4 style="color: var(--accent-gold);">AI Training (NLP)</h4>
                    <p style="font-size: 0.8rem;">Optimizing chatbot intent recognition and tone of voice for global consistency.</p>
                </div>
                <div class="glass" style="padding: 15px;">
                    <h4 style="color: var(--accent-gold);">SOP Design</h4>
                    <p style="font-size: 0.8rem;">Standardizing support workflows to reduce handle time and ensure quality.</p>
                </div>
                <div class="glass" style="padding: 15px;">
                    <h4 style="color: var(--accent-gold);">Cross-Functional</h4>
                    <p style="font-size: 0.8rem;">Bridging the gap between Customer Support, Product, and Engineering.</p>
                </div>
            </div>
        `
    },
    5: {
        title: "Project 5: Omnichannel SaaS Migration",
        concept: "Leading a transition from fragmented email support to a unified Zendesk/Intercom ecosystem.",
        content: `
            <div class="faq-list">
                <p style="font-size: 0.9rem; margin-bottom: 10px; color: var(--accent-gold);">Scope: 25,000+ monthly tickets handled across 3 time zones.</p>
                <div class="faq-item"><strong>Migration Strategy:</strong> Consolidation of legacy email, Twitter (X), and Live Chat into a single Zendesk dashboard with automated ticket routing based on sentiment analysis.</div>
                <div class="faq-item"><strong>Automation Implementation:</strong> Built 50+ macros and triggers to automate 30% of standard billing inquiries, reducing First Response Time (FRT) from 12h to 45 mins.</div>
                <div class="faq-item"><strong>Team Training:</strong> Authored the internal SOP and conducted workshops for 15+ remote agents on new workflow efficiencies.</div>
            </div>
        `
    },
    6: {
        title: "Project 6: Crisis Management (E-commerce)",
        concept: "Managing high-volume support flow during a large-scale system outage/shipping disaster.",
        content: `
            <div class="faq-list">
                <p style="font-size: 0.9rem; margin-bottom: 10px; color: var(--accent-gold);">Scenario: Black Friday logistics failure affecting 5,000+ orders.</p>
                <div class="faq-item"><strong>Emergency Communication:</strong> Rapid deployment of a 'Status Page' and proactive email blast to affected customers *before* they contacted support.</div>
                <div class="faq-item"><strong>Backlog Liquidation:</strong> Implemented a 'Triage Desk' to separate urgent shipping errors from general inquiries, clearing a 2,000-ticket backlog in 72 hours.</div>
                <div class="faq-item"><strong>Recovery & Retention:</strong> Designed a "Loyalty Recovery" package (discount + apology) that resulted in an 85% retention rate despite the service failure.</div>
            </div>
        `
    }
};

// Project Interactions
function openProject(projectId) {
    const project = projectData[projectId];
    const modalHTML = `
        <div id="project-modal" class="glass" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90%; max-width: 600px; z-index: 2000; padding: 40px; border: 2px solid var(--accent-crimson);">
            <button onclick="closeModal()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; color: white; cursor: pointer; font-size: 1.5rem;">&times;</button>
            <h2 style="color: var(--accent-gold); overflow: hidden;">${project.title}</h2>
            <p style="font-style: italic; color: var(--text-secondary); margin-bottom: 25px;">Concept: ${project.concept}</p>
            <div style="max-height: 400px; overflow-y: auto; padding-right: 10px;">
                ${project.content}
            </div>
        </div>
        <div id="modal-overlay" onclick="closeModal()" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1999; backdrop-filter: blur(5px);"></div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('project-modal')?.remove();
    document.getElementById('modal-overlay')?.remove();
    document.body.style.overflow = 'auto';
}

// Smooth Scrolling for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
