// ==UserScript==
// @name         VKUI Add-on
// @namespace    http://tampermonkey.net/
// @version      0.2
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
    if (linkText.startsWith('Мои')) {
      link.childNodes[0].textContent = linkText.slice(3);
    }
  });
})();
(function() {
    // Create a new a element
    var link = document.createElement('a');
    // Set the href attribute to the SVG image URL
    link.setAttribute('href', '/notifications');
    link.setAttribute('class', 'notifyLink');
    // Create a new SVG element
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // Set the SVG attributes (e.g. width, height, viewBox) as desired
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    // Create the SVG path element with its attributes and add it to the SVG element
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12.004 2.1c4.015 0 6.896 3.278 6.896 7.532v1.6c0 .228.193.531.72 1.075l.27.275c1.082 1.097 1.51 1.729 1.51 2.745 0 .445-.052.791-.268 1.206-.456.878-1.423 1.367-2.869 1.367l-1.912.001c-.629 2.332-2.13 3.6-4.351 3.6-2.245 0-3.754-1.295-4.371-3.675l.019.074H5.737c-1.488 0-2.466-.502-2.902-1.41-.191-.398-.235-.72-.235-1.163 0-1.016.428-1.648 1.51-2.745l.27-.275c.527-.544.72-.847.72-1.076v-1.6C5.1 5.38 7.988 2.1 12.004 2.1Zm2.462 15.802H9.534C9.99 19.148 10.776 19.7 12 19.7c1.224 0 2.01-.552 2.466-1.798ZM12.004 3.9C9.036 3.9 6.9 6.327 6.9 9.632v1.6c0 .852-.39 1.463-1.228 2.328-.073.075-.142.146-.281.286-.747.758-.991 1.118-.991 1.481 0 .192.014.292.057.382.107.224.433.391 1.28.391h12.526c.82 0 1.153-.169 1.272-.397.05-.095.065-.197.065-.376 0-.363-.244-.723-.99-1.48-.14-.141-.209-.212-.282-.287-.839-.865-1.228-1.476-1.228-2.329v-1.6c0-3.307-2.13-5.731-5.096-5.731Z');
    path.setAttribute('fill', '#7c7c7c');
    svg.appendChild(path);
    // Add the SVG element to the link element
    link.appendChild(svg);
    // Get the header div element and prepend the link element to it
    var headerDiv = document.querySelector('.page_header');
    headerDiv.insertBefore(link, headerDiv.firstChild);
})();
(function() {
    // Create a new a element
    var link = document.createElement('a');
    // Set the href attribute to the SVG image URL
    link.setAttribute('href', '/notifications');
    link.setAttribute('class', 'musicLink');
    // Create a new SVG element
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // Set the SVG attributes (e.g. width, height, viewBox) as desired
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    // Create the SVG path element with its attributes and add it to the SVG element
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M16.7162 4.10463c.6096-.12701 1.0097-.20952 1.3164-.24589.2991-.03546.4088-.01239.4569.00393.2039.06929.3763.20943.4857.39498.0258.04371.0707.14637.097.44644.0266.30357.0278.70528.0278 1.31408l-10.20007 2.12501v-.54001c0-.47694.00057-.786.01822-1.02464.01682-.22732.0459-.32732.07278-.38923.08025-.18484.20974-.34409.37433-.46036.05513-.03894.1471-.08779.36621-.15062.23002-.06596.53243-.12955.99943-.22681zm-9.61628 10.99537h-.19989c-1.79486 0-3.1249.4516-4.02097 1.2146-.9023.7683-1.27904 1.7821-1.27904 2.7104 0 1.8639 1.51104 3.375 3.375 3.375.9283 0 1.94206-.3768 2.71034-1.2791.76299-.896 1.21467-2.2261 1.21467-4.0209v-1.1-.9l-.0001-5.11818 10.20007-2.125v5.24318h-.2c-1.7949 0-3.1249.4516-4.021 1.2146-.9023.7683-1.279 1.7821-1.279 2.7104 0 1.8639 1.511 3.375 3.375 3.375.9283 0 1.9421-.3768 2.7103-1.2791.763-.896 1.2147-2.2261 1.2147-4.0209v-1.1-.9-7.05698-.03878c0-.57337 0-1.06154-.0346-1.45721-.0361-.41219-.116-.82434-.3397-1.20377-.3283-.55664-.8454-.97708-1.4573-1.18494-.4171-.14169-.8368-.13578-1.2477-.08706-.3945.04677-.8723.14634-1.4337.26329l-.0379.00791-5.9853 1.24688-.0304.00632c-.42812.08917-.79637.16588-1.09807.25239-.31971.09167-.6244.20995-.9086.41071-.43392.30652-.77531.72635-.98689 1.21366-.13858.31918-.19223.64158-.21678.97328-.02316.31298-.02315.68911-.02314 1.12638v.03109zm8.94608.5851c-.4727.4025-.646.9013-.646 1.3399 0 .8698.7051 1.575 1.575 1.575.4386 0 .9373-.1733 1.3398-.646.4078-.4789.7852-1.3489.7852-2.854v-.2h-.2c-1.5052 0-2.3751.3773-2.854.7851zm-12.64598 3.3399c0-.4386.17326-.9374.64597-1.3399.47892-.4078 1.34888-.7851 2.85404-.7851h.2v.2c0 1.5051-.37737 2.3751-.78516 2.854-.4025.4727-.90124.646-1.33985.646-.86985 0-1.575-.7052-1.575-1.575z');
    path.setAttribute('fill', '#7c7c7c');
    svg.appendChild(path);
    // Add the SVG element to the link element
    link.appendChild(svg);
    // Get the header div element and prepend the link element to it
    var headerDiv = document.querySelector('.page_header');
    headerDiv.insertBefore(link, headerDiv.firstChild);
})();
