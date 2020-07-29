'use strict';

$(document).ready(function () {
  var currentSectionNav, target;

  // If an anchor hash is in the URL highlight the menu item
  highlightActiveHash();
  // If a specific page section is in the URL highlight the menu item
  highlightActiveSection();

  // If a specific page section is in the URL scroll that section up to the top
  currentSectionNav = $('#' + getCurrentSectionName() + '-nav');

  if (currentSectionNav.position()) {
    $('nav').scrollTop(currentSectionNav.position().top);
  }

  // function to scroll to anchor when clicking an anchor linl
  $('a[href*="#"]:not([href="#"])').click(function () {
    /* eslint-disable no-invalid-this */
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var here = '#' + getCurrentSectionName() + '-' + getCurrentHashName() + '-nav';
      $(here).removeClass('active');
    }
    /* eslint-enable no-invalid-this */
  });
});

// If a new anchor section is selected, change the hightlighted menu item
$(window).bind('hashchange', function (event) {
  highlightActiveHash(event);
});

function highlightActiveHash(event) {
  var oldUrl, oldSubSectionElement;

  // check for and remove old hash active state
  if (event && event.originalEvent.oldURL) {
    oldUrl = event.originalEvent.oldURL;

    if (oldUrl.indexOf('#') > -1) {
      oldSubSectionElement = $('#' + getCurrentSectionName() + '-' + oldUrl.substring(oldUrl.indexOf('#') + 1) + '-nav');

      if (oldSubSectionElement) {
        oldSubSectionElement.removeClass('active');
      }
    }
  }
  var sectionName = getUrlSectionName();
  if (sectionName.indexOf('tutorial-') >= 0) {
    sectionName = sectionName.replace('tutorial-', '');
    var section = $('#' + sectionName + '-nav');
    if (section.parent().hasClass('tutorials')) {
      section.addClass('active');
    }
  }

  if (getCurrentHashName()) {
    $('#' + sectionName + '-nav').addClass('active');
  }
}

function getUrlSectionName() {
  var path = window.location.pathname;
  var pageUrl = path.split('/').pop();
  var sectionName = pageUrl.substr(0, pageUrl.lastIndexOf('.')).replace(/\./g, '-');
  return sectionName;
}

function highlightActiveSection() {
  var pageId = getCurrentSectionName();
  $('#' + pageId + '-nav').addClass('active');
}

function getCurrentSectionName() {
  var sectionName = getUrlSectionName();

  // remove the wodr module- if its in the url
  sectionName = sectionName.replace('module-', '');

  if (sectionName.indexOf('tutorial-') >= 0) {
    sectionName = sectionName.replace('tutorial-', '');

    var section = $('#' + sectionName + '-nav');
    if (section.parent().hasClass('tutorials')) {
      sectionName = section.parent().parent().attr('id');
      sectionName = sectionName.replace('-nav', '');
    }
  }

  return sectionName;
}

function getCurrentHashName() {
  var pageSubSectionId;
  var pageSubSectionHash = window.location.hash;

  if (pageSubSectionHash) {
    pageSubSectionId = pageSubSectionHash.substring(1).replace('.', '');

    return pageSubSectionId;
  }

  return false;
}
