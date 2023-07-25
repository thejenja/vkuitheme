// ==UserScript==
// @name         VKUI Add-on
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  VKUI Add-on for OpenVK
// @author       thejenja_
// @match        https://openvk.su/*
// @match        https://vepurovk.xyz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openvk.su
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    let object = document.querySelector("body > div.layout > div.sidebar div a > object");
    object.innerHTML = object.innerHTML.replace(/\(|\)/g, "");
})();
(function() {
    'use strict';
    window.addEventListener('load', function() {
    var favicon = document.querySelector('link[rel~="icon"]');
    var clone = favicon.cloneNode(!0);
    clone.href = "data:image/png;base64,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";
    favicon.parentNode.removeChild(favicon);
    document.head.appendChild(clone);
    }, false);
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
    messengerLink.innerText = "Мессенджер";
    if (objectElement) {
      objectElement.innerHTML = objectElement.innerHTML.replace(/\(|\)/g, "");
        messengerLink.replaceChild(objectElement, objectElement);
    }

    if (bElement) {
      bElement.textContent = bElement.textContent.trim();
    }
  }
})();
(function() {
    'use strict';
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
(function() {
    'use strict';
    var title = document.title;
    if (title.includes("- OpenVK")) {
        var newTitle = title.replace("- OpenVK", "");
        document.title = newTitle;
    }
})();
(function() {
    'use strict';

    var containerToMove = document.querySelector('#auth > div > div.right_big_block > div:nth-child(3):has(.cl_element[style="width: 25%;"])');
    var targetElement = document.querySelector('#auth > div > div.left_small_block > div:nth-child(4):has(.content_list)');

    if (containerToMove && targetElement) {
        targetElement.parentNode.insertBefore(containerToMove, targetElement);
    }
})();
(function() {
    'use strict';
    var container = document.querySelector('.content_list.long');
    var elements = container.querySelectorAll('.cl_element');

    if (container && elements.length > 2) {
        for (var i = 2; i < elements.length; i++) {
            container.removeChild(elements[i]);
        }
    }
})();
(function() {
    'use strict';
    var containerToMove = document.querySelector('#auth > div > div.left_big_block > div:nth-child(3):has(.content_list.long)');
    var targetElement = document.querySelector('#auth > div > div.right_small_block > div:nth-child(3):has(div[style="padding:4px"])');

    if (containerToMove && targetElement) {
        targetElement.parentNode.insertBefore(containerToMove, targetElement);
    }
})();
(function() {
    'use strict';
    var linkElement = document.querySelector('.navigation .link[href="/notifications"]');
    if (linkElement) {
        var content = linkElement.textContent.trim();
        var regex = /\((\d+)\)/;
        var match = content.match(regex);
        if (match) {
            var number = match[1];
            var objectElement = document.createElement('object');
            var aElement = document.createElement('a');
            aElement.href = '/notifications?act=new';
            aElement.textContent = number;
            objectElement.appendChild(aElement);
            var spanElement = document.createElement('span');
            spanElement.textContent = content.replace(regex, '').trim();
            linkElement.innerHTML = '';
            linkElement.appendChild(spanElement);
            linkElement.appendChild(objectElement);
        }
    }
})();
