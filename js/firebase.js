let firebaseConfig = {
   
        apiKey: "AIzaSyBm7WKrZ7SVNy8HldQjr2vf4q-NF02aNKQ",
        authDomain: "yoga-blog-site.firebaseapp.com",
        projectId: "yoga-blog-site",
        storageBucket: "yoga-blog-site.appspot.com",
        messagingSenderId: "597195559452",
        appId: "1:597195559452:web:3a24f6ea054597940085d9"
      
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();