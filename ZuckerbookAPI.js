import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

export function AppendPost(postername, posternumber, title, body, postnumber, likes, dislikes) {

	var posthtml = `<div class="post">
		<p>[${postername} - ${posternumber}]</p>
		<h2>${title}</h2>
		<p>${body}</p><br>
		<p style="width: 10%; float: left;" onclick="like('${postnumber}')">👍${likes}</p><p onclick="dislike('${postnumber}')">👎${dislikes}</p>
		<p>[${postnumber}]</p>
		</div>
		`;

	const postsdiv = document.getElementById("posts");

	postsdiv.innerHTML = posthtml + postsdiv.innerHTML

}

export function firestoreDB(){
	
	const firebaseConfig = {
		apiKey: "AIzaSyBOavStuEiXF--gJHoLt0q11nlomkx9pqI",
		authDomain: "zuckerbook-ee135.firebaseapp.com",
		projectId: "zuckerbook-ee135",
		storageBucket: "zuckerbook-ee135.firebasestorage.app",
		messagingSenderId: "1044679454146",
		appId: "1:1044679454146:web:084841931bf2dd2ca57a5b"
	};

	const app = initializeApp(firebaseConfig);
	return getFirestore(app);
}

export function getQueryParam(param) {
	var urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

