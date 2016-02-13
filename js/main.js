function submitList() {
	
	

	var	name=document.getElementById('name').value
	var	comment=document.getElementById('remark').value
	var	newName = document.createTextNode("name: " + name)
	var	newComment = document.createTextNode("comment: " + comment)
	var	nameList = document.createElement('Li')
	var	newNameList = document.createElement('h2')
	var	newCommentList = document.createElement('h4')
	var item = document.getElementById('item')	

	nameList.className = "newList"
	newNameList.appendChild(newName)
	newCommentList.appendChild(newComment)
	nameList.appendChild(newNameList)
	nameList.appendChild(newCommentList)
		
	document.getElementById('list').appendChild(nameList)
	//document.getElementById('form').style.visibility = "hidden"
}

function deleteList() {
	
	var	name=document.getElementById('name').value
	var	comment=document.getElementById('remark').value
	
	var removeEl = document.getElementsByTagName('li')[0]
	var containerEl = removeEl.parentNode
	
	document.getElementById('form').style.visibility = "visible"
	containerEl.removeChild(removeEl)

}


//function date() {
//var day = new Date()
//var newItem = day.toDateString()

//document.getElementById("list").innerHTML = newItem

//}