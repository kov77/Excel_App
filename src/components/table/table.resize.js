import {$} from '../../core/dom';

export function resizeHandler($root, event) {

  const $resizer = $(event.target)
  const $parent = $resizer.closest('[data-type="resizable"]')
  const cords = $parent.getCords()
  const sideProp = $parent.$el.className === 'column' ? 'bottom' : 'right'
  let value

  $resizer.css({
    opacity: 1,
    [sideProp]: '-5000px'
  })

  if ($parent.$el.className === 'column') {
    document.onmousemove = e => {
      console.log('mousemove');
      const delta = e.pageX - cords.right
      value = cords.width + delta
      $resizer.css({right: - delta + 'px'})
    }
  } else if ($parent.$el.className === 'row') {
    document.onmousemove = e => {
      const delta = e.pageY - cords.bottom
      value = cords.height + delta
      $resizer.css( {bottom: -delta + 'px'} )
    }
    console.log('row');
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    $parent.css({width: value + 'px'});
    if ($parent.$el.className === 'column') {
      $root.findAll(`[data-col="${$parent.data.col}"]`)
        .forEach(el => {
          el.style.width = value + 'px'
        })
    } else {
      $parent.css({height: value + 'px'});
    }

    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0
    })
  }
}
