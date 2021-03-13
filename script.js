const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('')
})

/* 
This does the following:
1. Fetch all the innerText (i.e Email Password)
2. Maps each one
3. Traverse each one and add this span 
4. Join them together

Note:
- You need to add the join ..otherwise you get a map with commas


*/
