// call out the classes changes are being made

const count = document.querySelector(".count");
const mark = document.querySelector(".mark")
const notification = document.querySelectorAll(".new, .unread")
const unread = document.querySelectorAll(".unread")

// add EventListener for when mark as read is clicked 




mark.addEventListener( "click", function() {
    count.innerHTML = 0;
    notification.forEach(notification => {
        notification.classList.toggle("new")

    })

    unread.forEach(unread =>{
        unread.style.display= 'none'
    })
    
    
})


// i learnt today that if i want to do something to a 
// class name that is used in  multiple places, i have to treat
// them like separate items unlike in css where calling the 
// class name will make changes everywhere applicable






