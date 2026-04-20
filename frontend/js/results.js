// ============================================================================
// RESULTS PAGE
// ============================================================================

function renderResults() {
  const problem = gameState.data.problem;
  if (!problem) {
    alert('Problem not found');
    return;
  }

  const message = generateResultsMessage();
  document.getElementById('results-message').innerHTML = message;

  const reprimands = generateReprimands();
  if (reprimands.length > 0) {
    const reprimandHtml = '<div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 16px; margin-top: 16px; border-radius: 16px;"><strong style="color: #dc2626;">Areas of Concern</strong><ul style="margin-top: 8px; padding-left: 20px;">' + reprimands.map(r => `<li>${r}</li>`).join('') + '</ul></div>';
    document.getElementById('results-message').innerHTML += reprimandHtml;
  }

  const reflectionQuestions = generateReflectionQuestions();
  const questionsHtml = reflectionQuestions.map(q => `<li>${q}</li>`).join('');
  document.getElementById('reflection-questions').innerHTML = questionsHtml;

  renderAchievements();
  renderDecisionsSummary();
  animateFinalScores();
  revealResultBlocks();
}

function animateFinalScores() {
  const metrics = [
    { id: 'final-impact', value: gameState.data.scores.impact, currency: false },
    { id: 'final-inclusivity', value: gameState.data.scores.inclusivity, currency: false },
    { id: 'final-trust', value: gameState.data.scores.trust, currency: false },
    { id: 'final-budget', value: gameState.data.scores.budget, currency: true }
  ];

  metrics.forEach((metric) => {
    const el = document.getElementById(metric.id);
    if (!el) return;
    el.dataset.value = '0';
    window.TechTycoonUI?.animateValue(el, metric.value, {
      duration: metric.currency ? 0 : (window.TechTycoonUI?.reducedMotion() ? 0 : 700),
      formatter: metric.currency ? (value) => '$' + Math.round(value).toLocaleString() : (value) => String(Math.round(value)),
      pulseClass: metric.currency ? 'neutral' : 'positive'
    });
  });

  const baseEl = document.getElementById('final-budget-base');
  if (baseEl) {
    baseEl.textContent = `of $${(gameState.data.initialBudget || 0).toLocaleString()}`;
  }
}

function revealResultBlocks() {
  const blocks = document.querySelectorAll('.results-block');
  window.TechTycoonUI?.revealSequence(blocks, 120);
}

function renderAchievements() {
  const container = document.getElementById('results-badges');
  if (!container) return;

  const { impact, inclusivity, trust, budget } = gameState.data.scores;
  const badges = [];

  if (impact >= 70) badges.push('Impact Driver');
  if (inclusivity >= 70) badges.push('Inclusive Builder');
  if (trust >= 70) badges.push('Trust Keeper');
  if (budget > gameState.data.initialBudget * 0.35) badges.push('Runway Manager');
  if (gameState.data.gameStatus === 'complete') badges.push('Launch Ready');
  if (gameState.data.gameStatus === 'time-up') badges.push('Deadline Pressure');
  if (!badges.length) badges.push('Hard Lessons Learned');

  container.innerHTML = badges.map((badge) => `<div class="results-badge">${badge}</div>`).join('');
}

function getStageTitleById(stageId) {
  return gameState.data.problem?.stages?.find(stage => stage.id === stageId)?.title || 'a stage';
}

