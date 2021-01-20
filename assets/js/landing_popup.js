;(setTimeout(function() {
  var body = document.getElementsByTagName("body")[0];
  var container = document.createElement("div");
  container.setAttribute("style", 'top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 999; position: fixed; display: table-cell; vertical-align: middle;');
  body.appendChild(container);

  function content1() {
    var contentBox = document.createElement("div");
    contentBox.setAttribute('style', 'width: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); color: white; font-size: 30px;')
    var p1 = document.createElement('p');
    p1.innerText = 'Hi there,'
    var p2 = document.createElement('p');
    p2.innerText = "Our mission is to help you put more precise content on your page."
    var button = document.createElement("a");
    button.href = '#'
    button.setAttribute('class', 'btn-get-started')
    button.innerText = 'Sounds great'
    button.onclick = nextContent;

    contentBox.appendChild(p1);
    contentBox.appendChild(p2);
    contentBox.appendChild(button);

    return contentBox;
  }

  function content2() {
    var contentBox = document.createElement("div");
    contentBox.setAttribute('style', 'width: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); color: white; font-size: 30px;')
    var p1 = document.createElement('p');
    p1.innerText = 'Try pressing CTRL + F';
    var p2 = document.createElement('p');
    p2.innerText = "(or CMD + F if you are using Mac)"

    contentBox.appendChild(p1);
    contentBox.appendChild(p2);

    return contentBox;
  }

  function content3() {
    var contentBox = document.createElement("div");
    contentBox.setAttribute('style', 'width: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); color: white; font-size: 30px;')
    var p1 = document.createElement('p');
    p1.innerText = 'Now search for something on this page';

    contentBox.appendChild(p1);

    return contentBox;
  }

  function content4(term) {
    var contentBox = document.createElement("div");
    contentBox.setAttribute('style', 'width: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); color: white; font-size: 30px;')
    var p1 = document.createElement('p');
    p1.innerText = 'Your search of "' + term + '" is captured';
    var p2 = document.createElement('p');
    p2.innerText = 'Wanna learn what people are looking for on your page?';
    var button = document.createElement("a");
    button.href = '#footer'
    button.setAttribute('class', 'btn-get-started')
    button.innerText = 'Request Access Now'
    button.onclick = nextContent;

    contentBox.appendChild(p1);
    contentBox.appendChild(p2);
    contentBox.appendChild(button);

    return contentBox;
  }

  var contents = [content1(), content2(), content3()];
  var curContent = 0;

  function nextContent() {
    container.removeChild(contents[curContent]);
    curContent += 1;

    if (contents[curContent]) {
      container.appendChild(contents[curContent]);
    } else {
      container.remove();
    }
  }

  function highlightSearch() {
    var contentBox = document.createElement('div');
    contentBox.setAttribute('style', 'position: fixed; top: -270px; right: 23%; width: 450px; height: 450px; background: white; z-index: 9999; border-radius: 100%;');
    container.appendChild(contentBox);
  }

  CTRLF.triggerCallback = function() {
    highlightSearch();
    nextContent();
  }

  CTRLF.searchCallback = function(term) {
    contents.push(content4(term));
    nextContent();
  }

  container.appendChild(contents[curContent]);
}, 7000));
