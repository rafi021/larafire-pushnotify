importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBpI2fnrNheZBjZ1Xz4Bql570D52p7WcCY",
    projectId: "larafire-pushnotify",
    messagingSenderId: "82800582080",
    appId: "1:82800582080:web:f6f432301247be53a03c25",

    // authDomain: "larafire-pushnotify.firebaseapp.com",
    // storageBucket: "larafire-pushnotify.appspot.com",
    // measurementId: "G-80MGGG5K81"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
});
