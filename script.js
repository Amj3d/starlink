let lastSentTime = null; // تخزين وقت آخر إرسال

function sendTransaction() {
    let fullName = document.getElementById("fullName").value;
    let whatsapp = document.getElementById("whatsapp").value;
    let email = document.getElementById("email").value;
    let deviceId = document.getElementById("deviceId").value;
    let subscription = document.getElementById("subscriptionType").value;
    let transactionId = document.getElementById("transactionId").value;

    if (!fullName || !whatsapp || !email || !deviceId || !transactionId) {
        alert("الرجاء ملء جميع الحقول!");
        return;
    }

    let now = new Date().getTime(); // الوقت الحالي
    if (lastSentTime && now - lastSentTime < 30 * 60 * 1000) { // التحقق من مرور 30 دقيقة
        alert("⏳ يمكنك إرسال الطلب مرة أخرى بعد 30 دقيقة.");
        return;
    }

    let message = `📄 *إيصال دفع اشتراك ستارلينك*\n\n👤 *الاسم:* ${fullName}\n📞 *رقم واتساب:* ${whatsapp}\n📧 *البريد:* ${email}\n🛰️ *رقم الجهاز:* ${deviceId}\n💳 *نوع الاشتراك:* ${subscription}\n🏦 *رقم الحساب للدفع:* 4708442 - بنكك\n👤 *اسم الحساب:* أمجد عثمان عيسى\n\n✅ *رقم العملية:* ${transactionId}\n\n📌 *تم استلام طلبك وجاري المراجعة!*`;

    let myNumber = "249127809453";

    let whatsappClientUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    let whatsappMyUrl = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappClientUrl, "_blank");
    setTimeout(() => {
        window.open(whatsappMyUrl, "_blank");
    }, 2000);

    alert("✅ تم استلام طلبك بنجاح! سنقوم بمراجعته قريبًا.");
    
    lastSentTime = now; // تحديث آخر وقت إرسال
}
