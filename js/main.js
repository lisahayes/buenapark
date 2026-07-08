(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  var drops = document.querySelectorAll('.has-drop');
  drops.forEach(function (d) {
    var btn = d.querySelector('.drop-btn');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var wasOpen = d.classList.contains('open');
      drops.forEach(function (o) { o.classList.remove('open'); o.querySelector('.drop-btn').setAttribute('aria-expanded', 'false'); });
      if (!wasOpen) { d.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    });
  });
  document.addEventListener('click', function () {
    drops.forEach(function (o) { o.classList.remove('open'); o.querySelector('.drop-btn').setAttribute('aria-expanded', 'false'); });
  });
})();
