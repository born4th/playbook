// Font Size Adjustment Controls
(function() {
  'use strict';

  // Configuration
  const STORAGE_KEY = 'mkdocs-font-size';
  const MIN_FONT_SIZE = 12;
  const MAX_FONT_SIZE = 20;
  const DEFAULT_FONT_SIZE = 16;
  const STEP_SIZE = 2;

  // Get current font size from localStorage or use default
  function getCurrentFontSize() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? parseInt(stored, 10) : DEFAULT_FONT_SIZE;
  }

  // Set font size in localStorage and apply to document
  function setFontSize(size) {
    size = Math.max(MIN_FONT_SIZE, Math.min(MAX_FONT_SIZE, size));
    localStorage.setItem(STORAGE_KEY, size);
    
    // Apply font size to the main content areas
    const contentSelectors = [
      '.md-content',
      '.md-typeset',
      'article',
      '.md-content__inner'
    ];
    
    contentSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.style.fontSize = size + 'px';
      });
    });
  }

  // Create font size control buttons
  function createFontSizeControls() {
    const controls = document.createElement('div');
    controls.className = 'font-size-controls';

    // Decrease font size button
    const decreaseBtn = document.createElement('button');
    decreaseBtn.className = 'font-decrease';
    decreaseBtn.title = 'Decrease font size';
    decreaseBtn.textContent = 'A-';
    decreaseBtn.addEventListener('click', function() {
      console.log('Decrease button clicked');
      const currentSize = getCurrentFontSize();
      setFontSize(currentSize - STEP_SIZE);
    });

    // Increase font size button
    const increaseBtn = document.createElement('button');
    increaseBtn.className = 'font-increase';
    increaseBtn.title = 'Increase font size';
    increaseBtn.textContent = 'A+';
    increaseBtn.addEventListener('click', function() {
      console.log('Increase button clicked');
      const currentSize = getCurrentFontSize();
      setFontSize(currentSize + STEP_SIZE);
    });

    // Reset font size button
    const resetBtn = document.createElement('button');
    resetBtn.className = 'font-reset';
    resetBtn.title = 'Reset font size';
    resetBtn.textContent = '⊙';
    resetBtn.addEventListener('click', function() {
      console.log('Reset button clicked');
      setFontSize(DEFAULT_FONT_SIZE);
    });

    controls.appendChild(decreaseBtn);
    controls.appendChild(increaseBtn);
    controls.appendChild(resetBtn);

    return controls;
  }

  // Initialize font size controls
  function initFontSizeControls() {
    console.log('Initializing font size controls');

    // Apply current font size
    setFontSize(getCurrentFontSize());

    // Create and add controls to page
    const controls = createFontSizeControls();
    document.body.appendChild(controls);

    console.log('Font size controls added to page');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFontSizeControls);
  } else {
    initFontSizeControls();
  }

})();
