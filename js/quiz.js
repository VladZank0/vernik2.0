function JCBuyCity(e) {
    this.formId = e.formId || "",
    this.preloaderId = e.preloaderId || "",
    this.preloaderLoadedClass = e.preloaderLoadedClass || "",
    this.stepSelector = e.stepSelector || "",
    this.sectionClass = e.sectionClass || "",
    this.resultSectionId = e.resultSectionId || "",
    this.otherModelId = e.otherModelId || "",
    setPadding()
}
function getAllNextSiblings(e) {
    for (var t = []; e.nextElementSibling; )
        t.push(e = e.nextElementSibling);
    return t
}
function setPadding() {
    if (document.querySelector(".quiz__title")) {
        function e() {
            let e = document.querySelectorAll(".quiz-item")
              , t = e[0].querySelector(".quiz__title");
            window.innerWidth <= 720 ? e[0].style.paddingTop = `${69 + t.clientHeight}px` : e[0].style.paddingTop = ""
        }
        window.addEventListener("resize", () => e()),
        e()
    }
}
JCBuyCity.prototype.selectOption = function(e, t) {
    document.querySelector(this.stepSelector).value = Number(t);
    let i = e.closest(this.sectionClass)
      , n = !1;
    i.nextElementSibling && (n = i.nextElementSibling);
    let o = getAllNextSiblings(i);
    o && o.forEach(function(e) {
        e.innerHTML = ""
    }),
    sendParams = this.__getAllFormData(),
    this.__sendFormData(sendParams, n)
}
,
JCBuyCity.prototype.selectModalOption = function(e, t, i) {
    let n = `
    <input class="quiz-answer__input" type="radio"
           name="param[${e}]" 
           hidden value="${t}" onchange="buyElementCity.selectOption(this, 1)">
    <span class="quiz-answer__text">${i}</span>`
      , o = document.getElementById(this.otherModelId);
    o.innerHTML = n,
    o.click()
}
,
JCBuyCity.prototype.__sendFormData = function(e, t=!1, i=!0) {
    let n = this.preloaderId
      , o = this.preloaderLoadedClass
      , r = this.resultSectionId
      , l = this.formId;
    i && document.getElementById(n).classList.remove(o),
    BX.ajax({
        method: "POST",
        dataType: "html",
        url: "/local/ajax/buyvernik_city.php",
        data: e,
        onsuccess: function(i) {
            let s = document.createElement("DIV");
            s.innerHTML = i,
            "RESET" == e.action ? (BX(l).innerHTML = s.querySelector("#" + l).innerHTML,
            t = BX(l),
            setPadding()) : t && s.querySelector("#" + t.id) ? BX(t).innerHTML = s.querySelector("#" + t.id).innerHTML : (BX(r).innerHTML = s.querySelector("#" + r).innerHTML,
            t = BX(r)),
            setTimeout(function() {
                document.getElementById(n).classList.add(o),
                JCBuyCity.prototype.scrollBy(t)
            }, 100)
        }
    })
}
,
JCBuyCity.prototype.__getAllFormData = function() {
    var e, t = BX(this.formId), i = BX.ajax.prepareForm(t);
    for (e in i.data)
        i.data.hasOwnProperty(e) && "" == e && delete i.data[e];
    return i && i.data ? i.data : {}
}
,
JCBuyCity.prototype.scrollBy = function(e) {
    e && e.scrollIntoView({
        behavior: "smooth"
    })
}
,
JCBuyCity.prototype.reset = function() {
    sendParams.action = "RESET",
    this.__sendFormData(sendParams)
}
;
