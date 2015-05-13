var dimStats = (function () {
  
  var stats;
  var $subject;
  
  function num(number) {
    return Number(number.replace(/[^0-9]/g, ''));
  }

  return {
    toHtml: function () {
      var text = JSON.stringify(stats, null, 2);
      return `<pre>${text}</pre>`;
    },
    
    calc: function (...args) {
      var $div = args[0] || $subject, // TODO - references to $div should 
                           // be changed to $subject.
      		div = $div[0];
      
      return {
        $cssBoxSizing: $div.css('box-sizing'),
        widths: {
          clientWidth: div.clientWidth,
          offsetWidth: div.offsetWidth,
          scrollWidth: div.scrollWidth,
          $width: $div.width(),
          $innerWidth: $div.innerWidth(),
          $outerWidth: $div.outerWidth(),
          '$outerWidth(true)': $div.outerWidth(true),
          $cssWidth: num($div.css('width')),
        },
        heights: {
          clientHeight: div.clientHeight,
          offsetHeight: div.offsetHeight,
          scrollHeight: div.scrollHeight,
          $height: $div.height(),
          $innerHeight: $div.innerHeight(),
          $outerHeight: $div.outerHeight(),
          '$outerHeight(true)': $div.outerHeight(true),
          $cssHeight: num($div.css('height')),
        },
        padding: {
          top: num($div.css('padding-top')),
          right: num($div.css('padding-right')),
          bottom: num($div.css('padding-bottom')),
          left: num($div.css('padding-left'))
        },
        border: {
          top: num($div.css('border-top-width')),
          right: num($div.css('border-right-width')),
          bottom: num($div.css('border-bottom-width')),
          left: num($div.css('border-left-width'))
        },
        margin: {
          top: num($div.css('margin-top')),
          right: num($div.css('margin-right')),
          bottom: num($div.css('margin-bottom')),
          left: num($div.css('margin-left'))
        }
      }
    },
    
    show: function (subjectSelector, statsTarget, constructType) {
      constructType = constructType || 'pre';
      $subject = $(`${subjectSelector}`);
      //console.log($subject);
      stats = this.calc($subject);
      //console.log(stats);
      $(`${statsTarget}`).html(this.toHtml());
    }
  };
}());

//dimStats.show('.margins', '.stats');
