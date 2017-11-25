document.addEventListener('DOMContentLoaded', function () {
  var style = document.createElement('style')
  style.appendChild(document.createTextNode(
    '.ProfileTweet-actionCount, .js-stat-count strong { display: none; }'
  ))
  document.head.appendChild(style)
})
