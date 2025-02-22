// Exercise #1) Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(str) {
  return str
    .split('-') // splits 'my-short-string' into array ['my', 'short', 'string']
    .map(
      // We want to capitalize the first letters of all array items except the first one
      // converts ['my', 'short', 'string'] into ['my', 'Short', 'String']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )

      .join('');
  }

 console.log(camelize('my-short-string'));


  
  

  