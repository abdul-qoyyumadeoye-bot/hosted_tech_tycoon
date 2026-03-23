// ============================================================================
// INDEX PAGE (Welcome)
// ============================================================================

function validateTeamName(rawValue) {
  if (!rawValue || rawValue.trim().length === 0) {
    return 'Enter a team name.';
  }

  const teamName = rawValue.trim();

  if (teamName.length > 10) {
    return 'Team name must be 10 characters or fewer.';
  }

  if (!/[A-Za-z0-9]/.test(teamName)) {
    return 'Team name must include at least one letter or number.';
  }

  return '';
}

function showTeamNameError(message) {
  const teamNameInput = document.getElementById('team-name');
  const errorElement = document.getElementById('team-name-error');

  if (!teamNameInput || !errorElement) return;

  errorElement.textContent = message;
  teamNameInput.classList.toggle('input-invalid', Boolean(message));
  teamNameInput.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function startGame() {
  const teamNameInput = document.getElementById('team-name');
  if (!teamNameInput) return;

  const validationMessage = validateTeamName(teamNameInput.value);
  if (validationMessage) {
    showTeamNameError(validationMessage);
    teamNameInput.focus();
    return;
  }

  const teamName = teamNameInput.value.trim();
  
  gameState.reset();
  gameState.setTeamName(teamName);
  gameState.startGame();
  
  window.TechTycoonUI?.navigate('select-problem.html') || (window.location.href = 'select-problem.html');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  const teamNameInput = document.getElementById('team-name');
  if (teamNameInput) {
    teamNameInput.focus();
    teamNameInput.addEventListener('input', () => {
      showTeamNameError(validateTeamName(teamNameInput.value));
    });
    teamNameInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        startGame();
      }
    });
  }
});

