window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script3 = function()
{
  // Get the player object to access variables
var player = GetPlayer();

// Retrieve the values of v1, v2, and v3 from Storyline variables
var id = player.GetVar("id");
var results = player.GetVar("results");


// Prepare data to send
var data = {
  id:id,
  results:results
};

// تخزين بيانات المستخدم مؤقتًا
localStorage.setItem('data', JSON.stringify(data));

let isSyncing = false; // متغير لتتبع حالة المزامنة
let isDataSent = false; // متغير لتتبع ما إذا كانت البيانات قد أُرسلت بالفعل

// تابع لمزامنة البيانات مع Google Sheets
function syncWithGoogleSheet() {
  // تحقق مما إذا كانت البيانات قد أُرسلت بالفعل
  if (isDataSent) {
    console.log("Data has already been sent, skipping sync.");
    return; // تخطي المزامنة إذا كانت البيانات قد أُرسلت بالفعل
  }

  if (isSyncing) {
    console.log("Sync in progress, skipping this call."); // إذا كانت المزامنة قيد التشغيل، تخطي الطلب
    return;
  }

  isSyncing = true; // ضبط حالة المزامنة على قيد التشغيل
  console.log("Attempting to sync data...");

  const storedData = localStorage.getItem('data');

  if (navigator.onLine && storedData) {
    console.log("Online and stored data found, syncing...");
    const data = JSON.parse(storedData);
    
    fetch('https://script.google.com/macros/s/AKfycby9YAf1BMfSW1dQNUioSnNlES--EGpJ25IAG98jPhHJqp9dGYISJXezitY31FYb8V2K/exec', {
      method: 'POST',
        mode: 'no-cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(responseData => {
      console.log('Data synced to Google Sheets:', responseData);
      localStorage.removeItem('data');
      isDataSent = true; // تعيين العلم بعد إرسال البيانات
    })
    .catch(error => {
      console.error('Error syncing data:', error);
    })
    .finally(() => {
      isSyncing = false; // إعادة ضبط حالة المزامنة بعد الانتهاء
    });
  } else {
    console.log('No internet connection or no data to sync.');
    isSyncing = false; // إعادة ضبط حالة المزامنة إذا لم يكن هناك اتصال
  }
}

// حدث لتشغيل المزامنة عند استعادة الاتصال
window.addEventListener('online', syncWithGoogleSheet);

}

window.Script4 = function()
{
  // Get the player object to access variables
var player = GetPlayer();

// Retrieve the values of v1, v2, and v3 from Storyline variables
var id = player.GetVar("id");
var results = player.GetVar("results");


// Prepare data to send
var data = {
  id:id,
  results:results
};

// تخزين بيانات المستخدم مؤقتًا
localStorage.setItem('data', JSON.stringify(data));

let isSyncing = false; // متغير لتتبع حالة المزامنة
let isDataSent = false; // متغير لتتبع ما إذا كانت البيانات قد أُرسلت بالفعل

// تابع لمزامنة البيانات مع Google Sheets
function syncWithGoogleSheet() {
  // تحقق مما إذا كانت البيانات قد أُرسلت بالفعل
  if (isDataSent) {
    console.log("Data has already been sent, skipping sync.");
    return; // تخطي المزامنة إذا كانت البيانات قد أُرسلت بالفعل
  }

  if (isSyncing) {
    console.log("Sync in progress, skipping this call."); // إذا كانت المزامنة قيد التشغيل، تخطي الطلب
    return;
  }

  isSyncing = true; // ضبط حالة المزامنة على قيد التشغيل
  console.log("Attempting to sync data...");

  const storedData = localStorage.getItem('data');

  if (navigator.onLine && storedData) {
    console.log("Online and stored data found, syncing...");
    const data = JSON.parse(storedData);
    
    fetch('https://script.google.com/macros/s/AKfycby9YAf1BMfSW1dQNUioSnNlES--EGpJ25IAG98jPhHJqp9dGYISJXezitY31FYb8V2K/exec', {
      method: 'POST',
        mode: 'no-cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(responseData => {
      console.log('Data synced to Google Sheets:', responseData);
      localStorage.removeItem('data');
      isDataSent = true; // تعيين العلم بعد إرسال البيانات
    })
    .catch(error => {
      console.error('Error syncing data:', error);
    })
    .finally(() => {
      isSyncing = false; // إعادة ضبط حالة المزامنة بعد الانتهاء
    });
  } else {
    console.log('No internet connection or no data to sync.');
    isSyncing = false; // إعادة ضبط حالة المزامنة إذا لم يكن هناك اتصال
  }
}

// حدث لتشغيل المزامنة عند استعادة الاتصال
window.addEventListener('online', syncWithGoogleSheet);

}

};
