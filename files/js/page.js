function on_page_load()
{
	document.body.oncopy = function()
	{
		alert('Unauthorized reproduction and citation of the content without proper source attribution are prohibited. Intellectual property infringement may result in legal consequences.'); 
	} 
}

function close_imagebox()
{
	// Get elements
	var imageboxView = document.getElementById("imagebox_view");
	var imageboxModal = document.getElementById("imagebox_modal");
	var imageboxModalCloseButton = document.getElementById("imagebox_modal_close_button");

	// Remove elements
	if(imageboxView != null)
		document.body.removeChild(imageboxView);

	if(imageboxModal != null)
		document.body.removeChild(imageboxModal);

	if(imageboxModalCloseButton != null)
		document.body.removeChild(imageboxModalCloseButton);

	// Show scrollbar
	document.body.style.overflow = 'visible';
}

function open_imagebox(url)
{
	if(typeof navigator.userAgentData == 'undefined')
		return;

	if(navigator.userAgentData.mobile == false && document.getElementById("imagebox_modal") == null)
	{
		// Create imagebox modal
		var imageboxModal = document.createElement('span');
		imageboxModal.id = "imagebox_modal";
		imageboxModal.style.display = "block";
		imageboxModal.style.position = "absolute";
		imageboxModal.style.left = "0px";
		imageboxModal.style.top = window.scrollY + "px";
		imageboxModal.style.width = "100%";
		imageboxModal.style.height = "100%";
		imageboxModal.style.backgroundColor = "black";
		document.body.appendChild(imageboxModal);

		// Create imagebox close button
		var imageboxModalCloseButton = document.createElement('span');
		imageboxModalCloseButton.id = "imagebox_modal_close_button";
		imageboxModalCloseButton.innerHTML = "<span class='imagebox_close_button'>✖</span>";
		imageboxModalCloseButton.style.display = "block";
		imageboxModalCloseButton.style.position = "absolute";
		imageboxModalCloseButton.style.top = window.scrollY + 30 + "px";
		imageboxModalCloseButton.style.width = "100%";
		imageboxModalCloseButton.style.color = "white";
		imageboxModalCloseButton.style.fontSize = "30pt";
		imageboxModalCloseButton.style.textAlign = "right";
		imageboxModalCloseButton.onclick = close_imagebox;
		document.body.appendChild(imageboxModalCloseButton);

		// Create imagebox view
		var imageboxView = document.createElement('span');
		imageboxView.id = "imagebox_view";
		imageboxView.innerHTML = "<img class='imagebox_image_view' src='" + url + "'>";
		imageboxView.style.display = "block";
		imageboxView.style.position = "absolute";
		imageboxView.style.top = window.scrollY + 100 + "px";
		imageboxView.style.width = "100%";
		imageboxView.style.height = "100%";
		imageboxView.style.textAlign = "center";
		document.body.appendChild(imageboxView);

		// Hide scrollbar
		document.body.style.overflow = 'hidden';
	}
}

function prepare_download_button(object, contentID, name, format)
{
	var storageDirectory = "storage";
	var contentDirectory = "content"
	var contentID = contentID.substring(("dwn_id_").length);
	var location = "/" + storageDirectory + "/" + contentDirectory + "/" + contentID + "/" + name + "." + format;

	object.onclick = function() { window.location.href = location; };
}

function download()
{
	if(typeof downloadID != 'undefined')
		window.location.href = "/download";
}

function prepare_contact_information_box(object)
{
	var sub = "www.";
	var hostName = window.location.hostname;
	var subIndex = hostName.indexOf(sub);

	if(subIndex > -1)
		hostName = hostName.substring(sub.length);

	var name = hostName.substring(0, hostName.lastIndexOf('.'));
	var symbolNumber = 8;
	var symbol = String.fromCharCode(symbolNumber * symbolNumber);
	var fullName = name + symbol + hostName;

	var text = "";
	var textArray = [67, 110, 108, 113, 93, 94, 110, 51, 24];
	for(let i = 0; i < textArray.length; i++)
		text += String.fromCharCode(textArray[i] + i);

	object.href = "javascript:alert('" + text + fullName + "')";
}

function print_year()
{
	document.write(new Date().getFullYear());
}