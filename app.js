const ratingContainer = document.querySelector('.rating-state')
const thankyouState = document.querySelector('.thank-you-state')
const ratingScores = document.querySelectorAll('.rating')
const yourScore = document.querySelector('.selected-rating')
const submitBtn = document.querySelector('.submit-btn')


ratingScores.forEach(rating => {
    rating.addEventListener('click',()=> yourScore.innerHTML = `You selected ${rating.innerHTML} out of 5`)
})


submitBtn.addEventListener('click',()=>{
    thankyouState.classList.remove("hidden")
    ratingContainer.style.display = "none"
})