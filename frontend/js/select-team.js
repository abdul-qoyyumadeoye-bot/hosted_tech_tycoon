// ============================================================================
// TEAM MEMBER SELECTION PAGE
// ============================================================================

const TEAM_ROLES = [
  'Software Engineer',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Mobile App Developer',
  'Game Developer',
  'AI Engineer',
  'Machine Learning Engineer',
  'Data Scientist',
  'Data Analyst',
  'DevOps Engineer',
  'Cloud Engineer',
  'Site Reliability Engineer',
  'QA Tester',
  'Automation Test Engineer',
  'Cybersecurity Specialist',
  'Security Engineer',
  'Privacy Engineer',
  'Product Manager',
  'Project Manager',
  'Technical Program Manager',
  'UX Designer',
  'UI Designer',
  'Accessibility Specialist',
  'Interaction Designer',
  'User Researcher',
  'Marketing Manager',
  'Digital Marketing Specialist',
  'Growth Strategist',
  'SEO Specialist',
  'Social Media Manager',
  'Brand Manager',
  'Sales Manager',
  'Partnerships Manager',
  'Business Development Manager',
  'Finance Manager',
  'Operations Manager',
  'Customer Support Lead',
  'Community Manager',
  'Content Creator',
  'Technical Writer',
  'Solutions Architect',
  'Database Administrator',
  'Infrastructure Engineer',
  'Compliance Officer',
  'Ethics Advisor'
];

function getRoleMeta(name) {
  const lower = name.toLowerCase();
  if (lower.includes('security') || lower.includes('privacy') || lower.includes('compliance')) return { badge: 'Risk', icon: 'RK' };
  if (lower.includes('design') || lower.includes('ux') || lower.includes('research') || lower.includes('accessibility')) return { badge: 'Experience', icon: 'UX' };
  if (lower.includes('data') || lower.includes('ai') || lower.includes('machine')) return { badge: 'Insights', icon: 'AI' };
  if (lower.includes('market') || lower.includes('sales') || lower.includes('brand') || lower.includes('growth') || lower.includes('community')) return { badge: 'Growth', icon: 'GR' };
  if (lower.includes('finance') || lower.includes('operations') || lower.includes('project') || lower.includes('product')) return { badge: 'Ops', icon: 'OP' };
  return { badge: 'Build', icon: 'DV' };
}

const AVATAR_PALETTES = [
  ['#1776d2', '#53b4ff', '#cfe8ff'],
  ['#129b67', '#56d58d', '#d8f8e6'],
  ['#d59a1e', '#ffd66b', '#fff0c8'],
  ['#9254de', '#d4a5ff', '#f1e4ff'],
  ['#d94f70', '#ff8fb0', '#ffd8e3'],
  ['#0f766e', '#4dd4c6', '#d5fbf6'],
  ['#7c3aed', '#a78bfa', '#ece5ff'],
  ['#b45309', '#f59e0b', '#ffeed6']
];

function hashRole(name) {
  return Array.from(name).reduce((sum, char, index) => sum + (char.charCodeAt(0) * (index + 3)), 0);
}

function getRoleVisual(name) {
  const lower = name.toLowerCase();
  const byKeyword = [
    ['frontend developer', { icon: '🖥️' }],
    ['backend developer', { icon: '🗄️' }],
    ['full stack developer', { icon: '🔗' }],
    ['mobile app developer', { icon: '📱' }],
    ['game developer', { icon: '🎮' }],
    ['software engineer', { icon: '⚙️' }],
    ['ai engineer', { icon: '🤖' }],
    ['machine learning engineer', { icon: '🧠' }],
    ['data scientist', { icon: '📊' }],
    ['data analyst', { icon: '📈' }],
    ['devops engineer', { icon: '🔄' }],
    ['cloud engineer', { icon: '☁️' }],
    ['site reliability engineer', { icon: '🛰️' }],
    ['qa tester', { icon: '✅' }],
    ['automation test engineer', { icon: '🧪' }],
    ['cybersecurity specialist', { icon: '🛡️' }],
    ['security engineer', { icon: '🔐' }],
    ['privacy engineer', { icon: '🔒' }],
    ['product manager', { icon: '🧭' }],
    ['project manager', { icon: '📋' }],
    ['technical program manager', { icon: '🗂️' }],
    ['ux designer', { icon: '✨' }],
    ['ui designer', { icon: '🎨' }],
    ['accessibility specialist', { icon: '♿' }],
    ['interaction designer', { icon: '🪄' }],
    ['user researcher', { icon: '🔍' }],
    ['marketing manager', { icon: '📣' }],
    ['digital marketing specialist', { icon: '📢' }],
    ['growth strategist', { icon: '🚀' }],
    ['seo specialist', { icon: '🔎' }],
    ['social media manager', { icon: '💬' }],
    ['brand manager', { icon: '🏷️' }],
    ['sales manager', { icon: '💼' }],
    ['partnerships manager', { icon: '🤝' }],
    ['business development manager', { icon: '🌱' }],
    ['finance manager', { icon: '💷' }],
    ['operations manager', { icon: '📦' }],
    ['customer support lead', { icon: '🎧' }],
    ['community manager', { icon: '🫶' }],
    ['content creator', { icon: '🎬' }],
    ['technical writer', { icon: '✍️' }],
    ['solutions architect', { icon: '🏗️' }],
    ['database administrator', { icon: '🗃️' }],
    ['infrastructure engineer', { icon: '🏭' }],
    ['compliance officer', { icon: '📜' }],
    ['ethics advisor', { icon: '⚖️' }]
  ];

  const matched = byKeyword.find(([keyword]) => lower.includes(keyword));
  return matched ? matched[1] : { icon: '💡' };
}