function generateResultsMessage() {
  const problem = gameState.data.problem;
  const { impact, inclusivity, trust, budget } = gameState.data.scores;
  const average = (impact + inclusivity + trust) / 3;
  const spent = (gameState.data.initialBudget || 0) - budget;
  const topExpense = gameState.data.choices.reduce((max, choice) => {
    const cost = Math.abs(choice.effects?.budget || 0);
    return cost > max.cost ? { cost, stageId: choice.stageId, text: choice.choiceText } : max;
  }, { cost: 0, stageId: null, text: '' });

  let message = '';

  if (gameState.data.gameStatus === 'time-up') {
    const totalDays = gameState.data.totalDays || (problem?.totalDays || 0);
    const currentDay = gameState.data.currentDay || 0;
    const overtime = Math.max(0, currentDay - totalDays);
    message = `<strong>Time Up: Project Closed</strong><br>
    Deadline was Day ${totalDays}${problem?.launchDeadline ? ` (${problem.launchDeadline})` : ''}. Your team reached Day ${currentDay}.${overtime > 0 ? ` You were ${overtime} day${overtime !== 1 ? 's' : ''} late.` : ''}<br>
    Final status: Impact ${impact}, Inclusivity ${inclusivity}, Trust ${trust}, Budget $${budget.toLocaleString()} of $${(gameState.data.initialBudget || 0).toLocaleString()}.<br>
    The launch window ended before you could continue. Your choices in ${getStageTitleById(topExpense.stageId)} used your runway quickly.`;
  } else if (gameState.data.gameStatus === 'incomplete') {
    message = `<strong>Project Incomplete:</strong> Your team ran out of budget before completing all planned work. You spent $${spent.toLocaleString()} and ended with $${budget.toLocaleString()} remaining. The decision in ${getStageTitleById(topExpense.stageId)} had the largest budget impact.`;
  } else if (average >= 75 && trust >= 70 && budget > 0) {
    message = `<strong>Excellent Leadership:</strong> Your team navigated this crisis with remarkable balance. You prioritized inclusive solutions (Inclusivity: ${inclusivity}), maintained strong stakeholder relationships (Trust: ${trust}), and delivered real impact (Impact: ${impact}). You finished with $${budget.toLocaleString()} remaining from $${(gameState.data.initialBudget || 0).toLocaleString()}.`;
  } else if (average >= 55 && trust >= 50 && budget > 0) {
    message = `<strong>Solid Crisis Management:</strong> You made reasonable trade-offs and kept your team together. Impact: ${impact}, Inclusivity: ${inclusivity}, Trust: ${trust}. After spending $${spent.toLocaleString()}, you still had $${budget.toLocaleString()} left. The biggest spend came during ${getStageTitleById(topExpense.stageId)}.`;
  } else {
    message = `<strong>Difficult Choices:</strong> Your scores (Impact: ${impact}, Inclusivity: ${inclusivity}, Trust: ${trust}) show the trade-offs you made. You finished with $${budget.toLocaleString()} remaining from $${(gameState.data.initialBudget || 0).toLocaleString()}. Reflect on the choice in ${getStageTitleById(topExpense.stageId)} and how it shifted your budget most dramatically.`;
  }

  return message;
}

function generateReprimands() {
  const { impact, inclusivity, trust } = gameState.data.scores;
  const reprimands = [];

  if (impact < 40) {
    reprimands.push('<strong>Low Impact:</strong> You failed to deliver meaningful solutions to the core problem. Whatever you attempted, it was not enough to create real change.');
  }

  if (inclusivity < 40) {
    reprimands.push('<strong>Low Inclusivity:</strong> Your approach excluded significant portions of your user base or stakeholder community.');
  }

  if (trust < 40) {
    reprimands.push('<strong>Low Trust:</strong> Your stakeholders do not believe in your leadership or your solutions.');
  }

  return reprimands;
}

function generateReflectionQuestions() {
  const { impact, inclusivity, trust, budget } = gameState.data.scores;
  const choices = gameState.data.choices || [];
  const questions = [];

  const budgetChanges = choices.map(choice => ({
    stageId: choice.stageId,
    text: choice.choiceText,
    change: choice.effects?.budget || 0
  }));
  const largestBudgetChange = budgetChanges.reduce((prev, current) => Math.abs(current.change) > Math.abs(prev.change) ? current : prev, { change: 0 });

  const metricChanges = choices.flatMap(choice => Object.entries(choice.effects || {}).filter(([metric]) => metric !== 'budget').map(([metric, value]) => ({
    stageId: choice.stageId,
    text: choice.choiceText,
    metric,
    change: value
  })));
  const largestMetricMove = metricChanges.reduce((prev, current) => Math.abs(current.change) > Math.abs(prev.change) ? current : prev, { change: 0 });

  if (choices.length) {
    questions.push(`In ${getStageTitleById(choices[0].stageId)}, you chose “${choices[0].choiceText}”. How did that early decision shape the rest of your run?`);
    if (largestBudgetChange.change !== 0) {
      questions.push(`Which decision had the biggest budget impact (${largestBudgetChange.change < 0 ? 'spent' : 'saved'} $${Math.abs(largestBudgetChange.change).toLocaleString()}) in ${getStageTitleById(largestBudgetChange.stageId)}? Could another choice have preserved more runway?`);
    }
    if (largestMetricMove.change !== 0) {
      const direction = largestMetricMove.change > 0 ? 'increased' : 'decreased';
      const metricName = largestMetricMove.metric.charAt(0).toUpperCase() + largestMetricMove.metric.slice(1);
      questions.push(`During ${getStageTitleById(largestMetricMove.stageId)}, your ${metricName} ${direction} by ${Math.abs(largestMetricMove.change)}. What drove that change, and would you make the same choice again?`);
    }
  }

  if (inclusivity < 50) {
    questions.push('Which choices made inclusivity harder to achieve? How might a different path have supported a broader group of users or students?');
  } else {
    questions.push('Which stage decisions most clearly boosted inclusivity? How did those choices affect your other goals?');
  }

  if (trust < 50) {
    questions.push('Which decision caused the biggest trust drop? How could you rebuild confidence with stakeholders after that stage?');
  } else {
    questions.push('Which decision helped preserve trust, and why was that especially important at that point?');
  }

  if (budget <= 0) {
    questions.push('What would you change if you had to keep the project alive without any budget left?');
  } else {
    questions.push(`You ended with $${budget.toLocaleString()} remaining. Which stage had the most influence on your remaining runway?`);
  }

  questions.push('Looking back across all stages, which one choice would you change to improve your final result?');

  return questions;
}

