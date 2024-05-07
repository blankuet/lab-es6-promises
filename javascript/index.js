// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((response) => {
    document.querySelector("#steak").innerHTML += `<li>${response}</li>`
    obtainInstruction('steak', 1)
      .then((response) => {
        document.querySelector("#steak").innerHTML += `<li>${response}</li>`
        obtainInstruction('steak', 2)
          .then((response) => {
            document.querySelector("#steak").innerHTML += `<li>${response}</li>`
            obtainInstruction('steak', 3)
            .then((response) => {
              document.querySelector("#steak").innerHTML += `<li>${response}</li>`
              obtainInstruction('steak', 4)
              .then((response) => {
                document.querySelector("#steak").innerHTML += `<li>${response}</li>`
                obtainInstruction('steak', 5)
                .then((response) => {
                  document.querySelector("#steak").innerHTML += `<li>${response}</li>`
                  obtainInstruction('steak', 6)
                  .then((response) => {
                    document.querySelector("#steak").innerHTML += `<li>${response}</li>`
                    obtainInstruction('steak', 7)
                    .then((response) => {
                      document.querySelector("#steak").innerHTML += `<li>${response}</li>`
                      obtainInstruction('steak', 8)
                      document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    
                    })
                  })
                })
              })
            })
          })
        })
      })

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`

    const step1 = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`

    const step2 = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`

    const step3 = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`

    const step4 = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`

    const step5 = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`

    const step6 = await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
  }
  catch {
    console.log("something went wrong")
  }

}

makeBroccoli();

// Bonus 2 - Promise all
