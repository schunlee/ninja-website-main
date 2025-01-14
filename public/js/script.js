(function ($) {
  "use strict";
  // var year = new Date().getFullYear();
  // $("#copywrite").text(`${year}©Pixel Shippuden`);

  if (!localStorage.getItem("cookieConsent")) {
    // 如果用户没有同意，显示弹框
    $("#cookieConsent").addClass("show");
  }

  // 当用户点击 "Accept" 按钮
  $("#acceptCookie").on("click", function () {
    // 将用户的同意存储在 localStorage
    gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
    localStorage.setItem("cookieConsent", "true");
    // 隐藏弹框
    $("#cookieConsent").removeClass("show");
  });

  $(".portfolio-gallery").each(function () {
    $(this)
      .find(".popup-gallery")
      .magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  });
})(jQuery);
