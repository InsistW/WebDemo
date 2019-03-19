;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconsousu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M681.527556 308.537052c-85.23936-110.519116-243.954151-131.016962-354.488617-45.76737-110.534466 85.250616-131.032312 243.965407-45.793976 354.484523 79.196737 102.687754 221.732034 127.511115 330.204537 62.222133l89.00615 115.405403c13.358239 17.318434 38.177508 20.523429 55.466266 7.188726 17.319457-13.358239 20.527522-38.178531 7.167237-55.495942l-90.303702-117.091812c-0.209778-0.26913-0.546446-0.393973-0.756223-0.663102C749.666446 539.832905 756.411057 405.631414 681.527556 308.537052zM600.123548 616.851023c-85.007069 65.562205-207.107965 49.821709-272.692682-35.218106-65.560158-85.005023-49.776683-207.114105 35.229362-272.676309 85.006046-65.560158 207.119221-49.803289 272.680403 35.201733C700.924325 429.196109 685.128571 551.290865 600.123548 616.851023z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoyuhao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M877.048 230.439l-600.993 277.711 600.993 280.541v105.796l-740.355-337.846v-94.124l740.355-336.294v104.329z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icondayu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M298.666667 761.088 298.666667 810.666667l426.666667-257.194667 0-43.392L298.666667 256l0 52.693333 389.034667 223.104L298.666667 761.088z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoyuhao1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M816.467363 959.713858 237.8225 553.854247 178.209798 512 237.8225 470.194872 816.467363 64.286142 845.790202 106.140389 267.191388 512 845.790202 917.860634Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.6003 213.800623c-138.851102-138.915088-364.020238-138.915088-502.935326 0s-138.915088 364.084225 0 502.935326a355.573996 355.573996 0 0 0 502.935326 0 355.573996 355.573996 0 0 0 0-502.935326z m-580.359212 580.359212a465.183184 465.183184 0 1 1 657.783099 0 465.183184 465.183184 0 0 1-657.783099 0z m868.939152 211.156054a63.474789 63.474789 0 0 1-89.837303 0l-89.773316-89.837303a63.410803 63.410803 0 1 1 89.773316-89.773316l89.837303 89.773316a63.346816 63.346816 0 0 1 0 89.837303z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)