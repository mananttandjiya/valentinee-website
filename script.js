function handleYesClick() {
  window.location.href = 'valentine.html';
}

function handleNoClick() {
  const currentFontSize = parseInt(document.body.style.fontSize || '16px');
  document.body.style.fontSize = `${currentFontSize + 4}px`;

  const container = document.querySelector('.container');
  container.innerHTML = `
    <h1 class="main-heading">Are you sure? 😢</h1>
    <div class="buttons">
      <button class="yes-button" onclick="handleYesClick()">Yes 💕</button>
      <button class="no-button" onclick="handleNoClick()">No 😢</button>
    </div>
  `;
}