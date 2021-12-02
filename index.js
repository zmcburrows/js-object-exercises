function showError(element) {
  var oldClass = element.className;
  element.className += " btn-danger";
  element.innerHTML = "Hmm, not quite";
  setTimeout(function() {
    element.className = oldClass;
    element.innerHTML = "Run";
  }, 3000);
}

function showSuccess(element) {
  var oldClass = element.className;
  element.className += " btn-success";
  element.innerHTML = "It works!";
  setTimeout(function() {
    element.className = oldClass;
    element.innerHTML = "Run";
  }, 3000);
}

function restoreActiveTab() {
  const activeTabIndex = localStorage.getItem("activeTabIndex") || 0;
  document.querySelectorAll(".nav-link")[activeTabIndex].classList.add("active");
  document.querySelectorAll(".tab-pane")[activeTabIndex].classList.add("active", "show");
}

function setActiveTab() {
  const tabs = document.querySelectorAll(".nav-link");
  const activeTabIndex = Array.from(tabs).findIndex(tab => tab.classList.contains("active"));
  localStorage.setItem("activeTabIndex", activeTabIndex === -1 ? 0 : activeTabIndex);
}

function expect(input, expected) {
  if (_.isEqual(input, expected)) {
    return true;
  } else {
    console.error('Test failed\n', 'Expected:', expected, '\nRecieved:', input);
    throw new Error('Test failed');
  }
}

/**
 * build level
 * @param {LevelData[]} levelData
 * @param {number} level
 */
function buildLevel(exercises, level) {
  const tabContainer = document.getElementById("levelTab");
  tabContainer.appendChild(createTab(level));
  const tabContentContainer = document.getElementById("levelTabContent");
  const tabContent = createTabContent(level);
  tabContentContainer.appendChild(tabContent);
  exercises.forEach((exercise, index) => {
    tabContent.appendChild(createExercise(level, index + 1, exercise));
    if (index < exercises.length - 1) {
      tabContent.appendChild(document.createElement("hr"));
    }
  })
}

function createTab(level) {
  const tab = document.createElement("li");
  tab.className = "nav-item";
  tab.innerHTML = `<a
    class="nav-link level-tab"
    id="level-${level}-tab"
    data-toggle="tab"
    href="#lvl${level}"
    role="tab"
    aria-controls="level-${level}"
    aria-expanded="true"
    >Level ${level}</a
  >`
  return tab;
}

function createTabContent(level) {
  const div = document.createElement("div");
  div.className = "tab-pane fade";
  div.id = `lvl${level}`;
  div.setAttribute("role", "tabpanel");
  div.setAttribute("aria-labelledby", `level-${level}-tab`);
  return div;
}

function createExercise(level, exercise, data) {
  const div = document.createElement("div");
  div.className = "row align-items-center";
  div.innerHTML = `
    <div class="col">
      <h3 class="card-title">${data.title}</h3>
      <p class="card-text">
        ${data.desc}
      </p>
    </div>
    <div class="col-auto">
      <button
        id="level${level}exercise${exercise}"
        data-level="${level}"
        data-exercise="${exercise}"
        onclick="evalExercise(this)"
        class="btn btn-primary"
        type="button"
      >
        Run
      </button>
    </div>
  `
  return div;
}

function evalExercise(element) {
  const level = element.dataset.level - 1;
  const exercise = element.dataset.exercise - 1;
  try {
    const currentExercise = levelData[level][exercise];
    currentExercise.conditions.forEach(({arguments, expected}) => {
      const result = currentExercise.callback(...arguments);
      expect(result, expected);
    })

    showSuccess(element);
  } catch (e) {
    showError(element);
  }
}

function main() {
  levelData.forEach((level, index) => {
    buildLevel(level, index + 1);
  })
  restoreActiveTab();

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('level-tab')) {
      setActiveTab();
    }
  })
}

main();