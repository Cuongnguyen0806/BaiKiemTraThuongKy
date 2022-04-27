    const btn = document.querySelectorAll("#btnthem")
    const imgas = document.querySelectorAll("#imga")
        //  console.log(btn)
    //    btn.forEach(function (button,index) {
            //  console.log(button,index)
            //  button.addEventListener("click",function (event) {
            //      var btnitem = event.target
            //      var product = btnitem.parentElement
                //  console.log(product)
                //  var productimg = product.querySelector("#imga")
                //  console.log(productimg)
                //  var productName = product.querySelector("H6").innerText
                //  console.log(productName)
                //  var productGia = product.querySelector("H4").innerText
                //  console.log(productGia)
                //  addcart(productGia,productimg,productName)
    //          })
    //    })
       imgas.forEach(function (imga,index) {
        console.log(imga,index)
           btn.addEventListener("click",function (event) {
               var imgaa = event.target
               var produciga = imgaa.parentElement
                var productimg = produciga.querySelector("#imga")
                 console.log(productimg)
           })
       })
       function addcart(productGia,productimg,productName) {
           var addtr = document.createElement("tr")
           var trcontent = ''
           addtr.innerHTML = trcontent
           var carttable = document.querySelector("tbody")
           carttable.append(addtr)
       }