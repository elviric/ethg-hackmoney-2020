chrome.commands.onCommand.addListener(function(command) {
	console.log('Command:', command);
	createUniSwapWindow();
  });
  chrome.commands.getAll(function(commands){
	console.log(commands)
  })
  chrome.browserAction.onClicked.addListener(function (callback){
	console.log(callback);
	createUniSwapWindow();
  });

function createUniSwapWindow(){
	chrome.windows.create({'url':"https://uniswap.exchange",'focused':true,'type':'popup','width':360,'height':500},function(e){
		
		console.log(e);
	  });
}