document.addEventListener('DOMContentLoaded', function () {
  var style = document.createElement('style')
  var selectors = [
    '.ProfileTweet-actionCount'
  ]
  style.appendChild(document.createTextNode(
    selectors.join(', ') + ' { display: none; }'
  ))
  document.head.appendChild(style)
})
