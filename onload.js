document.addEventListener('DOMContentLoaded', function () {
  var style = document.createElement('style')
  style.appendChild(document.createTextNode(
    '.ProfileTweet-actionCount, .ProfileCardStats-statValue { display: none; }'
  ))
  document.head.appendChild(style)
})
