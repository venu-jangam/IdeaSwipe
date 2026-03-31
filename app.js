// Mock Data
const MOCK_IDEAS = [
    {
        id: 1,
        title: 'Tinder for Dog Walkers',
        desc: 'Connect busy professionals with local, vetted dog walkers who can take their pups out on short notice.',
        category: 'Mobile App',
        difficulty: 'Intermediate',
        time: '1 Month',
        users: 'Pet Owners',
        tags: ['location', 'pets', 'gig-work'],
        likes: 124,
        saves: 45,
        devs: 3,
        poster: 'Sarah K.',
        color: '#ff6b6b'
    },
    {
        id: 2,
        title: 'AI Code Review Assistant',
        desc: 'A GitHub bot that uses LLMs to perform automated style, security, and logic reviews on pull requests.',
        category: 'AI Tool',
        difficulty: 'Advanced',
        time: '3+ Months',
        users: 'Software Teams',
        tags: ['ai', 'github', 'dev-tool'],
        likes: 412,
        saves: 120,
        devs: 15,
        poster: 'DevNinjaX',
        color: '#6366f1'
    },
    {
        id: 3,
        title: 'Marketplace for Leftover Building Materials',
        desc: 'Contractors can list unused materials from jobsites for DIYers to buy at a discount, reducing waste.',
        category: 'Marketplace',
        difficulty: 'Intermediate',
        time: '1 Month',
        users: 'Contractors, DIYers',
        tags: ['sustainability', 'local', 'ecommerce'],
        likes: 89,
        saves: 22,
        devs: 1,
        poster: 'EcoBuild',
        color: '#10b981'
    },
    {
        id: 4,
        title: 'SaaS for Managing Subscriptions',
        desc: 'A single dashboard that hooks into your bank and automatically cancels unwanted subscriptions with one click.',
        category: 'SaaS',
        difficulty: 'Advanced',
        time: '3+ Months',
        users: 'Consumers',
        tags: ['fintech', 'automation', 'api'],
        likes: 530,
        saves: 200,
        devs: 8,
        poster: 'FinanceBro',
        color: '#f59e0b'
    },
    {
        id: 5,
        title: 'Focus Timer with Multiplayer RPG',
        desc: 'Pomodoro timer where focus sessions level up a digital pet or character, co-op with friends to defeat bosses.',
        category: 'Productivity',
        difficulty: 'Intermediate',
        time: '1-2 Weeks',
        users: 'Students, Remote Workers',
        tags: ['gamification', 'focus', 'social'],
        likes: 310,
        saves: 150,
        devs: 5,
        poster: 'GamifyLife',
        color: '#8b5cf6'
    },
    {
        id: 6,
        title: 'Local Farm to Table Delivery',
        desc: 'App connecting local farmers directly with consumers for weekly fresh produce boxes.',
        category: 'Web App',
        difficulty: 'Intermediate',
        time: '1 Month',
        users: 'Families, Foodies',
        tags: ['food', 'local', 'logistics'],
        likes: 145,
        saves: 30,
        devs: 2,
        poster: 'FarmFresh',
        color: '#ec4899'
    }
];

const CATEGORIES = ['Startup', 'Mobile App', 'Web App', 'AI Tool', 'Research Platform', 'SaaS', 'Marketplace', 'Productivity', 'Education', 'Health', 'Finance', 'Social', 'Developer Tool'];

// App State
const state = {
    ideas: [...MOCK_IDEAS],
    savedIds: new Set(),
    contactedIds: new Set(),
    postedIdeas: [],
    swipeQueue: [],
    currentFilter: 'All'
};

// DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const homeCategories = document.getElementById('home-categories');
const featuredIdeas = document.getElementById('featured-ideas');
const swipeContainer = document.getElementById('swipe-container');
const discoverFilters = document.getElementById('discover-filters');
const savedIdeasList = document.getElementById('saved-ideas-list');
const messagesList = document.getElementById('messages-list');
const profilePostedIdeas = document.getElementById('profile-posted-ideas');
const toast = document.getElementById('toast');
const ideaModal = document.getElementById('idea-modal');
const ideaModalBody = document.getElementById('idea-modal-body');

