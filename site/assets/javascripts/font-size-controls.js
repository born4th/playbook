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

  // Update button states based on current font size
  function updateButtonStates(size) {
    const decreaseBtn = document.querySelector('.font-decrease');
    const increaseBtn = document.querySelector('.font-increase');
    
    if (decreaseBtn) {
      if (size <= MIN_FONT_SIZE) {
        decreaseBtn.disabled = true;
        decreaseBtn.classList.add('disabled');
      } else {
        decreaseBtn.disabled = false;
        decreaseBtn.classList.remove('disabled');
      }
    }
    
    if (increaseBtn) {
      if (size >= MAX_FONT_SIZE) {
        increaseBtn.disabled = true;
        increaseBtn.classList.add('disabled');
      } else {
        increaseBtn.disabled = false;
        increaseBtn.classList.remove('disabled');
      }
    }
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
      '.md-content__inner',
      '.admonition',
      '.admonition-title',
      '.admonition p'
    ];
    
    contentSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.style.fontSize = size + 'px';
      });
    });
    
    // Update button states
    updateButtonStates(size);
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
    decreaseBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.blur(); // Remove focus immediately after click
      console.log('Decrease button clicked');
      const currentSize = getCurrentFontSize();
      setFontSize(currentSize - STEP_SIZE);
    });

    // Increase font size button
    const increaseBtn = document.createElement('button');
    increaseBtn.className = 'font-increase';
    increaseBtn.title = 'Increase font size';
    increaseBtn.textContent = 'A+';
    increaseBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.blur(); // Remove focus immediately after click
      console.log('Increase button clicked');
      const currentSize = getCurrentFontSize();
      setFontSize(currentSize + STEP_SIZE);
    });

    // Reset font size button
    const resetBtn = document.createElement('button');
    resetBtn.className = 'font-reset';
    resetBtn.title = 'Reset font size';
    resetBtn.textContent = '⊙';
    resetBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.blur(); // Remove focus immediately after click
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

    // Create and add controls to page
    const controls = createFontSizeControls();
    document.body.appendChild(controls);
    
    // Apply current font size and update button states
    setFontSize(getCurrentFontSize());

    console.log('Font size controls added to page');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFontSizeControls);
  } else {
    initFontSizeControls();
  }

})();
