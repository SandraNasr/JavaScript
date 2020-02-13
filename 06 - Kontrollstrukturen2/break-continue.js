"use strict"

//continue überspringt den aktuellen Schleifenumlauf

for (let i = 1; i <= 10; i++) 
{
  if (i === 7) 
  {
    continue
  }

  if (i === 9) 
  {
    break
  }

  console.log("i:", i)
}