function getRoleStyle(name) {
  const hash = hashRole(name);
  const palette = AVATAR_PALETTES[hash % AVATAR_PALETTES.length];
  const dotOne = 8 + (hash % 18);
  const dotTwo = 10 + ((hash >> 2) % 16);
  const dotThree = 14 + ((hash >> 3) % 14);
  return [
    `--avatar-primary:${palette[0]}`,
    `--avatar-secondary:${palette[1]}`,
    `--avatar-surface:${palette[2]}`,
    `--orbit-dot-one:${dotOne}%`,
    `--orbit-dot-two:${dotTwo}%`,
    `--orbit-dot-three:${dotThree}%`
  ].join(';');
}

const TEAM_SELECTION = {
  min: 4,
  max: 5
};

function getRoleSummary(name) {
  const lower = name.toLowerCase();
  if (lower.includes('security') || lower.includes('privacy') || lower.includes('compliance')) return 'Protects the product from legal, data, and trust risks.';
  if (lower.includes('design') || lower.includes('ux') || lower.includes('research') || lower.includes('accessibility')) return 'Champions usability, inclusion, and a smoother player experience.';
  if (lower.includes('data') || lower.includes('ai') || lower.includes('machine')) return 'Turns signals into smart product and growth decisions.';
  if (lower.includes('market') || lower.includes('sales') || lower.includes('brand') || lower.includes('growth') || lower.includes('community')) return 'Builds momentum, reach, and audience confidence.';
  if (lower.includes('finance') || lower.includes('operations') || lower.includes('project') || lower.includes('product')) return 'Keeps delivery on track, funded, and strategically aligned.';
  return 'Builds the product backbone and keeps the sprint moving.';
}

function renderTeamMembers() {
  const container = document.getElementById('team-list');

  container.innerHTML = TEAM_ROLES.map((name) => {
    const meta = getRoleMeta(name);
    const visual = getRoleVisual(name);
    return `
      <label class="avatar-card avatar-card--team" style="${getRoleStyle(name)}">
        <input type="checkbox" name="team-member" value="${name}" onchange="updateTeamCount(this)">
        <div class="avatar-orbit"></div>
        <div class="avatar-visual">
          <div class="avatar-icon">
            <span class="avatar-emoji" aria-hidden="true">${visual.icon}</span>
          </div>
          <div class="avatar-glow"></div>
        </div>
        <div class="avatar-tag">${meta.badge}</div>
        <div class="avatar-name">${name}</div>
        <div class="avatar-description">${getRoleSummary(name)}</div>
      </label>
    `;
  }).join('');

  window.TechTycoonUI?.revealElements(container);

  container.addEventListener('click', (e) => {
    const card = e.target.closest('.avatar-card');
    if (!card) return;
    const input = card.querySelector('input[type="checkbox"]');
    if (input && input.disabled) {
      window.TechTycoonUI?.showNotification({
        title: 'Team full',
        message: `You can only select a maximum of ${TEAM_SELECTION.max} team members. Unselect one to pick someone else.`,
        type: 'warning'
      });
    }
  });
}

function updateTeamCount(changedInput) {
  const selectedInputs = Array.from(document.querySelectorAll('input[name="team-member"]:checked'));
  let selectedCount = selectedInputs.length;

  if (selectedCount > TEAM_SELECTION.max) {
    if (changedInput) changedInput.checked = false;
    selectedCount = TEAM_SELECTION.max;
  }

  document.getElementById('count').textContent = selectedCount;

  const continueBtn = document.getElementById('continue-btn');
  continueBtn.disabled = !(selectedCount >= TEAM_SELECTION.min && selectedCount <= TEAM_SELECTION.max);

  const atMax = selectedCount >= TEAM_SELECTION.max;
  document.querySelectorAll('.avatar-card').forEach(card => {
    const input = card.querySelector('input[type="checkbox"]');
    const isChecked = Boolean(input && input.checked);
    card.classList.toggle('selected', isChecked);
    if (input) input.disabled = atMax && !isChecked;
  });
}

function showSuggestedTeam() {
  const hint = document.getElementById('team-hint');
  const suggested = gameState.data.problem?.suggestedTeam || [];
  if (!hint) return;

  if (suggested.length) {
    hint.innerHTML = `<button class="hint-close" aria-label="Close suggestion">&times;</button><strong>Suggested Team:</strong> ${suggested.slice(0, TEAM_SELECTION.max).join(', ')}`;
  } else {
    hint.innerHTML = `<button class="hint-close" aria-label="Close suggestion">&times;</button>No suggested team provided for this scenario.`;
  }
  hint.style.display = 'block';

  const closeBtn = hint.querySelector('.hint-close');
  closeBtn.addEventListener('click', () => {
    hint.style.display = 'none';
  });

  window.TechTycoonUI?.showNotification({ title: 'Team suggestion ready', message: 'Use it as a starting point, not a requirement.', type: 'info' });
}

function selectTeam() {
  const selected = Array.from(document.querySelectorAll('input[name="team-member"]:checked')).map(cb => cb.value);

  if (!(selected.length === 4 || selected.length === 5)) {
    alert('Please select 4 or 5 team members.');
    return;
  }

  gameState.setTeamMembers(selected);
  window.TechTycoonUI?.navigate('stage.html') || (window.location.href = 'stage.html');
}

document.addEventListener('DOMContentLoaded', () => {
  renderTeamMembers();
  document.getElementById('team-hint-btn')?.addEventListener('click', showSuggestedTeam);
});