function renderDecisionsSummary() {
  const container = document.getElementById('decisions-summary');

  if (gameState.data.choices.length === 0) {
    container.innerHTML = '<p>No decisions recorded.</p>';
    return;
  }

  const html = '<ul style="list-style: none; padding: 0; margin: 0;">' + gameState.data.choices.map((choice, idx) => `
    <li class="results-block" style="margin-bottom: 12px; padding: 14px 16px; background: rgba(255,255,255,0.86); border: 1px solid rgba(15,23,42,0.08); border-left: 4px solid #3b82f6; border-radius: 16px; box-shadow: 0 10px 22px rgba(16, 32, 51, 0.06);">
      <strong>Stage ${idx + 1} – ${getStageTitleById(choice.stageId)}:</strong> ${choice.choiceText}
      <br><small style="color: #6b7280;">
        Impact: ${choice.effects.impact > 0 ? '+' : ''}${choice.effects.impact}, 
        Inclusivity: ${choice.effects.inclusivity > 0 ? '+' : ''}${choice.effects.inclusivity}, 
        Trust: ${choice.effects.trust > 0 ? '+' : ''}${choice.effects.trust}, 
        Budget: ${window.TechTycoonUI?.formatCurrency(choice.effects.budget) || ('$' + choice.effects.budget.toLocaleString())}
      </small>
    </li>
  `).join('') + '</ul>';

  container.innerHTML = html;
}

async function saveResults() {
  const data = {
    teamName: gameState.data.teamName,
    problemId: gameState.data.problemId,
    role: gameState.data.role,
    teamMembers: gameState.data.teamMembers,
    finalScores: gameState.data.scores,
    choices: gameState.data.choices,
    duration: gameState.getDuration(),
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch('/api/game/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error('Save endpoint unavailable');
    const result = await response.json();
    if (result.success) {
      window.TechTycoonUI?.showNotification({ title: 'Results saved', message: 'Your run was saved successfully.', type: 'success' });
    } else {
      throw new Error('Save endpoint returned an error');
    }
  } catch (e) {
    console.warn('Save endpoint unavailable, downloading JSON instead:', e);
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `techtycoon-results-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
    window.TechTycoonUI?.showNotification({
      title: 'Saved locally',
      message: 'Downloaded a JSON copy because no server save endpoint was available.',
      type: 'info'
    });
  }
}

async function downloadResults() {
  try {
    const data = {
      teamName: gameState.data.teamName,
      problemId: gameState.data.problemId,
      finalScores: gameState.data.scores,
      choices: gameState.data.choices,
      duration: gameState.getDuration(),
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch(`/api/game/export/${data.timestamp}`, {
        method: 'GET'
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `techtycoon-results-${data.timestamp}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        return;
      }
    } catch (e) {
      console.log('Server export not available, using local CSV generation');
    }

    let csv = 'TechTycoon Game Results\n';
    csv += `Team Name,${data.teamName}\n`;
    csv += `Problem,${data.problemId}\n`;
    csv += `Duration,${data.duration} minutes\n`;
    csv += `Date,${new Date(data.timestamp).toLocaleString()}\n\n`;
    csv += 'Final Scores\n';
    csv += `Impact,${data.finalScores.impact}\n`;
    csv += `Inclusivity,${data.finalScores.inclusivity}\n`;
    csv += `Trust,${data.finalScores.trust}\n`;
    csv += `Budget Remaining,$${data.finalScores.budget}\n\n`;
    csv += 'Decisions\n';
    csv += 'Day,Decision,Impact,Inclusivity,Trust,Budget Change\n';
    data.choices.forEach((choice, idx) => {
      csv += `${idx + 1},"${choice.choiceText}",${choice.effects.impact},${choice.effects.inclusivity},${choice.effects.trust},$${choice.effects.budget}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `techtycoon-${gameState.data.teamName.replace(/\s+/g, '-')}-${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (e) {
    console.error('Error downloading results:', e);
    alert('Error downloading results');
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  if (!gameState.data.problemId) {
    window.TechTycoonUI?.navigate('select-problem.html');
    return;
  }

  if (gameState.data.gameStatus === 'in-progress') {
    gameState.endGame('complete');
  }

  renderResults();
});

