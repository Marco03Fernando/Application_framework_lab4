const condition = true; // change to false to test the catch()

const myPromise = new Promise((resolve, reject) => {
  if (condition) resolve("Success!");
  else reject("Failure!");
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();