// ==UserScript==
// @name         VKUI Add-on
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  VKUI Add-on for OpenVK
// @author       thejenja_
// @match        https://openvk.su/*
// @match        https://vepurovk.xyz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openvk.su
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    let object = document.querySelector("body > div.layout > div.sidebar > div > a:nth-child(3) > object > a");
    object.innerHTML = object.innerHTML.replace(/\(|\)/g, "");
})();
(function() {
  const navigationLinks = document.querySelectorAll('.navigation a');
  navigationLinks.forEach(link => {
    const linkText = link.childNodes[0].textContent.trim();
    if (linkText.startsWith('Мои') || linkText.startsWith('My') || linkText.startsWith('Мої')) {
      link.childNodes[0].textContent = linkText.slice(3);
    }
  });
})();
(function() {
    let link = document.createElement('a');
    link.setAttribute('href', '/notifications');
    link.setAttribute('class', 'notifyLink');
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12.004 2.1c4.015 0 6.896 3.278 6.896 7.532v1.6c0 .228.193.531.72 1.075l.27.275c1.082 1.097 1.51 1.729 1.51 2.745 0 .445-.052.791-.268 1.206-.456.878-1.423 1.367-2.869 1.367l-1.912.001c-.629 2.332-2.13 3.6-4.351 3.6-2.245 0-3.754-1.295-4.371-3.675l.019.074H5.737c-1.488 0-2.466-.502-2.902-1.41-.191-.398-.235-.72-.235-1.163 0-1.016.428-1.648 1.51-2.745l.27-.275c.527-.544.72-.847.72-1.076v-1.6C5.1 5.38 7.988 2.1 12.004 2.1Zm2.462 15.802H9.534C9.99 19.148 10.776 19.7 12 19.7c1.224 0 2.01-.552 2.466-1.798ZM12.004 3.9C9.036 3.9 6.9 6.327 6.9 9.632v1.6c0 .852-.39 1.463-1.228 2.328-.073.075-.142.146-.281.286-.747.758-.991 1.118-.991 1.481 0 .192.014.292.057.382.107.224.433.391 1.28.391h12.526c.82 0 1.153-.169 1.272-.397.05-.095.065-.197.065-.376 0-.363-.244-.723-.99-1.48-.14-.141-.209-.212-.282-.287-.839-.865-1.228-1.476-1.228-2.329v-1.6c0-3.307-2.13-5.731-5.096-5.731Z');
    path.setAttribute('fill', '#7c7c7c');
    svg.appendChild(path);
    link.appendChild(svg);
    let headerDiv = document.querySelector('.page_header');
    headerDiv.insertBefore(link, headerDiv.firstChild);
})();

(function() {
    'use strict';

    function moveElementToStart(element, containerSelector) {
        var container = document.querySelector(containerSelector);
        if (container) {
            container.prepend(element);
        }
    }

    var navigation = document.querySelector('.navigation');
    var elementsToMove = [
        '.link[accesskey="."]',
        '.link[href="/feed"]',
        '.link[href="/im"]',
        '.link[href^="/friends"]',
        '.link[href^="/groups"]',
        '.link[href^="/albums"]'
    ];

    elementsToMove.reverse().forEach(function(selector) {
        var element = navigation.querySelector(selector);
        if (element) {
            moveElementToStart(element, '.navigation');
        }
    });
})();

(function() {
    'use strict';

    var messengerLink = document.querySelector('.navigation .link[href^="/im"]');
    if (messengerLink && messengerLink.textContent.includes("Сообщения")) {
    var objectElement = messengerLink.querySelector('object[type="internal/link"]');
    var incomingLinkElement = objectElement ? objectElement.querySelector('a') : null;
    var bElement = incomingLinkElement ? incomingLinkElement.querySelector('b') : null;

    var newText = "Мессенджер";
    messengerLink.textContent = newText;
    if (objectElement) {
        messengerLink.appendChild(objectElement);
    }
    if (bElement) {
        bElement.textContent = bElement.textContent.trim();
    }
    }

    var groupsLink = document.querySelector('.navigation .link[href^="/groups"]');
    if (groupsLink && groupsLink.textContent.includes("Группы")) {
        groupsLink.textContent = "Сообщества";
    }
    var videosLink = document.querySelector('.navigation .link[href^="/video"]');
    if (videosLink && videosLink.textContent.includes("Видеозаписи")) {
        videosLink.textContent = "Видео";
    }
    var servicesLink = document.querySelector('.navigation .link[href="/apps?act=installed"]');
    if (servicesLink && servicesLink.textContent.includes("Приложения")) {
        servicesLink.textContent = "Сервисы";
    }
})();
