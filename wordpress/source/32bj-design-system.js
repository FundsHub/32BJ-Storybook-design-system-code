(function () {
  'use strict';

  var config = window.BJ32DesignSystem || {};
  var currentScript = document.currentScript;

  function normalizeBase(value) {
    if (!value) return '';
    return value.charAt(value.length - 1) === '/' ? value : value + '/';
  }

  function resolveAssetBase() {
    if (config.assetBase) return normalizeBase(config.assetBase);
    if (currentScript && currentScript.src) {
      return currentScript.src.slice(0, currentScript.src.lastIndexOf('/') + 1);
    }
    return './assets/';
  }

  var assetBase = resolveAssetBase();

  function hydrateAssets(root) {
    var scope = root || document;
    scope.querySelectorAll('[data-ds-asset]').forEach(function (node) {
      var filename = node.getAttribute('data-ds-asset');
      if (!filename) return;
      try {
        node.setAttribute('src', new URL(filename, assetBase).href);
      } catch (error) {
        node.setAttribute('src', assetBase + filename);
      }
    });
  }

  function setExpanded(control, expanded) {
    control.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    var targetId = control.getAttribute('aria-controls');
    if (!targetId) return;
    var target = document.getElementById(targetId);
    if (!target) return;
    target.hidden = !expanded;
  }

  function toggleControlled(control) {
    var expanded = control.getAttribute('aria-expanded') === 'true';
    setExpanded(control, !expanded);
  }

  function handleToggle(control) {
    var action = control.getAttribute('data-ds-toggle');
    toggleControlled(control);

    if (action !== 'menu' && action !== 'navigation' && action !== 'search') return;

    var region = control.closest('.ds-header, .ds-homepage-header');
    if (!region) return;

    region.querySelectorAll('[data-ds-toggle]').forEach(function (other) {
      if (other === control) return;
      var otherAction = other.getAttribute('data-ds-toggle');
      if (otherAction === 'menu' || otherAction === 'navigation' || otherAction === 'search') {
        setExpanded(other, false);
      }
    });
  }

  function handleAccordion(button) {
    var accordion = button.closest('.ds-accordion');
    if (!accordion) return;
    var panelId = button.getAttribute('aria-controls');
    if (!panelId) return;
    var panel = document.getElementById(panelId);
    if (!panel) return;

    var open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', open ? 'false' : 'true');
    panel.hidden = open;
    accordion.setAttribute('data-open', open ? 'false' : 'true');
  }

  function renderCarousel(carousel, index) {
    var desktopSlides = Array.prototype.slice.call(carousel.querySelectorAll('[data-ds-carousel-slide]'));
    var mobileSlides = Array.prototype.slice.call(carousel.querySelectorAll('[data-ds-carousel-mobile-slide]'));
    var length = Math.max(desktopSlides.length, mobileSlides.length);
    if (!length) return;

    var safeIndex = ((index % length) + length) % length;
    carousel.setAttribute('data-ds-active-slide', String(safeIndex));

    desktopSlides.forEach(function (slide, slideIndex) {
      slide.hidden = slideIndex !== safeIndex;
      slide.setAttribute('aria-hidden', slideIndex === safeIndex ? 'false' : 'true');
    });

    mobileSlides.forEach(function (slide, slideIndex) {
      slide.hidden = slideIndex !== safeIndex;
      slide.setAttribute('aria-hidden', slideIndex === safeIndex ? 'false' : 'true');
    });
  }

  function moveCarousel(button) {
    var carousel = button.closest('[data-ds-carousel]');
    if (!carousel) return;
    var index = parseInt(carousel.getAttribute('data-ds-active-slide') || '0', 10);
    var direction = button.getAttribute('data-ds-carousel-action') === 'previous' ? -1 : 1;
    renderCarousel(carousel, index + direction);
  }

  function toggleVideo(button) {
    var player = button.closest('.ds-video__player');
    if (!player) return;
    var playing = player.getAttribute('data-playing') === 'true';
    var next = !playing;
    player.setAttribute('data-playing', next ? 'true' : 'false');
    button.setAttribute('aria-pressed', next ? 'true' : 'false');

    var label = button.querySelector('[data-ds-video-label]');
    if (label) label.textContent = next ? 'Pause video' : 'Play video';

    var icon = button.querySelector('[aria-hidden="true"]');
    if (icon) icon.textContent = next ? '||' : '>';
  }

  function updateCounter(textarea) {
    var counterId = textarea.getAttribute('data-ds-count');
    if (!counterId) return;
    var counter = document.getElementById(counterId);
    if (!counter) return;
    var max = textarea.maxLength > 0 ? textarea.maxLength : null;
    counter.textContent = max ? textarea.value.length + ' / ' + max : String(textarea.value.length);
  }

  function initialize(root) {
    var scope = root || document;
    hydrateAssets(scope);

    scope.querySelectorAll('[data-ds-carousel]').forEach(function (carousel) {
      var index = parseInt(carousel.getAttribute('data-ds-active-slide') || '0', 10);
      renderCarousel(carousel, index);
    });

    scope.querySelectorAll('textarea[data-ds-count]').forEach(updateCounter);
  }

  document.addEventListener('click', function (event) {
    var toggle = event.target.closest('[data-ds-toggle]');
    if (toggle) {
      event.preventDefault();
      handleToggle(toggle);
      return;
    }

    var accordionButton = event.target.closest('.ds-accordion > button[aria-controls]');
    if (accordionButton) {
      event.preventDefault();
      handleAccordion(accordionButton);
      return;
    }

    var carouselAction = event.target.closest('[data-ds-carousel-action]');
    if (carouselAction) {
      event.preventDefault();
      moveCarousel(carouselAction);
      return;
    }

    var videoToggle = event.target.closest('[data-ds-video-toggle]');
    if (videoToggle) {
      event.preventDefault();
      toggleVideo(videoToggle);
    }
  });

  document.addEventListener('input', function (event) {
    var textarea = event.target.closest('textarea[data-ds-count]');
    if (textarea) updateCounter(textarea);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initialize(document); });
  } else {
    initialize(document);
  }

  window.BJ32DesignSystemRuntime = {
    initialize: initialize,
    hydrateAssets: hydrateAssets
  };
}());
