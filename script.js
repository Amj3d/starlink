function sendInvoiceWhatsApp() {
    let fullName = document.getElementById("fullName").value;
    let whatsapp = document.getElementById("whatsapp").value;
    let email = document.getElementById("email").value;
    let deviceId = document.getElementById("deviceId").value;
    let subscription = document.getElementById("subscriptionType").value;

    if (!fullName || !whatsapp || !email || !deviceId) {
        alert("الرجاء ملء جميع الحقول!");
        return;
    }

    let message = `📄 *إيصال دفع اشتراك ستارلينك*\n\n👤 *الاسم:* ${fullName}\n📞 *رقم واتساب:* ${whatsapp}\n📧 *البريد:* ${email}\n🛰️ *رقم الجهاز:* ${deviceId}\n💳 *نوع الاشتراك:* ${subscription}\n🏦 *رقم الحساب للدفع:* 4708442 - بنكك\n👤 *اسم الحساب:* أمجد عثمان عيسى\n\n✅ *بعد الدفع، يرجى إرسال رقم العملية لإتمام التفعيل*`;

    // رقمك على واتساب
    let myNumber = "249127809453";

    // رابط واتساب للعميل
    let whatsappClientUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    
    // رابط واتساب لك (لصاحب الخدمة)
    let whatsappMyUrl = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;

    // فتح نافذتين لواتساب
    window.open(whatsappClientUrl, "_blank");
    setTimeout(() => {
        window.open(whatsappMyUrl, "_blank");
    }, 2000); // فتح الرابط الثاني بعد ثانيتين
}
