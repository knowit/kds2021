(function () {
  var ArrayProto = Array.prototype;

  var NodeList = function (args) {
    var nodes = document.querySelectorAll(args[0]);
    for (i=0, l=this.length=nodes.length; i < l; i++ ) {
      this[i] = nodes[i];
    };
  };

  var NL = NodeList.prototype = {
    forEach: function () {
      ArrayProto.forEach.apply( this, arguments );
    },
    toggleClass: function (className) {
      this.forEach(function (el) {
        el.classList.toggle(className);
      });
    }
  };

  var $$ = function NodeListJS () {
    return new NodeList(arguments);
  };
  $$.prototype = NL;

  function hasLocalStorage () {
    try {
      window.localStorage.setItem('__storage_test__', 'o_O');
      window.localStorage.removeItem('__storage_test__');
      return true;
    } catch (e) {
      return false;
    }
  };

  if (!hasLocalStorage()) {
    return;
  }

  var tmpl = document.createElement('span');
  tmpl.classList.add('fav');
  tmpl.title = 'Want to see!';
  tmpl.textContent = '♥';

  var storage = window.localStorage;

  var favs = JSON.parse(storage.getItem('kds_favs')) || [];

  var toggleFavour = function (id) {
    var index = favs.indexOf(id);

    if (index === -1) {
      favs.push(id);
    } else {
      favs = favs.slice(0, index).concat(favs.slice(index+1));
    }

    storage.setItem('kds_favs', JSON.stringify(favs));
  }

  favs.forEach(function (favId) {
    $$('[data-talk-id='+favId+']').toggleClass('favourited');
  });

  $$('.schedule-slot a').forEach(function (anchor) {
    var id = anchor.id.slice(2);
    var slot = anchor.parentElement.parentElement;

    var fav = tmpl.cloneNode(true);
    slot.appendChild(fav);
    fav.addEventListener('click', function (evt) {
      $$('[data-talk-id='+id+']').toggleClass('favourited');
      toggleFavour( id );
    }, false);
  });

  var ctrl = document.createElement('label');
  ctrl.classList.add('show-my-content-ctrl');
  ctrl.innerHTML = '<input type="checkbox" class="show-my-content-only"> Show only favs';

  var talks = document.querySelector('#talks .content');
  var firstTalk = document.querySelector('#talks .talks-entry');

  talks.insertBefore(ctrl, firstTalk);

  var checkbox = document.querySelector('input.show-my-content-only');
  checkbox.addEventListener('change', function (evt) {
    if (evt.target.checked) {
      talks.classList.add('my-content-only');
      storage.setItem('kds_favs_only', '1');
    } else {
      talks.classList.remove('my-content-only');
      storage.removeItem('kds_favs_only');
    }
  });

  if (storage.getItem('kds_favs_only')) {
    checkbox.checked = true;
    talks.classList.add('my-content-only');
  }
}());
