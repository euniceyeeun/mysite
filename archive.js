const ptpl = document.getElementById('ptpl-nav');
const epc = document.getElementById('epc-nav');
const shorts = document.getElementById('shorts-nav');
const super8 = document.getElementById('super8-nav');
const label = document.getElementById('label-container');

const archiveContainer = document.getElementById('archive-container');
const ptplContainer = document.getElementById('ptpl-content-container');
const epcContainer = document.getElementById('epc-content-container');
const super8Container = document.getElementById('super8-content-container');
const shortsContainer = document.getElementById('shorts-content-container');

const ptplReturn = document.getElementById('ptpl-return');
const epcReturn = document.getElementById('epc-return');
const super8Return = document.getElementById('super8-return');
const shortsReturn = document.getElementById('shorts-return');

ptpl.addEventListener('mouseover', showLabel('ptpl-nav'));
ptpl.addEventListener('mouseout', hideLabel);

epc.addEventListener('mouseover', showLabel('epc-nav'));
epc.addEventListener('mouseout', hideLabel);

shorts.addEventListener('mouseover', showLabel('shorts-nav'));
shorts.addEventListener('mouseout', hideLabel);

super8.addEventListener('mouseover', showLabel('super8-nav'));
super8.addEventListener('mouseout', hideLabel);

function showLabel(id) {

  return function() {

    const newLabel = document.createElement('div');

    switch(id) {

      case ('ptpl-nav'):
      newLabel.innerHTML =
      `
        portals to past lives
        <p>
        a digital archive
      `
      break;

      case ('epc-nav'):
      newLabel.innerHTML =
      `
        every page creases
        <p>
        an experimental animation
      `
      break;

      case ('shorts-nav'):
      newLabel.innerHTML =
      `
        when it's just out of reach
        <p>
        a collection of existential shorts
      `
      break;

      case ('super8-nav'):
      newLabel.innerHTML =
      `
        summer in olympic national park
        <p>
        super 8 test shoot
      `
      break;

    };

    label.appendChild(newLabel);

  }
}

function hideLabel() {

  while (label.hasChildNodes()) {
    label.removeChild(label.firstChild);
  }

}

ptpl.onclick = function() {
  archiveContainer.style.setProperty("display", "none", "important");
  ptplContainer.style.setProperty("display", "flex", "important");
}

ptplReturn.onclick = function() {
  ptplContainer.style.setProperty("display", "none", "important");
  archiveContainer.style.setProperty("display", "flex", "important");
}

epc.onclick = function() {
  archiveContainer.style.setProperty("display", "none", "important");
  epcContainer.style.setProperty("display", "flex", "important");
}

epcReturn.onclick = function() {
  epcContainer.style.setProperty("display", "none", "important");
  archiveContainer.style.setProperty("display", "flex", "important");
}

super8.onclick = function() {
  archiveContainer.style.setProperty("display", "none", "important");
  super8Container.style.setProperty("display", "flex", "important");
}

super8Return.onclick = function() {
  super8Container.style.setProperty("display", "none", "important");
  archiveContainer.style.setProperty("display", "flex", "important");
}

shorts.onclick = function() {
  archiveContainer.style.setProperty("display", "none", "important");
  shortsContainer.style.setProperty("display", "flex", "important");
}

shortsReturn.onclick = function() {
  shortsContainer.style.setProperty("display", "none", "important");
  archiveContainer.style.setProperty("display", "flex", "important");
}