// App Logic Shell
const app = {
    init() {
        this.setupNavigation();
        this.renderHome();
        this.setupDiscover();
        this.setupForms();
        this.setupModal();
        this.updateProfileStats();
        
        // Handle URL hash routing
        const hash = window.location.hash.slice(1);
        if (hash) {
            this.navigate(hash);
        } else {
            this.navigate('home');
        }
    },

    navigate(pageId) {
        // Update nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.target === pageId) {
                link.classList.add('active');
            }
        });

        // Update pages
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === `page-${pageId}`) {
                page.classList.add('active');
            }
        });

        // Trigger page-specific logic
        if (pageId === 'discover') this.loadNextSwipeCard();
        if (pageId === 'saved') this.renderSaved();
        if (pageId === 'messages') this.renderMessages();
        
        window.history.pushState(null, null, `#${pageId}`);
        window.scrollTo(0, 0);
    },

    setupNavigation() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigate(link.dataset.target);
            });
        });
        
        // Saved Tabs
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Could implement separate filtering here based on active tab
                // For MVP, just re-rendering saved
                this.renderSaved();
            });
        });
    },

    showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    },

    openModal(ideaId) {
        let idea = state.ideas.find(i => i.id === ideaId);
        if (!idea) idea = state.postedIdeas.find(i => i.id === ideaId);
        if (!idea) return;

        ideaModalBody.innerHTML = `
            <div class="idea-full-details">
                <span class="badge" style="background: ${idea.color}20; color: ${idea.color}; align-self: flex-start;">${idea.category}</span>
                <h3 class="title">${idea.title}</h3>
                <p style="color: var(--text-muted); font-size: 1.1rem">${idea.desc}</p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                    <div class="detail-row"><i class="ti ti-chart-bar"></i> <span class="label">Difficulty:</span> <span class="val">${idea.difficulty}</span></div>
                    <div class="detail-row"><i class="ti ti-clock"></i> <span class="label">Time:</span> <span class="val">${idea.time}</span></div>
                    <div class="detail-row"><i class="ti ti-users"></i> <span class="label">Users:</span> <span class="val">${idea.users || 'Anyone'}</span></div>
                    <div class="detail-row"><i class="ti ti-heart"></i> <span class="label">Saves:</span> <span class="val">${idea.saves + (state.savedIds.has(idea.id) ? 1 : 0)}</span></div>
                </div>
                
                <div style="margin-top: 1rem;">
                    <strong>Tags</strong>
                    <div class="category-tags" style="margin-top:0.5rem">
                        ${idea.tags.map(t => `<span class="tag">${t.trim()}</span>`).join('')}
                    </div>
                </div>
                
                <div class="contact-box">
                    <h4 style="margin-bottom:0.5rem">Posted by ${idea.poster}</h4>
                    <p style="color:var(--text-muted); margin-bottom: 1rem; font-size:0.9rem;">Looking for developers to build this idea. Open to collaboration and equity split.</p>
                    <button class="btn btn-primary btn-block" onclick="app.contactPoster(${idea.id})"><i class="ti ti-message"></i> Send Collaboration Request</button>
                </div>
            </div>
        `;
        ideaModal.classList.add('open');
    },

    setupModal() {
        document.querySelector('.modal-close').addEventListener('click', () => {
            ideaModal.classList.remove('open');
        });
        document.querySelector('.modal-overlay').addEventListener('click', () => {
             ideaModal.classList.remove('open');
        });
    },

    contactPoster(id) {
        state.contactedIds.add(id);
        ideaModal.classList.remove('open');
        this.showToast('Collaboration request sent!');
        this.navigate('messages');
    },

    // --- Home Logic ---
    renderHome() {
        // Categories
        homeCategories.innerHTML = CATEGORIES.map(c => `<span class="tag" onclick="app.filterAndDiscover('${c}')">${c}</span>`).join('');

        // Featured
        const featured = state.ideas.slice(0, 3);
        featuredIdeas.innerHTML = featured.map(i => `
            <div class="idea-card" onclick="app.openModal(${i.id})">
                <div class="card-header">
                    <h3 class="card-title">${i.title}</h3>
                    <span class="badge" style="background: ${i.color}20; color: ${i.color}">${i.category}</span>
                </div>
                <p class="card-desc">${i.desc.length > 80 ? i.desc.substring(0,80) + '...' : i.desc}</p>
                <div class="card-stats">
                    <div class="stat-item"><i class="ti ti-heart"></i> ${i.saves > 100 ? i.saves : (state.savedIds.has(i.id)? i.saves+1 : i.saves)}</div>
                    <div class="stat-item"><i class="ti ti-code"></i> ${i.devs} devs</div>
                </div>
            </div>
        `).join('');
    },

    filterAndDiscover(cat) {
        state.currentFilter = cat;
        this.buildDiscoverFilters();
        this.refillSwipeQueue();
        this.navigate('discover');
    },

    // --- Discover (Swipe) Logic ---
    setupDiscover() {
        this.buildDiscoverFilters();
        this.refillSwipeQueue();

        document.getElementById('btn-skip').addEventListener('click', () => this.handleSwipeChoice('left'));
        document.getElementById('btn-save').addEventListener('click', () => this.handleSwipeChoice('right'));
    },
    
    buildDiscoverFilters() {
        const filters = ['All', ...CATEGORIES];
        discoverFilters.innerHTML = filters.map(f => `
            <button class="filter-btn ${state.currentFilter === f ? 'active' : ''}" 
                    onclick="app.setFilter('${f}')">
                ${f}
            </button>
        `).join('');
    },
    
    setFilter(cat) {
        state.currentFilter = cat;
        this.buildDiscoverFilters();
        this.refillSwipeQueue();
        this.loadNextSwipeCard();
    },

    refillSwipeQueue() {
        // Filter out ideas we already interacted with (saved)
        let pool = state.ideas.filter(i => !state.savedIds.has(i.id));
        
        if (state.currentFilter !== 'All') {
            pool = pool.filter(i => i.category === state.currentFilter);
        }
        
        // Shuffle
        pool.sort(() => Math.random() - 0.5);
        state.swipeQueue = pool;
    },

    loadNextSwipeCard() {
        // Clear existing cards
        const existingCards = swipeContainer.querySelectorAll('.swipe-card');
        existingCards.forEach(c => c.remove());

        if (state.swipeQueue.length === 0) {
            return; // Empty state will show
        }

        const idea = state.swipeQueue[0];
        const card = document.createElement('div');
        card.className = 'swipe-card';
        card.dataset.id = idea.id;
        
        card.innerHTML = `
            <div class="stamp stamp-nope">SKIP</div>
            <div class="stamp stamp-like">SAVE</div>
            <div class="swipe-card-content">
                <span class="swipe-hero-tag" style="color: ${idea.color}; background: ${idea.color}20;">${idea.category}</span>
                <h2 class="swipe-title">${idea.title}</h2>
                <p class="swipe-desc">${idea.desc}</p>
                <div class="swipe-details">
                    <div class="detail-row"><i class="ti ti-target"></i> <span class="label">Target:</span> <span class="val">${idea.users || 'General Public'}</span></div>
                    <div class="detail-row"><i class="ti ti-chart-bar"></i> <span class="label">Difficulty:</span> <span class="val">${idea.difficulty}</span></div>
                    <div class="detail-row"><i class="ti ti-clock"></i> <span class="label">Build Time:</span> <span class="val">${idea.time}</span></div>
                    <div class="detail-row"><i class="ti ti-users"></i> <span class="label">Interested:</span> <span class="val">${idea.devs} Developers</span></div>
                </div>
                <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${idea.tags.map(t => `<span class="tag" style="padding: 0.2rem 0.6rem; font-size: 0.8rem;">#${t.trim()}</span>`).join('')}
                </div>
            </div>
            <div style="margin-top:auto; padding-top:1rem; border-top: 1px solid var(--glass-border); text-align:center; color: var(--text-muted); font-size: 0.9rem;" onclick="app.openModal(${idea.id})">
                <i class="ti ti-chevron-up"></i> Tap for full details
            </div>
        `;

        swipeContainer.appendChild(card);
        this.initSwipeMechanics(card);
    },

    initSwipeMechanics(card) {
        let startX = 0;
        let startY = 0;
        let isDragging = false;
        let currentX = 0;

        const nopeStamp = card.querySelector('.stamp-nope');
        const likeStamp = card.querySelector('.stamp-like');

        const onDragStart = (e) => {
            isDragging = true;
            const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            startX = clientX;
            startY = clientY;
            card.style.transition = 'none';
        };

        const onDragMove = (e) => {
            if (!isDragging) return;
            const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            currentX = clientX - startX;
            
            // Limit vertical slightly
            const currentY = (e.type.includes('mouse') ? e.clientY : e.touches[0].clientY) - startY;

            const rotate = currentX * 0.05;
            card.style.transform = `translate(${currentX}px, ${currentY * 0.2}px) rotate(${rotate}deg)`;

            // Opacity stamps
            if (currentX > 0) {
                likeStamp.style.opacity = Math.min(currentX / 100, 1);
                nopeStamp.style.opacity = 0;
            } else {
                nopeStamp.style.opacity = Math.min(Math.abs(currentX) / 100, 1);
                likeStamp.style.opacity = 0;
            }
        };

        const onDragEnd = (e) => {
            if (!isDragging) return;
            isDragging = false;
            card.style.transition = 'transform 0.3s ease-out';

            const threshold = window.innerWidth * 0.25;

            if (currentX > threshold) {
                this.handleSwipeAction(card, 'right');
            } else if (currentX < -threshold) {
                this.handleSwipeAction(card, 'left');
            } else {
                // Reset
                card.style.transform = `translate(0px, 0px) rotate(0deg)`;
                likeStamp.style.opacity = 0;
                nopeStamp.style.opacity = 0;
            }
            currentX = 0;
        };

        card.addEventListener('mousedown', onDragStart);
        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', onDragEnd);

        card.addEventListener('touchstart', onDragStart, {passive: true});
        document.addEventListener('touchmove', onDragMove, {passive: true});
        document.addEventListener('touchend', onDragEnd);

        // Cleanup
        card._cleanup = () => {
            document.removeEventListener('mousemove', onDragMove);
            document.removeEventListener('mouseup', onDragEnd);
            document.removeEventListener('touchmove', onDragMove);
            document.removeEventListener('touchend', onDragEnd);
        };
    },

    handleSwipeChoice(dir) {
        const card = swipeContainer.querySelector('.swipe-card');
        if (!card) return;
        card.style.transition = 'transform 0.4s ease-out';
        this.handleSwipeAction(card, dir);
    },

    handleSwipeAction(card, dir) {
        if(card._cleanup) card._cleanup();
        
        const ideaId = parseInt(card.dataset.id);
        const xOut = dir === 'right' ? window.innerWidth : -window.innerWidth;
        const rotate = dir === 'right' ? 30 : -30;
        
        card.style.transform = `translate(${xOut}px, -100px) rotate(${rotate}deg)`;

        if (dir === 'right') {
            state.savedIds.add(ideaId);
            this.showToast('Idea Saved!');
        }

        setTimeout(() => {
            state.swipeQueue.shift(); // Remove first element
            this.loadNextSwipeCard();
            this.updateProfileStats();
        }, 300);
    },

    // --- Saved & Messages ---
    renderSaved() {
        const savedIdeas = state.ideas.filter(i => state.savedIds.has(i.id));
        if (savedIdeas.length === 0) {
            savedIdeasList.innerHTML = `<div class="text-muted" style="grid-column: 1/-1; text-align:center; padding: 3rem;">You haven't saved any ideas yet. Head to Discover!</div>`;
            return;
        }

        savedIdeasList.innerHTML = savedIdeas.map(i => `
            <div class="idea-card" onclick="app.openModal(${i.id})">
                <div class="card-header">
                    <h3 class="card-title" style="font-size: 1.1rem">${i.title}</h3>
                    <button class="btn-action" style="width:30px; height:30px; font-size:1rem; border-color:transparent; background:transparent; color: var(--danger)" onclick="event.stopPropagation(); app.removeSaved(${i.id})"><i class="ti ti-bookmark-off"></i></button>
                </div>
                <div class="card-stats" style="margin-top: 0.5rem; padding-top:0.5rem">
                    <span class="badge" style="background: ${i.color}20; color: ${i.color}">${i.category}</span>
                    ${state.contactedIds.has(i.id) ? '<span class="badge" style="background: rgba(16,185,129,0.2); color:#10b981">Contacted</span>' : ''}
                </div>
            </div>
        `).join('');
    },
    
    removeSaved(id) {
        state.savedIds.delete(id);
        this.renderSaved();
        this.updateProfileStats();
    },

    renderMessages() {
        const contacted = state.ideas.filter(i => state.contactedIds.has(i.id));
        if (contacted.length === 0) {
            messagesList.innerHTML = `<div class="empty-state" style="text-align:center; padding: 3rem; color:var(--text-muted)">You have no messages yet. Save an idea and contact the poster!</div>`;
            return;
        }
        
        messagesList.innerHTML = contacted.map(i => `
            <div class="message-card" onclick="app.openModal(${i.id})">
                <div class="msg-avatar">${i.poster.charAt(0)}</div>
                <div class="msg-info">
                    <h4>${i.poster} <span class="badge" style="background:var(--bg-elevated); margin-left:0.5rem">${i.category}</span></h4>
                    <p>Re: ${i.title}</p>
                </div>
                <div style="margin-left:auto; color:var(--text-muted)"><i class="ti ti-chevron-right"></i></div>
            </div>
        `).join('');
    },

    // --- Forms ---
    setupForms() {
        const form = document.getElementById('post-idea-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newIdea = {
                id: Date.now(),
                title: document.getElementById('idea-title').value,
                desc: document.getElementById('idea-desc').value,
                category: document.getElementById('idea-category').value,
                difficulty: document.getElementById('idea-difficulty').value,
                time: document.getElementById('idea-time').value,
                users: document.getElementById('idea-users').value,
                tags: document.getElementById('idea-tags').value.split(',').map(s=>s.trim()),
                likes: 0,
                saves: 0,
                devs: 0,
                poster: 'Alex Builder', // Auth user stub
                color: '#6366f1' // default
            };

            state.postedIdeas.push(newIdea);
            
            this.showToast('Idea Published to Network!');
            form.reset();
            this.updateProfileStats();
            this.renderProfilePosted();
            this.navigate('profile');
        });
    },

    // --- Profile ---
    updateProfileStats() {
        document.getElementById('profile-saves').textContent = state.savedIds.size;
        document.getElementById('profile-posted').textContent = state.postedIdeas.length;
    },
    
    renderProfilePosted() {
        if (state.postedIdeas.length === 0) {
            profilePostedIdeas.innerHTML = '<p class="text-muted">You haven\'t posted any ideas yet.</p>';
            return;
        }
        
        profilePostedIdeas.innerHTML = state.postedIdeas.map(i => `
             <div class="idea-card" onclick="app.openModal(${i.id})">
                <div class="card-header">
                    <h3 class="card-title">${i.title}</h3>
                    <span class="badge" style="background: ${i.color}20; color: ${i.color}">${i.category}</span>
                </div>
                <p class="card-desc">${i.desc}</p>
                 <div class="card-stats">
                    <div class="stat-item"><i class="ti ti-chart-bar"></i> ${i.likes} views</div>
                </div>
            </div>
        `).join('');
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
