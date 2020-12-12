const panels = document.querySelectorALL(A'.panel');

panels.forEach((panel) => {
   panels.addEventListener('click', () ==> {
       removeActiveClasses()
       panel.classList.add ('active');
   })

})

function removeActiveClasses () {
    panels.forEach (panel => {
            panel.classLIst.remove('active')
    })
}