function submitForm() {
    let subscription = document.getElementById("subscriptionType").value;
    let fullName = document.getElementById("fullName").value;
    let whatsapp = document.getElementById("whatsapp").value;
    let email = document.getElementById("email").value;
    let deviceId = document.getElementById("deviceId").value;

    if (!fullName || !whatsapp || !email || !deviceId) {
        alert("الرجاء ملء جميع الحقول!");
        return;
    }

    document.getElementById("rFullName").innerText = fullName;
    document.getElementById("rWhatsapp").innerText = whatsapp;
    document.getElementById("rEmail").innerText = email;
    document.getElementById("rDeviceId").innerText = deviceId;
    document.getElementById("rSubscription").innerText = subscription;
    document.getElementById("receipt").style.display = "block";
    document.getElementById("paymentBox").style.display = "block";
}

function printReceipt() {
    window.print();
}

function downloadPDF() {
    // يمكن إضافة الوظيفة لتحميل PDF هنا باستخدام مكتبة مثل jsPDF
    alert("تحميل PDF غير مفعل في هذه النسخة.");
}

function sendTransaction() {
    let transactionId = document.getElementById("transactionId").value;
    if (!transactionId) {
        alert("الرجاء إدخال رقم العملية!");
    } else {
        alert("تم إرسال رقم العملية بنجاح!");
    }
}
