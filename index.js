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
        title: "Project 1: The 'Knowledge Base' (FAQ) Guide",
        concept: "Demonstrate customer-centric thinking and information organization.",
        content: `
            <div class="faq-list">
                <div class="faq-item"><strong>1. I forgot my password. How do I reset it?</strong><br>Click 'Forgot Password' on the login screen, enter your email, and follow the link sent to your inbox.</div>
                <div class="faq-item"><strong>2. My transaction is pending. What should I do?</strong><br>Transactions can take 30-60 mins. If pending after 2 hours, contact support with your [Order ID].</div>
                <div class="faq-item"><strong>3. How do I update my KYC?</strong><br>Go to Settings > Profile > Verification and upload a valid government-issued ID.</div>
                <div class="faq-item"><strong>4. Is my data secure?</strong><br>Yes, we use bank-grade 256-bit encryption and multi-factor authentication.</div>
                <div class="faq-item"><strong>5. How do I change my linked bank account?</strong><br>Settings > Payments > Add New Account. Verification takes 1-2 business days.</div>
                <div class="faq-item"><strong>6. What are the transfer limits?</strong><br>Daily: $5,000 | Monthly: $50,000. Upgrade KYC for higher limits.</div>
                <div class="faq-item"><strong>7. Can I cancel a successful transaction?</strong><br>Successful blockchain/wire transfers cannot be reversed. Please verify details before sending.</div>
                <div class="faq-item"><strong>8. Why was my account flagged?</strong><br>Flags occur for unusual login locations or high-value unverified transactions.</div>
                <div class="faq-item"><strong>9. How do I contact a human agent?</strong><br>Click 'Support' > 'Live Chat' or email support@fintech.com.</div>
                <div class="faq-item"><strong>10. Does the app support international transfers?</strong><br>Yes, to over 20 countries. See the 'Global' tab for rates.</div>
            </div>
        `
    },
    2: {
        title: "Project 2: Support Ticket Response Library",
        concept: "Professional empathy and strategic retention communication.",
        content: `
            <div class="faq-list">
                <div class="faq-item"><strong>Scenario 1: The Frustrated Customer (Retention-Focused)</strong><br>
                "Hello [Customer Name], I hear your frustration regarding the delay. I've personally prioritized [Order Number] for immediate dispatch. To show we value your loyalty, I've upgraded your account to 'Priority Status' for 3 months."</div>
                <div class="faq-item"><strong>Scenario 2: The Technical AI-Assisted Solution</strong><br>
                "Hi [Customer Name]! Our AI flagged that you might be missing the [X] driver. I've verified this manually; please install the update here: [Link]. Is there anything else the AI missed today?"</div>
                <div class="faq-item"><strong>Scenario 3: The Refund Request (GDPR Compliant)</strong><br>
                "Dear [Customer Name], I've initiated your refund for [Order Number]. Per GDPR guidelines, your payment data remains encrypted and will be processed back to your original method within 5 days."</div>
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
        title: "Project 4: Tool & AI Mastery Showcase",
        concept: "Proficiency in modern CRM, AI-support bots, and remote workflows.",
        content: `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="glass" style="padding: 15px;">
                    <h4 style="color: var(--accent-gold);">Zendesk / Intercom</h4>
                    <p style="font-size: 0.8rem;">Expertise in Fin (Intercom AI), ticket triggers, and complex SLA logic.</p>
                </div>
                <div class="glass" style="padding: 15px;">
                    <h4 style="color: var(--accent-gold);">AI Support Bots</h4>
                    <p style="font-size: 0.8rem;">Training knowledge bases for AI accuracy and automated handovers.</p>
                </div>
                <div class="glass" style="padding: 15px;">
                    <h4 style="color: var(--accent-gold);">GDPR & Security</h4>
                    <p style="font-size: 0.8rem;">Handling PII with care and ensuring European data privacy compliance.</p>
                </div>
                <div class="glass" style="padding: 15px;">
                    <h4 style="color: var(--accent-gold);">Multilingual Support</h4>
                    <p style="font-size: 0.8rem;">Leveraging translation tools and cultural empathy for European diverse clients.</p>
                </div>
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
