// Tab-Umschaltung
export function setupTabs() {
  const tab1Btn = document.getElementById('tab1Btn');
  const tab2Btn = document.getElementById('tab2Btn');
  const tab1 = document.getElementById('tab1');
  const tab2 = document.getElementById('tab2');
  function activateTab(tabIdx) {
    if(tabIdx === 1) {
      tab1.style.display = '';
      tab2.style.display = 'none';
      tab1Btn.classList.add('active');
      tab2Btn.classList.remove('active');
    } else {
      tab1.style.display = 'none';
      tab2.style.display = '';
      tab2Btn.classList.add('active');
      tab1Btn.classList.remove('active');
    }
  }
  tab1Btn.onclick = () => activateTab(1);
  tab2Btn.onclick = () => activateTab(2);
  activateTab(1); // Default: Tab1 aktiv
}
