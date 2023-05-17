/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/js/templates/tabs.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
'use script';

//табы
(function () {
  var switchTabs = function switchTabs(block) {
    var tabsList = block.querySelector('.tabs__list');
    var tabElements = tabsList.querySelectorAll('.tabs__item');
    var tabContentSections = block.querySelectorAll('.tabs__content');
    var activeTabIndex = 0;
    var initialized = false;
    var initializeSwitch = function initializeSwitch() {
      if (!initialized) {
        var detected = false;
        initialized = true;
        for (var i = 0; i < tabElements.length; i++) {
          var tab = tabElements[i];
          if (detected && tab.classList.contains('tabs__item--active')) {
            detected = true;
            activeTabIndex = i;
          }
          addClickHandle(tab, i);
        }
      }
    };
    var addClickHandle = function addClickHandle(tab, index) {
      tab.addEventListener('click', function (evt) {
        evt.preventDefault();
        goToTab(index);
      });
    };
    var goToTab = function goToTab(index) {
      if (index !== activeTabIndex) {
        tabElements[activeTabIndex].classList.remove('tabs__item--active');
        tabElements[index].classList.add('tabs__item--active');
        tabContentSections[activeTabIndex].classList.remove('tabs__content--active');
        tabContentSections[index].classList.add('tabs__content--active');
        if (tabElements[index].classList.contains('filters__button')) {
          var activeFilter;
          activeFilter = tabElements[index].parentNode.parentNode.querySelector('.filters__button--active');
          activeFilter.classList.remove('filters__button--active');
          activeFilter = tabElements[index];
          activeFilter.classList.add('filters__button--active');
        }
        if (tabElements[index].classList.contains('messages__contacts-tab')) {
          var activeContact;
          activeContact = tabElements[index].parentNode.parentNode.querySelector('.messages__contacts-tab--active');
          activeContact.classList.remove('messages__contacts-tab--active');
          activeContact = tabElements[index];
          activeContact.classList.add('messages__contacts-tab--active');
        }
        activeTabIndex = index;
      }
    };
    initializeSwitch();
    return {
      init: initializeSwitch,
      goToTab: goToTab
    };
  };
  var addingPostTabs = document.querySelector('.adding-post__tabs-wrapper');
  var profileTabs = document.querySelector('.profile__tabs-wrapper');
  var messagesTabs = document.querySelector('.messages');
  if (addingPostTabs) {
    var addingPostCollback = switchTabs(addingPostTabs);
  }
  if (profileTabs) {
    var profileCollback = switchTabs(profileTabs);
  }
  if (messagesTabs) {
    var messagesCollback = switchTabs(messagesTabs);
  }
})();
/******/ })()
;